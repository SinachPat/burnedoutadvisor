/**
 * Hands a submission or booking to whatever collects leads (CRM, Zapier, Fluent CRM webhook…).
 * Set FORM_WEBHOOK_URL. In development, with no URL set, submissions are logged instead.
 * In production a missing URL throws, so a lead is never reported as saved when it wasn't.
 *
 * Not a "use server" file on purpose: exports from those become publicly callable actions.
 */
export type DeliveryKind = "webinar" | "contact" | "retreat-booking";

export async function deliver(kind: DeliveryKind, data: Record<string, string>) {
  const url = process.env.FORM_WEBHOOK_URL;

  if (!url) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FORM_WEBHOOK_URL is not set");
    }
    console.info(`[deliver:${kind}]`, data);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ kind, submittedAt: new Date().toISOString(), ...data }),
  });
  if (!res.ok) throw new Error(`Form webhook responded ${res.status}`);
}
