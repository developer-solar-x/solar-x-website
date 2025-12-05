import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { OntarioHero } from "@/components/provinces/ontario/hero"
import { OntarioStatsSection } from "@/components/provinces/ontario/stats-section"
import { WhyOntarioSection } from "@/components/provinces/ontario/why-ontario"
import { OntarioVideoSection } from "@/components/provinces/ontario/video-section"

export default function OntarioPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <OntarioHero />
      <OntarioStatsSection />
      <WhyOntarioSection />
      <OntarioVideoSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

