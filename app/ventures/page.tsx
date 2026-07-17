"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const ventures = [
  {
    num: "01",
    name: "Synapse Lab",
    role: "Founder & Architect",
    status: "Active",
    description: "An AI-native developer tooling lab focused on automating codebase refactoring and state-machine agent orchestrations. Raising seed round.",
    links: [{ label: "Visit Site", href: "#" }],
  },
  {
    num: "02",
    name: "Aether Grid",
    role: "Co-Founder",
    status: "Active",
    description: "A decentralized container hosting orchestration layers, reducing edge compute latency by distributing container state across regional nodes.",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    num: "03",
    name: "Voxel Engine",
    role: "Creator",
    status: "Acquired",
    description: "A lightweight canvas-agnostic WebGL rendering library built for high-performance fluid dynamics and real-time mesh manipulations in browsers.",
    links: [{ label: "Docs", href: "#" }],
  },
]

export default function Ventures() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">02 — VENTURES</p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Startups & <span className="italic font-normal">Labs</span>
            </h1>
            <p className="font-mono text-sm text-accent mt-4 tracking-wider">CREATING SCALABLE INFRASTRUCTURES</p>
          </motion.div>

          {/* Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 border border-white/10 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/20 transition-colors duration-500 min-h-[320px]"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-[#2563eb]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />

                {/* Top Row */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">{venture.num}</span>
                    <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-white/20 rounded-full text-accent uppercase">
                      {venture.status}
                    </span>
                  </div>
                  <h2 className="text-2xl font-light tracking-tight mb-2 group-hover:text-white/95 transition-colors duration-300">
                    {venture.name}
                  </h2>
                  <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-4 uppercase">
                    {venture.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {venture.description}
                  </p>
                </div>

                {/* Bottom Row Links */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  {venture.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      data-cursor-hover
                      className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-white/80 hover:text-white transition-colors duration-300 group/link"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
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
