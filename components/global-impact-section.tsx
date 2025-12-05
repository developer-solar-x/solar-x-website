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

          {/* Right - Bento grid image mosaic (3x3 bento layout, 6 images) */}
          <ScrollReveal direction="left" delay={0.2} className="h-full">
            {/* Use explicit heights so Next.js <Image fill> always has a non-zero parent height */}
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Large hero tile - top-left, 2x2 */}
              <div className="relative col-span-2 row-span-2 col-start-1 row-start-1 rounded-2xl overflow-hidden shadow-2xl min-h-[180px] md:min-h-[220px] lg:min-h-[260px]">
                <Image
                  src="/large-commercial-solar-farm-with-rows-of-panels.jpg"
                  alt="Utility-scale solar farm"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right column, stacked */}
              <div className="relative col-start-3 row-start-1 rounded-2xl overflow-hidden shadow-xl min-h-[120px] md:min-h-[150px] lg:min-h-[170px]">
                <Image
                  src="/commercial-solar-panels-on-warehouse-building.jpg"
                  alt="Commercial rooftop solar"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative col-start-3 row-start-2 rounded-2xl overflow-hidden shadow-xl min-h-[120px] md:min-h-[150px] lg:min-h-[170px]">
                <Image
                  src="/ground-mounted-solar-array-in-green-field.jpg"
                  alt="Ground-mounted solar array"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom row - three equal tiles */}
              <div className="relative col-start-1 row-start-3 rounded-2xl overflow-hidden shadow-xl min-h-[120px] md:min-h-[150px] lg:min-h-[170px]">
                <Image
                  src="/home-battery-storage-system-on-wall-modern-house-i.jpg"
                  alt="Home battery storage system"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative col-start-2 row-start-3 rounded-2xl overflow-hidden shadow-xl min-h-[120px] md:min-h-[150px] lg:min-h-[170px]">
                <Image
                  src="/industrial-solar-installation-on-factory-building.jpg"
                  alt="Industrial solar installation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative col-start-3 row-start-3 rounded-2xl overflow-hidden shadow-xl min-h-[120px] md:min-h-[150px] lg:min-h-[170px]">
                <Image
                  src="/residential-solar-panels-on-modern-home-rooftop.jpg"
                  alt="Residential solar rooftop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
