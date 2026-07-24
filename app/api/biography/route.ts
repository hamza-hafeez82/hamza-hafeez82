import { NextResponse } from "next/server"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { biographySubtitle, biographyTitle, chapters } from "@/lib/biography-data"

export const dynamic = "force-static"

export async function GET() {
  const body = [
    `# ${biographyTitle}`,
    biographySubtitle,
    `Author: ${siteConfig.fullName}`,
    `Canonical: ${absoluteUrl("/biography")}`,
    `Machine profile: ${absoluteUrl("/api/profile")}`,
    "",
    "This plain-text export exists so search engines and AI assistants can read the full autobiography without rendering the interactive page.",
    "",
    ...chapters.flatMap((chapter) => [
      `## Chapter ${chapter.number}: ${chapter.title}`,
      "",
      ...chapter.paragraphs,
      "",
    ]),
  ].join("\n")

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  })
}
