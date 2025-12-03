import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GlobalImpactSection } from "@/components/global-impact-section"
import { CanadaMapSection, ResidentialCommercialSection } from "@/components/canada-map-section"
import { TrustPartnersCarousel } from "@/components/trust-partners-carousel"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <HeroSection />
      <CanadaMapSection />
      <ResidentialCommercialSection />
      <TrustPartnersCarousel />
      <TestimonialsSection />
      <GlobalImpactSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}
