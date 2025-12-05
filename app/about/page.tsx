import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { AboutHero } from "@/components/about/hero"
import { AboutFAQsSection } from "@/components/about/faqs-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <AboutHero />
      <AboutFAQsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

