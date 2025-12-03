import { Button } from "@/components/ui/button"
import { ArrowRight, Battery } from "lucide-react"

export function SunlineSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Go Solar Smarter with Solar X Canada's Sunline - Energy as a Service
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Take control of your home's energy costs with Solar X Canada's exclusive Sunline Energy-as-a-Service program, offering flexible monthly payments for affordable solar power. Plus, enjoy 0% BESSline financing for 16 months on battery storage solutions.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Terms and conditions apply
            </p>
            <Button size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-white hover:bg-primary/90">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <Battery className="h-32 w-32 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


