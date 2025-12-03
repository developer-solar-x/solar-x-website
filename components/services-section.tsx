"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = {
  commercial: {
    title: "Commercial",
    description:
      "Slash your business's energy and demand charges with solar, battery and EV solutions. We offer a full turnkey solution, inclusive of rebate applications — delivering premium commercial installations at a low cost. Boost your business's profits with tailored commercial system designs.",
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    link: "#",
  },
  residential: {
    title: "Residential",
    description:
      "Boost your home's energy independence with personalized residential solar, battery and HVAC solutions—available at reduced costs with government and in-house rebates. The ultimate protection for your family against increasing electricity rates and unpredictable outages.",
    image: "/residential-house-with-solar-panels-on-roof-sunny-.jpg",
    link: "#",
  },
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("commercial")
  const currentService = services[activeTab]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="right" delay={0.1} className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={currentService.image || "/placeholder.svg"}
              alt={`${currentService.title} solar installation`}
              width={600}
              height={400}
              className="w-full h-[350px] object-cover transition-opacity duration-300"
            />
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="left" delay={0.2} className="space-y-6">
            <p className="text-foreground/70 leading-relaxed">{currentService.description}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
