import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Solar Solutions",
    image: "/solar-panels-on-residential-roof-close-up-dark.jpg",
    href: "/residential/solar-solutions",
  },
  {
    title: "Battery Solutions",
    image: "/solar battery.png",
    href: "/residential/battery-solutions",
  },
  {
    title: "HVAC",
    image: "/hvac-air-conditioning-unit-outdoor-modern-sleek.jpg",
    href: "/residential/hvac",
  },
]

export function ServicesCards() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">SolarX Services</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            <span className="text-primary">Go Beyond the Limits</span> of Traditional Energy
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-[400px] overflow-hidden rounded-xl"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-accent">
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
