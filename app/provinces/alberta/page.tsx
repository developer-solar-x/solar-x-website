import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { AlbertaHero } from "@/components/provinces/alberta/hero"
import { AlbertaStatsSection } from "@/components/provinces/alberta/stats-section"
import { SupportSection } from "@/components/provinces/alberta/support-section"
import { SunlineSection } from "@/components/provinces/alberta/sunline-section"
import { SolarInstallationsSection } from "@/components/provinces/alberta/solar-installations"
import { AlbertaSavingsCalculator } from "@/components/provinces/alberta/savings-calculator"
import { WhyAlbertaSection } from "@/components/provinces/alberta/why-alberta"

export default function AlbertaPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <AlbertaHero />
      <AlbertaStatsSection />
      <SupportSection />
      <SunlineSection />
      <SolarInstallationsSection />
      <AlbertaSavingsCalculator />
      <WhyAlbertaSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



