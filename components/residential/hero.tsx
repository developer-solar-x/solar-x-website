"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ResidentialHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-house-with-solar-panels-at-dusk--dark-moody.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Powering Canadian Homes with <span className="text-[#ff4a4a]">Sustainable Energy</span>
        </h1>
        <p className="mt-8 text-3xl font-medium text-white/90">
          Discover Sustainable Savings Through Reliable Solar and Battery Solutions
        </p>
        <div className="mt-10">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-black/40 border border-white/10"
            >
              Request Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
