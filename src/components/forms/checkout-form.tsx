"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Field, Honeypot } from "@/components/forms/field";
import { startRetreatCheckout } from "@/lib/actions";
import { initialFormState } from "@/lib/forms";
import { checkoutPage } from "@/content/checkout";

export function CheckoutForm() {
  const [state, action, pending] = useActionState(startRetreatCheckout, initialFormState);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form action={action} noValidate className="relative grid gap-5" aria-label="Retreat checkout">
      <Honeypot />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="firstName" label="First name" autoComplete="given-name" defaultValue={v.firstName} error={e.firstName} required />
        <Field name="lastName" label="Last name" autoComplete="family-name" defaultValue={v.lastName} error={e.lastName} required />
      </div>
      <Field name="email" type="email" label="Email address" autoComplete="email" defaultValue={v.email} error={e.email} required />

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg bg-alert/10 px-4 py-3 text-sm font-medium text-alert">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="w-full px-8 py-4 text-lg sm:w-auto sm:justify-self-start">
        {pending ? "Opening secure payment…" : checkoutPage.submit}
      </Button>

      <p className="text-sm text-slate">
        {checkoutPage.terms.before}{" "}
        <Link href="/terms-and-conditions" className="font-medium text-lagoon underline underline-offset-4">
          {checkoutPage.terms.link}
        </Link>
        .
      </p>
    </form>
  );
}
