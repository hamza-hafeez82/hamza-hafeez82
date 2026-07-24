export type PaperStatus = "published" | "preprint" | "in-progress"

export interface ResearchPaper {
  id: string
  title: string
  authors: string[]
  year: number
  dateLabel: string
  venue: string
  status: PaperStatus
  subjects: string[]
  keywords: string[]
  abstract: string
  citations: number
  reviews?: number
  pages?: number
  pdfUrl?: string
  githubUrl?: string
  bibtex: string
}

export const researchProfile = {
  name: "Hamza Hafeez Bhatti",
  shortName: "H H Bhatti",
  affiliation: "Founder, Histeeria & Cortex",
  location: "Lahore, Pakistan",
  email: "hello@hamza-hafeez.site",
  homepage: "https://github.com/hmza-hb",
  photo: "/assets/images/11.webp",

  interests: [
    "Artificial General Intelligence",
    "Cognitive Architecture",
    "Multi-Agent Systems",
    "Trustworthy AI",
    "Agent Observability",
    "Runtime Evaluation",
  ],
}

/** Sorted newest first by default. Add new papers here as they are ready. */
export const papers: ResearchPaper[] = [
  {
    id: "continuous-runtime-evaluation",
    title:
      "Continuous Runtime Evaluation as a Core Architecture for Trustworthy AI Agents",
    authors: ["Hamza Hafeez Bhatti"],
    year: 2026,
    dateLabel: "2026",
    venue: "Working paper (in progress)",
    status: "in-progress",
    subjects: ["cs.AI", "cs.SE", "cs.LG", "cs.CR"],
    keywords: [
      "Agent Observability",
      "Runtime Evaluation",
      "Trust Infrastructure",
      "Multi-Agent Systems",
      "AI Safety",
    ],
    abstract:
      "As autonomous agents move from demos into high-stakes workflows, trust can no longer be treated as a post-hoc audit layer. This working paper argues that continuous runtime evaluation should sit inside the architecture itself: a persistent judgment loop that scores decisions across multiple dimensions, adjudicates conflicts between rule-based checks and model judges, and keeps provenance attached to every action. Building on the executive-control ideas explored in Project Cortex, the physical companion architecture of Anya, and the trust-scoring systems in Histeeria, the paper proposes a unified framing for trustworthy agent infrastructure.",
    citations: 0,
    bibtex: `@unpublished{bhatti2026runtime,
  title={Continuous Runtime Evaluation as a Core Architecture for Trustworthy AI Agents},
  author={Bhatti, Hamza Hafeez},
  year={2026},
  note={Working paper in progress}
}`,
  },
  {
    id: "project-cortex",
    title:
      "Project Cortex: A Prefrontal-Cortex-Inspired Orchestrated Architecture for Artificial General Intelligence",
    authors: ["Hamza Hafeez Bhatti"],
    year: 2025,
    dateLabel: "2025",
    venue: "Self-published research article, Version 1.0",
    status: "published",
    subjects: ["cs.AI", "cs.MA", "cs.NE", "q-bio.NC"],
    keywords: [
      "Artificial General Intelligence",
      "Cognitive Architecture",
      "Prefrontal Cortex",
      "Multi-Agent Systems",
      "Executive Control",
      "Safety-Aligned AI",
    ],
    abstract:
      "Artificial General Intelligence represents the pursuit of systems capable of broad, adaptive, and autonomous cognition. While modern large language models demonstrate impressive capabilities in language understanding and reasoning, they remain fragmented systems without unified executive control, persistent memory, or structured planning abilities. This paper introduces Project Cortex, a biologically inspired architecture modeled on the functional organization of the human prefrontal cortex. The framework integrates an executive orchestrator, specialized cognitive agents, a shared memory substrate, probabilistic risk evaluation, and hierarchical task decomposition.",
    citations: 0,
    reviews: 57,
    pages: 36,
    pdfUrl: "/Project%20Cortex.pdf",
    githubUrl: "https://github.com/hmza-hb/Project-Cortex",
    bibtex: `@article{bhatti2025cortex,
  title={Project Cortex: A Prefrontal-Cortex-Inspired Orchestrated Architecture for Artificial General Intelligence},
  author={Bhatti, Hamza Hafeez},
  year={2025},
  month={November},
  note={Self-published research article, Version 1.0},
  url={https://github.com/hmza-hb/Project-Cortex}
}`,
  },
]

export function getCitationMetrics(list: ResearchPaper[] = papers) {
  const totalCitations = list.reduce((sum, p) => sum + (p.citations || 0), 0)
  const citedPapers = list.filter((p) => (p.citations || 0) > 0).length
  return {
    citations: totalCitations,
    hIndex: 0,
    i10Index: 0,
    articles: list.length,
    citedPapers,
  }
}
