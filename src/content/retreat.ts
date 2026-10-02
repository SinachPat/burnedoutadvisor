export const retreatPage = {
  hero: {
    title: "A Tactical Reset on the Florida Beaches",
    body: "For Advisors who are done burning out and ready to love their business again.",
  },

  exclusive: {
    title: "Built Exclusively for Advisors",
    // Note: "R&R" is never expanded on the live site. Worth deciding whether to spell it out.
    body: "This isn't a general business retreat. R&R was designed specifically for advisors who are carrying too much, feeling stuck, and ready for something to change. If you're managing clients, dealing with compliance, running a team, and still trying to grow then this weekend was built for you.",
  },

  days: {
    title: "Three Days That Will Change How You Work",
    items: [
      {
        label: "Day 1",
        title: "Recover",
        points: [
          "Arrive, decompress, and disconnect from the noise.",
          "This day is about clearing your head so you can actually think.",
          "Facilitated sessions on identifying what's draining you and what's worth keeping.",
        ],
      },
      {
        label: "Day 2",
        title: "Rebuild",
        points: [
          "Hands-on Ai training tailored specifically for advisors.",
          "Learn how to cut your overhead in half, automate what drains you.",
          "Implement systems that run while you sleep.",
        ],
      },
      {
        label: "Day 3",
        title: "Revenue",
        points: [
          "Leave with a clear 90-day action plan.",
          "Identify new revenue streams inside your existing workflow.",
          "Monetize your expertise at scale without adding more hours.",
        ],
      },
    ],
  },

  included: {
    title: "What's Included in Your Retreat",
    items: [
      "3 days of programming at Tradewinds Island Grand, St. Pete Beach, FL",
      "Breakfasts, lunches and welcome reception",
      "Mental reset sessions",
      "Exclusive Ai training sessions for advisors",
      "1-on-1 strategy session with Jason or Tyler",
      "Rediscover what you used to love about your business or optimize your business for sale.",
      "90-day action plan built during the retreat",
      "Access to the WeOwn advisor community post-retreat",
      "Ongoing support for 30 days after",
      "Small group format — limited seats for focused attention",
    ],
  },

  venue: {
    title: "Tradewinds Island Grand: St. Pete Beach, Florida",
    body: "Nestled along the Gulf Coast, St. Pete Beach is just 30 minutes from St. Petersburg-Clearwater International Airport (PIE) — close enough to get to, far enough to actually escape. Tradewinds Island Grand sits right along the beach with sunset views in every direction. This is the kind of setting where your mind actually slows down enough to think clearly.",
  },

  secure: {
    title: "Secure Your Spot",
    body: "Seats are intentionally limited to keep this experience personal and focused. Once we're full, we're full.",
    cta: "Reserve My Spot",
    fallback: { label: "Not sure yet? Reserve a free seat in our webinar", href: "/webinar" },
  },
} as const;
