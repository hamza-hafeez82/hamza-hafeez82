"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const researches = [
  {
    category: "AI & COGNITION",
    title: "Predictive Hydration in Distributed State Matrices",
    publishedIn: "IEEE International Systems Conference (2024)",
    abstract: "Proposing a framework for pre-fetching and caching agentic environment state variables using Markov-chain-based transition heuristics, resulting in a 42% latency reduction in distributed multi-agent system simulations.",
    tags: ["State Machines", "Distributed Cache", "Agentic Frameworks"],
  },
  {
    category: "HUMAN-COMPUTER INTERACTION",
    title: "Adaptive Latency Calibration in Multi-modal UX Systems",
    publishedIn: "HCI Quarterly Journal (2023)",
    abstract: "Investigating how micro-adjustments in animation delay curves can offset network communication latencies, aligning device response cycles with human cognitive expectation models to create seamless interactions.",
    tags: ["Cognitive Design", "Animation Curves", "WebGL"],
  },
  {
    category: "DISTRIBUTED NETWORKS",
    title: "Spatial Identity & Biometric Tokenization Protocols",
    publishedIn: "Decentralized Systems Forum (2023)",
    abstract: "Developing a peer-to-peer trust negotiation protocol using zero-knowledge proofs over geographical zones, enabling secure and temporary user credential tokenization on physical device nodes.",
    tags: ["Cryptography", "ZKP", "Edge Computing"],
  },
]

export default function Researches() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">03 — RESEARCHES</p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Systems & <span className="italic font-normal">Essays</span>
            </h1>
            <p className="font-mono text-sm text-accent mt-4 tracking-wider">ACADEMIC & TECHNICAL EXPLORATIONS</p>
          </motion.div>

          {/* Research List */}
          <div className="space-y-16">
            {researches.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pb-12 border-b border-white/10 last:border-b-0 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-accent tracking-[0.2em] block mb-2">
                      {research.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-light tracking-tight group-hover:text-white/90 transition-colors duration-300">
                      {research.title}
                    </h2>
                  </div>
                  <a
                    href="#"
                    data-cursor-hover
                    className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-muted-foreground hover:text-white transition-colors duration-300 self-start md:mt-2 group/link"
                  >
                    READ PAPER
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>

                <p className="font-mono text-xs text-muted-foreground mb-4">
                  Published in: <span className="text-white/70 italic">{research.publishedIn}</span>
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">
                  {research.abstract}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {research.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/10 rounded-full text-muted-foreground bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
