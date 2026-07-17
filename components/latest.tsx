"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, GitBranch, BookOpen, Layers, MessageSquare } from "lucide-react"

const updates = [
  {
    title: "Recent Blog: The Philosophy of Inevitable Interfaces",
    tags: ["UI Systems", "Cognitive Design"],
    year: "July 2024",
    icon: BookOpen,
    href: "/blogs",
  },
  {
    title: "New Project: Synapse Lab AI Agent Orchestrator",
    tags: ["TypeScript", "LangChain", "Vector DB"],
    year: "June 2024",
    icon: Layers,
    href: "/ventures",
  },
  {
    title: "GitHub Activity: Refactored low-latency context sync",
    tags: ["Rust", "State Sync", "hmza-hb"],
    year: "May 2024",
    icon: GitBranch,
    href: "https://github.com/hmza-hb",
  },
  {
    title: "Note: State pre-hydration algorithms for edge networks",
    tags: ["Distributed Cache", "Heuristics"],
    year: "April 2024",
    icon: MessageSquare,
    href: "/researches",
  },
]

export function Latest() {
  return (
    <section className="relative py-24 px-6 md:px-12 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — ACTIVITY</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light italic">What's New</h2>
      </motion.div>

      {/* Activity List */}
      <div className="relative mb-24">
        {updates.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-white/10 py-8 md:py-10 last:border-b last:border-white/10"
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                data-cursor-hover
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Date */}
                <span className="font-mono text-xs text-muted-foreground tracking-widest min-w-[100px]">
                  {item.year}
                </span>

                {/* Icon + Title */}
                <div className="flex flex-1 items-center gap-3">
                  <Icon className="w-4 h-4 text-accent shrink-0" />
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-tight group-hover:text-white/60 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Tags + Arrow */}
                <div className="flex gap-2 flex-wrap items-center">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/15 rounded-full text-zinc-400 bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0 ml-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>

      {/* GitHub Analytics Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="border-t border-white/10 pt-16 mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] text-accent tracking-[0.2em] mb-2 uppercase">Analytics</p>
            <h3 className="font-serif text-2xl md:text-4xl font-light italic">GitHub Footprint</h3>
          </div>
          <a
            href="https://github.com/hmza-hb"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-zinc-400 hover:text-accent flex items-center gap-1 transition-colors duration-200 mb-1"
          >
            @hmza-hb <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Contributions Graph */}
        <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent space-y-4">
          <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Annual Commit Activity</span>
          <div className="overflow-x-auto py-1">
            <img
              src="https://ghchart.rshah.org/2563eb/hmza-hb"
              alt="hmza-hb annual GitHub contributions"
              className="min-w-[600px] w-full object-contain"
            />
          </div>
        </div>

        {/* Stats + Streak side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
          <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col gap-4">
            <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Repos & Metrics</span>
            <img
              src="https://camo.githubusercontent.com/520c55dec8b97908e6a6d29cc645ebe19c9ee116b02da3278d9edf9b3ea61384/68747470733a2f2f6d7973746174732d74776f2e76657263656c2e6170702f6170693f757365726e616d653d686d7a612d68622673686f775f69636f6e733d74727565267468656d653d746f6b796f6e6967687426686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565"
              alt="hmza-hb GitHub stats"
              className="w-full object-contain"
            />
          </div>

          {/* Streak Stats — using demolab which is actively maintained */}
          <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col gap-4">
            <span className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Commit Streaks</span>
            <img
              src="https://streak-stats.demolab.com/?user=hmza-hb&theme=transparent&background=00000000&border=ffffff10&ring=2563eb&fire=60a5fa&currStreakNum=ffffff&sideNums=ffffff&sideLabels=999999&dates=666666&currStreakLabel=60a5fa&hide_border=true"
              alt="hmza-hb GitHub streak stats"
              className="w-full object-contain"
            />
          </div>

        </div>
        {/* <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent space-y-4">

          <div className="overflow-x-auto py-1">
            <img
              src="https://camo.githubusercontent.com/33dde2b5b7c52a83d38495bd213380c7f969abd2df0f6bd509c2733c4288fa4d/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d686d7a612d6862267468656d653d746f6b796f2d6e6967687426686964655f626f726465723d7472756526617265613d74727565"
              alt="hmza-hb annual GitHub contributions"
              className="min-w-[600px] w-full object-contain"
            />
          </div>
        </div> */}
      </motion.div>
    </section>
  )
}
