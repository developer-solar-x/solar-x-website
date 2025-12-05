"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const solutions = [
  { name: "Hybrid Water Heater" },
  { name: "Tankless Water Heaters" },
]

const brandLogos = [
  { name: "Rheem", logo: "/placeholder-logo.svg" },
  { name: "Navien", logo: "/placeholder-logo.svg" },
]

export function WateringSolutionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-l from-slate-600/95 via-blue-900/30 to-slate-800/95 py-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Water Solutions Image */}
          <div 
            className={`hidden lg:block relative h-full min-h-[400px] flex items-center justify-start transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-20 scale-90'
            }`}
          >
            <div className="relative w-full h-full drop-shadow-2xl" style={{ transform: 'scale(0.8)', transformOrigin: 'left center' }}>
              <Image
                src="/watersolutions.png"
                alt="Water heater solutions"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div 
            className={`space-y-8 text-right transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-16 scale-95'
            }`}
          >
            {/* Title and Sub-navigation */}
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Watering Solutions
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-end gap-4 text-lg text-white/90">
                {solutions.map((solution, index) => (
                  <span key={solution.name}>
                    {solution.name}
                    {index < solutions.length - 1 && <span className="mx-2">|</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Brand Logos */}
            <div className="flex items-center justify-end gap-4">
              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-lg bg-white/15 p-3 backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  <Image
                    src={brand.logo}
                    alt={`Logo of ${brand.name} heating and cooling solutions`}
                    width={80}
                    height={48}
                    className="h-auto w-full max-w-[80px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="flex justify-end">
              <Button 
                size="lg"
                variant="ghost"
                className="glass-pill-button flex items-center gap-2 text-lg font-semibold"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



