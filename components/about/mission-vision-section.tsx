"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Target, Eye, Lightbulb } from "lucide-react"

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make renewable energy accessible and affordable for all Canadians by providing top-tier solar and battery solutions with exceptional service, innovative financing options, and hassle-free turnkey installations.",
    gradient: "from-[#1a2b6b]/10 via-[#1a2b6b]/5 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Canada's leading renewable energy provider, empowering communities across the nation to achieve energy independence while creating a sustainable, carbon-neutral future for generations to come.",
    gradient: "from-[#ff4a4a]/10 via-[#ff4a4a]/5 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description:
      "Integrity, innovation, and customer-first service guide everything we do. We believe in transparent communication, sustainable practices, and building lasting relationships with our customers and communities.",
    gradient: "from-[#1a2b6b]/10 via-[#1a2b6b]/5 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
  },
]

export function MissionVisionSection() {
  return (
    <section id="mission" className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff4a4a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a2b6b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="down" delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mission, Vision & <span className="text-[#ff4a4a]">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The principles that drive us forward and shape every decision we make.
          </p>
        </ScrollReveal>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionVision.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
                <div
                  className={`group relative rounded-2xl border-2 ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl ${item.bgColor} border ${item.borderColor} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className={`w-8 h-8 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>

                  {/* Decorative Corner Element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`}
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

