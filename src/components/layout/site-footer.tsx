import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Wordmark } from "@/components/layout/wordmark";
import { footerLinks, site } from "@/content/site";
import { retreat } from "@/content/events";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-foam">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Wordmark light />
          <p className="mt-5 max-w-sm text-seaglass/90">{site.footerBlurb}</p>
          <p className="mt-4 text-sm text-seaglass/60">{site.parent}</p>
        </div>

        <div>
          <Eyebrow as="h2" className="text-ember">
            Explore
          </Eyebrow>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-seaglass/90 hover:text-foam hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow as="h2" className="text-ember">
            Florida Retreat
          </Eyebrow>
          <p className="mt-4 text-seaglass/90">
            A 3-Day Reset in St. Pete Beach, Florida — {retreat.dates}. Seats are limited.
          </p>
          <Button href="/florida-retreat" className="mt-5">
            Reserve My Spot
          </Button>
        </div>
      </Container>

      <div className="border-t border-foam/10">
        <Container className="py-6 text-sm text-seaglass/60">
          © {new Date().getFullYear()} BurnedOut Media. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
