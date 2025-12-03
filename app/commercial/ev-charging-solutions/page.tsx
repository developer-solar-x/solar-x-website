import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { EVChargingHero } from "@/components/commercial/ev-charging/hero"
import { WhyChooseEVCharging } from "@/components/commercial/ev-charging/why-choose"
import { KeyFeatures } from "@/components/commercial/ev-charging/key-features"
import { InstallationProcess } from "@/components/commercial/ev-charging/installation-process"
import { GuideToChoose } from "@/components/commercial/ev-charging/guide-to-choose"
import { EVChargingContactSection } from "@/components/commercial/ev-charging/contact-section"

export default function EVChargingSolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <EVChargingHero />
      <WhyChooseEVCharging />
      <KeyFeatures />
      <InstallationProcess />
      <GuideToChoose />
      <EVChargingContactSection />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}



