"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How Long do Solar Panels Last?",
    answer:
      "Solar panels are designed to last 25-30 years or more. Most manufacturers provide a performance warranty guaranteeing that panels will produce at least 80% of their rated power output after 25 years. With proper maintenance, many solar panels continue to function efficiently well beyond their warranty period.",
  },
  {
    question: "What is the average payback period with solar?",
    answer:
      "The average payback period for residential solar systems in Canada typically ranges from 8-12 years, depending on factors such as system size, electricity rates, available incentives, and sunlight exposure. With government rebates and net metering programs, homeowners often see faster returns on their investment.",
  },
  {
    question: "Can I sell my house if I finance a system?",
    answer:
      "Yes, you can sell your house if you have a financed solar system. The solar system typically increases your home's value, and the new homeowner can either take over the financing agreement or pay off the system as part of the home purchase. Solar panels are generally seen as a valuable asset that can make your property more attractive to buyers.",
  },
  {
    question: "Do solar panels work during the winter?",
    answer:
      "Yes, solar panels do work during the winter, though they may produce less electricity due to shorter days and potential snow coverage. Modern solar panels are designed to perform in cold weather and can even be more efficient in cold temperatures. Snow typically slides off angled panels, and any production is still valuable, especially with net metering programs.",
  },
  {
    question: "How do I know if my house is right for solar?",
    answer:
      "Your house is a good candidate for solar if it has a roof that receives adequate sunlight (south, east, or west-facing), is in good condition, and has minimal shading from trees or other structures. Our team conducts a comprehensive site assessment that evaluates roof orientation, shading, structural integrity, and local regulations to determine if solar is right for your home.",
  },
  {
    question: "What system size should I install?",
    answer:
      "The ideal system size depends on your household's energy consumption, available roof space, budget, and goals. We analyze your past electricity bills to determine your average usage and design a system that can offset 80-100% of your consumption. Most residential systems range from 5kW to 15kW, but we'll recommend the optimal size during your free consultation.",
  },
]

export function SolarSolutionsFAQs() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">FAQs</h2>
          <p className="mt-4 text-lg text-muted-foreground">We're here to answer all your questions</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Browse all FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



