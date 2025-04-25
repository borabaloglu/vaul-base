import { META_THEME_COLOR, siteConfig } from "@/config/site"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

import { Analytics } from "@/components/analytics"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["React", "Drawer", "Base UI", "Vaul", "Dialog"],
  authors: [{ name: "Bora Baloglu", url: "https://x.com/borabalogluu" }],
  creator: "Bora Baloglu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@borabalogluu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLOR,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vaul-base.vercel.app" />
        <meta name="theme-color" content={META_THEME_COLOR} />
      </head>
      <body className={`${geistSans.variable}`}>
        <main className="Root" data-vaul-drawer-wrapper="">
          <div className="container mx-auto">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
