import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { SolarSolutionsHero } from "@/components/residential/solar-solutions/hero"
import { ProvincesServedSection } from "@/components/residential/solar-solutions/provinces-served"
import { HowSolarWorksSection } from "@/components/residential/solar-solutions/how-solar-works"
import { ProvenEquipmentSection } from "@/components/residential/solar-solutions/proven-equipment"
import { InstallationProcessSection } from "@/components/residential/solar-solutions/installation-process"
import { SolarSolutionsFAQs } from "@/components/residential/solar-solutions/faqs"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function SolarSolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <SolarSolutionsHero />
      <ProvincesServedSection />
      <HowSolarWorksSection />
      <ProvenEquipmentSection />
      <InstallationProcessSection />
      <SolarSolutionsFAQs />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



