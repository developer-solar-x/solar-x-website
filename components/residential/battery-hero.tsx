import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BatteryHero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home-battery-storage-system-on-wall-modern-house-i.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Battery Solutions
          </h1>
          <p className="mt-8 text-3xl font-medium text-white/90">
            Powering Home&apos;s Possibilities
          </p>
          <p className="mt-6 text-xl text-gray-300">
            Install a Home Battery
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-full bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-[#4a90e2] hover:scale-110 hover:shadow-[0_0_30px_rgba(74,144,226,0.8),0_0_60px_rgba(74,144,226,0.5),0_0_90px_rgba(74,144,226,0.3)] transition-all duration-300">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

