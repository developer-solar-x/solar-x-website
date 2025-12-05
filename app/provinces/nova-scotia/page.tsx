import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { NovaScotiaHero } from "@/components/provinces/nova-scotia/hero"
import { NovaScotiaSavingsCalculator } from "@/components/provinces/nova-scotia/savings-calculator"
import { WhyNovaScotiaSection } from "@/components/provinces/nova-scotia/why-nova-scotia"
import { ServiceAreaSection } from "@/components/provinces/nova-scotia/service-area"
import { TrustSection } from "@/components/provinces/nova-scotia/trust-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function NovaScotiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <NovaScotiaHero />
      <NovaScotiaSavingsCalculator />
      <WhyNovaScotiaSection />
      <ServiceAreaSection />
      <TrustSection />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

