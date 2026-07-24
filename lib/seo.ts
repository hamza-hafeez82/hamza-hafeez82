import type { Metadata } from "next"
import { absoluteUrl, siteConfig } from "@/lib/site"

type PageSeoInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: "website" | "profile" | "article"
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path)
  const ogImage = absoluteUrl(siteConfig.ogImage)

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
    creator: siteConfig.fullName,
    publisher: siteConfig.fullName,
    category: "technology",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Software and AI Systems Engineer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.fullName,
    alternateName: [siteConfig.name, "hmza-hb", "Hamza Hafeez Bhatti"],
    url: siteConfig.url,
    image: absoluteUrl("/assets/images/10.jpeg"),
    email: siteConfig.email,
    jobTitle: "Software and AI Systems Engineer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    nationality: "Pakistani",
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Multi-agent AI systems",
      "Backend engineering",
      "Application security",
      "Trustworthy AI agents",
      "Distributed systems",
      "Software architecture",
      "Founding engineering",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National University of Modern Languages",
    },
    founder: [
      { "@type": "Organization", name: "Histeeria", url: "https://www.histeeria.com" },
      { "@type": "Organization", name: "Cortex EDR", url: "https://www.cortex-edr.com" },
      { "@type": "Organization", name: "Upvista Digital", url: "https://www.upvistadigital.com" },
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#person") },
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/blogs")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/#profile"),
    url: siteConfig.url,
    name: siteConfig.title,
    dateCreated: "2025-01-01",
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: { "@id": absoluteUrl("/#person") },
    about: { "@id": absoluteUrl("/#person") },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished = "2025-01-01",
}: {
  title: string
  description: string
  path: string
  datePublished?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(siteConfig.ogImage),
    datePublished,
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@id": absoluteUrl("/#person") },
    publisher: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en",
  }
}

export function itemListJsonLd({
  name,
  path,
  items,
}: {
  name: string
  path: string
  items: { name: string; url?: string; description?: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  }
}

export function scholarlyArticleJsonLd(paper: {
  title: string
  abstract: string
  year: string | number
  pdfUrl?: string | null
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    name: paper.title,
    abstract: paper.abstract,
    datePublished: String(paper.year),
    author: { "@id": absoluteUrl("/#person") },
    keywords: paper.keywords?.join(", "),
    url: absoluteUrl("/researches"),
    ...(paper.pdfUrl
      ? { encoding: { "@type": "MediaObject", contentUrl: absoluteUrl(paper.pdfUrl) } }
      : {}),
  }
}
