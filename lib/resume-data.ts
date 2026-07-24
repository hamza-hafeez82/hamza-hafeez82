export const resumeProfile = {
  name: "Hamza Hafeez",
  fullName: "Hamza Hafeez Bhatti",
  title: "Software and AI Systems Engineer",
  location: "Lahore, Pakistan",
  availability: "Remote-ready · Open to relocate",
  email: "hmza.hb82@gmail.com",
  website: "https://hamza-hafeez.site",
  websiteLabel: "hamza-hafeez.site",
  github: "https://github.com/hmza-hb",
  githubLabel: "github.com/hmza-hb",
  linkedin: "https://linkedin.com/in/hmza-hb",
  linkedinLabel: "linkedin.com/in/hmza-hb",
  summary:
    "I design and ship production software at the intersection of multi-agent AI, backend systems, and application security. My work ranges from research on executive-control architectures to live products with billing, auth, observability, and developer tooling. I care about systems that are measurable, operable, and honest about their trade-offs.",
}

export interface ResumeExperience {
  id: string
  role: string
  org: string
  period: string
  location: string
  links?: { label: string; href: string }[]
  stack?: string
  bullets: string[]
}

export const resumeHighlights = [
  {
    label: "AI systems",
    text: "Multi-agent pipelines, LLM routing with fallbacks, evaluation/judgment loops, RAG, and chat orchestration with intent routing and token budgets.",
  },
  {
    label: "Backend",
    text: "Go and FastAPI services, PostgreSQL with RLS, Redis caching and Pub/Sub, WebSockets, async workers, multi-tenant schemas, API design.",
  },
  {
    label: "Security",
    text: "OWASP/CWE-oriented analysis, SAST integrations, sandboxing, secure auth, webhook verification, audit logging, and local-first security tooling.",
  },
  {
    label: "Product delivery",
    text: "End-to-end ownership from architecture to production: Next.js apps, SDKs, billing, CI/CD, docs, and client delivery across multiple countries.",
  },
]

/**
 * Experience ordered for recruiters: current commercial + product work first,
 * then major systems builds, then earlier platform work.
 */
export const resumeExperience: ResumeExperience[] = [
  {
    id: "histeeria",
    role: "Founder and Software Engineer",
    org: "Histeeria",
    period: "June 2026 to Present",
    location: "Lahore, Pakistan",
    links: [
      { label: "histeeria.com", href: "https://www.histeeria.com" },
      { label: "github.com/histeeria", href: "https://github.com/histeeria" },
    ],
    stack: "Python · TypeScript · FastAPI · PostgreSQL · Redis · LLM APIs · SDKs",
    bullets: [
      "Building trust infrastructure for AI agents: SDK ingest, async evaluation, dashboards, alerts, reports, and public agent profiles.",
      "Implemented a three-tier judgment pipeline: rule-based checks, LLM judge, and adjudicator scoring across eight dimensions.",
      "Shipped zero-dependency client SDKs on PyPI and npm, with a FastAPI backend and multi-tenant schema.",
      "Pivoted from an earlier social-platform direction (Asteria) into agent observability and runtime evaluation.",
    ],
  },
  {
    id: "cortex",
    role: "Founder and Chief Engineer",
    org: "Cortex EDR",
    period: "Jan 2025 to present",
    location: "Lahore, Pakistan",
    links: [
      { label: "cortex-edr.com", href: "https://www.cortex-edr.com" },
      { label: "github.com/Cortex-EDR", href: "https://github.com/Cortex-EDR" },
    ],
    stack: "Next.js 15 · TypeScript · Supabase · NextAuth · Paddle · Multi-provider LLM routing",
    bullets: [
      "Built a multi-agent security auditing platform (~29k lines of TypeScript) that scans GitHub repositories and produces scored, CWE/OWASP-classified reports.",
      "Designed a 7-agent sequential pipeline: recon, security, architecture, quality, debt, AI-pattern detection, and orchestrator synthesis with shared scan memory in PostgreSQL.",
      "Implemented provider-agnostic AI routing with fallbacks (OpenAI, OpenRouter, Gemini, Groq, DeepSeek), usage logging, and tier-gated model selection.",
      "Shipped Cortex Chat: intent classification, scoped context retrieval, token-budgeted compression, tool loops, and sanitization for post-scan codebase Q&A.",
      "Delivered production SaaS surfaces: auth, RLS, Paddle billing, PDF reports, CI/CD (lint, typecheck, build, CodeQL), and Railway deploys.",
    ],
  },
  {
    id: "upvista",
    role: "Software Engineer",
    org: "Upvista Digital",
    period: "Jan 2025 to Present",
    location: "Lahore, Pakistan · Remote International",
    links: [
      { label: "upvistadigital.com", href: "https://www.upvistadigital.com" },
    ],
    stack: "Go · FastAPI · Next.js · PostgreSQL · Redis · Docker · Cloud",
    bullets: [
      "Delivered full-stack and AI systems for clients in Japan, the United States, Germany, New Zealand, Singapore, and Pakistan.",
      "Own technical discovery, architecture, implementation, and production handoff as the primary engineering contact.",
      "Build multi-tenant backends, secure APIs, and cloud deployments using Go/FastAPI, PostgreSQL, Redis, and Docker.",
    ],
  },
  {
    id: "cortex-attack",
    role: "Engineer",
    org: "Cortex Attack",
    period: "Jan 2026 to March 2026",
    location: "Lahore, Pakistan",
    links: [
      { label: "npm cortex-attack", href: "https://www.npmjs.com/package/cortex-attack" },
      { label: "GitHub", href: "https://github.com/hmza-hb/cortex-attack" },
    ],
    stack: "TypeScript · Node CLI · Docker · nmap · nikto · semgrep · trivy · Ollama",
    bullets: [
      "Built a terminal-native security orchestration engine that coordinates host scanners and falls back to Docker when tools are missing.",
      "Runs a local-first, non-destructive audit pipeline: service discovery, route discovery, header analysis, vuln scan, dependency audit, attack-graph reasoning, and remediation narrative.",
      "Supports local Ollama models by default, with optional OpenAI/Anthropic providers for deeper exploit-path analysis and code patches.",
      "Available on npm (https://www.npmjs.com/package/cortex-attack) use 'npm install -g cortex-attack' to install",
    ],
  },
  {
    id: "Anya",
    role: "Engineer, Architect, & Creator",
    org: "Anya",
    period: "March 2026 to June 2026",
    location: "Lahore, Pakistan",
    links: [
      { label: "github.com/hmza-hb/Anya", href: "https://github.com/hmza-hb/Anya" },
    ],
    stack: "TypeScript · Python · NATS · WebSockets · CV · TTS/STT · Memory systems",
    bullets: [
      "Building an open-source companion-robot OS that combines perception, memory, cognition, and expressive behavior.",
      "Designed an event-driven NATS architecture so subsystems stay in continuous communication without blocking each other.",
      "Used practical hardware constraints: Raspberry Pi as onboard compute, phone as sensors and face.",
    ],
  },
  {
    id: "Asteria",
    role: "Founder and Engineer",
    org: "Asteria (early Histeeria)",
    period: "Sep 2025 to Jan 2026",
    location: "Lahore, Pakistan",
    links: [
      { label: "GitHub", href: "https://github.com/hmza-hb/Asteria" },
    ],
    stack: "Go · Next.js · Flutter · PostgreSQL · Redis · WebSockets · E2EE",
    bullets: [
      "Built a privacy-first social platform spanning Go backend, Next.js web, and Flutter mobile with end-to-end encrypted messaging.",
      "Designed for high concurrency: Redis Pub/Sub for multi-instance WebSockets, async workers, feed caching, and modular-monolith boundaries.",
      "Implemented OTP/OAuth auth, real-time messaging, feeds, statuses, notifications, and GDPR-oriented data export paths before pivoting the company thesis toward AI agent trust.",
    ],
  },
]

export const resumeResearch = {
  title: "Project Cortex: A Prefrontal-Cortex-Inspired Orchestrated Architecture for Artificial General Intelligence",
  period: "Nov 2025",
  note: "Self-published research article · 36 pages · reviewed by 57 researchers",
  bullets: [
    "Proposed an executive-control architecture for multi-agent systems: orchestrator, specialized agents, shared memory, risk evaluation, and hierarchical task decomposition.",
    "Applied the same model in production systems such as Cortex EDR, where agents map to narrow functions and an orchestrator synthesizes shared working memory into a final report.",
  ],
  links: [
    { label: "Paper PDF", href: "/Project%20Cortex.pdf" },
    { label: "github.com/hmza-hb/Project-Cortex", href: "https://github.com/hmza-hb/Project-Cortex" },
  ],
}

export const resumeEducation = {
  school: "National University of Modern Languages",
  degree: "BS, Computer Science",
  period: "Sep 2024 to April 2028",
  note: "Won 5 hackathons",
}

export const resumeSkills = [
  {
    label: "Languages",
    items: ["Go", "TypeScript", "Python", "SQL", "C#", "Dart"],
  },
  {
    label: "Systems and backend",
    items: [
      "FastAPI",
      "Gin",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "NATS",
      "WebSockets",
      "Docker",
      "CI/CD",
      "Distributed systems",
    ],
  },
  {
    label: "AI systems",
    items: [
      "Multi-agent pipelines",
      "LLM routing and fallbacks",
      "LangGraph / LangChain",
      "RAG",
      "Runtime evaluation",
      "Prompt contracts and structured output",
      "Usage and cost observability",
    ],
  },
  {
    label: "Security",
    items: [
      "OWASP / CWE analysis",
      "SAST",
      "Semgrep",
      "Secure API design",
      "AuthN/AuthZ",
      "RLS",
      "Webhook verification",
      "Local-first security tooling",
    ],
  },
  {
    label: "Delivery",
    items: [
      "System architecture",
      "Technical scoping",
      "SDK and CLI packaging",
      "Billing and multi-tenant SaaS",
      "Client delivery",
      "Documentation",
    ],
  },
]

export const resumeNav = [
  { id: "summary", label: "Summary" },
  { id: "focus", label: "Focus" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
]
