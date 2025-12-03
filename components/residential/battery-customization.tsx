"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Refrigerator, Smartphone, Tv, Laptop, Lightbulb } from "lucide-react"

const provinces = [
  "Ontario",
  "British Columbia",
  "Alberta",
  "Nova Scotia",
  "Prince Edward Island",
]

const appliances = [
  { icon: Wifi, name: "Wi-Fi Router" },
  { icon: Refrigerator, name: "Refrigerator" },
  { icon: Smartphone, name: "Phone Charger" },
  { icon: Tv, name: "Television" },
  { icon: Laptop, name: "Laptop/Home PC" },
  { icon: Lightbulb, name: "Lamp" },
]

export function BatteryCustomization() {
  const [selectedProvince, setSelectedProvince] = useState<string>("Ontario")

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Customize Your Battery Needs
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            The Best Choice of Reliable Power Solutions
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {provinces.map((province) => (
              <button
                key={province}
                onClick={() => setSelectedProvince(province)}
                className={`rounded-lg px-6 py-3 font-medium transition-colors ${
                  selectedProvince === province
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {province}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
              Estimated Power Module Needed
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Solutions</CardTitle>
                  <CardDescription>5 kW/13.5 kWh</CardDescription>
                  <CardDescription className="mt-2">
                    1 Hybrid Inverter + 1 Battery Module
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="mb-4">
                      <p className="text-lg font-bold text-primary mb-2">PION</p>
                      <p className="text-xs text-muted-foreground">Pion Power Logo</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Battery Last Days</p>
                      <p className="text-2xl font-bold">14 Days</p>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-medium text-muted-foreground">
                        Supporting Appliances
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {appliances.map((appliance, index) => {
                          const Icon = appliance.icon
                          return (
                            <div key={index} className="flex items-center gap-2">
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="text-sm">{appliance.name}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Battery Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Contact us for a customized solution tailored to your specific energy needs.
                      Our premium battery solutions offer extended capacity and advanced features.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

