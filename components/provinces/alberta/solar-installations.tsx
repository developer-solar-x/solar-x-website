"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const installations = [
  {
    type: "Residential",
    size: "5.1KW Solar PV System",
    location: "Calgary, AB",
    image: "/residential-house-with-solar-panels-on-roof-sunny-.jpg",
  },
  {
    type: "Residential",
    size: "5.3KW Solar PV System",
    location: "Red Deer, AB",
    image: "/modern-house-with-solar-panels-at-dusk--dark-moody.jpg",
  },
  {
    type: "Residential",
    size: "5.3KW Solar PV System",
    location: "St. Albert, AB",
    image: "/modern-house-with-black-solar-panels-on-roof--sunn.jpg",
  },
]

const systemSizes = ["≤10KW", "11KW-19KW", "20KW-29KW", "≥30KW"]

export function SolarInstallationsSection() {
  const [selectedSize, setSelectedSize] = useState<string>("≤10KW")

  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Bringing Alberta Solar Power to Life
          </h2>
        </div>

        {/* System Size Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {systemSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedSize === size
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/70 hover:bg-foreground/5 border border-border"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {installations.map((installation, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={installation.image}
                          alt={installation.location}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">{installation.type}</p>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {installation.size}
                        </h3>
                        <p className="text-sm text-muted-foreground">{installation.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="bg-transparent">
            Explore Solar Neighborhoods
          </Button>
        </div>
      </div>
    </section>
  )
}



