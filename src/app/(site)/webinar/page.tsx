import type { Metadata } from "next";
import { CheckIcon, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { WebinarForm } from "@/components/forms/webinar-form";
import { Hosts } from "@/components/home/hosts";
import { Button } from "@/components/ui/button";
import { webinarPage } from "@/content/webinar";
import { webinar } from "@/content/events";

export const metadata: Metadata = {
  title: "Free live training for advisors",
  description: webinarPage.hero.body,
};

export default function WebinarPage() {
  const { hero, discover, form, closing } = webinarPage;

  return (
    <>
      <section className="bg-foam">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold">{hero.title}</h1>
            <p className="mt-3 font-display text-3xl text-ember-deep sm:text-4xl">{hero.subtitle}</p>
            <p className="mt-6 max-w-xl text-lg text-slate sm:text-xl">{hero.body}</p>
            <Eyebrow className="mt-8 inline-block rounded-full border border-ink/20 px-4 py-2 normal-case tracking-wide">
              {webinar.dateLabel}
            </Eyebrow>

            <h2 className="mt-14 text-2xl sm:text-3xl">{discover.title}</h2>
            <ul className="mt-6 space-y-4">
              {discover.items.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <CheckIcon className="mt-1 text-ember-deep" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="form" className="self-start rounded-2xl bg-seaglass p-6 sm:p-9 lg:sticky lg:top-24">
            <h2 className="text-3xl">{form.title}</h2>
            <p className="mb-7 mt-2 text-tide">{form.body}</p>
            <WebinarForm />
          </div>
        </Container>
      </section>

      <Hosts id="hosts" />

      <Section tone="ink">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">{closing.title}</h2>
          <div className="mt-5 space-y-1 text-lg text-seaglass/90">
            {closing.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Button href="#form" className="mt-9 px-8 py-4 text-lg">
            {closing.cta}
          </Button>
        </div>
      </Section>
    </>
  );
}
