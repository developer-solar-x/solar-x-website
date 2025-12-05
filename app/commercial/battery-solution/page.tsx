import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { CommercialBatteryHero } from "@/components/commercial/battery-solutions/hero"
import { CommercialBatterySolutionsFAQ } from "@/components/commercial/battery-solutions-faq"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function CommercialBatterySolutionPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <CommercialBatteryHero />
      <div id="faqs">
        <CommercialBatterySolutionsFAQ />
      </div>
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



