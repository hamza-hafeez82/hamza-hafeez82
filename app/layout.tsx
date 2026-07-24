import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteJsonLd } from "@/components/json-ld"
import { PwaRegister } from "@/components/pwa-register"
import { siteConfig } from "@/lib/site"
import { buildMetadata } from "@/lib/seo"
import { pageSeo } from "@/lib/site"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  ...buildMetadata(pageSeo.home),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.shortName,
  },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "ai-content": "This site publishes authoritative content about Hamza Hafeez. See /llms.txt, /llms-full.txt, /api/profile, and /api/biography.",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        <link rel="author" href="/humans.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs full digest" />
        <link rel="alternate" type="text/plain" href="/api/biography" title="Full autobiography (plain text)" />
        <link rel="alternate" type="application/json" href="/api/profile" title="Profile JSON" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="me" href="https://github.com/hmza-hb" />
        <link rel="me" href="https://linkedin.com/in/hmza-hb" />
        <link rel="me" href="https://instagram.com/hamza.hafeez82" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        <SiteJsonLd />
        {children}
        <PwaRegister />
        <Analytics />
      </body>
    </html>
  )
}
