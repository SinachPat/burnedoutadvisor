import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/primitives";
import { bookedPage } from "@/content/checkout";
import { getStripe } from "@/lib/stripe";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: "You're booked",
  robots: { index: false },
};

/**
 * Never trust the URL: the query only carries a session id, and we ask Stripe whether it was paid.
 * Anyone can open /checkout/confirmed?session_id=anything, and that must not look like a booking.
 */
async function paidSession(sessionId: string | undefined) {
  if (!sessionId?.startsWith("cs_")) return null;
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid" ? session : null;
  } catch (err) {
    console.error("[checkout] could not verify session", err);
    return null;
  }
}

export default async function CheckoutConfirmedPage({ searchParams }: PageProps<"/checkout/confirmed">) {
  const { session_id } = await searchParams;
  const session = await paidSession(typeof session_id === "string" ? session_id : undefined);

  if (!session) {
    return (
      <Section tone="seaglass" className="min-h-[60vh]">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl">{bookedPage.unpaidTitle}</h1>
          <p className="mt-5 text-lg text-tide">{bookedPage.unpaidBody}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/checkout">{bookedPage.retry}</Button>
            <Button href="/contact" variant="outline">
              {bookedPage.contact}
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  const email = session.customer_details?.email ?? session.customer_email;
  const amount = formatMoney(session.amount_total ?? 0, session.currency ?? "usd");

  return (
    <Section tone="seaglass" className="min-h-[60vh]">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl">{bookedPage.title}</h1>
        <p className="mt-5 text-lg text-tide">{bookedPage.paid(amount)}</p>
        {email && <p className="mt-2 text-lg text-tide">{bookedPage.receipt(email)}</p>}
        <Button href="/" variant="outline" className="mt-9">
          Back to the home page
        </Button>
      </div>
    </Section>
  );
}
