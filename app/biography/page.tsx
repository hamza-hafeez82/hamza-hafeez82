"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  BookOpen, Settings, Menu, X, Clock, Share2, Check,
  ArrowUp, BookmarkCheck, Bookmark, ChevronRight, FileDown,
  Sun, Moon, Coffee, Feather
} from "lucide-react"
import { chapters, biographyTitle, biographySubtitle } from "@/lib/biography-data"

// ─── Theme definitions ────────────────────────────────────────────────────────
type ThemeKey = "dark" | "sepia" | "light"
const THEMES: Record<ThemeKey, { name: string; bg: string; fg: string; muted: string; accent: string; border: string; surface: string }> = {
  dark:  { name: "Night",  bg: "#0a0a0a", fg: "#e2e2e2", muted: "#6b6b6b", accent: "#f59e0b", border: "#222", surface: "#111" },
  sepia: { name: "Sepia",  bg: "#f5eedc", fg: "#2a1f0e", muted: "#8a7560", accent: "#9a4f0e", border: "#ddd0b3", surface: "#ede5cc" },
  light: { name: "Light",  bg: "#fefefe", fg: "#111111", muted: "#666",    accent: "#2563eb", border: "#e5e5e5", surface: "#f4f4f5" },
}

// ─── Pull quotes per chapter ──────────────────────────────────────────────────
const QUOTES: Record<number, string> = {
  1:  "If life did not give you opportunities, you had to create them yourself.",
  2:  "Not every child grows up surrounded by people who are genuinely happy just because they exist.",
  3:  "She taught me to become better than who I was yesterday.",
  4:  "If I could not buy something, I would try to create it myself.",
  5:  "Engineering was not about getting everything right the first time. It was about making mistakes, understanding them, and improving.",
  6:  "I had never actually stopped learning — I'd just stopped learning the things that showed up on a report card.",
  7:  "Something in me broke along with it.",
  9:  "She didn't teach me my books. She made my mindset.",
  10: "Don't assume, don't follow blindly, and never stop looking for the truth.",
  11: "I was the only hope for my family.",
  12: "I didn't stop, because stopping wasn't really an option with what my family was carrying.",
  13: "It felt the way rain feels to a farmer who'd nearly given up on the season.",
  14: "Not because the satellite was bad. But because the rocket had no fuel, no launchpad, and no ignition.",
  17: "I have never once, in any version of my life, been able to leave a broken thing alone.",
}

export default function Biography() {
  const [theme, setTheme] = useState<ThemeKey>("dark")
  const [fontSize, setFontSize] = useState<"md" | "lg" | "xl">("lg")
  const [fontFamily, setFontFamily] = useState<"serif" | "sans">("serif")
  const [tocOpen, setTocOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState("chapter-1")
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const settingsRef = useRef<HTMLDivElement>(null)
  const t = THEMES[theme]

  const fontSizeClass = {
    md: "text-[18px] md:text-[19px] leading-[1.85]",
    lg: "text-[20px] md:text-[22px] leading-[1.9]",
    xl: "text-[23px] md:text-[25px] leading-[2.0]",
  }[fontSize]

  const fontClass = fontFamily === "serif" ? "font-serif" : "font-sans"

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Intersection observer for chapter highlighting
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveChapter(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    )
    chapters.forEach(ch => { const el = document.getElementById(ch.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  // Close settings on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) setSettingsOpen(false)
    }
    document.addEventListener("mousedown", fn)
    return () => document.removeEventListener("mousedown", fn)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 110
    window.scrollTo({ top: y, behavior: "smooth" })
    setTocOpen(false)
  }, [])

  const share = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const activeIdx = chapters.findIndex(c => c.id === activeChapter)
  const totalTime = chapters.reduce((s, c) => s + c.estimatedReadingTime, 0)

  return (
    <SmoothScroll>
      <CustomCursor />

      {/* ── Global page wrapper ─────────────────────────── */}
      <div
        style={{ backgroundColor: t.bg, color: t.fg, "--accent": t.accent } as React.CSSProperties}
        className="min-h-screen transition-colors duration-500"
      >
        {/* ── Slim progress bar pinned to very top ─────── */}
        <div className="fixed top-0 left-0 right-0 z-[100] h-0.5" style={{ backgroundColor: `${t.border}` }}>
          <div
            className="h-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%`, backgroundColor: t.accent }}
          />
        </div>

        <Navbar />

        {/* ── Floating reading toolbar (right side) ────── */}
        <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
          {/* TOC toggle */}
          <button
            onClick={() => setTocOpen(true)}
            title="Table of Contents"
            className="w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-all hover:scale-110 active:scale-95"
            style={{ backgroundColor: t.surface, borderColor: t.border }}
          >
            <Menu size={16} />
          </button>

          {/* Settings */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setSettingsOpen(s => !s)}
              title="Reading settings"
              className="w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-all hover:scale-110 active:scale-95"
              style={{ backgroundColor: t.surface, borderColor: t.border }}
            >
              <Settings size={15} />
            </button>

            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-12 top-0 w-64 rounded-2xl border shadow-2xl p-5 space-y-5"
                  style={{ backgroundColor: t.surface, borderColor: t.border }}
                >
                  <h4 className="font-mono text-[11px] uppercase tracking-widest font-bold" style={{ color: t.muted }}>Reading Preferences</h4>

                  {/* Theme */}
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: t.muted }}>Theme</p>
                    <div className="flex gap-2">
                      {(["dark","sepia","light"] as ThemeKey[]).map(k => (
                        <button key={k} onClick={() => setTheme(k)}
                          className="flex-1 py-2 rounded-lg border text-xs font-mono transition-all flex flex-col items-center gap-1"
                          style={{
                            borderColor: theme === k ? t.accent : t.border,
                            backgroundColor: theme === k ? `${t.accent}15` : "transparent",
                            color: theme === k ? t.accent : t.fg,
                          }}>
                          {k === "dark" ? <Moon size={13}/> : k === "sepia" ? <Coffee size={13}/> : <Sun size={13}/>}
                          <span>{THEMES[k].name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font family */}
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: t.muted }}>Typeface</p>
                    <div className="flex gap-2">
                      {(["serif","sans"] as const).map(f => (
                        <button key={f} onClick={() => setFontFamily(f)}
                          className={`flex-1 py-2 rounded-lg border text-sm transition-all ${f === "serif" ? "font-serif" : "font-sans"}`}
                          style={{
                            borderColor: fontFamily === f ? t.accent : t.border,
                            backgroundColor: fontFamily === f ? `${t.accent}15` : "transparent",
                            color: fontFamily === f ? t.accent : t.fg,
                          }}>
                          {f === "serif" ? "Serif" : "Sans"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font size */}
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: t.muted }}>Text Size</p>
                    <div className="flex gap-2">
                      {(["md","lg","xl"] as const).map(s => (
                        <button key={s} onClick={() => setFontSize(s)}
                          className="flex-1 py-2 rounded-lg border font-mono text-xs transition-all"
                          style={{
                            borderColor: fontSize === s ? t.accent : t.border,
                            backgroundColor: fontSize === s ? `${t.accent}15` : "transparent",
                            color: fontSize === s ? t.accent : t.fg,
                          }}>
                          {s.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Share */}
          <button onClick={share} title="Copy link"
            className="w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-all hover:scale-110 active:scale-95"
            style={{ backgroundColor: t.surface, borderColor: t.border }}>
            {copied ? <Check size={15} className="text-green-500" /> : <Share2 size={15} />}
          </button>

          {/* Back to top */}
          <AnimatePresence>
            {scrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                title="Back to top"
                className="w-10 h-10 rounded-full flex items-center justify-center border shadow-lg transition-all hover:scale-110 active:scale-95"
                style={{ backgroundColor: t.surface, borderColor: t.border }}>
                <ArrowUp size={15} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* ── TOC Drawer ───────────────────────────────── */}
        <AnimatePresence>
          {tocOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setTocOpen(false)}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              />
              <motion.aside
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="fixed right-0 top-0 bottom-0 z-50 w-80 flex flex-col border-l shadow-2xl"
                style={{ backgroundColor: t.bg, borderColor: t.border }}
              >
                <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: t.border }}>
                  <div className="flex items-center gap-2">
                    <BookOpen size={17} style={{ color: t.accent }} />
                    <span className="font-mono text-sm font-bold tracking-widest uppercase">Contents</span>
                  </div>
                  <button onClick={() => setTocOpen(false)} className="p-1 rounded-full hover:opacity-70 transition">
                    <X size={18} />
                  </button>
                </div>

                {/* Progress summary */}
                <div className="px-6 py-4 border-b space-y-2" style={{ borderColor: t.border }}>
                  <div className="flex justify-between font-mono text-[11px]" style={{ color: t.muted }}>
                    <span>{Math.round(progress)}% complete</span>
                    <span>~{totalTime} min total</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ backgroundColor: `${t.border}` }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: t.accent }} />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-3">
                  {chapters.map((ch, idx) => {
                    const isActive = ch.id === activeChapter
                    const isDone = idx < activeIdx
                    return (
                      <button key={ch.id} onClick={() => scrollTo(ch.id)}
                        className="w-full text-left px-6 py-3.5 flex items-start gap-3 transition-all group"
                        style={{ backgroundColor: isActive ? `${t.accent}12` : "transparent" }}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          {isDone
                            ? <BookmarkCheck size={15} style={{ color: t.accent }} />
                            : isActive
                              ? <div className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: t.accent }}>
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.accent }} />
                                </div>
                              : <Bookmark size={15} style={{ color: t.muted }} />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-wider mb-0.5" style={{ color: t.muted }}>
                            Ch. {ch.number}
                          </p>
                          <p className={`text-sm leading-snug ${isActive ? "font-semibold" : "opacity-80 group-hover:opacity-100"}`}
                             style={{ color: isActive ? t.accent : t.fg }}>
                            {ch.title}
                          </p>
                        </div>
                        <span className="font-mono text-[10px] flex-shrink-0 mt-0.5" style={{ color: t.muted }}>
                          {ch.estimatedReadingTime}m
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ── MAIN READING AREA ────────────────────────── */}
        <main className="pt-24 pb-32">

          {/* Cover / Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto px-6 md:px-10 mb-16"
          >
            <div className="flex items-center gap-2 mb-6 font-mono text-xs tracking-[0.35em] uppercase" style={{ color: t.accent }}>
              <Feather size={13} />
              <span>A Memoir · 17 Chapters · {totalTime} min read</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-5">
              {biographyTitle}
            </h1>

            <p className="font-mono text-sm tracking-[0.15em] uppercase mb-10" style={{ color: t.muted }}>
              {biographySubtitle} by Hamza Hafeez · Lahore, Pakistan
            </p>

            {/* Hero image */}
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-10 border shadow-2xl"
                 style={{ borderColor: t.border }}>
              <Image src="/memoir_hero.png" alt="The Boy Who Built Things" fill priority
                     sizes="(max-width: 1280px) 100vw, 896px"
                     className="object-cover object-center hover:scale-[1.03] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <a href="/The Boy Who Built Things.pdf" download
                 className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold text-black transition-all hover:scale-105 shadow-lg"
                 style={{ backgroundColor: t.accent }}>
                <FileDown size={14} /> Download PDF
              </a>
            </div>

            {/* Reader intro note */}
            <div className="flex gap-5 p-6 rounded-2xl border" style={{ backgroundColor: t.surface, borderColor: t.border }}>
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${t.accent}20` }}>
                  <BookOpen size={16} style={{ color: t.accent }} />
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest font-bold mb-1.5" style={{ color: t.muted }}>A Reader's Note</p>
                <p className="text-base leading-relaxed" style={{ color: t.muted }}>
                  This is a raw autobiography — my story from the alleys of Lahore, Pakistan to building AI systems.
                  Use the <span style={{ color: t.fg }}>⚙</span> button on the right to adjust the theme, typeface, and text size.
                  The <span style={{ color: t.fg }}>☰</span> button opens the chapter index.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: t.border }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: t.muted }}>Begin Reading</span>
            <div className="flex-1 h-px" style={{ backgroundColor: t.border }} />
          </div>

          {/* ── Chapters ──────────────────────────────── */}
          <div className={`max-w-3xl mx-auto px-6 md:px-10 space-y-28 md:space-y-40 ${fontClass} ${fontSizeClass}`}>
            {chapters.map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="scroll-mt-28">

                {/* Chapter header */}
                <div className="mb-10 pb-6 border-b" style={{ borderColor: t.border }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold" style={{ color: t.accent }}>
                      Chapter {chapter.number}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]" style={{ color: t.muted }}>
                      <Clock size={11} /> {chapter.estimatedReadingTime} min
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                    {chapter.title}
                  </h2>
                </div>

                {/* Paragraphs */}
                <div className="space-y-7">
                  {chapter.paragraphs.map((para, i) => (
                    <p key={i}
                       style={{
                         textIndent: i > 0 && fontFamily === "serif" ? "2em" : "0",
                         color: t.fg,
                       }}>
                      {i === 0 ? (
                        <>
                          <span className="float-left font-serif leading-none mr-2 mt-1"
                                style={{ fontSize: "4.5em", lineHeight: "0.8", color: t.accent, fontWeight: 300 }}>
                            {para.charAt(0)}
                          </span>
                          {para.slice(1)}
                        </>
                      ) : para}
                    </p>
                  ))}
                </div>

                {/* Pull quote */}
                {QUOTES[chapter.number] && (
                  <div className="my-12 mx-0 md:-mx-6 px-8 md:px-12 py-8 border-l-[3px]"
                       style={{ borderColor: t.accent, backgroundColor: `${t.accent}08` }}>
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl italic font-light leading-relaxed"
                       style={{ color: t.fg }}>
                      "{QUOTES[chapter.number]}"
                    </p>
                  </div>
                )}

                {/* Next chapter nudge */}
                {chapter.number < chapters.length && (
                  <div className="mt-14 pt-8 border-t flex justify-end" style={{ borderColor: t.border }}>
                    <button onClick={() => scrollTo(`chapter-${chapter.number + 1}`)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border font-mono text-xs tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
                      style={{ borderColor: t.border, color: t.muted }}>
                      Continue to Chapter {chapter.number + 1}
                      <ChevronRight size={14} style={{ color: t.accent }} />
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* ── End card ─────────────────────────────── */}
          <div className="max-w-3xl mx-auto px-6 md:px-10 mt-28">
            <div className="rounded-3xl border p-10 md:p-14 text-center space-y-5"
                 style={{ backgroundColor: t.surface, borderColor: t.border }}>
              <div className="inline-flex p-4 rounded-full mb-2" style={{ backgroundColor: `${t.accent}15` }}>
                <BookOpen size={28} style={{ color: t.accent }} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-light">Still mid-build.</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto" style={{ color: t.muted }}>
                This story is still being written — by someone who has never known how to leave a draft unfinished.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="px-6 py-3 rounded-full border font-mono text-xs tracking-wider uppercase transition-all hover:scale-105"
                  style={{ borderColor: t.border }}>
                  Back to Top
                </button>
                <button onClick={share}
                  className="px-6 py-3 rounded-full font-mono text-xs tracking-wider uppercase font-bold transition-all hover:scale-105 shadow-lg"
                  style={{ backgroundColor: t.accent, color: theme === "dark" ? "#000" : "#fff" }}>
                  {copied ? "Link Copied!" : "Share This Memoir"}
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
