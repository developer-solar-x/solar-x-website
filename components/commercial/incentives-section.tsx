"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const provinces = [
  "Canada Wide",
  "Ontario",
  "Alberta",
  "Nova Scotia",
  "Prince Edward Island",
  "British Columbia",
  "New Brunswick",
]

const incentives = [
  {
    province: "Canada Wide",
    title: "Clean Energy Investment Tax Credit (ITC)",
    status: "Hot Offer",
    statusType: "hot",
    description:
      "Organizations who make a clean energy investment between March 28, 2023 and 2035 are eligible for an investment tax credit refund. You can receive a tax credit of up to 30% on the capital cost of eligible solar generation and storage equipment.",
    details: [
      "Available for investments made between March 28, 2023 and 2035",
      "Up to 30% tax credit on eligible solar and storage equipment",
      "Applies to both solar generation and energy storage systems",
      "Can be combined with other provincial incentives",
      "Refundable tax credit for eligible businesses",
    ],
    eligibility: "Commercial businesses, non-profits, and organizations investing in clean energy",
    deadline: "2035",
  },
  {
    province: "Ontario",
    title: "Ontario Energy and Property Tax Credit",
    status: "Available",
    statusType: "default",
    description:
      "Various programs available for commercial solar installations in Ontario, including property tax exemptions and energy efficiency rebates.",
    details: [
      "Property tax exemptions for solar installations",
      "Energy efficiency rebates for commercial buildings",
      "Net metering programs for excess energy",
      "Green Energy Act support programs",
    ],
    eligibility: "Commercial property owners in Ontario",
    deadline: "Ongoing",
  },
  {
    province: "Alberta",
    title: "Alberta Commercial Solar Programs",
    status: "Available",
    statusType: "default",
    description:
      "Alberta offers various incentives for commercial solar installations, including municipal rebates and energy efficiency programs.",
    details: [
      "Municipal rebate programs (varies by municipality)",
      "Energy efficiency grants for commercial buildings",
      "Net metering for commercial installations",
      "Business energy efficiency programs",
    ],
    eligibility: "Commercial businesses in Alberta",
    deadline: "Varies by program",
  },
  {
    province: "Nova Scotia",
    title: "Nova Scotia Commercial Solar Incentives",
    status: "Available",
    statusType: "default",
    description:
      "Nova Scotia provides incentives for commercial solar installations through various provincial and municipal programs.",
    details: [
      "SolarHomes program extensions for commercial",
      "Energy efficiency rebates",
      "Net metering programs",
      "Green building incentives",
    ],
    eligibility: "Commercial property owners in Nova Scotia",
    deadline: "Ongoing",
  },
  {
    province: "Prince Edward Island",
    title: "PEI Commercial Solar Rebates",
    status: "Available",
    statusType: "default",
    description:
      "Prince Edward Island offers rebates and incentives for commercial solar installations to support renewable energy adoption.",
    details: [
      "Provincial rebate programs",
      "Net metering for commercial systems",
      "Energy efficiency incentives",
      "Green energy support programs",
    ],
    eligibility: "Commercial businesses in PEI",
    deadline: "Ongoing",
  },
  {
    province: "British Columbia",
    title: "BC Commercial Solar Incentives",
    status: "Available",
    statusType: "default",
    description:
      "British Columbia provides various incentives for commercial solar installations, including rebates and tax incentives.",
    details: [
      "BC Hydro commercial programs",
      "Municipal rebate programs",
      "Net metering for commercial installations",
      "CleanBC commercial incentives",
    ],
    eligibility: "Commercial businesses in British Columbia",
    deadline: "Ongoing",
  },
  {
    province: "New Brunswick",
    title: "New Brunswick Commercial Solar Programs",
    status: "Available",
    statusType: "default",
    description:
      "New Brunswick offers incentives and programs to support commercial solar installations across the province.",
    details: [
      "Provincial energy efficiency programs",
      "Net metering for commercial systems",
      "Green building incentives",
      "Municipal support programs",
    ],
    eligibility: "Commercial property owners in New Brunswick",
    deadline: "Ongoing",
  },
]

export function IncentivesSection() {
  const [selectedProvince, setSelectedProvince] = useState<string>("Canada Wide")

  return (
    <section id="incentives" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Commercial Renewable Energy Incentives
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A variety of rebates from the government and organisations is available to reduce upfront investment costs. 
            Explore incentives available in your province to maximize your savings and ROI.
          </p>
        </div>

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

        <div className="space-y-6">
          {incentives
            .filter((incentive) => 
              selectedProvince === "Canada Wide" 
                ? incentive.province === "Canada Wide" 
                : incentive.province === selectedProvince
            )
            .map((incentive, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={incentive.statusType === "hot" ? "destructive" : "default"}
                      className="text-sm"
                    >
                      {incentive.status}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {incentive.deadline === "Ongoing" ? "Open" : `Until ${incentive.deadline}`}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{incentive.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Eligibility:</strong> {incentive.eligibility}
                  </p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {incentive.description}
                  </CardDescription>
                  
                  {incentive.details && incentive.details.length > 0 && (
                    <Accordion type="single" collapsible className="mb-4">
                      <AccordionItem value={`details-${index}`} className="border-none">
                        <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                          View Program Details
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            {incentive.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                  
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Request More Information
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

