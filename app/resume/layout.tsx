import type { Metadata } from "next"
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo"
import { absoluteUrl, pageSeo } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = buildMetadata({
  ...pageSeo.resume,
  type: "profile",
  keywords: ["Hamza Hafeez resume", "Hamza Hafeez CV", "AI systems engineer resume"],
})

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resume", path: "/resume" },
          ]),
          {
            ...personJsonLd(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": absoluteUrl("/resume"),
            },
          },
        ]}
      />
      {children}
    </>
  )
}
