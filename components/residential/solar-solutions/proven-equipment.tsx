"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

const equipment = [
  {
    title: "APsystems Microinverters",
    subtitle: "#1 Global multi-platform MLPE solution provider",
    features: [
      "97% efficiency, reactive power control",
      "Single-phase microinverter services multiple modules",
      "No high voltage and Arc Fault Hazard",
      "Better performance under shading and low light cloudy environments",
    ],
    image: "/solar-panels-on-residential-roof-close-up-dark.jpg",
    learnMoreLink: "#",
  },
  {
    title: "Longi Monocrystalline Solar Panels",
    subtitle: "A leader in the global transition to clean energy",
    features: [
      "Durable solar panels are made to handle Canadian weather conditions",
      "High module quality ensures long-term reliability",
      "Advanced module technology delivers superior performance",
      "Global recognized AAA solar brand",
    ],
    image: "/modern-house-with-black-solar-panels-on-roof--sunn.jpg",
    learnMoreLink: "#",
  },
  {
    title: "Pion Power Racking System",
    subtitle: "One-stop, complete mounting solution",
    features: [
      "Anodized Aluminum (Anti Rusting - Perfect near the Ocean)",
      "Tested by over 12k Canadian Homes",
      "CSA Certified",
      "Complimentary Critter Guard",
    ],
    image: "/residential-solar-panels-on-modern-home-rooftop.jpg",
    learnMoreLink: "#",
  },
]

export function ProvenEquipmentSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Proven Solar Equipment</h2>
          <p className="mt-4 text-lg text-muted-foreground">We Only Use Tier-one Products</p>
        </div>

        <div className="space-y-12">
          {equipment.map((item, index) => (
            <div
              key={item.title}
              className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="group" asChild>
                      <a href={item.learnMoreLink}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



