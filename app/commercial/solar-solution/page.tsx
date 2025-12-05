import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { CommercialSolarHero } from "@/components/commercial/solar-solutions/hero"
import { IncentivesSection } from "@/components/commercial/solar-solutions/incentives"
import { SavingsCalculatorSection } from "@/components/commercial/solar-solutions/savings-calculator"
import { InstallationProcessSection } from "@/components/commercial/solar-solutions/installation-process"
import { CommercialSolarFAQs } from "@/components/commercial/solar-solutions/faqs"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function CommercialSolarSolutionPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <CommercialSolarHero />
      <IncentivesSection />
      <SavingsCalculatorSection />
      <InstallationProcessSection />
      <CommercialSolarFAQs />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



