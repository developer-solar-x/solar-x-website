import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { IncentivesHero } from "@/components/commercial/incentives-hero"
import { IncentivesSectionNew } from "@/components/commercial/incentives-section-new"
import { ContactUsSection } from "@/components/contact-us-section"

export default function CommercialIncentivesPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <IncentivesHero />
      <IncentivesSectionNew />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



