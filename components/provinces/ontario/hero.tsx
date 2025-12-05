"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OntarioHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/novascotia.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          In Ontario
        </h1>
        <p className="mt-8 text-3xl font-medium text-white/90">
          Customize Your Energy Solutions
        </p>
        <p className="mt-6 text-xl text-white/80">
          Affordable Ontario Solar installation from one of the best solar companies in Canada. Start your clean energy journey today.
        </p>
        <div className="mt-10">
          <Link href="#contact">
            <Button
              size="lg"
              variant="ghost"
              className="glass-pill-button text-lg font-semibold"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

