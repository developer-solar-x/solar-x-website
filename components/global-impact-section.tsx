"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function GlobalImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Content */}
          <ScrollReveal direction="right" delay={0.1} className="flex flex-col justify-center space-y-6 max-w-xl">
            <p className="text-sm font-medium text-white/60 uppercase tracking-[0.2em]">
              Transforming Communities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
              Local Innovation. Global Impact.
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our global footprint showcases how we tailor clean energy systems to meet diverse needs while delivering
              consistent, high-performance results—wherever the sun shines.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Right - Image Mosaic */}
          <ScrollReveal direction="left" delay={0.2} className="h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-64">
                  <Image
                    src="/large-commercial-solar-farm-with-rows-of-panels.jpg"
                    alt="Commercial solar farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-64">
                  <Image
                    src="/residential-solar-panels-on-modern-home-rooftop.jpg"
                    alt="Residential solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 pt-6 md:pt-10">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-64">
                  <Image
                    src="/ground-mounted-solar-array-in-green-field.jpg"
                    alt="Ground mounted solar array"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-64">
                  <Image
                    src="/industrial-solar-installation-on-factory-building.jpg"
                    alt="Industrial solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
