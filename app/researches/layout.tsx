import type { Metadata } from "next"
import {
  breadcrumbJsonLd,
  buildMetadata,
  itemListJsonLd,
  scholarlyArticleJsonLd,
} from "@/lib/seo"
import { pageSeo } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import { papers } from "@/lib/research-data"

export const metadata: Metadata = buildMetadata({
  ...pageSeo.researches,
  type: "article",
  keywords: ["Project Cortex", "Hamza Hafeez research", "multi-agent AI research", "AGI architecture"],
})

export default function ResearchesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Research", path: "/researches" },
          ]),
          itemListJsonLd({
            name: "Research by Hamza Hafeez",
            path: "/researches",
            items: papers.map((p) => ({
              name: p.title,
              description: p.abstract,
            })),
          }),
          ...papers.map((p) =>
            scholarlyArticleJsonLd({
              title: p.title,
              abstract: p.abstract,
              year: p.year,
              pdfUrl: p.pdfUrl,
              keywords: p.keywords,
            })
          ),
        ]}
      />
      {children}
    </>
  )
}
