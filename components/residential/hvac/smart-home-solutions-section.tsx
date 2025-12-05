"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const solutions = [
  { name: "Smart Thermostat" },
]

const brandLogos = [
  { name: "Google Nest", logo: "/placeholder-logo.svg" },
  { name: "Ecobee", logo: "/placeholder-logo.svg" },
]

export function SmartHomeSolutionsSection() {
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
      className="relative py-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527741891222-bb6908f0a296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbmNyZXRlfGVufDB8MHwwfHx8MA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div 
            className={`space-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-16 scale-95'
            }`}
          >
            {/* Title and Sub-navigation */}
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Smart Home Solutions
              </h2>
              <div className="mt-4 text-lg text-white/90">
                {solutions[0].name}
              </div>
            </div>

            {/* Brand Logos */}
            <div className="flex items-center gap-4">
              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-lg bg-white/15 p-3 backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  <Image
                    src={brand.logo}
                    alt={`Logo of ${brand.name}`}
                    width={80}
                    height={48}
                    className="h-auto w-full max-w-[80px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div>
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

          {/* Right Side - Thermostat Image */}
          <div 
            className={`hidden lg:block relative h-full min-h-[400px] flex items-center justify-end transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-20 scale-90'
            }`}
          >
            <div className="relative w-full h-full drop-shadow-2xl" style={{ transform: 'scale(0.48)', transformOrigin: 'right center' }}>
              <Image
                src="/newthermostat.png"
                alt="Smart thermostat"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



