import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { FAQHero } from "@/components/residential/faq-hero"
import { FAQSection } from "@/components/residential/faq-section"
import { ContactUsSection } from "@/components/contact-us-section"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <FAQHero />
      <FAQSection />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

