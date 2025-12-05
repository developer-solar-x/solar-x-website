import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { ContactUsSection } from "@/components/contact-us-section"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <ContactUsSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

