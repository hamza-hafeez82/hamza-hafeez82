"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"

const blogs = [
  {
    date: "JULY 12, 2024",
    readTime: "6 MIN READ",
    title: "The Philosophy of Inevitable Interfaces",
    excerpt: "Why the best interfaces are the ones that require no explanation. We explore how micro-animations, physical gestures, and predictive loading states make apps feel natural, intuitive, and inevitable.",
    category: "DESIGN",
  },
  {
    date: "MAY 28, 2024",
    readTime: "8 MIN READ",
    title: "Edge-First Computing: Synchronizing State at the Border",
    excerpt: "An architectural deep-dive into how regional edge nodes can maintain local cache coherence. We analyze multi-master replication heuristics, optimistic UI updates, and transaction rollbacks under unstable connections.",
    category: "ARCHITECTURES",
  },
  {
    date: "MARCH 15, 2024",
    readTime: "5 MIN READ",
    title: "Crystallizing Code: How DX Shapes UX",
    excerpt: "Developer experience (DX) and user experience (UX) are two sides of the same coin. How build speed, strong type safety, and component architecture influence the premium polish of consumer software applications.",
    category: "DEVELOPMENT",
  },
]

export default function Blogs() {
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
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — BLOGS</p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Stream of <span className="italic font-normal">Thoughts</span>
            </h1>
            <p className="font-mono text-sm text-accent mt-4 tracking-wider">ESSAYS ON TECH, SYSTEM ARCHITECTURE & INTERFACES</p>
          </motion.div>

          {/* Blogs list */}
          <div className="space-y-12">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 border-b border-white/10 last:border-b-0 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-accent tracking-wider uppercase bg-accent/10 px-2 py-0.5 rounded">
                      {blog.category}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                      {blog.date} • {blog.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-white/80 transition-colors duration-300">
                    <a href="#" className="block" data-cursor-hover>
                      {blog.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                    {blog.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
