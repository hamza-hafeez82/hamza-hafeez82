"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ArrowLeft, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blogs-data"

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const post = blogPosts.find((item) => item.slug === slug && item.status === "published")

  if (!post) notFound()

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="bg-page min-h-screen">
        <Navbar />
        <main className="bg-article">
          <Link href="/blogs" className="bg-back" data-cursor-hover>
            <ArrowLeft size={14} />
            All writings
          </Link>

          <header>
            <div className="bg-featured-meta">
              <span className="bg-category">{post.category}</span>
              <span className="bg-date">{post.dateLabel}</span>
              <span className="bg-read">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <h1>{post.title}</h1>
            <p className="bg-article-excerpt">{post.excerpt}</p>
          </header>

          <div className="bg-article-body">
            <p>
              Full essay content will live here. For now this route is ready: add a published
              post in <code>lib/blogs-data.ts</code> and expand this page with the body text
              when you write the first one.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
