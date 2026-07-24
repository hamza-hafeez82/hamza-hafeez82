"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "lenis/react"
import {
  BookOpen, Menu, X, Clock, Share2, Check, ArrowUp,
  ChevronRight, FileDown, Settings, Sun, Moon, Type,
} from "lucide-react"
import { chapters, biographyTitle, biographySubtitle } from "@/lib/biography-data"
import { chapterSideImages, galleryImages, heroPortrait, type BioImage } from "@/lib/biography-images"

const QUOTES: Record<number, string> = {
  1: "If life did not give you opportunities, you had to create them yourself.",
  2: "Not every child grows up surrounded by people who are genuinely happy just because they exist.",
  3: "She taught me to become better than who I was yesterday.",
  4: "Engineering was not about getting everything right the first time. It was about making mistakes, understanding them, and improving.",
  5: "I had never actually stopped learning. I had just stopped learning the things that showed up on a report card.",
  6: "Something in me broke along with it.",
  8: "She did not teach me my books. She made my mindset.",
  9: "Do not assume, do not follow blindly, and never stop looking for the truth.",
  10: "I was the only hope for my family.",
  11: "I did not stop, because stopping was not really an option with what my family was carrying.",
  12: "It felt the way rain feels to a farmer who had nearly given up on the season.",
  13: "Not because the satellite was bad. But because the rocket had no fuel, no launchpad, and no ignition.",
  16: "I have never once, in any version of my life, been able to leave a broken thing alone.",
}

type ThemeKey = "dark" | "light"
type FontSize = "md" | "lg" | "xl"
type FontFamily = "serif" | "sans"

function ChapterFigure({ image }: { image: BioImage }) {
  return (
    <figure className="bio-figure bio-figure-aside">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        className="bio-img"
        loading="lazy"
        decoding="async"
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

function PhotoGallery({ images }: { images: BioImage[] }) {
  return (
    <section className="bio-gallery" aria-labelledby="bio-gallery-heading">
      <header className="bio-gallery-head">
        <p className="bio-gallery-eyebrow">Archive</p>
        <h3 id="bio-gallery-heading">A few photographs</h3>
        
      </header>
      <div className="bio-gallery-wall">
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className={`bio-gallery-item bio-gallery-item-${(index % 5) + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className="bio-gallery-img"
              loading="lazy"
              decoding="async"
            />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}

function PreferencesPanel({
  theme,
  setTheme,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
}: {
  theme: ThemeKey
  setTheme: (t: ThemeKey) => void
  fontFamily: FontFamily
  setFontFamily: (f: FontFamily) => void
  fontSize: FontSize
  setFontSize: (s: FontSize) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <p className="bio-pref-label">Theme</p>
        <div className="bio-pref-row">
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`bio-pref-btn ${theme === "dark" ? "is-active" : ""}`}
          >
            <Moon size={14} /> Night
          </button>
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`bio-pref-btn ${theme === "light" ? "is-active" : ""}`}
          >
            <Sun size={14} /> Day
          </button>
        </div>
      </div>

      <div>
        <p className="bio-pref-label">Typeface</p>
        <div className="bio-pref-row">
          <button
            type="button"
            onClick={() => setFontFamily("serif")}
            className={`bio-pref-btn font-serif ${fontFamily === "serif" ? "is-active" : ""}`}
          >
            Serif
          </button>
          <button
            type="button"
            onClick={() => setFontFamily("sans")}
            className={`bio-pref-btn font-sans ${fontFamily === "sans" ? "is-active" : ""}`}
          >
            Sans
          </button>
        </div>
      </div>

      <div>
        <p className="bio-pref-label">Text size</p>
        <div className="bio-pref-row">
          {(["md", "lg", "xl"] as FontSize[]).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setFontSize(size)}
              className={`bio-pref-btn ${fontSize === size ? "is-active" : ""}`}
            >
              {size === "md" ? "A" : size === "lg" ? "A+" : "A++"}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function BiographyReader() {
  const lenis = useLenis()
  const [theme, setTheme] = useState<ThemeKey>("dark")
  const [fontSize, setFontSize] = useState<FontSize>("lg")
  const [fontFamily, setFontFamily] = useState<FontFamily>("serif")
  const [tocOpen, setTocOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState("chapter-1")
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const totalTime = useMemo(
    () => chapters.reduce((s, c) => s + c.estimatedReadingTime, 0),
    []
  )

  useEffect(() => {
    const stored = localStorage.getItem("bio-prefs")
    if (!stored) return
    try {
      const prefs = JSON.parse(stored) as {
        theme?: ThemeKey
        fontSize?: FontSize
        fontFamily?: FontFamily
      }
      if (prefs.theme) setTheme(prefs.theme)
      if (prefs.fontSize) setFontSize(prefs.fontSize)
      if (prefs.fontFamily) setFontFamily(prefs.fontFamily)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("bio-prefs", JSON.stringify({ theme, fontSize, fontFamily }))
  }, [theme, fontSize, fontFamily])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveChapter(e.target.id)),
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )
    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return
      if (lenis) {
        lenis.scrollTo(el, { offset: -88, duration: 1.15 })
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({ top: y, behavior: "smooth" })
      }
      setTocOpen(false)
    },
    [lenis]
  )

  const scrollTop = useCallback(() => {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 })
    else window.scrollTo({ top: 0, behavior: "smooth" })
  }, [lenis])

  const share = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const activeIdx = chapters.findIndex((c) => c.id === activeChapter)

  const renderChapterContent = (chapterNumber: number, paragraphs: string[]) => {
    const sideImage = chapterSideImages[chapterNumber]

    return (
      <>
        {sideImage && <ChapterFigure image={sideImage} />}
        {paragraphs.map((para, i) => (
          <p key={i} className="bio-paragraph">
            {i === 0 ? (
              <>
                <span className="bio-dropcap">{para.charAt(0)}</span>
                {para.slice(1)}
              </>
            ) : (
              para
            )}
          </p>
        ))}
      </>
    )
  }

  const prefsProps = {
    theme,
    setTheme,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
  }

  return (
    <div className={`bio-page bio-theme-${theme} bio-font-${fontFamily} bio-size-${fontSize} min-h-screen`}>
      <div className="bio-progress" aria-hidden>
        <div className="bio-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <Navbar />

      <header className="bio-hero">
        <div className="bio-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bio-hero-copy"
          >
            <p className="bio-eyebrow">Memoir · 16 chapters · about {totalTime} minutes</p>
            <h1>{biographyTitle}</h1>
            <p className="bio-hero-meta">
              {biographySubtitle} by Hamza Hafeez · Lahore, Pakistan
            </p>
            <p className="bio-hero-lede">
              I wrote this in my own words. It is the story of how I grew up in Lahore,
              how I learned to build things with my hands, and how that habit eventually
              turned into the work I do with software and AI today.
            </p>
            <div className="bio-hero-actions">
              <button type="button" onClick={() => scrollTo("chapter-1")} className="bio-btn-primary" data-cursor-hover>
                Start reading
                <ChevronRight size={15} />
              </button>
              <a href="/The Boy Who Built Things.pdf" download className="bio-btn-secondary" data-cursor-hover>
                <FileDown size={14} />
                Download PDF
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bio-hero-portrait"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroPortrait} alt="Hamza Hafeez" className="bio-img" />
            <figcaption>Hamza Hafeez</figcaption>
          </motion.figure>
        </div>
      </header>

      <div className="bio-shell">
        <aside className="bio-sidebar bio-sidebar-left" aria-label="Chapters">
          <div className="bio-sidebar-sticky">
            <div className="bio-sidebar-card">
              <div className="bio-sidebar-head">
                <span>On this page</span>
                <span className="bio-progress-label">{Math.round(progress)}%</span>
              </div>
              <div className="bio-sidebar-progress">
                <div style={{ width: `${progress}%` }} />
              </div>
              <nav className="bio-toc">
                {chapters.map((ch, idx) => {
                  const isActive = ch.id === activeChapter
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => scrollTo(ch.id)}
                      className={`bio-toc-item ${isActive ? "is-active" : ""} ${idx < activeIdx ? "is-done" : ""}`}
                    >
                      <span className="bio-toc-num">{ch.number}</span>
                      <span className="bio-toc-title">{ch.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
        </aside>

        <main className="bio-main">
          <div className="bio-note">
            <BookOpen size={18} className="bio-note-icon" />
            <div>
              <p className="bio-note-label">A note from me</p>
              <p>
                I am telling this story the way I would tell it to a friend. Use the chapter list
                on the left to jump around. On a phone, open the menu button. You can also change
                the theme, typeface, and text size from reading preferences.
              </p>
            </div>
          </div>

          <div className="bio-prose">
            {chapters.map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="bio-chapter">
                <header className="bio-chapter-head">
                  <div className="bio-chapter-meta">
                    <span>Chapter {chapter.number}</span>
                    <span className="bio-chapter-time">
                      <Clock size={11} />
                      {chapter.estimatedReadingTime} min
                    </span>
                  </div>
                  <h2>{chapter.title}</h2>
                </header>

                <div className="bio-chapter-body">
                  {renderChapterContent(chapter.number, chapter.paragraphs)}
                </div>

                {QUOTES[chapter.number] && (
                  <blockquote className="bio-pullquote">
                    <p>{QUOTES[chapter.number]}</p>
                  </blockquote>
                )}

                {chapter.number < chapters.length && (
                  <div className="bio-chapter-footer">
                    <button
                      type="button"
                      onClick={() => scrollTo(`chapter-${chapter.number + 1}`)}
                      className="bio-next"
                      data-cursor-hover
                    >
                      Next: Chapter {chapter.number + 1}
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>

          <PhotoGallery images={galleryImages} />

          <section className="bio-end">
            <h3>I am still mid-build.</h3>
            <p>
              This story is still being written by someone who has never known how to leave
              a draft unfinished.
            </p>
            <div className="bio-end-actions">
              <button type="button" onClick={scrollTop} className="bio-btn-secondary">
                Back to top
              </button>
              <button type="button" onClick={share} className="bio-btn-primary" data-cursor-hover>
                {copied ? "Link copied" : "Share this memoir"}
              </button>
            </div>
          </section>
        </main>

        <aside className="bio-sidebar bio-sidebar-right" aria-label="Reading preferences">
          <div className="bio-sidebar-sticky">
            <div className="bio-sidebar-card">
              <div className="bio-sidebar-head">
                <span className="inline-flex items-center gap-1.5">
                  <Type size={12} /> Preferences
                </span>
              </div>
              <PreferencesPanel {...prefsProps} />
            </div>
          </div>
        </aside>
      </div>

      <div className="bio-mobile-bar lg:hidden">
        <button type="button" onClick={() => setTocOpen(true)} aria-label="Open chapters">
          <Menu size={18} />
        </button>
        <button type="button" onClick={() => setSettingsOpen(true)} aria-label="Reading preferences">
          <Settings size={17} />
        </button>
        {scrolled && (
          <button type="button" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp size={17} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {tocOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bio-drawer-backdrop lg:hidden"
              onClick={() => setTocOpen(false)}
            />
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="bio-drawer lg:hidden"
            >
              <div className="bio-drawer-head">
                <span>
                  <BookOpen size={16} /> Chapters
                </span>
                <button type="button" onClick={() => setTocOpen(false)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              <div className="bio-drawer-body">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollTo(ch.id)}
                    className={`bio-drawer-item ${ch.id === activeChapter ? "is-active" : ""}`}
                  >
                    <span>Chapter {ch.number}</span>
                    <strong>{ch.title}</strong>
                    <em>{ch.estimatedReadingTime} min</em>
                  </button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bio-drawer-backdrop lg:hidden"
              onClick={() => setSettingsOpen(false)}
            />
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="bio-drawer bio-drawer-settings lg:hidden"
            >
              <div className="bio-drawer-head">
                <span>
                  <Settings size={16} /> Reading preferences
                </span>
                <button type="button" onClick={() => setSettingsOpen(false)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              <div className="bio-drawer-body p-5">
                <PreferencesPanel {...prefsProps} />
                <button
                  type="button"
                  onClick={share}
                  className="bio-btn-secondary w-full mt-6 justify-center"
                >
                  {copied ? <Check size={14} /> : <Share2 size={14} />}
                  {copied ? "Link copied" : "Share memoir"}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default function Biography() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <BiographyReader />
    </SmoothScroll>
  )
}
