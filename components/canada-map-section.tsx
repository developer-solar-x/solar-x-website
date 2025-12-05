"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Heart, Cog, Globe, Boxes, Building2, Home, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const provinces = ["All", "AB", "NB", "NS", "ON"]

const CanadaLeafletMap = dynamic(
  () => import("./canada-leaflet-map").then((mod) => mod.CanadaLeafletMap),
  {
    ssr: false,
  }
)

const stats = [
  {
    icon: Heart,
    value: "13,200",
    suffix: "+",
    label: "Solar Projects Nationwide",
    valueColor: "text-white",
    suffixColor: "text-white",
  },
  {
    icon: Cog,
    value: "130",
    suffix: "MW",
    label: "Installed Capacity in Canada",
    valueColor: "text-white",
    suffixColor: "text-white",
  },
  {
    icon: Globe,
    value: "12",
    suffix: "Years",
    label: "Dedicated Service",
    valueColor: "text-white",
    suffixColor: "text-white",
  },
  {
    icon: Boxes,
    value: "7",
    suffix: "GW",
    label: "Installed Capacity Globally",
    valueColor: "text-white",
    suffixColor: "text-white",
  },
]

export function CanadaMapSection() {
  const [activeProvince, setActiveProvince] = useState("All")

  return (
    <section className="bg-[#0a1628] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <ScrollReveal direction="right" delay={0.1} className="space-y-6">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Join the{" "}
              <span className="text-white">Largest</span>{" "}
              Solar Family in Canada
            </h2>

            {/* Province Filters */}
            <div className="flex flex-wrap gap-4 pt-2">
              {provinces.map((province) => (
                <button
                  key={province}
                  onClick={() => setActiveProvince(province)}
                  className={`text-sm font-medium transition-colors pb-1 ${
                    activeProvince === province
                      ? "text-white border-b-2 border-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {province}
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="pt-4">
              <CanadaLeafletMap activeProvince={activeProvince} />
            </div>
          </ScrollReveal>

          {/* Right Section */}
          <ScrollReveal direction="left" delay={0.2} className="space-y-8">
            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed">
              Showcasing Canada's largest solar portfolio and a global presence, we deliver innovative, client-focused
              solar solutions that maximize returns for businesses and homeowners.
            </p>

            {/* CTA Button */}
            <Link href="/live-data">
              <Button
                className="bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-black/40 border border-white/10"
              >
                View Live Production Data
              </Button>
            </Link>

            {/* Stats */}
            <div className="space-y-6 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <ScrollReveal key={stat.label} direction="up" delay={0.1 + index * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-3xl md:text-4xl font-bold ${stat.valueColor}`}>{stat.value}</span>
                          <span className={`text-xl md:text-2xl font-bold ${stat.suffixColor}`}>{stat.suffix}</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// Residential and Commercial Section Component - Separate Section
export function ResidentialCommercialSection() {
  const services = [
    {
      icon: Building2,
      title: "Commercial",
      description:
        "Slash your business's energy and demand charges with solar, battery and EV solutions. We offer a full turnkey solution, inclusive of rebate applications — delivering premium commercial installations at a low cost. Boost your business's profits with tailored commercial system designs.",
      image: "/commercial-solar-panels-on-warehouse-building.jpg",
      link: "/commercial",
    },
    {
      icon: Home,
      title: "Residential",
      description:
        "Boost your home's energy independence with personalized residential solar, battery and HVAC solutions—available at reduced costs with government and in-house rebates. The ultimate protection for your family against increasing electricity rates and unpredictable outages.",
      image: "/residential-house-with-solar-panels-on-roof-sunny-.jpg",
      link: "/residential",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover tailored solar solutions designed for your needs
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} direction={index === 0 ? "right" : "left"} delay={index * 0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1a2b6b] to-[#152254] border-2 border-[#1a2b6b]/30 hover:border-[#ff4a4a]/50 transition-all group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} solar installation`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#ff4a4a] text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex rounded-lg bg-[#1a2b6b]/95 backdrop-blur-sm px-4 py-2 shadow-lg shadow-black/40 border border-white/10">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-br from-[#1a2b6b] to-[#152254] flex-1 flex flex-col justify-between">
                    <p className="text-white/90 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href={service.link} className="mt-auto">
                      <Button className="w-full bg-[#ff4a4a] hover:bg-[#e22f2f] text-white rounded-lg px-6 py-3 font-semibold flex items-center justify-center gap-2 group shadow-lg shadow-[#ff4a4a]/30 hover:shadow-[#ff4a4a]/50 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

