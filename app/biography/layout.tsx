import type { Metadata } from "next"
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo"
import { pageSeo } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import { biographyTitle, biographySubtitle } from "@/lib/biography-data"

export const metadata: Metadata = buildMetadata({
  ...pageSeo.biography,
  type: "article",
  keywords: ["Hamza Hafeez biography", "Hamza Hafeez story", "The Boy Who Built Things"],
})

export default function BiographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Biography", path: "/biography" },
          ]),
          articleJsonLd({
            title: `${biographyTitle}: ${biographySubtitle}`,
            description: pageSeo.biography.description,
            path: "/biography",
          }),
        ]}
      />
      {children}
    </>
  )
}
