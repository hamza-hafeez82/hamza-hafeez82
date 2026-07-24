import type { Metadata } from "next"
import { breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo"
import { pageSeo } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import { ventures } from "@/lib/ventures-data"
import { absoluteUrl } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  ...pageSeo.ventures,
  keywords: ["Hamza Hafeez ventures", "Histeeria", "Cortex EDR", "Upvista Digital", "Anya"],
})

export default function VenturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Ventures", path: "/ventures" },
          ]),
          itemListJsonLd({
            name: "Ventures founded by Hamza Hafeez",
            path: "/ventures",
            items: ventures.map((v) => ({
              name: `${v.name} — ${v.role}`,
              url: absoluteUrl("/ventures"),
              description: v.summary,
            })),
          }),
        ]}
      />
      {children}
    </>
  )
}
