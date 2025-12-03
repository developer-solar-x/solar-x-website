import { DollarSign, Home, Zap, Battery, Clock, Leaf } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "Energy Saving",
    description: "A permanent answer to rising electricity rates",
  },
  {
    icon: Home,
    title: "Increase Property Value",
    description: "The smartest upgrade for your home",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Using less to save more",
  },
  {
    icon: Battery,
    title: "Energy Independence",
    description: "Putting all the power in your hands",
  },
  {
    icon: Clock,
    title: "Avoid Peak Rates",
    description: "Gain control over what electricity rates you pay",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Saying yes to a bright future for the next generation",
  },
]

export function RedefineEnergy() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Redefine Your Home's Energy</h2>
            <p className="mt-2 text-lg text-muted-foreground">All about Savings</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg"
              alt="Aerial view of residential neighborhood with solar panels"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
