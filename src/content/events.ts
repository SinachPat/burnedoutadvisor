/**
 * Everything that changes per event lives here: update this file, not the pages.
 */

export const retreat = {
  dates: "November 4–6, 2026",
  venue: "Tradewinds Island Grand",
  city: "St. Pete Beach, FL",
  eyebrow: "NOVEMBER 4–6, 2026 · TRADEWINDS ISLAND GRAND · ST. PETE BEACH, FL",
  // The WordPress site checks out through FluentCart. Point this at the new checkout when it exists.
  checkoutUrl:
    process.env.NEXT_PUBLIC_RETREAT_CHECKOUT_URL ??
    "https://burnedoutadvisor.com/?fluent-cart=instant_checkout&item_id=6&quantity=1",
} as const;

export const webinar = {
  // TODO: the live page still says Friday, October 2, 2026. Update before this goes live.
  dateLabel: "Friday, October 2, 2026 · 10:00 AM Central Time (US & Canada)",
  sessions: [
    { value: "11am-et", label: "11:00 AM ET (8:00 AM PT · 9:00 AM MT · 10:00 AM CT)" },
    { value: "6pm-et", label: "6:00 PM ET (3:00 PM PT · 4:00 PM MT · 5:00 PM CT)" },
  ],
} as const;
