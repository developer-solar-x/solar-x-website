"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const landingVideos = [
  "/landing_videos/2804595-uhd_3840_2160_24fps.mp4",
  "/landing_videos/2887464-hd_1920_1080_25fps.mp4",
  "/landing_videos/8853487-hd_1920_1080_24fps.mp4",
]

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    if (landingVideos.length <= 1) return

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % landingVideos.length)
    }, 12000) // switch video every 12 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Static image background as immediate fallback */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/modern-house-with-solar-panels-at-dusk--dark-moody.jpg"
          alt="Solar home at dusk"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Background video carousel that fades in when ready */}
      <div className="pointer-events-none absolute inset-0">
        {landingVideos.map((src, index) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setIsVideoReady(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentVideoIndex && isVideoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Subtle non-blocking hint while video is initializing */}
      {!isVideoReady && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-0 flex justify-center">
          <div className="rounded-full bg-black/40 border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm animate-pulse">
            Enhancing background visuals
          </div>
        </div>
      )}

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <ScrollReveal direction="right" delay={0.1} className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              <span className="text-white">Solar X Canada</span>{" "}
              <span className="text-[#ff4a4a]">turns your rooftop</span>
              <br />
              <span className="text-white">into a clean energy source</span>
            </h1>

            <p className="text-lg text-white/90 max-w-md drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
              Discover how much clean energy your home can generate with tailored solar and battery solutions for Canadians.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-black/40 border border-white/10"
              >
                Request a Quote
              </Button>
              <Button
                size="lg"
                className="bg-white text-[#0a1628] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium shadow-md shadow-black/30 border border-transparent"
              >
                Learn More
              </Button>
            </div>
          </ScrollReveal>

          {/* Right spacer / optional content slot for future additions */}
          <ScrollReveal direction="left" delay={0.2} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
