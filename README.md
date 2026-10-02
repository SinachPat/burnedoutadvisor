# BurnedOut Advisor

Marketing site for **BurnedOut Media**: a free live webinar (primary goal) and the paid 3-day Florida retreat (secondary goal), for burned-out trusted advisors.

Next.js 16 (App Router) · TypeScript · Tailwind 4 · Server Actions for forms.
> Next 16 differs from older versions. Check `node_modules/next/dist/docs/` before using an API from memory (see `AGENTS.md`).

```bash
npm install
cp .env.example .env.local
npm run dev     # http://localhost:3000
npm run build && npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/content/*` | **All copy**, ported verbatim from the old site (`docs/CONTENT.md` is the full inventory). Edit text here, not in components. |
| `src/content/events.ts` | Per-event data: webinar date and sessions, retreat dates, checkout URL. |
| `src/app/(site)/*` | Pages: `/`, `/florida-retreat`, `/webinar`, `/webinar/confirmed`, `/contact`, and the legal pages. |
| `src/components/home/week-grid.tsx` + `.week-*` in `globals.css` | The hero's signature animation (a packed calendar that clears). Respects `prefers-reduced-motion`. |
| `src/app/globals.css` | Design tokens (`@theme`): ink, tide, seaglass, foam, ember. |
| `src/lib/actions.ts` | Webinar and contact Server Actions, with validation and a honeypot spam trap. |

## Before launch

- [ ] **Webinar date**: `src/content/events.ts` still says Friday, October 2, 2026.
- [ ] **Form delivery**: set `FORM_WEBHOOK_URL`. Without it, production submissions fail on purpose (dev just logs them).
- [ ] **Contact details**: set `NEXT_PUBLIC_CONTACT_EMAIL` / `_PHONE`. The old site's Imprint and Disclaimer show placeholders.
- [ ] **Legal text**: `privacy-statement-us` and `terms-and-conditions` are draft stubs. Terms is empty on the old site and must be written (cancellations/refunds for the retreat).
- [ ] **Retreat checkout**: `NEXT_PUBLIC_RETREAT_CHECKOUT_URL` defaults to the WordPress FluentCart link. Replace when payments are rebuilt (the product is $4,888 and the price is not shown on the page yet).
- [ ] **Images**: host and beach photos load from the WordPress uploads folder. Export to `/public` and update `src/content/site.ts`. The old retreat hero is an Adobe Stock image, so check its licence before reusing it.
- [ ] **Cookie consent and analytics**: the old site used Complianz and Matomo. Neither is wired up here yet.
- [ ] **Logo**: `components/layout/wordmark.tsx` is a placeholder mark. The live logo is a dark PNG.
- [ ] **Redirects/cutover**: old URLs `/live`, `/withdrawal`, `/checkout-2`, `/hello-world` are intentionally not rebuilt.
