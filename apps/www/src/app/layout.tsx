import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Vaul Base",
  description: "An unstyled drawer component for React, built with Base UI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="Root" data-vaul-drawer-wrapper="">
          <div className="container mx-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}
