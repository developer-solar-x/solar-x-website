import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { HvacHero } from "@/components/residential/hvac/hero"
import { ProvincesSection } from "@/components/residential/hvac/provinces-section"
import { HeatingCoolingSection } from "@/components/residential/hvac/heating-cooling-section"
import { WateringSolutionsSection } from "@/components/residential/hvac/watering-solutions-section"
import { SmartHomeSolutionsSection } from "@/components/residential/hvac/smart-home-solutions-section"
import { HvacFaqsSection } from "@/components/residential/hvac/faqs-section"
import { HvacContactSection } from "@/components/residential/hvac/contact-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function HvacPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <HvacHero />
      <ProvincesSection />
      <HeatingCoolingSection />
      <WateringSolutionsSection />
      <SmartHomeSolutionsSection />
      <HvacFaqsSection />
      <HvacContactSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



