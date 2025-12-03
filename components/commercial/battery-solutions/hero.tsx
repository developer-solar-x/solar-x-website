"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CommercialBatteryHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home-battery-storage-system-on-wall-modern-house-i.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Commercial Battery Energy Storage Systems (BESS)
        </h1>
        <p className="mt-8 text-3xl font-medium text-white/90 max-w-4xl mx-auto">
          Stay powered and resilient with reliable BESS, now with major rebates available.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="#faqs">
            <Button size="lg" className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90">
              Discover Rebates
            </Button>
          </Link>
          <Link href="#faqs">
            <Button size="lg" variant="outline" className="px-10 py-7 text-xl font-semibold text-white border-white hover:bg-white/10">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



