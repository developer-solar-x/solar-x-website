import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const provinces = [
  {
    name: "Alberta",
    description: "Alberta offers exceptional HVAC solutions with energy-efficient heating and cooling systems designed for Canada's sunniest province.",
    image: "/alberta.jpg",
    href: "/provinces/alberta",
  },
  {
    name: "New Brunswick",
    description: "Reliable HVAC systems designed for Atlantic Canada's climate, ensuring year-round comfort and energy efficiency.",
    image: "/newbrunswick.jpg",
    href: "/provinces/new-brunswick",
  },
  {
    name: "Nova Scotia",
    description: "High-performance HVAC installations across Nova Scotia, engineered for Atlantic weather conditions with comprehensive warranties.",
    image: "/ontario.jpg",
    href: "/provinces/nova-scotia",
  },
  {
    name: "Ontario",
    description: "Custom HVAC solutions for Ontario homeowners, maximizing comfort and savings with affordable installation options and instant rebates.",
    image: "/novascotia.jpg",
    href: "/provinces/ontario",
  },
]

export function ProvincesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Provinces</h2>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {provinces.map((province) => (
            <div
              key={province.name}
              className="group relative h-[300px] overflow-hidden rounded-xl"
            >
              <Image
                src={province.image}
                alt={province.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{province.name}</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-2">{province.description}</p>
                <Link
                  href={province.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ff4a4a] hover:text-[#e22f2f] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

