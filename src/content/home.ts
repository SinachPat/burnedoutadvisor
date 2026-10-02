export const home = {
  hero: {
    title: "You Didn't Build Your Practice to Feel Trapped Inside It.",
    body: "A free live training for trusted advisors (CPAs, financial advisors, attorneys, real estate agents, lenders) who left corporate for freedom and are ready to stop carrying a practice that's carrying them.",
    cta: { label: "Reserve My Spot", href: "/webinar" },
    // Added: the home page serves both goals (webinar sign-ups first, retreat sales second).
    secondaryCta: { label: "See the Florida Retreat", href: "/florida-retreat" },
  },

  reframe: {
    lead: "Most advisors don't have a burnout problem.",
    emphasis: "They have an operating system problem.",
    paragraphs: [
      "You know the feeling. The calendar is packed, the inbox never stops, clients expect faster answers, and somewhere along the way, the business you built for freedom started feeling a lot like the job you thought you left behind.",
      "You're not lazy. You're not broken. And you're definitely not the only advisor quietly wondering how success turned into exhaustion.",
    ],
  },

  takeaways: {
    title: "What You'll Walk Away With",
    items: [
      {
        title: "Why Burnout Keeps Winning",
        body: "Why burnout keeps showing up even in successful practices, and why it's not your fault.",
      },
      {
        title: "Hidden Systems Draining You",
        body: "How to identify the hidden systems draining your time and energy every week.",
      },
      {
        title: "Ai Without the Overwhelm",
        body: "Where Ai and automation can create leverage without making your practice feel robotic.",
      },
      {
        title: "Growth Without More Hustle",
        body: "Why the next stage of growth for many advisors is better structure, not more effort.",
      },
    ],
  },

  agenda: {
    title: "The Retreat Agenda",
    subtitle: "A 3-Day Reset in St. Pete Beach, Florida",
    steps: [
      {
        title: "Step Away from the Noise",
        body: "A focused break from client demands, compliance pressure, and daily operations.",
      },
      {
        title: "Identify What's Draining You",
        body: "A structured audit of where your practice is leaking time, energy, and margin.",
      },
      {
        title: "Build Your Ai Operating System",
        body: "Learn how to deploy Ai tools that reduce manual work without disrupting your practice.",
      },
      {
        title: "Design Your 90-Day Plan",
        body: "Leave with a clear, practical implementation roadmap built around your specific practice.",
      },
      {
        title: "Leave Ready to Implement",
        body: "Not just ideas — a real plan, real tools, and real support to make it happen after you leave.",
      },
    ],
    cta: { label: "Explore the Retreat", href: "/florida-retreat" },
  },

  closing: {
    title: "We're only looking for a very specific advisor.",
    body: "You're already successful enough to know your old model is too expensive to keep running. If that's you, this is your moment.",
    cta: { label: "Reserve My Spot — It's Free", href: "/webinar" },
  },
} as const;

export const hosts = {
  title: "Meet Your Hosts",
  people: [
    {
      key: "jason",
      name: "Jason Younker",
      role: "Founder / Chief Digital Alchemist",
      bio: "Bringing 25+ years of experience in financial services, engineering, and executive consulting. Jason brings distinct expertise in responsible agentic Ai, cooperative ownership, and alternative assets.",
    },
    {
      key: "tyler",
      name: "Tyler Younker",
      role: "Co-Founder / Chief Executive Officer",
      bio: "Former wholesaler and private equity consultant with experience working with 25,000+ advisors and raising $3 billion. Tyler's passion is helping professionals clean off their desks and get back to what matters.",
    },
  ],
} as const;
