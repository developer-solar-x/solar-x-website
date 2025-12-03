"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  {
    value: 12,
    suffix: " Years",
    label: "of Dedicated Service",
  },
  {
    value: 13200,
    suffix: "+",
    label: "Canadian Homes Powered by SolarX",
  },
  {
    value: 5,
    suffix: " Times",
    label: "Consecutive Consumer Choice Awards",
  },
  {
    value: 0,
    suffix: " Hassle",
    label: "All-Inclusive Energy Services",
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

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-20">
      {/* Animated blue ring background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full border-[60px] border-white/5" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full border-[40px] border-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-medium text-white/80">Why Should You Install Solar & Battery With SolarX?</h3>
          <p className="mt-2 text-sm text-white/60">
            The Comfort of Knowing Your Project is in the Most Experienced Hands.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80">Check How Many of Your Neighbors Choose SolarX</p>
          <Link href="/live-data">
            <Button
              variant="outline"
              className="mt-4 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Check Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
