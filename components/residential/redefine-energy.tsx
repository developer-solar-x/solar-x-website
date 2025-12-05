import { Zap, Battery, Clock, Leaf } from "lucide-react"
import Image from "next/image"

const topRowCards = [
  {
    title: "Energy Saving",
    description: "A permanent answer to rising electricity rates",
    image: "/newhero/energysavings.jpg",
    hasImage: true,
  },
  {
    title: "Increase Property Value",
    description: "The smartest upgrade for your home",
    image: "/newhero/property value.jpg",
    hasImage: true,
  },
]

const bottomRowCards = [
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
          {/* Top Row - Left Card: Energy Saving */}
          <div className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src={topRowCards[0].image}
                alt={`${topRowCards[0].title} - ${topRowCards[0].description} - Solar energy savings for homeowners`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground">{topRowCards[0].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{topRowCards[0].description}</p>
          </div>

          {/* Top Row - Center Large Banner */}
          <div className="relative col-span-1 md:col-span-2 overflow-hidden rounded-xl shadow-xl">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg"
                alt="Aerial view of residential neighborhood with solar panels on rooftops - renewable energy home installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="text-2xl md:text-4xl font-bold text-white">Redefine Your Home's Energy</h2>
                <p className="mt-2 text-base md:text-lg text-white/90">All about Savings</p>
              </div>
            </div>
          </div>

          {/* Top Row - Right Card: Increase Property Value */}
          <div className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src={topRowCards[1].image}
                alt={`${topRowCards[1].title} - ${topRowCards[1].description} - Increase home value with solar panels`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground">{topRowCards[1].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{topRowCards[1].description}</p>
          </div>

          {/* Bottom Row Cards */}
          {bottomRowCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
