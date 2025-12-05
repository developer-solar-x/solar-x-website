"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "How long do HVAC units last for?",
    answer: "HVAC units typically last between 15-20 years with proper maintenance. Regular servicing and timely repairs can extend their lifespan significantly.",
  },
  {
    question: "How often should I clean or check the filter for my HVAC units?",
    answer: "It's recommended to check your HVAC filter monthly and replace or clean it every 1-3 months, depending on usage and filter type. Homes with pets or allergies may need more frequent changes.",
  },
  {
    question: "How do I know if my HVAC units should be replaced?",
    answer: "Signs that your HVAC unit may need replacement include frequent breakdowns, rising energy bills, inconsistent temperatures, unusual noises, and the unit being over 15 years old. A professional assessment can help determine if repair or replacement is best.",
  },
  {
    question: "How much is a water heater?",
    answer: "Water heater costs vary based on type, size, and installation complexity. Tankless water heaters typically range from $1,500-$3,500, while traditional tank heaters range from $800-$2,000. Installation costs are additional.",
  },
  {
    question: "Can I repair my HVAC unit myself?",
    answer: "While some basic maintenance like changing filters can be done yourself, most HVAC repairs should be handled by licensed professionals. DIY repairs can void warranties, create safety hazards, and potentially cause more expensive damage.",
  },
  {
    question: "What's the difference between tankless and tank water heaters?",
    answer: "Tankless water heaters heat water on-demand, providing endless hot water and higher energy efficiency, but have higher upfront costs. Tank water heaters store and continuously heat a large volume of water, are more affordable initially, but can run out of hot water and are less energy-efficient.",
  },
]

export function HvacFaqsSection() {
  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, 3)
  const rightColumnFaqs = faqs.slice(3, 6)

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section - Left Aligned */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
            FAQs
          </h2>
          <p className="text-lg text-foreground">
            We're here to answer all your questions
          </p>
        </div>

        {/* Two Column FAQ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 relative">
          {/* Left Column */}
          <div className="space-y-0">
            {leftColumnFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <Link 
                  href="/about#faqs"
                  className="flex items-center justify-between py-4 group hover:opacity-80 transition-opacity"
                >
                  <span className="text-base text-foreground font-normal pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                </Link>
              </div>
            ))}
            
            {/* Button below left column */}
            <div className="mt-6">
              <Link href="/about#faqs">
                <Button 
                  size="lg"
                  variant="ghost"
                  className="glass-pill-button flex items-center gap-2 text-lg font-semibold"
                >
                  Browse all FAQs
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

          {/* Right Column */}
          <div className="space-y-0">
            {rightColumnFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <Link 
                  href="/about#faqs"
                  className="flex items-center justify-between py-4 group hover:opacity-80 transition-opacity"
                >
                  <span className="text-base text-foreground font-normal pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight className="w-4 h-4 text-foreground shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



