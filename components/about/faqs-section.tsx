"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Building2, Wrench, Package, Settings, Sparkles } from "lucide-react"

const faqCategories = [
  {
    title: "Company",
    icon: Building2,
    gradient: "from-[#1a2b6b]/10 via-[#1a2b6b]/5 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
    questions: [
      {
        question: "What is Solar X Canada?",
        answer:
          "Solar X Canada is one of the fastest-growing and most experienced solar companies in Canada. We provide comprehensive solar energy solutions for both residential and commercial customers, helping Canadians reduce their carbon footprint while saving money on electricity bills.",
      },
      {
        question: "Where does Solar X Canada operate?",
        answer:
          "We operate across multiple provinces in Canada, including Alberta, Ontario, Nova Scotia, New Brunswick, and British Columbia. Our team is dedicated to bringing renewable energy solutions to communities throughout the country.",
      },
      {
        question: "What makes Solar X Canada different from other solar companies?",
        answer:
          "We stand out through our experience, top-tier products with competitive pricing, unique financing programs, and hassle-free turnkey solutions. We handle all paperwork, inspections, and coordination with municipalities, making the solar installation process seamless for our customers.",
      },
      {
        question: "Is Solar X Canada backed by a major partner?",
        answer:
          "Yes, we are supported by a major renewable investing partner that provides us with the stability required in an ever-changing marketplace, ensuring we'll be here for the long haul to support our customers.",
      },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    gradient: "from-[#ff4a4a]/10 via-[#ff4a4a]/5 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
    questions: [
      {
        question: "What services does Solar X Canada offer?",
        answer:
          "We offer comprehensive solar and battery solutions for both residential and commercial properties, including solar panel installation, battery storage systems, EV charging solutions, HVAC services, and full turnkey project management.",
      },
      {
        question: "What is Solar X Canada's turnkey solution?",
        answer:
          "Our full turnkey solution provides you with a complete package of top-tier products and professional services. We take care of everything from site assessment and system design to installation, permits, inspections, and utility interconnection—all you need to do is sit back and start saving money.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we offer our low-interest Sunline financing program with rates as low as 0%, making solar energy more accessible and affordable. We also help you navigate government rebate programs to maximize your savings.",
      },
      {
        question: "What warranties do you provide?",
        answer:
          "We provide comprehensive warranties including a 25-year performance warranty for solar panels, a 10-year product warranty, a 2-year labor warranty, and a 10-year warranty on microinverters (extendable to 20 years). We also carry a minimum limit of liability of $5,000,000 during installation and post-installation.",
      },
    ],
  },
  {
    title: "Products",
    icon: Package,
    gradient: "from-[#1a2b6b]/10 via-[#1a2b6b]/5 to-transparent",
    borderColor: "border-[#1a2b6b]/20",
    iconColor: "text-[#1a2b6b]",
    bgColor: "bg-[#1a2b6b]/5",
    questions: [
      {
        question: "What type of solar panels does Solar X Canada use?",
        answer:
          "We use high-efficiency monocrystalline panels with advanced cell technology, known for their higher efficiency and excellent low-light performance. These panels are designed to work effectively even in foggy, rainy, and snowy conditions.",
      },
      {
        question: "Why do you use microinverters instead of traditional inverters?",
        answer:
          "Microinverters convert direct current into alternating current at the module level, maximizing energy conversion and avoiding fire hazards from high voltage on rooftops. They're more efficient, safer, and easier to maintain. Our APSystem microinverters also include module-level monitoring so you can track production in real-time via your phone or computer.",
      },
      {
        question: "What brands does Solar X Canada work with?",
        answer:
          "We partner with industry-leading manufacturers including LONGI for solar modules (with third-party insurance provided by Munich RE) and APSystems for microinverters, ensuring you receive top-quality, reliable equipment.",
      },
    ],
  },
  {
    title: "Installation & Process",
    icon: Settings,
    gradient: "from-[#ff4a4a]/10 via-[#ff4a4a]/5 to-transparent",
    borderColor: "border-[#ff4a4a]/20",
    iconColor: "text-[#ff4a4a]",
    bgColor: "bg-[#ff4a4a]/5",
    questions: [
      {
        question: "How long does the installation process take?",
        answer:
          "In most cases, it takes around 4-6 months from site assessment to when the system is online. The timeline varies depending on factors such as municipality processing times, weather conditions, and system complexity. Our team keeps you updated throughout the entire process.",
      },
      {
        question: "What steps are involved in getting a solar system?",
        answer:
          "The process includes site assessment, system design, structural and engineering design, utility connection applications, rebate applications, building permits, hardware installation, electrical installation, inspections, utility interconnection, and ongoing monitoring. Don't worry—we handle all of this for you as part of our turnkey solution.",
      },
      {
        question: "Do I need to maintain my solar panels?",
        answer:
          "Solar panels require minimal maintenance as they're designed to withstand various weather conditions. We recommend periodic cleaning to remove dust, debris, or snow buildup for optimal performance. Our team can provide maintenance services if needed.",
      },
      {
        question: "Will animals damage my solar panels?",
        answer:
          "Solar X Canada installs critter guards on your solar system to prevent animals from entering. This is a mesh that wraps around the ends of your solar system, protecting it from wildlife.",
      },
    ],
  },
]

export function AboutFAQsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="faqs" className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff4a4a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a2b6b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#ff4a4a]" />
            <span className="text-sm font-medium text-[#ff4a4a]">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="text-[#ff4a4a]">Questions</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff4a4a] via-[#ff4a4a]/50 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Solar X Canada, our services, products, and installation process.
          </p>
        </div>

        {/* Premium FAQ Categories with Cards */}
        <div className="space-y-6">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className={`group relative rounded-2xl border-2 ${category.borderColor} bg-gradient-to-br ${category.gradient} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] overflow-hidden`}
                onMouseEnter={() => setActiveCategory(categoryIndex)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Category Header */}
                <div className="relative p-6 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bgColor} border ${category.borderColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className={`w-7 h-7 ${category.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.questions.length} {category.questions.length === 1 ? "question" : "questions"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <div className="relative p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b border-border/30 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4 group/trigger hover:text-[#ff4a4a] transition-colors duration-200">
                          <span className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 flex items-center justify-center text-xs font-bold text-[#ff4a4a] mt-0.5 group-hover/trigger:bg-[#ff4a4a] group-hover/trigger:text-white transition-colors">
                              {faqIndex + 1}
                            </span>
                            <span className="flex-1">{faq.question}</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line pt-2 pb-4 pl-9">
                          <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff4a4a]/30 to-transparent" />
                            <p className="pl-4">{faq.answer}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} />
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-[#ff4a4a]/10 via-[#ff4a4a]/5 to-transparent border border-[#ff4a4a]/20 backdrop-blur-sm">
            <p className="text-lg font-semibold text-foreground">
              Still have questions?
            </p>
            <p className="text-muted-foreground max-w-md">
              Our expert team is here to help. Contact us for personalized assistance with your solar energy needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

