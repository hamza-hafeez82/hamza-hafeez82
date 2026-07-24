"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import { ventures, type Venture } from "@/lib/ventures-data"

function VentureLogo({ venture }: { venture: Venture }) {
  if (venture.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={venture.logo} alt={`${venture.name} logo`} className="vx-logo-img" />
    )
  }

  return (
    <div className="vx-logo-fallback" style={{ background: venture.logoColor }}>
      {venture.logoInitials}
    </div>
  )
}

function VentureItem({ venture, index, isLast }: { venture: Venture; index: number; isLast: boolean }) {
  return (
    <motion.article
      className="vx-item"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
    >
      <div className="vx-rail" aria-hidden>
        <div className="vx-logo-wrap">
          <VentureLogo venture={venture} />
        </div>
        {!isLast && <div className="vx-line" />}
      </div>

      <div className="vx-body">
        <div className="vx-head">
          <div>
            <h2>{venture.name}</h2>
            <p className="vx-role">{venture.role}</p>
            <p className="vx-company">{venture.companyLine}</p>
          </div>
          <div className="vx-meta">
            <span className={`vx-status is-${venture.status.toLowerCase()}`}>{venture.status}</span>
            <span className="vx-dates">
              {venture.start} to {venture.end}
            </span>
            <span className="vx-location">
              <MapPin size={12} />
              {venture.location}
            </span>
          </div>
        </div>

        <p className="vx-summary">{venture.summary}</p>

        <ul className="vx-bullets">
          {venture.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="vx-skills">
          {venture.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="vx-links">
          {venture.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-cursor-hover
            >
              {link.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Ventures() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="vx-page min-h-screen">
        <Navbar />

        <main className="vx-main">
          <header className="vx-hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="vx-kicker">Experience</p>
              <h1>Ventures & Builds</h1>
              <p className="vx-lede">
                All of my recent ventures excluding my jobs and freelance/agecy projects 
              </p>
            </motion.div>
          </header>

          <section className="vx-timeline" aria-label="Venture timeline">
            {ventures.map((venture, index) => (
              <VentureItem
                key={venture.id}
                venture={venture}
                index={index}
                isLast={index === ventures.length - 1}
              />
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
