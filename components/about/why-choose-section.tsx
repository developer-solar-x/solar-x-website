"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Zap, DollarSign, Users, FileCheck, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Experience & Expertise",
    description:
      "With over 12 years of dedicated service and 13,200+ installations across Canada, we bring unmatched expertise to every project.",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
  },
  {
    icon: Zap,
    title: "Top-Tier Products",
    description:
      "We partner with industry-leading manufacturers like LONGI and APSystems to deliver high-efficiency, reliable solar solutions with comprehensive warranties.",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing & Financing",
    description:
      "Our low-interest Sunline financing program offers rates as low as 0%, making solar energy accessible. We also help maximize government rebates and incentives.",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
  },
  {
    icon: Users,
    title: "Hassle-Free Turnkey Solution",
    description:
      "We handle everything from site assessment and design to permits, installation, inspections, and utility interconnection. You just sit back and start saving.",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Warranties",
    description:
      "25-year performance warranty, 10-year product warranty, 2-year labor warranty, and $5,000,000 liability insurance. We stand behind our work.",
    gradient: "from-[#1a2b6b]/10 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our dedicated customer support team is here for you throughout the entire process and beyond. We provide module-level monitoring and responsive service.",
    gradient: "from-[#ff4a4a]/10 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 via-background to-background py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1a2b6b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff4a4a]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="down" delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Choose <span className="text-[#ff4a4a]">Solar X Canada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The comfort of knowing your project is in the most experienced hands.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
                <div
                  className={`group relative rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor} border ${feature.borderColor} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>

                  {/* Decorative Corner Element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`}
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

