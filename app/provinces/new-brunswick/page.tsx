import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { NewBrunswickHero } from "@/components/provinces/new-brunswick/hero"
import { NewBrunswickSavingsCalculator } from "@/components/provinces/new-brunswick/savings-calculator"
import { WhyNewBrunswickSection } from "@/components/provinces/new-brunswick/why-new-brunswick"
import { ServiceAreaSection } from "@/components/provinces/new-brunswick/service-area"
import { TrustSection } from "@/components/provinces/new-brunswick/trust-section"
import { ContactSection } from "@/components/residential/contact-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function NewBrunswickPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <NewBrunswickHero />
      <NewBrunswickSavingsCalculator />
      <WhyNewBrunswickSection />
      <ServiceAreaSection />
      <TrustSection />
      <ContactSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



