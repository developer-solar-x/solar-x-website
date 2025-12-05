import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { CompanyHero } from "@/components/about/company-hero"
import { MissionVisionSection } from "@/components/about/mission-vision-section"
import { CompanyStatsSection } from "@/components/about/company-stats-section"
import { WhyChooseSection } from "@/components/about/why-choose-section"
import { AboutFAQsSection } from "@/components/about/faqs-section"
import { ContactUsSection } from "@/components/contact-us-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <CompanyHero />
      <MissionVisionSection />
      <CompanyStatsSection />
      <WhyChooseSection />
      <AboutFAQsSection />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

