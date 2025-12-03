import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { IncentivesHero } from "@/components/commercial/incentives-hero"
import { IncentivesSection } from "@/components/commercial/incentives-section"
import { ContactSection } from "@/components/residential/contact-section"

export default function CommercialIncentivesPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <IncentivesHero />
      <IncentivesSection />
      <ContactSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



