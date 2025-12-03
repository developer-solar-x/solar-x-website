"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingUp, DollarSign, Calendar } from "lucide-react"

const incentives = [
  {
    title: "Clean Energy Investment Tax Credit",
    description: "Organizations who make a clean energy investment between March 28, 2023 and 2035 are eligible for an investment tax credit refund. You can receive a tax credit of up to 30% on the capital cost of eligible solar generation and storage equipment.",
    badge: "Hot Offer",
    status: "Open",
    period: "March 28, 2023 - 2035",
    credit: "Up to 30%",
  },
]

const provinces = [
  { label: "Canada Wide", value: "canada" },
  { label: "Ontario", value: "ontario" },
  { label: "Alberta", value: "alberta" },
  { label: "Nova Scotia", value: "nova-scotia" },
  { label: "Prince Edward Island", value: "pei" },
  { label: "British Columbia", value: "bc" },
]

export function IncentivesSection() {
  return (
    <section id="incentives" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Commercial Solar Energy Incentives
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Canadian businesses can access various rebates to help cover the cost of solar panel installation.
          </p>
        </div>

        {/* Province Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {provinces.map((province) => (
            <Button
              key={province.value}
              variant="outline"
              className="rounded-full"
            >
              {province.label}
            </Button>
          ))}
        </div>

        {/* Incentive Cards */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-12">
          {incentives.map((incentive, index) => (
            <Card key={index} className="relative border-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{incentive.title}</CardTitle>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="destructive" className="bg-[#e31b23]">
                      {incentive.badge}
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {incentive.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {incentive.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Period:</span>
                    <span className="font-medium">{incentive.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Credit:</span>
                    <span className="font-bold text-primary text-lg">{incentive.credit}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="#contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get a Free Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



