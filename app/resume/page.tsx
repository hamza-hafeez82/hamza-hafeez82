"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { Printer, Download } from "lucide-react"

const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Rust", "C++", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "Three.js (WebGL)", "D3.js", "Node.js", "FastAPI", "TailwindCSS"],
  infra: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD Platforms"],
}

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-16 print:bg-white print:text-black print:pt-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 print:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 print:hidden">05 — RESUME</p>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight print:text-5xl print:font-bold">
                Hamza <span className="italic font-normal print:not-italic">Hafeez</span>
              </h1>
              <p className="font-mono text-sm text-accent mt-4 tracking-wider print:text-black print:font-semibold">
                SYSTEM ARCHITECT & INTERFACE DESIGNER
              </p>
            </motion.div>

            {/* Actions (Hidden in Print) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 print:hidden"
            >
              <button
                onClick={handlePrint}
                data-cursor-hover
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white/50 rounded-full font-mono text-xs tracking-wider transition-colors duration-300"
              >
                <Printer className="w-3.5 h-3.5" />
                PRINT
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 print:grid-cols-3 print:gap-8">
            {/* Left Column: Info & Skills */}
            <div className="space-y-8 md:col-span-1 border-t md:border-t-0 md:border-r border-white/10 pt-8 md:pt-0 md:pr-8 print:border-r print:border-black/10 print:pr-6">
              <div>
                <h2 className="font-mono text-xs tracking-widest text-muted-foreground mb-4 uppercase print:text-black/60 print:font-bold">
                  Contact Info
                </h2>
                <ul className="space-y-2 font-mono text-xs text-white/80 print:text-black">
                  <li>hello@example.com</li>
                  <li>github.com/hamza</li>
                  <li>linkedin.com/in/hamza</li>
                </ul>
              </div>

              <div>
                <h2 className="font-mono text-xs tracking-widest text-muted-foreground mb-4 uppercase print:text-black/60 print:font-bold">
                  Core Skills
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-mono text-[10px] text-accent tracking-wider uppercase mb-1.5 print:text-black print:font-semibold">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.languages.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-muted-foreground print:bg-black/5 print:border-black/10 print:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-[10px] text-accent tracking-wider uppercase mb-1.5 print:text-black print:font-semibold">
                      Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.frameworks.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-muted-foreground print:bg-black/5 print:border-black/10 print:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-mono text-[10px] text-accent tracking-wider uppercase mb-1.5 print:text-black print:font-semibold">
                      Infrastructure
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.infra.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-muted-foreground print:bg-black/5 print:border-black/10 print:text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Work Experience */}
            <div className="md:col-span-2 space-y-12 print:col-span-2">
              <div>
                <h2 className="font-mono text-xs tracking-widest text-muted-foreground mb-8 uppercase print:text-black/60 print:font-bold">
                  Work Experience
                </h2>

                <div className="space-y-10">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-light tracking-tight print:text-base print:font-bold">
                        Lead Systems Architect
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1 print:text-black">
                        2024 — Present
                      </span>
                    </div>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider print:text-black/70 print:font-medium">
                      Cognitive Labs
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed print:text-black">
                      Led design and implementation of fault-tolerant distributed systems powering low-latency multi-agent orchestrations. Reduced system initialization bottlenecks by 35% through custom state serialization modules. Collaborated on WebGL interface interactions matching complex visual network graphs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-light tracking-tight print:text-base print:font-bold">
                        Senior Interface Designer
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1 print:text-black">
                        2022 — 2024
                      </span>
                    </div>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider print:text-black/70 print:font-medium">
                      Aether Systems
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed print:text-black">
                      Spearheaded redesign of cloud configuration panels using React/Next.js. Created high-performance 3D canvas backgrounds and data visualization layers using Three.js/WebGL. Established modern design guidelines and styled components, resulting in a cohesive UX.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-light tracking-tight print:text-base print:font-bold">
                        Full-Stack Engineer
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1 print:text-black">
                        2020 — 2022
                      </span>
                    </div>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider print:text-black/70 print:font-medium">
                      Helix Software
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed print:text-black">
                      Built, monitored, and scaled critical REST APIs using Node.js, PostgreSQL, and Docker. Implemented smooth interactive web designs and transitions using Framer Motion, enhancing user engagement and overall flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 print:border-black/10">
                <h2 className="font-mono text-xs tracking-widest text-muted-foreground mb-4 uppercase print:text-black/60 print:font-bold">
                  Education
                </h2>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base md:text-lg font-light tracking-tight print:text-sm print:font-bold">
                      B.S. in Computer Science & Engineering
                    </h3>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider print:text-black/70 print:font-medium">
                      University of Technology
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1 print:text-black">
                    2016 — 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
