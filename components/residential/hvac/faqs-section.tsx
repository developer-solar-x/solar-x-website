"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

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
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">FAQs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to answer all your questions
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <Button variant="outline">
            Browse all FAQs
          </Button>
        </div>
      </div>
    </section>
  )
}



