import { Wrench, Settings, FileCode, Monitor } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Site-Specific Design & Engineering",
    items: [
      "Load capacity assessment",
      "Level 2 EV charger",
      "Optional solar + battery integration",
    ],
  },
  {
    icon: Settings,
    title: "Certified Installation",
    items: [
      "CSA/U-certified EVSE",
      "Trained electricians & project managers",
      "Panel upgrades, trenching, bollards & signage",
    ],
  },
  {
    icon: FileCode,
    title: "Rebates & Permits Analysis",
    items: [
      "Federal & Provincial & local rebate navigation",
      "ROI estimates",
      "Full utility and municipal compliance",
    ],
  },
  {
    icon: Monitor,
    title: "Smart Charging Platform",
    items: [
      "OCPP-compliant systems",
      "RFID access, usage monitoring, mobile app",
      "Payment processing & usage reporting",
      "Load balancing & energy optimization",
    ],
  },
]

export function KeyFeatures() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Commercial EV Charging Services You Can Rely On
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



