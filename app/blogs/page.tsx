"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Clock, PenLine, Search } from "lucide-react"
import {
  blogCategories,
  blogPosts,
  getPublishedPosts,
  writingThemes,
  type BlogPost,
} from "@/lib/blogs-data"

function PostRow({ post }: { post: BlogPost }) {
  return (
    <li className="bg-row">
      <Link href={`/blogs/${post.slug}`} className="bg-row-link" data-cursor-hover>
        <div className="bg-row-meta">
          <span className="bg-category">{post.category}</span>
          <span className="bg-date">{post.dateLabel}</span>
          <span className="bg-read">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="bg-read-more">
          Read essay
          <ArrowRight size={14} />
        </span>
      </Link>
    </li>
  )
}

function EmptyState() {
  return (
    <div className="bg-empty">
      <div className="bg-empty-icon">
        <PenLine size={22} />
      </div>
      <h2>No essays published yet</h2>
      <p>
        I am setting this page up as the home for my longer writings: systems notes,
        product lessons, AI research, and the messy middle of building in public.
        The first posts will land here soon.
      </p>

      <div className="bg-empty-themes">
        <p className="bg-empty-label">Likely topics</p>
        <ul>
          {writingThemes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      <a href="mailto:hmza.hb82@gmail.com" className="bg-empty-cta" data-cursor-hover>
        Suggest a topic
        <ArrowRight size={14} />
      </a>
    </div>
  )
}

export default function Blogs() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  const published = useMemo(() => getPublishedPosts(blogPosts), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return published.filter((post) => {
      if (category !== "All" && post.category !== category) return false
      if (!q) return true
      return [post.title, post.excerpt, post.category, post.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    })
  }, [published, query, category])

  const featured = filtered.find((post) => post.featured) || filtered[0]
  const rest = featured ? filtered.filter((post) => post.id !== featured.id) : []
  const hasPosts = published.length > 0

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="bg-page min-h-screen">
        <Navbar />

        <main className="bg-main">
          <header className="bg-hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="bg-kicker">Writings</p>
              <h1>Essays & notes</h1>
              <p className="bg-lede">
                Long-form writing on building AI systems, shipping products, and learning
                in public. This page is ready for a full archive. The first essays are still
                on the way.
              </p>
            </motion.div>

            <motion.div
              className="bg-stats"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <div>
                <strong>{published.length}</strong>
                <span>published</span>
              </div>
              <div>
                <strong>{blogCategories.length - 1}</strong>
                <span>topics</span>
              </div>
              <div>
                <strong>Soon</strong>
                <span>first essay</span>
              </div>
            </motion.div>
          </header>

          <div className="bg-shell">
            <aside className="bg-aside">
              <h2>Browse</h2>
              <div className="bg-cats">
                {blogCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={category === item ? "is-active" : ""}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <h2 className="bg-aside-gap">About</h2>
              <p className="bg-aside-note">
                These are my own words. Not growth posts. Notes from building Histeeria,
                Cortex, Anya, Upvista, and the research behind them.
              </p>
            </aside>

            <section className="bg-content">
              <div className="bg-toolbar">
                <label className="bg-search">
                  <Search size={15} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search writings"
                    aria-label="Search writings"
                    disabled={!hasPosts}
                  />
                </label>
                <p className="bg-count">
                  {hasPosts
                    ? `${filtered.length} ${filtered.length === 1 ? "essay" : "essays"}`
                    : "Archive ready"}
                </p>
              </div>

              {!hasPosts ? (
                <EmptyState />
              ) : (
                <>
                  {featured && (
                    <article className="bg-featured">
                      <div className="bg-featured-meta">
                        <span className="bg-category">{featured.category}</span>
                        <span className="bg-date">{featured.dateLabel}</span>
                        <span className="bg-read">
                          <Clock size={12} />
                          {featured.readTime}
                        </span>
                      </div>
                      <h2>
                        <Link href={`/blogs/${featured.slug}`} data-cursor-hover>
                          {featured.title}
                        </Link>
                      </h2>
                      <p>{featured.excerpt}</p>
                      <Link href={`/blogs/${featured.slug}`} className="bg-read-more" data-cursor-hover>
                        Read essay
                        <ArrowRight size={14} />
                      </Link>
                    </article>
                  )}

                  <ol className="bg-list">
                    {rest.map((post) => (
                      <PostRow key={post.id} post={post} />
                    ))}
                  </ol>

                  {filtered.length === 0 && (
                    <div className="bg-no-match">
                      <BookOpen size={18} />
                      <p>No writings matched that search.</p>
                      <button
                        type="button"
                        onClick={() => {
                          setQuery("")
                          setCategory("All")
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
