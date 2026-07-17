"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "2024 — Present",
    role: "Lead Systems Architect",
    company: "Cognitive Labs",
    description: "Designing low-latency inference pipelines, agentic workflows, and human-in-the-loop interfaces for enterprise AI orchestration.",
  },
  {
    year: "2022 — 2024",
    role: "Senior Interface Designer",
    company: "Aether Systems",
    description: "Crafted multi-modal interfaces, data visualization dashboards, and adaptive design systems utilizing WebGL and canvas-based layouts.",
  },
  {
    year: "2020 — 2022",
    role: "Full-Stack Engineer",
    company: "Helix Software",
    description: "Built scalable web applications, designed real-time data streaming architectures, and led front-end modernization projects.",
  },
]

export default function Biography() {
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
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">01 — BIOGRAPHY</p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Hamza <span className="italic font-normal">Hafeez</span>
            </h1>
            <p className="font-mono text-sm text-accent mt-4 tracking-wider">SYSTEM ARCHITECT & INTERFACE DESIGNER</p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-white/90">
                Bridging the gap between robust system engineering and intuitive interface design.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am a system architect and product engineer dedicated to building the next generation of intelligent software tools. By combining background knowledge in distributed backend systems with a deep passion for clean, high-performance user interfaces, I help startups and enterprises ship robust digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                My philosophy is simple: software should feel invisible. Every transition, load state, and interaction is a conversational bridge between human intention and binary execution. I design products that don't just calculate, but communicate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8"
            >
              <div>
                <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-2">CORE FOCUS</h3>
                <ul className="space-y-1.5 text-sm font-mono text-white/80">
                  <li>Distributed Architectures</li>
                  <li>AI/Agentic Workflows</li>
                  <li>WebGL & Data Viz</li>
                  <li>Adaptive Design Systems</li>
                  <li>DX & Tooling</li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-2">LOCATION</h3>
                <p className="font-mono text-sm text-white/80">Global / Remote</p>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/10 pt-16 md:pt-24 mb-16"
          >
            <h2 className="font-sans text-3xl font-light italic mb-12">Selected Milestones</h2>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pb-12 border-b border-white/5 last:border-b-0"
                >
                  <div className="font-mono text-xs text-muted-foreground tracking-widest">
                    {item.year}
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <h3 className="text-lg md:text-xl font-light tracking-tight">
                      {item.role} <span className="text-accent/80 font-mono text-xs ml-2">@ {item.company}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
