import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const solutions = [
  { name: "Heat Pump" },
  { name: "AC" },
  { name: "Furnace" },
]

// Placeholder for brand logos - replace with actual logo images
const brandLogos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
  logo: "/placeholder-logo.svg",
}))

export function HeatingCoolingSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Heating & Cooling Solutions</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-lg text-muted-foreground">
            {solutions.map((solution, index) => (
              <span key={solution.name}>
                {solution.name}
                {index < solutions.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mb-12 grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-9">
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center rounded-lg bg-background p-4 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={60}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src="/hvac-air-conditioning-unit-outdoor-modern-sleek.jpg"
            alt="A sleek white air conditioner set against a contrasting black backdrop"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}



