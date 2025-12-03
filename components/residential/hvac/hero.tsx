"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HvacHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hvac-air-conditioning-unit-outdoor-modern-sleek.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          HVAC
        </h1>
        <p className="mt-8 text-3xl font-medium text-white/90">
          Energy Designed for Your Home
        </p>
        <div className="mt-10">
          <Button 
            size="lg" 
            className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90 flex items-center gap-2 mx-auto"
          >
            Free HVAC Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

