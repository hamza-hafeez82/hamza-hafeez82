import { personJsonLd, profilePageJsonLd, websiteJsonLd } from "@/lib/seo"

export function SiteJsonLd() {
  const graph = [personJsonLd(), websiteJsonLd(), profilePageJsonLd()]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
