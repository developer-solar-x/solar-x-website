"use client"

import { useState, useEffect, useRef } from "react"
import { House, Zap, Trees, Cloud } from "lucide-react"

const stats = [
  { 
    icon: House, 
    label: "Ontario Solar Installations", 
    value: 0, 
    suffix: "" 
  },
  { 
    icon: Zap, 
    label: "Installed Capacity Across Ontario", 
    value: 0, 
    suffix: "MW" 
  },
  { 
    icon: Trees, 
    label: "Equivalent Trees Planted", 
    value: 0, 
    suffix: "K" 
  },
  { 
    icon: Cloud, 
    label: "Greenhouse Gases Reduced Annually", 
    value: 0, 
    suffix: "k Tons" 
  },
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
    <div ref={ref} className="flex items-baseline gap-1">
      <span className="text-4xl md:text-5xl font-bold text-foreground">{count}</span>
      {suffix && <span className="text-2xl md:text-3xl font-bold text-[#e31b23] ml-1">{suffix}</span>}
    </div>
  )
}

export function OntarioStatsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Powering Ontario's Micro-Generation Future
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-[#1a2b6b]" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

