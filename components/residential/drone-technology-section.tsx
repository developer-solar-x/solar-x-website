import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Fully Transparent",
  "Professional Engineered Review",
  "Eliminate Technical Hurdles",
]

const reportItems = [
  "Structural Condition",
  "Roof Condition",
  "Existing Electrical Condition",
  "Panel Layout",
  "Wiring Route",
  "BOS Design",
  "Additional Costs",
]

export function DroneTechnologySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Pioneer in 3D Measurement Simulations with Drone Technology
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">{feature}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/residential-house-with-solar-panels-on-roof-sunny-.jpg"
              alt="House with solar panels and drone"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-foreground">Site Assessment Report</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



