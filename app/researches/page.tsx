"use client"

import { useMemo, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AnimatePresence, motion } from "framer-motion"
import {
  Check, Copy, Download, ExternalLink, Github, Mail, Quote, Search, X,
} from "lucide-react"
import {
  getCitationMetrics,
  papers,
  researchProfile,
  type ResearchPaper,
} from "@/lib/research-data"

type SortKey = "year" | "citations" | "title"

function PaperRow({
  paper,
  onCite,
}: {
  paper: ResearchPaper
  onCite: (paper: ResearchPaper) => void
}) {
  const [open, setOpen] = useState(false)
  const primaryHref = paper.pdfUrl || paper.githubUrl || undefined

  return (
    <li className="gs-row">
      <div className="gs-row-main">
        <h3 className="gs-paper-title">
          {primaryHref ? (
            <a href={primaryHref} target="_blank" rel="noopener noreferrer" data-cursor-hover>
              {paper.title}
            </a>
          ) : (
            <span>{paper.title}</span>
          )}
        </h3>

        <p className="gs-paper-authors">{paper.authors.join(", ")}</p>

        <p className="gs-paper-venue">
          {paper.venue}
          <span className="gs-dot">·</span>
          {paper.dateLabel}
          {paper.status === "in-progress" && (
            <>
              <span className="gs-dot">·</span>
              <span className="gs-status">In progress</span>
            </>
          )}
        </p>

        <div className="gs-paper-actions">
          {paper.pdfUrl && (
            <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover>
              <Download size={13} /> PDF
            </a>
          )}
          {paper.githubUrl && (
            <a href={paper.githubUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover>
              <Github size={13} /> Source
            </a>
          )}
          <button type="button" onClick={() => onCite(paper)}>
            <Quote size={13} /> Cite
          </button>
          <button type="button" onClick={() => setOpen((v) => !v)}>
            {open ? "Hide abstract" : "Abstract"}
          </button>
          {typeof paper.pages === "number" && <span className="gs-meta-chip">{paper.pages} pages</span>}
          {typeof paper.reviews === "number" && (
            <span className="gs-meta-chip">{paper.reviews} reviews</span>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="gs-abstract"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
            >
              <p>{paper.abstract}</p>
              <div className="gs-tags">
                {paper.subjects.map((s) => (
                  <span key={s}>{s}</span>
                ))}
                {paper.keywords.slice(0, 4).map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="gs-cited">
        <span className="gs-cited-label">Cited by</span>
        <span className="gs-cited-num">{paper.citations}</span>
      </div>
    </li>
  )
}

export default function Researches() {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("year")
  const [citePaper, setCitePaper] = useState<ResearchPaper | null>(null)
  const [copied, setCopied] = useState(false)

  const metrics = useMemo(() => getCitationMetrics(papers), [])

  const sorted = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = papers.filter((paper) => {
      if (!q) return true
      return [paper.title, paper.authors.join(" "), paper.venue, paper.abstract, paper.keywords.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    })

    return [...list].sort((a, b) => {
      if (sort === "citations") return b.citations - a.citations || b.year - a.year
      if (sort === "title") return a.title.localeCompare(b.title)
      return b.year - a.year || a.title.localeCompare(b.title)
    })
  }, [query, sort])

  const copyCite = async () => {
    if (!citePaper) return
    await navigator.clipboard.writeText(citePaper.bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="gs-page min-h-screen">
        <Navbar />

        <main className="gs-main">
          {/* Profile header */}
          <header className="gs-profile">
            <div className="gs-profile-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={researchProfile.photo}
                alt={researchProfile.name}
                className="gs-avatar"
              />
              <div>
                <p className="gs-kicker">Research profile</p>
                <h1>{researchProfile.name}</h1>
                <p className="gs-affil">{researchProfile.affiliation}</p>
                <p className="gs-affil">{researchProfile.location}</p>
                <div className="gs-profile-links">
                  <a href={`mailto:${researchProfile.email}`}>
                    <Mail size={13} /> {researchProfile.email}
                  </a>
                  <a href={researchProfile.homepage} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={13} /> Homepage
                  </a>
                </div>
              </div>
            </div>

            <div className="gs-metrics">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>All</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Citations</td>
                    <td>{metrics.citations}</td>
                  </tr>
                  <tr>
                    <td>h-index</td>
                    <td>{metrics.hIndex}</td>
                  </tr>
                  <tr>
                    <td>i10-index</td>
                    <td>{metrics.i10Index}</td>
                  </tr>
                  <tr>
                    <td>Articles</td>
                    <td>{metrics.articles}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>

          <div className="gs-layout">
            {/* Interests sidebar */}
            <aside className="gs-aside">
              <h2>Interests</h2>
              <ul className="gs-interests">
                {researchProfile.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>

              <h2 className="mt-8">About this list</h2>
              <p className="gs-aside-note">
                This is my research profile. Two papers are listed for now. More will be added
                here as they are finished and released.
              </p>
            </aside>

            {/* Articles list */}
            <section className="gs-articles">
              <div className="gs-articles-head">
                <h2>Articles</h2>
                <div className="gs-controls">
                  <label className="gs-search">
                    <Search size={14} />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search articles"
                      aria-label="Search articles"
                    />
                  </label>
                  <label className="gs-sort">
                    <span>Sort by</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as SortKey)}
                      aria-label="Sort articles"
                    >
                      <option value="year">Year</option>
                      <option value="citations">Citations</option>
                      <option value="title">Title</option>
                    </select>
                  </label>
                </div>
              </div>

              <p className="gs-count">
                {sorted.length} {sorted.length === 1 ? "article" : "articles"}
              </p>

              <ol className="gs-list">
                {sorted.map((paper) => (
                  <PaperRow key={paper.id} paper={paper} onCite={setCitePaper} />
                ))}
              </ol>

              {sorted.length === 0 && (
                <div className="gs-empty">
                  <p>No articles matched your search.</p>
                  <button type="button" onClick={() => setQuery("")}>
                    Clear search
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>

        <AnimatePresence>
          {citePaper && (
            <>
              <motion.div
                className="gs-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCitePaper(null)}
              />
              <motion.div
                className="gs-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cite-title"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
              >
                <div className="gs-modal-head">
                  <h3 id="cite-title">Cite</h3>
                  <button type="button" onClick={() => setCitePaper(null)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
                <p className="gs-modal-paper">{citePaper.title}</p>
                <pre>{citePaper.bibtex}</pre>
                <button type="button" className="gs-cite-copy" onClick={copyCite}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy BibTeX"}
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
