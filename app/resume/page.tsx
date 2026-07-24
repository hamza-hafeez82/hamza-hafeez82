"use client"

import { useCallback, useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { useLenis } from "lenis/react"
import { ExternalLink, Mail, MapPin, Printer } from "lucide-react"
import {
  resumeEducation,
  resumeExperience,
  resumeHighlights,
  resumeNav,
  resumeProfile,
  resumeResearch,
  resumeSkills,
} from "@/lib/resume-data"

function ResumeDocument() {
  return (
    <article className="cv-sheet" id="cv-sheet">
      <header className="cv-header">
        <div>
          <h1>{resumeProfile.name}</h1>
          <p className="cv-title">{resumeProfile.title}</p>
          <p className="cv-location">
            <MapPin size={13} />
            {resumeProfile.location}
            <span className="cv-sep">·</span>
            {resumeProfile.availability}
          </p>
        </div>
        <ul className="cv-contact">
          <li>
            <a href={`mailto:${resumeProfile.email}`}>{resumeProfile.email}</a>
          </li>
          <li>
            <a href={resumeProfile.website} target="_blank" rel="noopener noreferrer">
              {resumeProfile.websiteLabel}
            </a>
          </li>
          <li>
            <a href={resumeProfile.github} target="_blank" rel="noopener noreferrer">
              {resumeProfile.githubLabel}
            </a>
          </li>
          <li>
            <a href={resumeProfile.linkedin} target="_blank" rel="noopener noreferrer">
              {resumeProfile.linkedinLabel}
            </a>
          </li>
        </ul>
      </header>

      <section id="summary" className="cv-section">
        <h2>Summary</h2>
        <p className="cv-summary">{resumeProfile.summary}</p>
      </section>

      <section id="focus" className="cv-section">
        <h2>Focus</h2>
        <div className="cv-focus">
          {resumeHighlights.map((item) => (
            <div key={item.label} className="cv-focus-item">
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="cv-section">
        <h2>Experience</h2>
        <div className="cv-jobs">
          {resumeExperience.map((job) => (
            <div key={job.id} className="cv-job" id={`job-${job.id}`}>
              <div className="cv-job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="cv-org">{job.org}</p>
                </div>
                <div className="cv-job-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </div>

              {job.stack && <p className="cv-stack">{job.stack}</p>}

              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {job.links && job.links.length > 0 && (
                <div className="cv-links">
                  {job.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="cv-section">
        <h2>Research</h2>
        <div className="cv-job">
          <div className="cv-job-head">
            <div>
              <h3>{resumeResearch.title}</h3>
              <p className="cv-org">{resumeResearch.note}</p>
            </div>
            <div className="cv-job-meta">
              <span>{resumeResearch.period}</span>
            </div>
          </div>
          <ul>
            {resumeResearch.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="cv-links">
            {resumeResearch.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
                <ExternalLink size={11} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="cv-section">
        <h2>Skills</h2>
        <div className="cv-skills">
          {resumeSkills.map((group) => (
            <div key={group.label} className="cv-skill-row">
              <h3>{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="cv-section">
        <h2>Education</h2>
        <div className="cv-job">
          <div className="cv-job-head">
            <div>
              <h3>{resumeEducation.degree}</h3>
              <p className="cv-org">{resumeEducation.school}</p>
              <p className="cv-edu-note">{resumeEducation.note}</p>
            </div>
            <div className="cv-job-meta">
              <span>{resumeEducation.period}</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

function ResumeReader() {
  const lenis = useLenis()
  const [active, setActive] = useState("summary")

  useEffect(() => {
    const ids = resumeNav.map((item) => item.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return
      if (lenis) lenis.scrollTo(el, { offset: -96, duration: 1 })
      else {
        const y = el.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    },
    [lenis]
  )

  const handlePdf = () => {
    window.print()
  }

  return (
    <div className="cv-page min-h-screen">
      <Navbar />

      <div className="cv-chrome print:hidden">
        <div className="cv-chrome-inner">
          <div>
            <p className="cv-kicker">Curriculum Vitae</p>
            <h1 className="cv-page-title">Resume</h1>
            <p className="cv-page-lede">
              Software and AI systems work across multi-agent platforms, secure backends,
              developer tooling, and production products. This page is the source of truth.
              Use Download PDF to print or save this CV.
            </p>
          </div>
          <div className="cv-actions">
            <button type="button" onClick={handlePdf} className="cv-btn cv-btn-primary" data-cursor-hover>
              <Printer size={15} />
              Download PDF
            </button>
            <a href={`mailto:${resumeProfile.email}`} className="cv-btn" data-cursor-hover>
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>
      </div>

      <main className="cv-layout">
        <aside className="cv-toc print:hidden" aria-label="Resume sections">
          <p className="cv-toc-label">On this page</p>
          <nav>
            {resumeNav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={active === item.id ? "is-active" : ""}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="cv-toc-note">
            <p>Save this CV</p>
            <button type="button" onClick={handlePdf}>
              Download PDF
            </button>
          </div>
        </aside>

        <div className="cv-stage">
          <ResumeDocument />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ResumeReader />
    </SmoothScroll>
  )
}
