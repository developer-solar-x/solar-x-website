import { Zap, Battery, Gauge } from "lucide-react"

const chargingLevels = [
  {
    level: "Level 1 – Basic Charging (120V)",
    bestFor: "Hybrid EV Charging at Home, Occasional Users",
    speed: "Slow (approx. 5–8 km/hour or 3–5 miles/hour)",
    installation: "Plugs into a standard wall outlet.",
    highlights: ["Simple and affordable for basic charging needs."],
    icon: Zap,
  },
  {
    level: "Level 2 – Standard Charging (240V)",
    bestFor: "Apartments, Workplaces, and Commercial Parking",
    speed: "Moderate (approx. 30–50 km/hour or 20–30 miles/hour)",
    installation: "Requires professional installation.",
    highlights: [
      "Supports smart features (payment, scheduling, monitoring)",
      "Ideal for multi-user access",
      "Fast charging speed is suitable for a variety of use cases.",
      "Affordable upfront cost compared to DC Fast Charging.",
    ],
    icon: Battery,
  },
  {
    level: "DC Fast Charging – High-Speed Charging",
    bestFor: "Fleet Operators, Public Charging Stations, and Busy Locations.",
    speed: "Very fast (20–30 minutes to 80% charge).",
    installation: "Requires professional installation and specialized equipment.",
    highlights: [
      "High upfront cost, high-value return",
      "Best suited for high-traffic and time-sensitive environments.",
    ],
    icon: Gauge,
  },
]

export function GuideToChoose() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Guide to Choose the Right Commercial EV Charging Solution
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Match Your Property Type, Usage & User Needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {chargingLevels.map((level, index) => {
            const Icon = level.icon
            return (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{level.level}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Best For:</p>
                    <p className="text-sm text-muted-foreground">{level.bestFor}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Speed:</p>
                    <p className="text-sm text-muted-foreground">{level.speed}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Installation:</p>
                    <p className="text-sm text-muted-foreground">{level.installation}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Highlights:</p>
                    <ul className="space-y-1">
                      {level.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



