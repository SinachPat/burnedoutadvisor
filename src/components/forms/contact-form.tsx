"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Field, Honeypot, TextArea } from "@/components/forms/field";
import { sendContactMessage } from "@/lib/actions";
import { initialFormState } from "@/lib/forms";
import { contactPage } from "@/content/webinar";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialFormState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "sent") {
    return (
      <div role="status" className="rounded-card bg-seaglass px-6 py-8">
        <h3 className="text-2xl">{contactPage.sent.title}</h3>
        <p className="mt-2 text-tide">{contactPage.sent.body}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative grid gap-5" aria-label="Contact">
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="firstName" label="First name" autoComplete="given-name" defaultValue={v.firstName} error={e.firstName} required />
        <Field name="lastName" label="Last name" autoComplete="family-name" defaultValue={v.lastName} error={e.lastName} required />
      </div>
      <Field name="email" type="email" label="Email address" autoComplete="email" defaultValue={v.email} error={e.email} required />
      <TextArea name="message" label="Your message" defaultValue={v.message} error={e.message} required />

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg bg-ember/15 px-4 py-3 text-sm font-medium text-ember-deep">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="w-full sm:w-auto sm:justify-self-start">
        {pending ? "Sending…" : contactPage.submit}
      </Button>
    </form>
  );
}
