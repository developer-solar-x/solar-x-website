"use client"

import { useState, useEffect, useRef } from "react"
import { House, Zap, Trees, Cloud } from "lucide-react"

const stats = [
  { label: "Projects", value: 0, suffix: "", icon: House },
  { label: "Installed Capacity", value: 0, suffix: "MW", icon: Zap },
  { label: "Equivalent Trees Planted", value: 0, suffix: "K", icon: Trees },
  { label: "Greenhouse Gases Reduced Each Year", value: 0, suffix: "k Tons", icon: Cloud },
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
      {suffix && <span className="text-[#e31b23] ml-1">{suffix}</span>}
    </div>
  )
}

export function AlbertaStatsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Solar X Canada Leads the Change
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

