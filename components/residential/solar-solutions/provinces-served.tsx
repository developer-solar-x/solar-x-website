"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const provinces = [
  {
    name: "Ontario",
    description: "Toronto's skyline at dusk, with city lights sparkling under a deepening twilight sky",
    image: "/modern-house-with-solar-panels-at-dusk--dark-moody.jpg",
    href: "#",
  },
  {
    name: "British Columbia",
    description: "A serene body of water reflecting the sky, surrounded by lush greenery and distant hills",
    image: "/residential-house-with-solar-panels-on-roof-sunny-.jpg",
    href: "#",
  },
  {
    name: "Alberta",
    description: "Tranquil lake surrounded by lush greenery, with a towering mountain rising in the background",
    image: "/ground-mounted-solar-array-in-green-field.jpg",
    href: "#",
  },
  {
    name: "Nova Scotia",
    description: "A bright blue sky filled with soft white clouds, with boats parking over the wharf",
    image: "/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg",
    href: "#",
  },
  {
    name: "PEI",
    description: "A vibrant white and red lighthouse rises prominently, serving as a beacon for ships",
    image: "/modern-house-with-black-solar-panels-on-roof--sunn.jpg",
    href: "#",
  },
  {
    name: "New Brunswick",
    description: "Perched on a rugged cliff, a bright red-roofed lighthouse watches over the coastline",
    image: "/solar-panels-on-residential-roof-close-up-dark.jpg",
    href: "#",
  },
]

export function ProvincesServedSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Provinces Served</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {provinces.map((province) => (
            <Card key={province.name} className="group overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={province.image}
                  alt={province.description}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{province.name}</h3>
                <Link
                  href={province.href}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  View More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



