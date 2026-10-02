/**
 * Everything that changes per event lives here: update this file, not the pages.
 */

export const retreat = {
  dates: "November 4–6, 2026",
  venue: "Tradewinds Island Grand",
  city: "St. Pete Beach, FL",
  eyebrow: "NOVEMBER 4–6, 2026 · TRADEWINDS ISLAND GRAND · ST. PETE BEACH, FL",
  checkoutHref: "/checkout",
  // Charged by src/lib/actions.ts. The price is fixed here on the server, never read from the browser.
  product: {
    name: "BurnedOutAdvisor Florida Retreat Bundle",
    description: "3-day retreat, November 4–6, 2026, Tradewinds Island Grand, St. Pete Beach, FL",
    amount: 488800, // cents
    currency: "usd",
  },
} as const;

export const webinar = {
  // TODO: the live page still says Friday, October 2, 2026. Update before this goes live.
  dateLabel: "Friday, October 2, 2026 · 10:00 AM Central Time (US & Canada)",
  sessions: [
    { value: "11am-et", label: "11:00 AM ET (8:00 AM PT · 9:00 AM MT · 10:00 AM CT)" },
    { value: "6pm-et", label: "6:00 PM ET (3:00 PM PT · 4:00 PM MT · 5:00 PM CT)" },
  ],
} as const;
