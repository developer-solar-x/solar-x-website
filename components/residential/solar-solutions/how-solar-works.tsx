"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Moon } from "lucide-react"

export function HowSolarWorksSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Day Time */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Sun className="w-8 h-8 text-yellow-500" />
                <CardTitle className="text-2xl">Day Time</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                During the daytime, solar panels absorb sunlight and generate DC electricity. This electricity is then
                converted into AC electricity by inverters for use in your home. Any excess electricity is sent to the
                grid, earning you credits for future use.
              </p>
            </CardContent>
          </Card>

          {/* Night Time */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Moon className="w-8 h-8 text-blue-500" />
                <CardTitle className="text-2xl">Night Time</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                At night, when solar panels are not generating electricity, you can use the credits earned during the day
                to draw electricity from the grid. This ensures a continuous power supply, even when there is no
                sunlight.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



