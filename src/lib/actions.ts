"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { deliver } from "@/lib/deliver";
import { isSpam, readFields, type FormState } from "@/lib/forms";
import { resolveOrigin } from "@/lib/origin";
import { getStripe } from "@/lib/stripe";
import { retreat, webinar } from "@/content/events";
import { checkoutPage } from "@/content/checkout";
import { site } from "@/content/site";

const SEND_FAILED =
  "We couldn't save that just now. Try again in a minute.";

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

/** Where Stripe should send the buyer back to. Allowlisted: never echoes an unknown Host header (see lib/origin.ts). */
async function requestOrigin() {
  const h = await headers();
  return resolveOrigin(h.get("x-forwarded-host") ?? h.get("host"), {
    siteUrl: site.url,
    // Order matters: [2] is the production alias, used as the fallback for unknown hosts.
    vercelHosts: [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL],
    isDev: process.env.NODE_ENV !== "production",
  });
}

export async function startRetreatCheckout(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (isSpam(formData)) return { status: "error", message: checkoutPage.unavailable };

  const { values, errors, hasErrors } = readFields(formData, {
    firstName: { required: true, label: "first name" },
    lastName: { required: true, label: "last name" },
    email: { required: true, email: true, label: "email address" },
  });

  if (hasErrors) {
    return { status: "error", errors, values, message: "Fix the highlighted fields and continue." };
  }

  let paymentUrl: string | null = null;
  try {
    const origin = await requestOrigin();
    const { product } = retreat;
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: values.email,
      billing_address_collection: "required",
      allow_promotion_codes: true,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.currency,
            unit_amount: product.amount,
            product_data: { name: product.name, description: product.description },
          },
        },
      ],
      metadata: { firstName: values.firstName, lastName: values.lastName, product: "florida-retreat" },
      success_url: `${origin}/checkout/confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?cancelled=1`,
    });
    paymentUrl = session.url;
  } catch (err) {
    console.error("[checkout] could not create Stripe session", err);
    // In development say why (usually a missing key); in production keep it generic.
    const detail = err instanceof Error ? err.message : "unknown error";
    return {
      status: "error",
      values,
      message: process.env.NODE_ENV === "production" ? checkoutPage.unavailable : `Dev only: ${detail}`,
    };
  }

  if (!paymentUrl) return { status: "error", values, message: checkoutPage.unavailable };
  redirect(paymentUrl);
}
