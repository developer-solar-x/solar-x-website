import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Timer, Battery, Shield } from "lucide-react"

const solutions = [
  {
    type: "Premium",
    title: "Premium Battery Solution",
    subtitle: "Solar X Canada's Proud Strategic Partner",
    description:
      "Optimize your power usage, enjoy whole-home backup, and ensure security during outages with a cutting-edge storage system.",
    features: [
      {
        icon: Timer,
        title: "24/7 Whole Home Backup",
        description: "Stay powered through any outage, ensuring your entire home stays running.",
      },
      {
        icon: Battery,
        title: "Scalable Energy",
        description: "Expand as your energy needs grow, with no power loss during upgrades.",
      },
      {
        icon: Shield,
        title: "Safe & Quiet Operation",
        description: "Electric-shock-free and low-noise performance ensures peace of mind and reliability.",
      },
    ],
    brand: "Anker Battery",
  },
  {
    type: "Core",
    title: "Core Battery Solution",
    subtitle: "Solar X Canada's In-House Branding",
    description:
      "A range of high-performance battery products designed to work seamlessly with solar. It provides reliable backup power with long-lasting capacity.",
    features: [
      {
        icon: Timer,
        title: "Extended Durability",
        description: "Longevity and deliver LFP batteries are built for reliable and sustained performance.",
      },
      {
        icon: Battery,
        title: "Smart Protection",
        description: "Equipped with sensors to guard against voltage, over-temperature, and short-circuit risks.",
      },
      {
        icon: Shield,
        title: "Safety-Focused Design",
        description: "Sleek design with no exposed wires or hot vents, making it safe for kids and pets",
      },
    ],
    brand: "Pion Battery",
  },
]

export function BatterySolutions() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="mb-2">
                  <span className="text-sm font-medium text-primary">{solution.type} Battery Solution</span>
                </div>
                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.subtitle}</CardDescription>
                <CardDescription className="mt-2">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {solution.features.map((feature, featureIndex) => {
                    const Icon = feature.icon
                    return (
                      <div key={featureIndex} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                  <div className="pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{solution.brand}</p>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

