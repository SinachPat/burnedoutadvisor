import type { Metadata } from "next";
import Image from "next/image";
import { CheckoutForm } from "@/components/forms/checkout-form";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { checkoutPage } from "@/content/checkout";
import { retreat } from "@/content/events";
import { images } from "@/content/site";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false },
};

export default async function CheckoutPage({ searchParams }: PageProps<"/checkout">) {
  const { cancelled } = await searchParams;
  const { product } = retreat;
  const total = formatMoney(product.amount, product.currency);

  return (
    <section className="bg-foam">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Eyebrow className="text-lagoon">
            {retreat.dates} · {retreat.city}
          </Eyebrow>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold">{checkoutPage.title}</h1>
          <p className="mt-4 max-w-lg text-lg text-slate">{checkoutPage.intro}</p>

          {cancelled && (
            <p role="status" className="mt-8 max-w-lg rounded-lg border border-gold bg-sun/30 px-4 py-3 text-sm font-medium">
              {checkoutPage.cancelled}
            </p>
          )}

          <h2 className="mb-5 mt-10 text-2xl">{checkoutPage.detailsTitle}</h2>
          <CheckoutForm />
        </div>

        <aside aria-label={checkoutPage.summaryTitle} className="self-start rounded-2xl bg-seaglass p-6 sm:p-8 lg:sticky lg:top-24">
          <h2 className="text-2xl">{checkoutPage.summaryTitle}</h2>

          <div className="mt-6 flex gap-4">
            <Image
              src={images.beach.src}
              width={160}
              height={160}
              alt=""
              sizes="80px"
              className="size-20 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold leading-snug">{product.name}</p>
              <p className="mt-1 text-sm text-tide">
                {retreat.dates} · {retreat.venue}
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-3 border-t border-ink/15 pt-5">
            <div className="flex justify-between text-tide">
              <dt>Subtotal</dt>
              <dd>{total}</dd>
            </div>
            <div className="flex items-baseline justify-between border-t border-ink/15 pt-4">
              <dt className="text-lg font-semibold">{checkoutPage.totalLabel}</dt>
              <dd className="font-display text-3xl font-semibold">{total}</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-tide">{checkoutPage.couponNote}</p>
          <p className="mt-2 text-sm text-tide">{checkoutPage.paymentNote}</p>
        </aside>
      </Container>
    </section>
  );
}
