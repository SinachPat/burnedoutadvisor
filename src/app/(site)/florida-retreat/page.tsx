import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckIcon, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { retreatPage } from "@/content/retreat";
import { retreat } from "@/content/events";
import { images } from "@/content/site";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: retreatPage.hero.title,
  description: `${retreatPage.hero.body} ${retreat.dates}, ${retreat.venue}, ${retreat.city}.`,
};

export default function FloridaRetreatPage() {
  const { hero, exclusive, days, included, venue, secure } = retreatPage;
  const price = formatMoney(retreat.product.amount, retreat.product.currency, { cents: false });

  return (
    <>
      {/* The photo is shown as-is: no overlay, no dimming. Text sits beside it, not on it. */}
      <section className="bg-ink text-foam">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div>
            <Eyebrow className="text-sun">
              {retreat.dates} · {retreat.venue}, {retreat.city}
            </Eyebrow>
            <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-seaglass sm:text-xl">{hero.body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={retreat.checkoutHref} className="px-8 py-4 text-lg">
                {secure.cta}
              </Button>
              <p className="font-display text-3xl font-semibold">
                {price}
                <span className="ml-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-seaglass">
                  Retreat price
                </span>
              </p>
            </div>
          </div>
          <Image
            src={images.beach.src}
            width={images.beach.w}
            height={images.beach.h}
            alt={images.beach.alt}
            priority
            sizes="(min-width: 1024px) 680px, 100vw"
            className="aspect-[5/4] w-full rounded-card object-cover object-[40%_60%] lg:aspect-[4/3]"
          />
        </Container>
      </section>

      <Section tone="foam">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 className="text-4xl sm:text-5xl">{exclusive.title}</h2>
          <p className="text-lg text-slate">{exclusive.body}</p>
        </div>
      </Section>

      {/* Three days: a real sequence. */}
      <Section tone="seaglass">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">{days.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {days.items.map((day) => (
            <article key={day.title} className="rounded-card bg-foam p-7">
              <Eyebrow className="text-lagoon">{day.label}</Eyebrow>
              <h3 className="mt-3 text-3xl">{day.title}</h3>
              <ul className="mt-5 space-y-3 text-slate">
                {day.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lagoon" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="foam">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">{included.title}</h2>
        <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {included.items.map((item) => (
            <li key={item} className="flex gap-3.5">
              <CheckIcon className="mt-1 text-lagoon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <h2 className="text-4xl sm:text-5xl">{venue.title}</h2>
            <p className="mt-6 text-lg text-seaglass/90">{venue.body}</p>
          </div>
          <Image
            src={images.sunset.src}
            width={images.sunset.w}
            height={images.sunset.h}
            alt={images.sunset.alt}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="aspect-[3/2] w-full rounded-card object-cover"
          />
        </div>
      </Section>

      <Section tone="seaglass">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">{secure.title}</h2>
          <p className="mt-5 text-lg text-tide">{secure.body}</p>
          <p className="mt-7 font-display text-4xl font-semibold">
            {price}
            <span className="ml-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-tide">
              Retreat price
            </span>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={retreat.checkoutHref} className="px-8 py-4 text-lg">
              {secure.cta}
            </Button>
            <a href={secure.fallback.href} className="font-semibold underline underline-offset-4 hover:text-lagoon">
              {secure.fallback.label}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
