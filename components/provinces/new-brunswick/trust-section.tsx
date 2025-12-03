"use client"

import { Shield, Award, CheckCircle } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "We ensure we meet all federal and provincial regulations and standards",
  },
  {
    icon: Award,
    title: "Nationally Recognized",
    description: "Trusted by thousands of Canadian homeowners and businesses",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "Comprehensive warranties and ongoing support for your peace of mind",
  },
]

export function TrustSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            One of Canada's Most Trusted Contractors for Clean Energy Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We ensure we meet all federal and provincial regulations and standards
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



