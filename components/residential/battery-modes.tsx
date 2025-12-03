import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, DollarSign, Star } from "lucide-react"

const modes = [
  {
    icon: Battery,
    title: "Scalable Technology",
    description: "Easily scale your battery size based on energy needs",
  },
  {
    icon: DollarSign,
    title: "Optimize Savings",
    description: "Avoid peak rates with adaptable smart battery technology",
  },
  {
    icon: Star,
    title: "Emergency Back-up",
    description: "Reliable backup power for your entire house",
  },
]

export function BatteryModes() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Power on Your Term
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            3 Different Battery Modes for Ultimate Energy Flexibility
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {modes.map((mode, index) => {
            const Icon = mode.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{mode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{mode.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground">
            Designed for Any Situation
          </h3>
          <p className="mt-3 text-lg text-muted-foreground">
            Secure your home&apos;s energy with solar and smart battery systems — stay powered day and night, even during outages.
          </p>
        </div>
      </div>
    </section>
  )
}



