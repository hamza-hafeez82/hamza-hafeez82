export const siteConfig = {
  name: "Hamza Hafeez",
  fullName: "Hamza Hafeez Bhatti",
  shortName: "Hamza Hafeez",
  title: "Hamza Hafeez | Software and AI Systems Engineer",
  description:
    "Official website of Hamza Hafeez (Hamza Hafeez Bhatti): software and AI systems engineer, founder of Histeeria, Cortex EDR, and Upvista Digital. Biography, ventures, research, writings, and resume from Lahore, Pakistan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hamza-hafeez.site",
  locale: "en_US",
  ogImage: "/og-image.png",
  twitterHandle: "@Upvista_Digital",
  email: "hmza.hb82@gmail.com",
  sameAs: [
    "https://github.com/hmza-hb",
    "https://linkedin.com/in/hmza-hb",
    "https://instagram.com/hamza.hafeez82",
    "https://www.cortex-edr.com",
    "https://www.histeeria.com",
    "https://www.upvistadigital.com",
    "https://github.com/Cortex-EDR",
    "https://github.com/histeeria",
  ],
  keywords: [
    "Hamza Hafeez",
    "Hamza Hafeez Bhatti",
    "hmza-hb",
    "Software Engineer Lahore",
    "AI Systems Engineer",
    "Multi-agent AI",
    "Histeeria",
    "Cortex EDR",
    "Project Cortex",
    "Upvista Digital",
    "Anya robot",
    "Backend Engineer Pakistan",
    "Founder Engineer",
    "AI Security",
    "Agent Observability",
  ],
} as const

export const pageSeo = {
  home: {
    title: "Hamza Hafeez | Software and AI Systems Engineer",
    description:
      "Hamza Hafeez builds production AI systems, secure applications, and scalable backends. Founder of Histeeria, Cortex EDR, and Upvista Digital. Explore biography, ventures, research, and resume.",
    path: "/",
  },
  biography: {
    title: "Biography | Hamza Hafeez",
    description:
      "The full autobiography of Hamza Hafeez: growing up in Lahore, learning to build, Project Cortex research, Cortex EDR, Anya, Histeeria, and Upvista Digital. Read the complete story.",
    path: "/biography",
  },
  ventures: {
    title: "Ventures | Hamza Hafeez",
    description:
      "Timeline of companies and products founded by Hamza Hafeez: Histeeria, Anya, Cortex EDR, Project Cortex, Vista AI, Asteria, and Upvista Digital.",
    path: "/ventures",
  },
  researches: {
    title: "Research | Hamza Hafeez",
    description:
      "Research by Hamza Hafeez on prefrontal-cortex-inspired multi-agent architectures and continuous runtime evaluation for trustworthy AI agents. Includes Project Cortex.",
    path: "/researches",
  },
  blogs: {
    title: "Writings | Hamza Hafeez",
    description:
      "Essays and notes by Hamza Hafeez on building AI systems, shipping products, security, and learning in public.",
    path: "/blogs",
  },
  resume: {
    title: "Resume | Hamza Hafeez",
    description:
      "Curriculum vitae of Hamza Hafeez: software and AI systems engineer. Experience across Upvista Digital, Histeeria, Cortex EDR, Cortex Attack, Anya, Asteria, and Project Cortex research.",
    path: "/resume",
  },
} as const

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
