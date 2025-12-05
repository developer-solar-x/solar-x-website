"use client"

import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import dynamicImport from "next/dynamic"

const LiveProductionMap = dynamicImport(
  () => import("@/components/live-production-map").then((mod) => ({ default: mod.LiveProductionMap })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="text-muted-foreground mb-2">Loading map...</div>
          <div className="text-muted-foreground/60 text-xs">Please wait while we load the interactive map</div>
        </div>
      </div>
    ),
  }
)

export default function LiveDataPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <LiveProductionMap />
      <Footer />
    </main>
  )
}

