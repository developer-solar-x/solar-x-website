"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sun, DollarSign, Zap } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: "2.1% - 4.1%",
    label: "Rising energy costs will keep impacting Nova Scotia families and businesses in 2026 and 2027",
  },
  {
    icon: Sun,
    value: "1,820",
    label: "sunshine hours per year",
  },
  {
    icon: Zap,
    value: "10,000 kWh",
    label: "average household usage, translating to huge savings potential",
  },
]

export function WhyNovaScotiaSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Nova Scotia Should Install Solar and Battery Storage?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nova Scotia is one of the best provinces for renewable energy solutions. With excellent solar potential and generous rebates, now is the perfect time to make the switch to solar energy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Maximize Your Solar Savings with Solar X Canada's Sunline - Energy as a Service Program
          </h3>
          <p className="text-muted-foreground mb-4">
            Power your home with Solar X Canada's exclusive Sunline - Energy as a Service program, designed to make solar energy more affordable through flexible monthly payments. Additionally, Solar X Canada offers a 0% BESSline 16-month Financing program for battery storage solutions.
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Terms and conditions apply
          </p>
        </div>
      </div>
    </section>
  )
}
