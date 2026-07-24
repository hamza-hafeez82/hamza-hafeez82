import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"
import { blogPosts } from "@/lib/blogs-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/biography"), lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: absoluteUrl("/ventures"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/researches"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blogs"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/resume"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/llms.txt"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/llms-full.txt"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/api/profile"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/api/biography"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      url: absoluteUrl(`/blogs/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...blogRoutes]
}
