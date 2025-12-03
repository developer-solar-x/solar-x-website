"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calculator, TrendingUp } from "lucide-react"

const provinces = [
  { label: "Alberta", value: "ab" },
  { label: "British Columbia", value: "bc" },
  { label: "Nova Scotia", value: "ns" },
  { label: "Ontario", value: "on" },
]

export function AlbertaSavingsCalculator() {
  const [province, setProvince] = useState<string>("ab")
  const [monthlyCost, setMonthlyCost] = useState<string>("")
  const [systemSize, setSystemSize] = useState<string>("")
  const [savings, setSavings] = useState<{ five: number; ten: number; twentyFive: number } | null>(null)

  const calculateSavings = () => {
    if (!monthlyCost || !province) {
      return
    }

    const monthly = parseFloat(monthlyCost)
    if (isNaN(monthly) || monthly <= 0) {
      return
    }

    // Simplified calculation - in real app, this would use actual rates and formulas
    const annual = monthly * 12
    const estimatedSystemSize = Math.max(5, Math.min(15, (annual / 1000) * 0.7))
    setSystemSize(`${Math.round(estimatedSystemSize)}kW - ${Math.round(estimatedSystemSize * 1.2)}kW`)

    // Estimated savings calculations (simplified)
    const fiveYear = annual * 0.25 * 5
    const tenYear = annual * 0.35 * 10
    const twentyFiveYear = annual * 0.40 * 25

    setSavings({
      five: Math.round(fiveYear),
      ten: Math.round(tenYear),
      twentyFive: Math.round(twentyFiveYear),
    })
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Calculate Your Potential Savings in Alberta
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Calculate Your Payback
              </CardTitle>
              <CardDescription>
                Enter your information to estimate potential savings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="albertaProvince">Select your province</Label>
                <Select value={province} onValueChange={setProvince}>
                  <SelectTrigger id="albertaProvince">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        ({p.value.toUpperCase()}) {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="albertaMonthlyCost">Enter your monthly utility cost</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="albertaMonthlyCost"
                    type="number"
                    placeholder="0.00"
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(e.target.value)}
                    className="pl-7"
                  />
                </div>
              </div>

              <Button
                onClick={calculateSavings}
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!province || !monthlyCost}
              >
                Calculate Your Payback
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Your Estimated System Size
              </CardTitle>
              <CardDescription>
                {systemSize || "Complete the form to see your estimate"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {savings ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Potential Savings</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                        <span className="font-medium">5 Years:</span>
                        <span className="text-2xl font-bold text-primary">
                          ${savings.five.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                        <span className="font-medium">10 Years:</span>
                        <span className="text-2xl font-bold text-primary">
                          ${savings.ten.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                        <span className="font-medium">25 Years:</span>
                        <span className="text-2xl font-bold text-primary">
                          ${savings.twentyFive.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Fill out the calculator to see your potential savings</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



