"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Moon, AlertTriangle } from "lucide-react"

const scenarios = [
  {
    id: "day",
    label: "Day Time",
    icon: Sun,
    title: "Day Time",
    description:
      "If your solar panels produce more than your home needs, the excess is used to charge your battery until its full. Anything leftover is sent to the grid. If your panels aren't producing enough, your battery makes up the difference until it hits its minimum capacity.",
  },
  {
    id: "night",
    label: "Night Time",
    icon: Moon,
    title: "Night Time",
    description:
      "At night, the battery will be prioritized to offset your home's energy use. If the battery's State of Charge (SOC) reaches the reserved capacity threshold, your home will start drawing additional electricity from the grid.",
  },
  {
    id: "outage",
    label: "Power Shortage",
    icon: AlertTriangle,
    title: "Power Shortage",
    description:
      "During a power outage, your solar and battery system continue to operate. Your panels work to power your home, and any excess energy is stored in your battery. If the solar can't meet your home's energy needs, the battery will make up the difference.",
  },
]

export function PowerScenarios() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Net Metering & Load Displacement
          </h2>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="day" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon
                return (
                  <TabsTrigger key={scenario.id} value={scenario.id} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{scenario.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {scenarios.map((scenario) => {
              const Icon = scenario.icon
              return (
                <TabsContent key={scenario.id} value={scenario.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{scenario.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {scenario.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}



