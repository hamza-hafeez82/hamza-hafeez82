export type VentureStatus = "Present" | "Active" | "Completed" | "Pivoted"

export interface VentureLink {
  label: string
  href: string
}

export interface Venture {
  id: string
  name: string
  role: string
  companyLine: string
  location: string
  start: string
  end: string
  status: VentureStatus
  logo?: string
  logoInitials: string
  logoColor: string
  summary: string
  bullets: string[]
  skills: string[]
  links: VentureLink[]
}

/**
 * LinkedIn-style experience timeline.
 * Order is newest / current first. Add new ventures at the top.
 */
export const ventures: Venture[] = [
  {
    id: "histeeria",
    name: "Histeeria",
    role: "Founder & Engineer",
    companyLine: "Histeeria · Trust infrastructure for AI agents",
    location: "Lahore, Pakistan · Remote",
    start: "Jul 2026",
    end: "Present",
    status: "Present",
    logo: "/assets/histeeria.png",

    logoInitials: "H",
    logoColor: "#7c3aed",
    summary:
      "Building the judgment layer for AI agents: monitor what an agent did, then decide whether it should be trusted.",
    bullets: [
      "Shipped an end-to-end agent monitoring SaaS: SDK ingest, async evaluation pipeline, Next.js dashboard, alerts, reports, and public agent profiles.",
      "Built zero-dependency client SDKs on PyPI and npm.",
      "Implemented a three-tier evaluation pipeline: rule-based heuristics, LLM judge, and adjudicator scoring across eight judgment dimensions.",
      "Designed a FastAPI backend with SQLAlchemy 2 and a multi-tenant schema on PostgreSQL and Redis.",
    ],
    skills: ["Go", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "RAG", "LLM APIs"],
    links: [
      { label: "histeeria.com", href: "https://www.histeeria.com" },
      { label: "GitHub", href: "https://github.com/histeeria" },
    ],
  },
  {
    id: "anya",
    name: "Anya",
    role: "Engineer, Architect, & Creator",
    companyLine: "Anya · Emotionally aware companion robot",
    location: "Lahore, Pakistan",
    start: "2026",
    end: "Present",
    status: "Active",
    logo: "/assets/anya2.webp",

    logoInitials: "A",
    logoColor: "#ec4899",
    summary:
      "An open-source robot OS for a buddy-form-factor companion, inspired by Anya from Spy x Family. Hardware plus software.",
    bullets: [
      "Built a multimodal AI system combining perception, memory, cognition, and expressive behavior.",
      "Designed an event-driven NATS architecture for real-time communication between AI subsystems.",
      "Developed agentic workflows with contextual memory, perception pipelines, and adaptive responses.",
      "Used a phone as eyes, ears, and face, with a Raspberry Pi as the onboard brain.",
    ],
    skills: ["TypeScript", "Python", "NATS", "WebSockets", "Computer Vision", "TTS/STT", "Memory Systems"],
    links: [
      { label: "GitHub", href: "https://github.com/hmza-hb/Anya" },
    ],
  },
  {
    id: "cortex",
    name: "Cortex",
    role: "Founder & Engineer",
    companyLine: "Cortex EDR · AI application security analyst",
    location: "Lahore, Pakistan · Remote",
    start: "2025",
    end: "2026",
    status: "Active",
    logo: "/assets/CortexEDR.png",
    logoInitials: "C",
    logoColor: "#2563eb",
    summary:
      "A seven-agent security analysis platform that audits codebases for vulnerabilities, architectural issues, and dependency risk.",
    bullets: [
      "Engineered a multi-agent security analysis platform with an orchestrator based on prefrontal-cortex executive control.",
      "Developed autonomous agents for vulnerability discovery, exploitability analysis, evidence generation, and reporting.",
      "Built isolated sandbox environments for attack simulation and vulnerability validation.",
      "Shipped Cortex Attack and cortex-cli for automated security workflows across npm and open-source tooling.",
    ],
    skills: ["TypeScript", "Go", "LangGraph", "OSV.dev", "Multi-Agent AI", "Semgrep", "SAST"],
    links: [
      { label: "cortex-edr.com", href: "https://www.cortex-edr.com" },
      { label: "GitHub", href: "https://github.com/Cortex-EDR" },
      { label: "npm", href: "https://www.npmjs.com/package/@cortexedr/cli" },
    ],
  },
  {
    id: "project-cortex",
    name: "Project Cortex",
    role: "Independent Researcher",
    companyLine: "Project Cortex · AGI research article",
    location: "Lahore, Pakistan",
    start: "Nov 2025",
    end: "Nov 2025",
    status: "Completed",
    logoInitials: "PC",
    logoColor: "#0ea5e9",
    summary:
      "Self-published research proposing a prefrontal-cortex-inspired orchestrated architecture for artificial general intelligence.",
    bullets: [
      "Wrote and released a 36-page research article on executive control, multi-agent orchestration, shared memory, and safety-aligned AGI design.",
      "Received acknowledgment and review feedback from 57 researchers across AI, neuroscience, and cognitive science.",
      "Connected biological executive-control principles to practical multi-agent system design.",
    ],
    skills: ["AGI", "Cognitive Architecture", "Multi-Agent Systems", "AI Safety", "Research Writing"],
    links: [
      { label: "Paper PDF", href: "/Project%20Cortex.pdf" },
      { label: "GitHub", href: "https://github.com/hmza-hb/Project-Cortex" },
    ],
  },
  {
    id: "vista-ai",
    name: "Vista AI",
    role: "Founder & Engineer",
    companyLine: "Vista AI · Speech-first AI companion",
    location: "Lahore, Pakistan",
    start: "2025",
    end: "2025",
    status: "Completed",
    logo: "/assets/VistaAI.webp",
    logoInitials: "V",
    logoColor: "#22c55e",
    summary:
      "A speech-first AI companion designed for WhatsApp-native interaction, managed by voice and grounded in speech context.",
    bullets: [
      "Built a speech-first companion experience that could be integrated into WhatsApp workflows.",
      "Focused on voice interaction, conversational context, and practical companion behavior.",
      "Explored future CRM integration so the companion could operate business workflows by voice.",
    ],
    skills: ["TypeScript", "Speech AI", "Conversational Systems", "WhatsApp Integrations"],
    links: [
      { label: "GitHub", href: "https://github.com/hmza-hb/Vista-AI" },
    ],
  },
  {
    id: "asteria",
    name: "Asteria",
    role: "Founder & Engineer",
    companyLine: "Asteria · Early Histeeria, before the pivot",
    location: "Lahore, Pakistan",
    start: "2025",
    end: "2026",
    status: "Pivoted",
    logoInitials: "As",
    logoColor: "#f59e0b",
    summary:
      "The original social-platform direction that later pivoted into Histeeria. Built as a distributed, encrypted social system before the trust-infrastructure focus.",
    bullets: [
      "Started as a social collaboration platform and end-to-end encrypted distributed product direction.",
      "Laid technical foundations that later informed Histeeria's agent trust and observability work.",
      "Pivoted when the stronger product thesis became trust infrastructure for AI agents.",
    ],
    skills: ["Dart", "Distributed Systems", "Social Platforms", "Product Pivot"],
    links: [
      { label: "GitHub", href: "https://github.com/hmza-hb/Asteria" },
    ],
  },
  {
    id: "upvista-digital",
    name: "Upvista Digital",
    role: "Founder & Chief Software Engineer",
    companyLine: "Upvista Digital · Software and AI studio",
    location: "Lahore, Pakistan · Remote",
    start: "Jan 2025",
    end: "Present",
    status: "Present",
    logo: "/assets/Upvista.webp",
    logoInitials: "U",
    logoColor: "#3b82f6",
    summary:
      "My development studio for custom software, AI solutions, security auditing, and cloud infrastructure. Clients across Japan, the US, Germany, New Zealand, Singapore, and Pakistan.",
    bullets: [
      "Architected and delivered full-stack applications for clients across six countries, owning discovery, system design, and production delivery.",
      "Built scalable backend systems with Go and FastAPI, using PostgreSQL, Redis, Docker, and cloud infrastructure for multi-tenant workloads.",
      "Designed secure APIs, data architectures, and client integrations while acting as the primary technical point of contact from requirements to deployment.",
      "Started the studio after the first real client payment of $500, then grew it into an international practice.",
    ],
    skills: ["Next.js", "Go", "FastAPI", "PostgreSQL", "Docker", "Cloud", "Client Delivery"],
    links: [
      { label: "upvistadigital.com", href: "https://www.upvistadigital.com" },
      { label: "LinkedIn", href: "https://linkedin.com/company/upvista-digital" },
    ],
  },
]
