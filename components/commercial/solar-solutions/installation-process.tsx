"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const processSteps = [
  {
    step: 1,
    title: "Needs Assessment",
    description:
      "We start by understanding your energy needs, site conditions, and goals for solar installation.",
    icon: "📋",
  },
  {
    step: 2,
    title: "Custom Design",
    description:
      "Based on the assessment, a tailored system design will be created focusing on technical specifications and feasibility.",
    icon: "🎨",
  },
  {
    step: 3,
    title: "Proposal & Agreement",
    description:
      "Deliver a comprehensive proposal that includes system performance estimates, financial analysis, and projected savings, followed by formalizing the agreement.",
    icon: "📄",
  },
  {
    step: 4,
    title: "Planning & Permits",
    description: "Develop a project plan and handle all necessary permits and approvals.",
    icon: "📝",
  },
  {
    step: 5,
    title: "Installation & Commissioning",
    description:
      "The experienced team will carry out the system installation, followed by thorough testing and commissioning. This ensures the system meets all project targets, adheres to industry standards, and functions as expected.",
    icon: "🔧",
  },
  {
    step: 6,
    title: "Handover & Warranty Start",
    description:
      "Upon final inspection, comprehensive documentation will be provided and training sessions will be conducted to ensure seamless operation of the system. The warranty period will begin at this stage, ensuring long-term support and reliability.",
    icon: "✅",
  },
]

export function InstallationProcessSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Installation Process of Commercial Solar Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Full Turnkey Solution</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {processSteps.map((step) => (
            <Card key={step.step} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="#contact">
            <Button size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-white hover:bg-primary/90">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



