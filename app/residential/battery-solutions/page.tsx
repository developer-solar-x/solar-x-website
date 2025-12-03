import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { BatteryHero } from "@/components/residential/battery-hero"
import { BatteryCustomization } from "@/components/residential/battery-customization"
import { BatterySolutions } from "@/components/residential/battery-solutions"
import { BatteryModes } from "@/components/residential/battery-modes"
import { PowerScenarios } from "@/components/residential/power-scenarios"
import { PortablePowerStations } from "@/components/residential/portable-power-stations"
import { ProvincesServedSection } from "@/components/residential/solar-solutions/provinces-served"
import { InstallationProcess } from "@/components/residential/installation-process"

export default function BatterySolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <BatteryHero />
      <BatteryCustomization />
      <BatterySolutions />
      <BatteryModes />
      <PowerScenarios />
      <PortablePowerStations />
      <ProvincesServedSection />
      <InstallationProcess />
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

