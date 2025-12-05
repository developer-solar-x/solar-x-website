"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Refrigerator, Smartphone, Tv, Laptop, Lightbulb, Timer, Battery, Shield } from "lucide-react"

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
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null)

  const tabsRef = useRef<HTMLDivElement | null>(null)
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const hoverTimeoutRef = useRef<number | null>(null)

  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  // Smoothly move underline to hovered tab, or selected tab when not hovering
  useEffect(() => {
    const currentProvince = hoveredProvince ?? selectedProvince
    const currentEl = tabButtonRefs.current[currentProvince]
    const containerEl = tabsRef.current

    if (!currentEl || !containerEl) return

    const currentRect = currentEl.getBoundingClientRect()
    const containerRect = containerEl.getBoundingClientRect()

    setUnderlineStyle({
      left: currentRect.left - containerRect.left,
      width: currentRect.width,
    })
  }, [selectedProvince, hoveredProvince])

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

        {/* Province tabs */}
        <div className="mt-12">
          <div className="border-b border-border/80">
            <div
              ref={tabsRef}
              className="relative flex flex-wrap justify-center gap-10 sm:gap-16 text-sm sm:text-base"
            >
              {provinces.map((province) => (
                <button
                  key={province}
                  ref={(el) => {
                    tabButtonRefs.current[province] = el
                  }}
                  onClick={() => setSelectedProvince(province)}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      window.clearTimeout(hoverTimeoutRef.current)
                    }
                    setHoveredProvince(province)
                  }}
                  onMouseLeave={() => {
                    // Small delay before snapping back so movement feels smoother
                    hoverTimeoutRef.current = window.setTimeout(() => {
                      setHoveredProvince(null)
                    }, 160)
                  }}
                  className={`pb-3 pt-1 font-medium transition-colors ${
                    selectedProvince === province ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {province}
                </button>
              ))}

              {/* Animated underline that follows hover and rests on the selected tab */}
              <span
                className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-primary transition-all duration-500 ease-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </div>
          </div>

          <div className="mt-8">
          {/* Outer dark container matching reference layout */}
          <div className="rounded-2xl border border-slate-900 bg-gradient-to-br from-[#020617] via-[#020617] to-[#050816] p-5 sm:p-7 lg:p-9">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
              {/* Dark, high-contrast Essential Solutions card */}
              <Card className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#050816] min-h-[320px]">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                  {/* Top: heading + capacity */}
                  <div className="space-y-4 -mt-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/70">
                      Estimated Power Module Needed
                    </p>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-slate-100">
                        Essential Solutions
                      </p>
                      <p className="text-xl font-semibold text-[#ffd95a]">
                        5 kW / 13.5 kWh
                      </p>
                    </div>
                    <div className="h-px w-full bg-slate-700/60" />
                    <p className="text-sm text-slate-100">
                      1 Hybrid Inverter + 1 Battery Module
                    </p>
                  </div>

                  {/* Bottom: Pion branding + visual layout */}
                  <div className="mt-8 space-y-6">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold tracking-wide text-[#33b1ff]">
                        PION
                      </p>
                      <p className="text-xs text-slate-400">Pion Power Logo</p>
                    </div>

                    {/* Simple visual stand-in where inverter + battery imagery would live */}
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-10 rounded-2xl border border-slate-700/70 bg-[#0b1022] px-6 py-8">
                      <div className="h-32 w-28 rounded-xl border border-slate-500/60 bg-gradient-to-b from-slate-200 to-slate-100" />
                      <div className="h-40 w-32 rounded-xl border border-slate-500/60 bg-gradient-to-b from-slate-200 to-slate-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right column: stacked cards matching reference layout */}
              <div className="flex h-full flex-col gap-5">
                {/* Battery Last Days card */}
                <Card className="rounded-xl border border-slate-800 bg-[#0b1022] text-slate-50 min-h-[132px]">
                  <CardContent className="flex h-full items-center justify-between px-6 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/70">
                        Battery Last Days
                      </p>
                      <p className="text-3xl md:text-4xl font-extrabold text-[#ffd95a]">
                        14 Days
                      </p>
                    </div>
                    <p className="hidden text-xs font-medium text-slate-400/90 sm:block">
                      Typical autonomy with<br />essential loads covered.
                    </p>
                  </CardContent>
                </Card>

                {/* Supporting Appliances card */}
                <Card className="flex-1 rounded-xl border border-slate-800 bg-[#0b1022] text-slate-50">
                  <CardContent className="h-full p-6 sm:p-8 lg:p-9">
                    <div className="flex h-full flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/70">
                          Supporting Appliances
                        </p>
                      </div>
                      {/* Grid wrapper grows to use remaining height and keeps content higher in the card */}
                      <div className="mt-6 flex-1">
                        <div className="grid w-full grid-cols-2 gap-x-20 gap-y-14 text-sm">
                          {appliances.map((appliance, index) => {
                            const Icon = appliance.icon
                            return (
                            <div key={index} className="flex flex-col items-center gap-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#050816] text-[#facc15]">
                                <Icon className="h-5 w-5" />
                              </span>
                              <span className="text-slate-100 text-center leading-snug">
                                {appliance.name}
                              </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            </div>

            {/* Premium Battery Solution card placed directly below Estimated Power Module Needed */}
            <div className="mt-12">
              <Card className="rounded-xl border border-border bg-background shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Premium Battery Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Contact us for a customized solution tailored to your specific energy needs. Our premium battery solutions offer extended capacity and advanced features.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

