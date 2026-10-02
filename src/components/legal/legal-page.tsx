import type { ReactNode } from "react";
import { Container } from "@/components/ui/primitives";

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <section className="bg-foam">
      <Container className="py-16 sm:py-24">
        <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold">{title}</h1>
        {updated && <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-slate">Last updated {updated}</p>}
        <div className="prose-legal mt-8">{children}</div>
      </Container>
    </section>
  );
}

/** Shown on legal pages whose full text hasn't been ported from the WordPress site yet. */
export function PortNotice({ source }: { source: string }) {
  return (
    <p className="rounded-lg border border-ember bg-ember/10 px-4 py-3 text-sm font-medium text-ember-deep">
      Draft: the full text is still on the current site ({source}). Port it here before launch.
    </p>
  );
}
