import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** One width for the header, footer and every section so their left edges always line up. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...props} />;
}

type Tone = "foam" | "seaglass" | "ink";

const tones: Record<Tone, string> = {
  foam: "bg-foam text-ink",
  seaglass: "bg-seaglass text-ink",
  ink: "bg-ink text-foam",
};

/** A full-bleed band. Vertical rhythm is set here and nowhere else. */
export function Section({
  tone = "foam",
  className,
  children,
  ...props
}: { tone?: Tone; children: ReactNode } & ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-28", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small mono label. Use for facts (dates, places, sequence), not decoration. */
export function Eyebrow({
  as: Tag = "p",
  className,
  ...props
}: { as?: ElementType } & ComponentProps<"p">) {
  return (
    <Tag
      className={cn("font-mono text-xs font-medium uppercase tracking-[0.14em]", className)}
      {...props}
    />
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={cn("size-5 shrink-0", className)}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6 10.4 2.7 2.6L14 7.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
