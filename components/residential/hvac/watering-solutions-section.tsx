import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const solutions = [
  { name: "Hybrid Water Heater" },
  { name: "Tankless Water Heaters" },
]

const brandLogos = [
  { name: "Rheem", logo: "/placeholder-logo.svg" },
  { name: "Navien", logo: "/placeholder-logo.svg" },
]

export function WateringSolutionsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Watering Solutions</h2>
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
        <div className="mb-12 flex items-center justify-center gap-12">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center rounded-lg bg-secondary p-6 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={`Logo of ${brand.name} heating and cooling solutions`}
                width={150}
                height={80}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src="/home-battery-storage-system-on-wall-modern-house-i.jpg"
            alt="A blue electric water heater isolated on a dark black background"
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



