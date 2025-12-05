"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Heart, Cog, Globe, Award, Users, Zap } from "lucide-react"

const stats = [
  {
    icon: Heart,
    value: 13200,
    suffix: "+",
    label: "Canadian Homes Powered",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    iconColor: "text-[#ff4a4a]",
  },
  {
    icon: Cog,
    value: 130,
    suffix: "MW",
    label: "Installed Capacity in Canada",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    iconColor: "text-[#1a2b6b]",
  },
  {
    icon: Globe,
    value: 12,
    suffix: "Years",
    label: "of Dedicated Service",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    iconColor: "text-[#ff4a4a]",
  },
  {
    icon: Award,
    value: 5,
    suffix: "Times",
    label: "Consecutive Consumer Choice Awards",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    iconColor: "text-[#1a2b6b]",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Expert Team Members",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    iconColor: "text-[#ff4a4a]",
  },
  {
    icon: Zap,
    value: 7,
    suffix: "GW",
    label: "Global Installed Capacity",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    iconColor: "text-[#1a2b6b]",
  },
]

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function CompanyStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#1a2b6b] via-[#152254] to-[#1a2b6b] py-24">
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full border-[60px] border-white/5" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full border-[40px] border-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="down" delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#ff4a4a]">Achievements</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to excellence and customer satisfaction.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
                <div
                  className={`group relative rounded-2xl border-2 border-white/10 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-white/20`}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 transition-all duration-300 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${stat.iconColor} transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>

                  {/* Label */}
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

