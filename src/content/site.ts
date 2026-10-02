export const site = {
  name: "BurnedOut Media",
  parent: "Part of WeOwn Cooperative",
  tagline: "The Ultimate Destination for Burned Out Professionals",
  description:
    "A free live training and a 3-day Florida retreat for trusted advisors ready to stop carrying a practice that's carrying them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://burnedoutadvisor.com",
  footerBlurb:
    "The Ultimate Destination for Burned Out Professionals. A tactical 3-day reset for advisors ready to take their practice — and their life — back.",

  legal: {
    entity: "BurnedOut Media Limited Cooperative Association-Public Benefit Corporation",
    address: ["1312 17th St #72506", "Denver, CO 80202", "United States"],
    representative: "Tyler Younker",
    // The live site shows placeholder contact details. Set real ones in .env.local; they render only when present.
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  },
} as const;

export const nav = [
  { label: "What you'll learn", href: "/#takeaways" },
  { label: "Team", href: "/#team" },
  { label: "Florida Retreat", href: "/florida-retreat" },
  { label: "Webinar", href: "/webinar" },
  { label: "Contact", href: "/contact" },
] as const;

export const navCta = { label: "Join Free Webinar", href: "/webinar" } as const;

export const footerLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Imprint", href: "/imprint" },
  { label: "Privacy Statement (US)", href: "/privacy-statement-us" },
] as const;

/** Photos are still hosted on the WordPress site. Move into /public when exported. */
const uploads = "https://burnedoutadvisor.com/wp-content/uploads";
export const images = {
  jason: { src: `${uploads}/2026/04/signal-2026-04-29-162829-768x768.jpeg`, w: 768, h: 768 },
  tyler: { src: `${uploads}/2026/04/signal-2026-04-29-162829_002-768x768.jpeg`, w: 768, h: 768 },
  // White-sand beach, aerial (Pexels). Reads as a tropical resort, not the Gulf Coast: swap for a St. Pete Beach photo.
  beach: {
    src: `${uploads}/2026/05/pexels-photo-28408487-28408487-scaled.jpg`,
    w: 2560,
    h: 1919,
    alt: "Two people walking along a white-sand beach beside turquoise water",
  },
  // Sunset over calm water (the old site's Fort De Soto photo).
  sunset: {
    src: `${uploads}/2026/10/fortdesoto_beach-scaled.jpg`,
    w: 2560,
    h: 1707,
    alt: "Sunset over calm Gulf water",
  },
} as const;
