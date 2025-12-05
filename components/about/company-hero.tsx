"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CompanyHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            About <span className="text-[#ff4a4a]">Solar X Canada</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="mt-8 text-2xl sm:text-3xl font-medium text-white/90 max-w-4xl mx-auto">
            One of Canada's fastest-growing and most experienced solar companies, dedicated to powering homes and businesses with clean, renewable energy.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're committed to helping Canadians reduce their carbon footprint while saving money on electricity bills through innovative solar and battery solutions.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-black/40 border border-white/10"
              >
                Get Started
              </Button>
            </Link>
            <Link href="#mission">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 rounded-full px-8 py-6 text-base font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

