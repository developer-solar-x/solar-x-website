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
    question: "What are the benefits of commercial solar installation?",
    answer:
      "Commercial solar installations offer numerous benefits including significant cost savings on electricity bills, reduced carbon footprint, improved brand image, protection against rising energy costs, and access to various government incentives and tax credits. Businesses can also generate additional revenue through net metering programs.",
  },
  {
    question: "How long does a commercial solar installation take?",
    answer:
      "The timeline for commercial solar installation varies depending on system size and complexity. Typically, smaller commercial installations (50kW-500kW) take 2-4 months from contract signing to completion, while larger projects can take 6-12 months. This includes design, permitting, equipment procurement, installation, and commissioning phases.",
  },
  {
    question: "What is the typical payback period for commercial solar?",
    answer:
      "Commercial solar systems typically have payback periods of 5-10 years, depending on factors such as system size, electricity rates, available incentives, and energy consumption patterns. With government rebates and tax credits, many businesses see faster returns on their investment.",
  },
  {
    question: "Are there financing options available for commercial solar?",
    answer:
      "Yes, we offer various financing options including solar loans, leases, power purchase agreements (PPAs), and energy service agreements. These options allow businesses to go solar with little or no upfront cost while still benefiting from reduced energy expenses.",
  },
  {
    question: "What maintenance is required for commercial solar panels?",
    answer:
      "Commercial solar systems require minimal maintenance. Regular cleaning to remove dirt and debris, periodic inspections, and monitoring system performance are typically sufficient. Most systems include monitoring software that alerts you to any issues. Panels are designed to withstand harsh weather conditions and come with 25-year performance warranties.",
  },
  {
    question: "Can solar panels work in Canadian winters?",
    answer:
      "Yes, solar panels work efficiently in cold weather and can even perform better in cold temperatures. While shorter days and potential snow coverage may temporarily reduce output, modern panels are designed for Canadian climates. Snow typically slides off angled panels, and any production during winter months is still valuable with net metering programs.",
  },
  {
    question: "What size system do I need for my business?",
    answer:
      "The ideal system size depends on your business's energy consumption, available roof or ground space, budget, and goals. We conduct a comprehensive energy audit and site assessment to determine the optimal system size. Most commercial systems range from 50kW to several megawatts, with systems designed to offset 50-100% of your electricity consumption.",
  },
  {
    question: "What incentives are available for commercial solar in Canada?",
    answer:
      "Canadian businesses can access various incentives including the Clean Energy Investment Tax Credit (up to 30% tax credit), provincial rebates, accelerated depreciation, and net metering programs. Incentives vary by province, and our team helps you identify and apply for all available programs to maximize your savings.",
  },
]

export function CommercialSolarFAQs() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">FAQs</h2>
          <p className="mt-4 text-lg text-muted-foreground">Common questions about commercial solar solutions</p>
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
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us for More Information
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



