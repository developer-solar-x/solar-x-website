import { ServiceBell, Zap, TrendingUp, Sun } from "lucide-react"

const features = [
  {
    icon: ServiceBell,
    title: "One-Stop EPC Service",
    description: "Design, permitting, installation, and post-service — handled entirely in-house",
  },
  {
    icon: Zap,
    title: "Incentive-Ready",
    description: "Full support in applying available rebates to reduce your cost",
  },
  {
    icon: TrendingUp,
    title: "Smart & Scalable",
    description: "Solutions designed to grow with your fleet, tenant needs, or property expansion",
  },
  {
    icon: Sun,
    title: "Integrated Solar + BESS Packages",
    description: "One point of contact to handle your package solutions",
  },
]

export function WhyChooseEVCharging() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Solar X Canada
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            EV Charging Solutions Built for the Future
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


