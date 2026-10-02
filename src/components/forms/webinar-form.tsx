"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Field, Honeypot, Select, TextArea } from "@/components/forms/field";
import { registerForWebinar } from "@/lib/actions";
import { initialFormState } from "@/lib/forms";
import { webinar } from "@/content/events";
import { webinarPage } from "@/content/webinar";

export function WebinarForm() {
  const [state, action, pending] = useActionState(registerForWebinar, initialFormState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form action={action} noValidate className="relative grid gap-5" aria-label="Webinar registration">
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="firstName" label="First name" autoComplete="given-name" defaultValue={v.firstName} error={e.firstName} required />
        <Field name="lastName" label="Last name" autoComplete="family-name" defaultValue={v.lastName} error={e.lastName} required />
      </div>
      <Field name="email" type="email" label="Email address" autoComplete="email" defaultValue={v.email} error={e.email} required />
      <Select
        name="session"
        label="Preferred webinar time"
        placeholder="Select your preferred session time"
        options={webinar.sessions}
        defaultValue={v.session}
        error={e.session}
        required
      />
      {/* Required on the old site. Optional here: a free sign-up shouldn't need an essay. */}
      <TextArea name="message" label="Your message" defaultValue={v.message} error={e.message} optional />

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg bg-ember/15 px-4 py-3 text-sm font-medium text-ember-deep">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="w-full sm:w-auto sm:justify-self-start">
        {pending ? "Registering…" : webinarPage.form.submit}
      </Button>
    </form>
  );
}
