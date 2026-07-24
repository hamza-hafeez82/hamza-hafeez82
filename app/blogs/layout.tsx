import type { Metadata } from "next"
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo"
import { pageSeo } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = buildMetadata({
  ...pageSeo.blogs,
  type: "article",
  keywords: ["Hamza Hafeez blog", "Hamza Hafeez writings", "AI systems essays"],
})

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Writings", path: "/blogs" },
        ])}
      />
      {children}
    </>
  )
}
