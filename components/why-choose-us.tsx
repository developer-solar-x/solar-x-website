"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const heroVideo = "/newhero/8853485-hd_1920_1080_24fps.mp4"

const stats = [
  {
    value: 12,
    suffix: " Years",
    label: "of Dedicated Service",
  },
  {
    value: 12500,
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

  const handleVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    video.currentTime = 0
    video.play()
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 md:py-40 lg:py-48">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0 bg-black">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          onError={(e) => {
            const video = e.currentTarget
            video.currentTime = 0
            video.play().catch(() => {})
          }}
          className="absolute inset-0 h-full w-full object-cover z-10"
        />
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40 z-20" />
      </div>

      <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-4 leading-tight">
            Why Should You Install Solar & Battery With{" "}
            <span className="text-[#ff4a4a]">SolarX</span>?
          </h3>
          <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            The Comfort of Knowing Your Project is in the Most Experienced Hands.
          </p>
        </div>

        <div className="mt-20 md:mt-24 grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group flex">
              <div className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 group-hover:border-[#ff4a4a]/50 transition-all duration-300 w-full flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="mt-4 text-sm md:text-base text-white/90 font-medium drop-shadow-md text-center leading-tight px-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg mb-6">
            Check How Many of Your Neighbors Choose SolarX
          </p>
          <Link href="/live-data">
            <Button
              size="lg"
              className="bg-[#ff4a4a] hover:bg-[#e22f2f] text-white rounded-full px-10 py-7 text-lg md:text-xl font-semibold shadow-2xl shadow-[#ff4a4a]/30 hover:shadow-[#ff4a4a]/50 transition-all duration-300 border-2 border-white/20"
            >
              Check Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
