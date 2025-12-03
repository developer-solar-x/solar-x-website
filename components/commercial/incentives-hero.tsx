"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IncentivesHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/commercial-solar-panels-on-warehouse-building.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Commercial Renewable Energy Incentives
        </h1>
        <p className="mt-6 text-xl font-medium text-white/90 max-w-3xl mx-auto">
          Discover available rebates, tax credits, and financial incentives to reduce your upfront investment costs and maximize your return on investment.
        </p>
        <div className="mt-8">
          <Link href="#incentives">
            <Button size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-white hover:bg-primary/90">
              Explore Incentives
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



