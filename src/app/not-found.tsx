import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Section tone="foam" className="min-h-[60vh]">
      <p className="font-mono text-sm uppercase tracking-[0.14em] text-ember-deep">404</p>
      <h1 className="mt-3 max-w-xl text-5xl sm:text-6xl">That page isn&apos;t on the calendar.</h1>
      <p className="mt-5 max-w-lg text-lg text-slate">The link may be old, or the page may have moved.</p>
      <Button href="/" className="mt-9">
        Back to the home page
      </Button>
    </Section>
  );
}
