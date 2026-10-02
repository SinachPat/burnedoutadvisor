import Stripe from "stripe";

let client: Stripe | undefined;

/** Server-only. Use sk_test_… keys until a purchase has been tested end to end. */
export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set (see .env.example)");
  return (client ??= new Stripe(key));
}
