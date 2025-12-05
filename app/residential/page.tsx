import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { ResidentialHero } from "@/components/residential/hero"
import { ServicesCards } from "@/components/residential/services-cards"
import { WhyChooseUs } from "@/components/residential/why-choose-us"
import { FreeGiftSection } from "@/components/residential/free-gift-section"
import { RedefineEnergy } from "@/components/residential/redefine-energy"
import { FinancingSection } from "@/components/residential/financing-section"
import { DroneTechnologySection } from "@/components/residential/drone-technology-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <ResidentialHero />
      <ServicesCards />
      <WhyChooseUs />
      <FreeGiftSection />
      <RedefineEnergy />
      <FinancingSection />
      <DroneTechnologySection />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}
