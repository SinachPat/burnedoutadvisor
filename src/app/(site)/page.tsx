import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { WeekGrid } from "@/components/home/week-grid";
import { Hosts } from "@/components/home/hosts";
import { home } from "@/content/home";
import { retreat } from "@/content/events";

export default function HomePage() {
  const { hero, reframe, takeaways, agenda, closing } = home;

  return (
    <>
      {/* Hero: the thesis is the calendar. */}
      <section id="home" className="overflow-hidden bg-foam">
        <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div>
            <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] font-semibold">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-slate sm:text-xl">{hero.body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={hero.cta.href} className="px-8 py-4 text-lg">
                {hero.cta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" className="px-8 py-4 text-lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-slate">
              Free live training, or the 3-day retreat · {retreat.dates}
            </p>
          </div>
          <WeekGrid />
        </Container>
      </section>

      {/* Reframe */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <h2 className="text-4xl sm:text-6xl">
            {reframe.lead}
            <br />
            <span className="text-sun">{reframe.emphasis}</span>
          </h2>
          <div className="space-y-5 text-lg text-seaglass/90">
            {reframe.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* What you'll walk away with: not a sequence, so no numbering. */}
      <Section id="takeaways" tone="seaglass">
        <h2 className="text-4xl sm:text-5xl">{takeaways.title}</h2>
        <dl className="mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2">
          {takeaways.items.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-5">
              <dt className="font-display text-2xl font-semibold">{item.title}</dt>
              <dd className="mt-2 text-tide">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Agenda: a real sequence, so the numbers mean something. */}
      <Section id="agenda" tone="foam">
        <Eyebrow className="text-lagoon">{retreat.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl uppercase sm:text-5xl">{agenda.title}</h2>
        <p className="mt-3 text-xl text-slate">{agenda.subtitle}</p>

        <ol className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {agenda.steps.map((step, i) => (
            <li key={step.title} className="grid gap-2 py-7 sm:grid-cols-[4rem_1fr_1.3fr] sm:items-baseline sm:gap-8">
              <span className="font-mono text-sm font-medium text-lagoon">{i + 1}</span>
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-slate">{step.body}</p>
            </li>
          ))}
        </ol>

        <Button href={agenda.cta.href} variant="outline" className="mt-10">
          {agenda.cta.label}
        </Button>
      </Section>

      <Hosts />

      {/* Closing */}
      <Section tone="ink">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">{closing.title}</h2>
          <p className="mt-5 text-lg text-seaglass/90">{closing.body}</p>
          <Button href={closing.cta.href} className="mt-9 px-8 py-4 text-lg">
            {closing.cta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
