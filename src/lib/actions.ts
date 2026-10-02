"use server";

import { redirect } from "next/navigation";
import { isSpam, readFields, type FormState } from "@/lib/forms";
import { webinar } from "@/content/events";

const SEND_FAILED =
  "We couldn't save that just now. Try again in a minute.";

/**
 * Hands a submission to whatever collects leads (CRM, Zapier, Fluent CRM webhook…).
 * Set FORM_WEBHOOK_URL. In development, with no URL set, submissions are logged instead.
 * In production a missing URL throws, so a lead is never reported as saved when it wasn't.
 */
async function deliver(kind: "webinar" | "contact", data: Record<string, string>) {
  const url = process.env.FORM_WEBHOOK_URL;

  if (!url) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FORM_WEBHOOK_URL is not set");
    }
    console.info(`[form:${kind}]`, data);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ kind, submittedAt: new Date().toISOString(), ...data }),
  });
  if (!res.ok) throw new Error(`Form webhook responded ${res.status}`);
}

export async function registerForWebinar(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Bots get the same success screen as people, and nothing is saved.
  if (isSpam(formData)) redirect("/webinar/confirmed");

  const { values, errors, hasErrors } = readFields(formData, {
    firstName: { required: true, label: "first name" },
    lastName: { required: true, label: "last name" },
    email: { required: true, email: true, label: "email address" },
    session: { required: true, label: "preferred session" },
    message: { label: "message" },
  });

  // Only for tampered values; an empty choice already has the "required" message.
  if (values.session && !webinar.sessions.some((s) => s.value === values.session)) {
    errors.session = "Choose one of the listed sessions.";
  }
  if (hasErrors || errors.session) {
    return { status: "error", errors, values, message: "Fix the highlighted fields and register again." };
  }

  try {
    await deliver("webinar", values);
  } catch (err) {
    console.error("[form:webinar] delivery failed", err);
    return { status: "error", values, message: SEND_FAILED };
  }

  redirect("/webinar/confirmed");
}

export async function sendContactMessage(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isSpam(formData)) return { status: "sent" };

  const { values, errors, hasErrors } = readFields(formData, {
    firstName: { required: true, label: "first name" },
    lastName: { required: true, label: "last name" },
    email: { required: true, email: true, label: "email address" },
    message: { required: true, label: "message" },
  });

  if (hasErrors) {
    return { status: "error", errors, values, message: "Fix the highlighted fields and send again." };
  }

  try {
    await deliver("contact", values);
  } catch (err) {
    console.error("[form:contact] delivery failed", err);
    return { status: "error", values, message: SEND_FAILED };
  }

  return { status: "sent" };
}
