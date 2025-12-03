"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sun, DollarSign, Zap } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: "$3,000",
    label: "provincial rebate available from Save Energy NB",
  },
  {
    icon: Sun,
    value: "1,998",
    label: "hours of sunshine per year",
  },
  {
    icon: Zap,
    value: "1,142 kWh",
    label: "electricity per kW can be produced per year on average",
  },
]

export function WhyNewBrunswickSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why New Brunswick Should Install Solar and Battery Storage?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            New Brunswick is one of the best provinces for renewable energy solutions. With excellent solar potential and generous rebates, now is the perfect time to make the switch to solar energy.
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
            Save Up to $3,000 on Solar Energy Systems
          </h3>
          <p className="text-muted-foreground mb-4">
            Power your home with a $3,000 rebate from SaveEnergy NB when you go solar. This incentive can be combined with SolarX's exclusive financing program, which allows you to spread your installation costs into manageable monthly payments.
          </p>
          <p className="text-sm text-muted-foreground">
            Plus, take advantage of SolarX's 0% interest financing for battery installations with flexible terms.
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Terms and conditions apply
          </p>
        </div>
      </div>
    </section>
  )
}



