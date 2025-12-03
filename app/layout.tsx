import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "leaflet/dist/leaflet.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solar X Canada - Clean Energy Solutions",
  description:
    "Solar X Canada energizes a cleaner tomorrow. Take a 15-second survey to check your eligibility for solar or battery savings.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
