"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EVChargingHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ev-charger-and-portable-power-stations-solar-equip.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold text-white/90 mb-4 uppercase tracking-wide">
          Smart EV Infrastructure
        </p>
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Power Your Business
          <br />
          with Commercial
          <br />
          EV Charging Solutions
        </h1>
        <p className="mt-8 text-2xl font-medium text-white/90 max-w-3xl mx-auto">
          Enhance your business's value by integrating EV charging stations into your parking lot.
        </p>
        <div className="mt-10">
          <Link href="#contact">
            <Button size="lg" className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90">
              Free Onsite Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



