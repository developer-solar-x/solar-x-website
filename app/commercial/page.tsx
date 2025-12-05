import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { CommercialHero } from "@/components/commercial/hero"
import { CommercialServicesCards } from "@/components/commercial/services-cards"
import { GoingGreenSection } from "@/components/commercial/going-green-section"
import { IncentivesSection } from "@/components/commercial/incentives-section"
import { ContactUsSection } from "@/components/contact-us-section"

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <CommercialHero />
      <CommercialServicesCards />
      <GoingGreenSection />
      <IncentivesSection />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

