"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Sparkles, AlertTriangle, Compass, Quote, Award } from "lucide-react"

type TabType = "profile" | "strengths" | "weaknesses" | "growth"

const traits = [
  { name: "Extraverted", value: 73, category: "Energy" },
  { name: "Intuitive", value: 71, category: "Information" },
  { name: "Thinking", value: 59, category: "Decision" },
  { name: "Judging", value: 72, category: "Execution" },
]

const strengths = [
  {
    title: "Clear Communication",
    description: "I express my ideas directly and effectively, helping my team stay aligned and goal-oriented.",
  },
  {
    title: "Decisive Action",
    description: "I adopt a straightforward, confident approach to important decisions, maintaining momentum and avoiding indecision.",
  },
  {
    title: "Efficient Organizer",
    description: "I naturally identify priorities and efficiently allocate resources to achieve clear, measurable outcomes.",
  },
  {
    title: "Future Focused",
    description: "I readily envision long-term implications, enabling me to anticipate opportunities and obstacles before others see them.",
  },
  {
    title: "Results Oriented",
    description: "I measure success by practical accomplishments rather than theoretical discussions, guiding efforts toward tangible achievements.",
  },
  {
    title: "Proactive Initiative",
    description: "I instinctively seize opportunities without waiting for encouragement or permission.",
  },
  {
    title: "Seeking Constructive Feedback",
    description: "I welcome straightforward critique, continually pursuing advice and ideas for self-improvement.",
  },
  {
    title: "High Self-Motivation",
    description: "I proactively hold myself accountable for developing my abilities, rarely needing external encouragement.",
  },
  {
    title: "Structured Habits",
    description: "I excel at organizing my personal life with clear routines, increasing my likelihood of achieving productivity and health goals.",
  },
  {
    title: "Objective Self-Analysis",
    description: "I regularly assess and review my actions honestly, enabling me to make purposeful improvements.",
  },
  {
    title: "Purposeful Learning",
    description: "I consistently challenge myself to pursue new knowledge or refine existing skills in meaningful ways.",
  },
  {
    title: "Openness to New Experiences",
    description: "I actively seek activities outside my comfort zone, creating opportunities for significant development.",
  },
]

const weaknesses = [
  {
    title: "Reluctant to Delegate Tasks",
    description: "I find it difficult to fully trust others with responsibilities, causing unnecessary stress by carrying excessive workload myself.",
  },
  {
    title: "Overly Critical",
    description: "My focus on efficiency and excellence sometimes leads to excessively harsh critiques, negatively impacting team morale.",
  },
  {
    title: "Restless with Routine Tasks",
    description: "Routine or detail-heavy tasks can test my patience, causing frustration and reducing my enthusiasm and productivity.",
  },
  {
    title: "Discomfort with Ambiguity",
    description: "I often struggle when tasks lack clear goals, preferring defined outcomes over uncertain or exploratory processes.",
  },
  {
    title: "Underestimating Emotional Factors",
    description: "While focusing on measurable outcomes, I may overlook people's emotional needs, inadvertently hindering overall productivity.",
  },
  {
    title: "Intolerance of Inefficiency",
    description: "My drive for efficiency can breed impatience toward slower colleagues or unavoidable delays, affecting collaboration dynamics.",
  },
  {
    title: "Impatience with Slow Progress",
    description: "I quickly become frustrated when self-improvement efforts don't yield immediate results, risking early abandonment of valuable habits.",
  },
  {
    title: "Avoiding Emotional Reflection",
    description: "I often focus solely on logical solutions when facing personal obstacles, overlooking how my emotions influence my decisions.",
  },
  {
    title: "Overcommitting Yourself",
    description: "My ambitious pursuit of goals frequently leads to taking on too many responsibilities at once, causing exhaustion and ineffective outcomes.",
  },
  {
    title: "Resistance to Relaxation",
    description: "I struggle with granting myself downtime, incorrectly viewing leisure activities and rest as unimportant distractions.",
  },
  {
    title: "Unrealistically High Standards",
    description: "My expectations for my performance can cross into perfectionism, making any failures or setbacks disproportionately discouraging.",
  },
  {
    title: "Discomfort Asking for Support",
    description: "My independence may cause hesitation in seeking emotional or practical help, limiting my support network.",
  },
]

export function Personality() {
  const [activeTab, setActiveTab] = useState<TabType>("profile")

  return (
    <section className="relative py-24 px-6 md:px-12 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — PERSONALITY</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight">
              Commander — <span className="italic font-normal text-accent">ENTJ-A</span>
            </h2>
          </div>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 border border-white/10 p-1.5 rounded-full bg-white/[0.02] backdrop-blur-md self-start">
            {(["profile", "strengths", "weaknesses", "growth"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-cursor-hover
                className={`relative px-5 py-2.5 rounded-full font-mono text-[10px] md:text-xs tracking-wider uppercase transition-colors duration-300 ${activeTab === tab ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTab === "profile" && (
              <div className="space-y-16">
                {/* Horizontal Traits Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {traits.map((trait, i) => (
                    <motion.div
                      key={trait.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent space-y-4"
                    >
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="font-mono text-[10px] text-accent tracking-wider uppercase block mb-1">
                            {trait.category}
                          </span>
                          <h4 className="font-sans text-base font-light text-zinc-100">{trait.name}</h4>
                        </div>
                        <span className="font-mono text-lg text-accent font-semibold">{trait.value}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${trait.value}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 2-Column narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Column: Who I Am */}
                  <div className="lg:col-span-6 space-y-8">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-accent" />
                      <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Who I Am</h3>
                    </div>

                    <div className="space-y-6">
                      <p className="font-sans text-zinc-300 text-base md:text-lg leading-relaxed">
                        As an ENTJ (Commander), I am a natural-born leader with an unparalleled drive to turn my visions into reality. My strategic mind excels at seeing the big picture, identifying long-term goals, and devising efficient plans to achieve them. I possess a rare combination of confidence, charisma, and decisiveness that draws others to me and inspires them to follow my lead.
                      </p>
                      <p className="font-sans text-zinc-300 text-base md:text-lg leading-relaxed">
                        My approach to life is characterized by ambition and a relentless pursuit of success. I have an innate ability to organize people and resources, creating order out of chaos and transforming abstract ideas into concrete results. My sharp intellect and rational decision-making skills allow me to handle complex situations with ease, always keeping my eye on the ultimate objective.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-8 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-accent">01 //</span>
                        <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Personality Traits</h4>
                      </div>
                      <p className="font-sans text-zinc-300 text-base leading-relaxed">
                        My direct communication style is both a strength and a challenge. While it enables me to express my thoughts clearly and persuasively, it can sometimes come across as blunt or insensitive to those around me. I value efficiency and competence above all else, which can make me impatient with those who don't meet my high standards.
                      </p>
                      <p className="font-sans text-zinc-300 text-base leading-relaxed">
                        I thrive in environments that challenge me and provide opportunities for growth and leadership. I'm not content with the status quo and am always looking for ways to improve systems, processes, and people. My ability to see potential and drive change makes me an invaluable asset in any organization, but it also means I may struggle with mundane tasks or situations that don't align with my grand vision.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Career Path & Quote */}
                  <div className="lg:col-span-6 space-y-8">
                    {/* Steve Jobs Quote */}
                    <div className="relative border-l-2 border-accent pl-6 py-4 bg-gradient-to-r from-white/[0.01] to-transparent rounded-r-lg">
                      <Quote className="absolute top-2 left-6 w-16 h-16 text-white/[0.02] -translate-x-4 -translate-y-4 pointer-events-none" />
                      <p className="font-serif text-lg md:text-xl text-zinc-200 italic leading-relaxed mb-4">
                        "Your time is limited, so don't waste it living someone else's life."
                      </p>
                      <span className="font-mono text-[10px] text-accent tracking-widest block uppercase">
                        — Steve Jobs
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-accent">02 //</span>
                        <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">My Career Path</h4>
                      </div>
                      <p className="font-sans text-zinc-300 text-base md:text-lg leading-relaxed">
                        My career is more than just a job – it's a platform for me to exercise my leadership skills and make a significant impact. I'm naturally drawn to roles that allow me to strategize, make important decisions, and guide others towards a common goal. Whether I'm running my own business or climbing the corporate ladder, I'm always aiming for the top, driven by an unwavering belief in my abilities and a desire to leave my mark on the world.
                      </p>
                      <p className="font-sans text-zinc-300 text-base leading-relaxed">
                        However, my career path isn't without its challenges. My preference for big-picture thinking and strategic planning may cause me to overlook important details or become frustrated with day-to-day operations. Learning to appreciate and manage the smaller aspects of my work, while also delegating effectively, is crucial for my long-term success. Additionally, my direct communication style and high expectations may need to be tempered in certain professional settings to maintain positive relationships with colleagues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Strengths Tab */}
            {activeTab === "strengths" && (
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">My Strengths</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/20 hover:from-white/[0.02] transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-5 h-5 text-accent" />
                        <h4 className="font-sans text-lg font-semibold text-white">{strength.title}</h4>
                      </div>
                      <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                        {strength.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Weaknesses Tab */}
            {activeTab === "weaknesses" && (
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">My Blind Spots</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {weaknesses.map((weakness, index) => (
                    <motion.div
                      key={weakness.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-amber-500/20 hover:from-white/[0.02] transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-amber-500/80" />
                        <h4 className="font-sans text-lg font-semibold text-white">{weakness.title}</h4>
                      </div>
                      <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                        {weakness.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Growth Tab */}
            {activeTab === "growth" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Main Text */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-accent" />
                    <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Growth Strategy</h3>
                  </div>
                  <h4 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-white leading-snug">
                    Balancing natural leadership strengths with active emotional intelligence.
                  </h4>
                  <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
                    <p>
                      My journey of personal growth centers around balancing my natural strengths with developing new skills that may not come as easily to me. One of my primary challenges is developing emotional intelligence – learning to recognize and respond to the feelings of others, as well as understanding and managing my own emotions. This involves cultivating empathy and patience, which can sometimes feel at odds with my efficiency-driven nature.
                    </p>
                    <p>
                      Another key area for my personal development is learning to embrace flexibility and delegate control. While my confidence and decisiveness are valuable assets, they can sometimes lead to rigidity or an inability to trust others with important tasks. By working on these aspects, I can become an even more effective leader and a more well-rounded individual, capable of balancing both the professional and personal spheres with greater ease and satisfaction.
                    </p>
                  </div>
                </div>

                {/* Sidebar checklist */}
                <div className="lg:col-span-4 p-8 border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent space-y-6">
                  <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Focus Objectives
                  </h4>
                  <ul className="space-y-4 font-mono text-xs text-zinc-300 leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Cultivate active listening and empathy in team settings</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Delegate key responsibilities to foster team growth</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Allow buffer time for personal reflection and downtime</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span>Embrace uncertainty and exploratory project phases</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
