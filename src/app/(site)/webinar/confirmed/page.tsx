import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/primitives";
import { webinarPage } from "@/content/webinar";

export const metadata: Metadata = {
  title: "You're registered",
  robots: { index: false },
};

export default function WebinarConfirmedPage() {
  return (
    <Section tone="seaglass" className="min-h-[60vh]">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl">{webinarPage.confirmed.title}</h1>
        <p className="mt-5 text-lg text-tide">{webinarPage.confirmed.body}</p>
        <Button href="/florida-retreat" variant="outline" className="mt-9">
          Explore the Retreat
        </Button>
      </div>
    </Section>
  );
}
