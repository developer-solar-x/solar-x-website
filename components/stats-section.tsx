"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

const provinces = ["All", "AB", "BC", "NB", "NS", "ON"]

const stats = [
  { label: "Solar Projects Nationwide", value: 13500, suffix: "+" },
  { label: "Installed Capacity in Canada", value: 150, suffix: "MW" },
  { label: "Dedicated Service", value: 10, suffix: "Years" },
  { label: "Installed Capacity Globally", value: 2, suffix: "GW" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString()}
      <span className="text-[#e31b23] ml-1">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  const [activeProvince, setActiveProvince] = useState("All")

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="down" delay={0.1} className="text-center mb-12">
          <p className="text-sm font-medium text-[#1a2b6b] uppercase tracking-wider mb-3">
            Together We Create a Micro-Generation Future
          </p>
        </ScrollReveal>

        {/* Province Tabs */}
        <ScrollReveal direction="down" delay={0.2} className="flex justify-center gap-2 mb-12 flex-wrap">
          {provinces.map((province) => (
            <button
              key={province}
              onClick={() => setActiveProvince(province)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeProvince === province
                  ? "bg-[#1a2b6b] text-white"
                  : "bg-white text-foreground/70 hover:bg-foreground/5 border border-border"
              }`}
            >
              {province}
            </button>
          ))}
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={0.1 + index * 0.1} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
