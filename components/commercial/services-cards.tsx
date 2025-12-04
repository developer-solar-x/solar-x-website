import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Solar Solutions",
    description: "Rooftop solar panels capturing sunlight, contributing to eco-friendly energy solutions.",
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    href: "/commercial#solar",
  },
  {
    title: "Battery Solutions",
    description: "A house with a battery storage on the wall, representing a commitment to renewable energy sources.",
    image: "/solar battery.png",
    href: "/commercial#battery",
  },
  {
    title: "EV Charger",
    description: "A commercial EV charging station with a car plugged in, symbolizing the future of electric mobility.",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
    href: "/commercial/ev-charging-solutions",
  },
]

export function CommercialServicesCards() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Commercial Green Energy Solutions for Canadian Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Over 1,000 business owners have chosen Solar X Canada as their renewable energy installer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-[400px] overflow-hidden rounded-xl"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/80">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                  <span>View More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

