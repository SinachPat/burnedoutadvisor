import type Stripe from "stripe";
import { deliver } from "@/lib/deliver";
import { getStripe } from "@/lib/stripe";

/**
 * Stripe → us. This is the source of truth that a seat was paid for (the confirmation page is only a courtesy).
 * Register https://<your-domain>/api/stripe/webhook in Stripe for `checkout.session.completed`
 * and `checkout.session.async_payment_succeeded`, then set STRIPE_WEBHOOK_SECRET to its signing secret.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[stripe webhook] STRIPE_WEBHOOK_SECRET is not set");
    return new Response("Webhook not configured", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  // The signature covers the exact bytes Stripe sent, so read the raw text, not parsed JSON.
  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    console.error("[stripe webhook] signature check failed", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    const session = event.data.object;

    // `completed` also fires for delayed payment methods that haven't paid yet; wait for the success event.
    if (session.payment_status === "paid") {
      try {
        await deliver("retreat-booking", {
          // Stripe retries webhooks, so the receiver should dedupe on sessionId.
          sessionId: session.id,
          email: session.customer_details?.email ?? session.customer_email ?? "",
          firstName: session.metadata?.firstName ?? "",
          lastName: session.metadata?.lastName ?? "",
          amountTotal: String(session.amount_total ?? ""),
          currency: session.currency ?? "",
          paymentIntent: typeof session.payment_intent === "string" ? session.payment_intent : "",
        });
      } catch (err) {
        // A non-2xx makes Stripe retry, so a booking is never silently dropped.
        console.error("[stripe webhook] could not record booking", err);
        return new Response("Could not record booking", { status: 500 });
      }
    }
  }

  return Response.json({ received: true });
}
