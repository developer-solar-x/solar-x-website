import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const solutions = [
  { name: "Smart Thermostat" },
]

const brandLogos = [
  { name: "Google Nest", logo: "/placeholder-logo.svg" },
  { name: "Ecobee", logo: "/placeholder-logo.svg" },
]

export function SmartHomeSolutionsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Smart Home Solutions</h2>
          <div className="mt-4 text-lg text-muted-foreground">
            {solutions[0].name}
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mb-12 flex items-center justify-center gap-12">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center rounded-lg bg-background p-6 grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={`Logo of ${brand.name}`}
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
            src="/placeholder.jpg"
            alt="Black smart thermostat showing the current temperature"
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



