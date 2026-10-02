"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { Wordmark } from "@/components/layout/wordmark";
import { nav, navCta } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-foam/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button href={navCta.href} className="px-5 py-2 text-[0.95rem]">
            {navCta.label}
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-ink/10 bg-foam lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="rounded-md py-3 text-lg font-medium">
                {item.label}
              </Link>
            ))}
            <Button href={navCta.href} onClick={close} className="mt-3">
              {navCta.label}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
