"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const provinces = [
  {
    name: "Alberta",
    subtitle: "Canada's Sunniest Province for Solar Energy",
    description: "Alberta offers exceptional solar potential with over 2,400 hours of sunshine annually. Our solar solutions help Albertans reduce energy costs while taking advantage of provincial rebates and net metering programs.",
    seoDescription: "Professional solar panel installation in Alberta. Expert residential and commercial solar solutions with competitive pricing and government rebates available.",
    image: "/alberta.jpg",
    href: "/provinces/alberta",
    features: ["High solar irradiance", "Net metering available", "Provincial rebates"],
  },
  {
    name: "New Brunswick",
    subtitle: "Affordable Solar & Battery Solutions",
    description: "New Brunswick residents can benefit from reliable solar energy systems designed for Atlantic Canada's climate. Our battery storage solutions ensure power during outages and maximize energy independence.",
    seoDescription: "Solar panel installation services in New Brunswick. Residential and commercial solar energy systems with battery storage options for complete energy independence.",
    image: "/newbrunswick.jpg",
    href: "/provinces/new-brunswick",
    features: ["Battery storage options", "Climate-optimized systems", "Energy independence"],
  },
  {
    name: "Nova Scotia",
    subtitle: "Leading Solar Company in Atlantic Canada",
    description: "As one of Canada's top solar providers, we deliver high-performance solar installations across Nova Scotia. Our systems are engineered for Atlantic weather conditions and backed by comprehensive warranties.",
    seoDescription: "#1 solar company in Nova Scotia. Professional solar panel installation with weather-resistant systems, comprehensive warranties, and expert local support.",
    image: "/ontario.jpg",
    href: "/provinces/nova-scotia",
    features: ["Weather-resistant design", "Comprehensive warranties", "Local expertise"],
  },
  {
    name: "Ontario",
    subtitle: "Custom Energy Solutions for Your Home",
    description: "Ontario homeowners can customize their solar and battery systems to maximize savings. With affordable installation options and instant rebates, going solar in Ontario has never been easier.",
    seoDescription: "Affordable Ontario solar installation from one of the best solar companies in Canada. Custom solar and battery solutions with instant rebates and flexible financing.",
    image: "/novascotia.jpg",
    href: "/provinces/ontario",
    features: ["Instant rebates available", "Flexible financing", "Custom solutions"],
  },
]

export function ProvincesServedSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
            Provinces <span className="text-[#ff4a4a]">Served</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive solar and battery solutions across Canada, tailoring our services to meet the unique energy needs and climate conditions of each province.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {provinces.map((province) => (
            <Card 
              key={province.name} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#1a2b6b]/20 p-0"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={province.image}
                  alt={province.seoDescription}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#1a2b6b] text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Available Now
                  </span>
                </div>
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#1a2b6b] transition-colors">
                    {province.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#1a2b6b] mb-3">
                    {province.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {province.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {province.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1a2b6b]/10 text-[#1a2b6b] border border-[#1a2b6b]/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-[#1a2b6b] hover:bg-[#152254] text-white rounded-full font-semibold group/button"
                >
                  <Link href={province.href} className="flex items-center justify-center gap-2">
                    Explore {province.name} Solutions
                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



