export type BlogStatus = "published" | "draft"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  date: string
  dateLabel: string
  readTime: string
  status: BlogStatus
  featured?: boolean
}

/**
 * Writings / blog posts.
 * Add new published posts here. Newest first.
 * Leave empty until the first essay is ready.
 */
export const blogPosts: BlogPost[] = []

export const blogCategories = [
  "All",
  "Systems",
  "AI",
  "Security",
  "Building",
  "Notes",
]

export const writingThemes = [
  "Agent trust and runtime evaluation",
  "Building products from Lahore",
  "Security for AI-written code",
  "Multi-agent architecture",
  "Founder engineering notes",
]

export function getPublishedPosts(posts: BlogPost[] = blogPosts) {
  return posts.filter((post) => post.status === "published")
}
