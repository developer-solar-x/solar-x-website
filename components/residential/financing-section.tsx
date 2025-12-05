"use client"

import { Battery, Wallet, Receipt, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const financingOptions = [
  {
    icon: Battery,
    title: "Battery",
    description: "Payments as low as $2.46/Day for solar energy systems*",
    highlight: "$2.46/Day",
    gradient: "from-[#ff4a4a]/10 via-[#ff4a4a]/5 to-transparent",
    iconBg: "bg-[#ff4a4a]/10",
    iconColor: "text-[#ff4a4a]",
  },
  {
    icon: Wallet,
    title: "Wallet",
    description: "Record-breaking low rates, 0% interest for 16 months on battery systems*",
    highlight: "0% Interest",
    gradient: "from-[#1a2b6b]/10 via-[#1a2b6b]/5 to-transparent",
    iconBg: "bg-[#1a2b6b]/10",
    iconColor: "text-[#1a2b6b]",
  },
  {
    icon: Receipt,
    title: "Receipt",
    description: "Solar and battery solutions that won't empty your pockets",
    highlight: "Affordable",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
]

export function FinancingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4a4a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a2b6b]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#ff4a4a]" />
              <span className="text-sm font-semibold text-[#ff4a4a] uppercase tracking-wide">
                Exclusive Financing
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-5xl mx-auto">
              SolarX's Exclusive{" "}
              <span className="text-[#ff4a4a]">Sunline</span> - Energy as a Service and{" "}
              <span className="text-[#1a2b6b]">BESSline</span> Financing Program
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe everyone should be able to light up their home with renewable clean energy.
            </p>
          </div>
        </ScrollReveal>

        {/* Financing Cards Grid */}
        <div className="mt-16 md:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {financingOptions.map((option, index) => {
            const Icon = option.icon
            const isHovered = hoveredIndex === index

            return (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <div
                  className="group relative h-full"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div
                    className={`relative h-full rounded-2xl border-2 bg-gradient-to-br ${option.gradient} backdrop-blur-sm transition-all duration-500 ${
                      isHovered
                        ? "border-[#ff4a4a]/50 shadow-2xl shadow-[#ff4a4a]/20 scale-[1.02]"
                        : "border-border/50 shadow-lg shadow-black/5"
                    } overflow-hidden`}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative p-8 md:p-10 flex flex-col items-center text-center h-full">
                      {/* Icon Container */}
                      <div
                        className={`relative mb-6 transition-all duration-500 ${
                          isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                        }`}
                      >
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-2xl ${option.iconBg} border-2 border-white/20 backdrop-blur-sm transition-all duration-500 ${
                            isHovered ? "shadow-xl shadow-black/20" : "shadow-md"
                          }`}
                        >
                          <Icon className={`h-10 w-10 ${option.iconColor} transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`} />
                        </div>
                        {/* Glow effect on hover */}
                        {isHovered && (
                          <div
                            className={`absolute inset-0 rounded-2xl ${option.iconBg} blur-xl opacity-50 animate-pulse`}
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 transition-colors duration-300">
                        {option.title}
                      </h3>

                      {/* Highlight Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${option.iconBg} border border-white/20 mb-4 transition-all duration-300 ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                      >
                        <span className={`text-sm font-bold ${option.iconColor}`}>
                          {option.highlight}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-grow">
                        {option.description}
                      </p>
                    </div>

                    {/* Shine effect on hover */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Disclaimer */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff4a4a]" />
              <span>*Program availability depends on your province</span>
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-[#ff4a4a] hover:bg-[#e22f2f] text-white rounded-full px-8 py-6 text-base md:text-lg font-semibold shadow-xl shadow-[#ff4a4a]/30 hover:shadow-2xl hover:shadow-[#ff4a4a]/40 transition-all duration-300 border-2 border-transparent hover:border-white/20"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/residential/solar-solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base md:text-lg font-semibold border-2 hover:bg-secondary transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Custom animation for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
