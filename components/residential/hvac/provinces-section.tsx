import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const provinces = [
  {
    name: "Nova Scotia",
    description: "A bright blue sky filled with soft white clouds, with boats parking over the wharf in Nova Scotia.",
    image: "/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg",
  },
  {
    name: "Ontario",
    description: "Toronto's skyline at dusk, with city lights sparkling under a deepening twilight sky in Ontario.",
    image: "/modern-house-with-solar-panels-at-dusk--dark-moody.jpg",
  },
]

export function ProvincesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Provinces</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

