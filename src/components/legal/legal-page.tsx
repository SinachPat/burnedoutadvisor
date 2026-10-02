import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/primitives";
import type { LegalBlock } from "@/content/terms";

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
    <p className="rounded-lg border border-gold bg-sun/30 px-4 py-3 text-sm font-medium text-ink">
      Draft: the full text is still on the current site ({source}). Port it here before launch.
    </p>
  );
}

/** Renders `[text](/path)` as an internal link; everything else is plain text. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return link ? (
          <Link key={i} href={link[2]}>
            {link[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            );
        }
      })}
    </>
  );
}
