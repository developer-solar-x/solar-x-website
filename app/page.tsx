import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { CanadaMapSection, ResidentialCommercialSection } from "@/components/canada-map-section"
import { TrustPartnersCarousel } from "@/components/trust-partners-carousel"
import { ContactUsSection } from "@/components/contact-us-section"
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
      <BlogSection limit={3} showViewMore={true} />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}
