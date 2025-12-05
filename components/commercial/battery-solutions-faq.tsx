"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type React from "react"

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        question: "What is a Commercial Battery Energy Storage System (BESS)?",
        answer:
          "A Commercial Battery Energy Storage System (BESS) is a large-scale energy storage solution designed for businesses and commercial facilities. It stores excess electricity from renewable sources (like solar panels) or the grid, allowing businesses to use stored energy during peak demand hours, reduce electricity costs, and provide backup power during outages.",
      },
      {
        question: "How much do commercial battery systems cost?",
        answer:
          "The cost of a commercial battery energy storage system varies based on capacity, technology type, installation complexity, and site requirements. However, with the Clean Energy Investment Tax Credit available in Canada (up to 30% on eligible equipment), along with various provincial rebates and our flexible in-house financing options, commercial BESS is now more affordable than ever. Contact us at 1-888-318-1988 or info@solar-x.ca for a customized quote.",
      },
      {
        question: "What are the main benefits of commercial battery storage?",
        answer:
          "Commercial battery storage offers several key benefits:\n\n• Emergency Backup: Ensures continuity of critical services during power outages\n\n• Peak Load Management: Avoid peak-hour electricity rates by using stored energy, reducing demand charges\n\n• Demand-Response: Fast response to energy supply and demand fluctuations\n\n• Lower Emissions: Store surplus renewable energy and charge when carbon intensity is low, discharge when it's high\n\n• Financial Savings: Achieve cash flow positivity through reduced electricity costs and demand charge management",
      },
      {
        question: "What warranties and safety standards do commercial battery systems meet?",
        answer:
          "Our commercial battery systems meet top safety standards including CSA, UL9540, and ESA compliance. All designs meet local electrical codes and utility requirements. We provide comprehensive warranties on equipment and installation, with detailed warranty information provided in your project proposal. Our systems include intelligent fire protection, multi-sensor monitoring, and explosion prevention features.",
      },
      {
        question: "How does commercial battery storage integrate with solar panels?",
        answer:
          "Commercial battery storage seamlessly integrates with solar panel systems. During the day, solar panels generate electricity that can power your facility directly. Excess energy is stored in the battery system for later use. This allows you to maximize self-consumption of solar energy, reduce grid dependency, and use stored energy during peak demand hours or power outages.",
      },
    ],
  },
  {
    title: "Product & Technology",
    questions: [
      {
        question: "What types of commercial battery systems do you offer?",
        answer:
          "We offer two main types of outdoor commercial battery storage systems:\n\n1. Air-Cooling Outdoor Energy Storage (275kWh): Built with IP55 protection and intelligent fire protection, reliable in extreme Canadian weather. Features advanced thermal control with a 5kW wall-mounted air conditioner and built-in fans. Supports parallel connections up to 5 units.\n\n2. Liquid-Cooling Outdoor Energy Storage (261kWh): Faster heat dissipation reduces energy loss and ensures stable, high-rate charge and discharge performance. Features precision liquid cooling that keeps cell temperature difference ≤5°C. Supports up to 10 units in parallel and is compatible with 1000V DC systems.",
      },
      {
        question: "What is the difference between air-cooling and liquid-cooling systems?",
        answer:
          "Air-cooling systems use fans and air conditioning units to manage temperature, making them suitable for moderate climates and smaller installations. Liquid-cooling systems use a liquid-based cooling mechanism that provides more efficient heat dissipation, resulting in better performance, longer battery life, and higher efficiency. Liquid-cooling is ideal for larger installations and applications requiring high-rate charge/discharge performance.",
      },
      {
        question: "How scalable are commercial battery systems?",
        answer:
          "Our commercial battery systems are highly scalable. Air-cooling systems support parallel connections up to 5 units (up to 1,375kWh total capacity), while liquid-cooling systems support up to 10 units in parallel (up to 2,610kWh total capacity). Both systems are designed for easy expansion, allowing you to add capacity as your energy needs grow without disrupting existing operations.",
      },
      {
        question: "What is the Energy Management System (EMS)?",
        answer:
          "The Energy Management System (EMS) is an intelligent control system that remotely monitors and controls your battery storage. It provides real-time data on battery management system (BMS) metrics including peak shaving, temperature, voltage, current, power, and protection management. The EMS enables precise energy dispatch for both on-grid and off-grid applications, optimizing energy efficiency to match your business needs.",
      },
      {
        question: "What communication protocols do the systems support?",
        answer:
          "Our liquid-cooling systems support multiple communication protocols including IEC104, Modbus-RTU/TCP, MQTT, DL/T645, and more. This provides faster, simpler, and low-latency connectivity without requiring extra converters, making integration with existing building management systems seamless.",
      },
      {
        question: "Are the battery systems suitable for Canadian weather conditions?",
        answer:
          "Yes, our commercial battery systems are specifically designed for Canadian weather conditions. The air-cooling systems feature IP55 protection and intelligent fire protection, making them reliable in extreme weather. Both systems include advanced thermal management to ensure stable operation in cold winters and hot summers, maintaining optimal performance year-round.",
      },
    ],
  },
  {
    title: "Financial & Incentives",
    questions: [
      {
        question: "What incentives are available for commercial battery storage in Canada?",
        answer:
          "There are several incentives available across Canada:\n\n• Clean Energy Investment Tax Credit: Organizations making clean energy investments between March 28, 2023 and 2035 are eligible for up to 30% tax credit on the capital cost of eligible solar generation and storage equipment\n\n• Provincial Rebates: Various provinces offer additional rebates and incentives. We handle all rebate applications as part of our turnkey service\n\n• Demand Charge Reduction: By using stored energy during peak hours, businesses can significantly reduce demand charges on their electricity bills\n\nContact us to learn about specific incentives available in your province.",
      },
      {
        question: "How quickly can I achieve cash flow positivity with a commercial battery system?",
        answer:
          "The timeline to achieve cash flow positivity depends on several factors including your electricity usage patterns, peak demand charges, local utility rates, and available incentives. By integrating battery storage with your grid connection and utilizing stored energy during peak-hour electricity rates, many businesses achieve positive cash flow within the first few years. We provide detailed financial saving projections tailored to your facility's energy profile during the proposal stage.",
      },
      {
        question: "What financing options are available?",
        answer:
          "We offer flexible in-house financing options for commercial and industrial BESS projects with competitive terms, eliminating the need to go through third-party lenders. Our financing solutions are designed to make commercial battery storage accessible while minimizing upfront capital requirements. Contact us to discuss financing options that work for your business.",
      },
      {
        question: "How much can I save on electricity costs?",
        answer:
          "Savings vary based on your facility's energy consumption patterns, peak demand charges, local utility rates, and system size. Commercial battery storage helps reduce costs through:\n\n• Peak shaving: Using stored energy during high-demand hours to avoid peak rates\n\n• Demand charge reduction: Lowering maximum demand charges on your utility bill\n\n• Time-of-use optimization: Charging during low-rate periods and discharging during high-rate periods\n\nWe provide a detailed savings forecast as part of our proposal, showing projected ROI and payback period specific to your facility.",
      },
    ],
  },
  {
    title: "Planning & Installation",
    questions: [
      {
        question: "What is included in your 360° turnkey service?",
        answer:
          "Our comprehensive turnkey service includes:\n\n• Designing and Engineering: All designs meet local electrical codes, utility requirements, and top safety standards (CSA, UL9540, ESA compliance)\n\n• Procurement: We source only the best equipment to ensure long-lasting performance and minimal maintenance\n\n• Construction: Expert teams with years of Canadian experience deliver precise, reliable installations\n\n• Energy Management System: Remote monitoring and control with real-time data optimization\n\n• Financial Saving Projection: Detailed ROI and savings forecast tailored to your facility\n\n• In-House Financing Options: Flexible financing with competitive terms\n\nWe handle everything from initial assessment to final handover, giving you total peace of mind.",
      },
      {
        question: "How long does the installation process take?",
        answer:
          "The installation process typically follows these stages:\n\n1. Needs Assessment\n\n2. Custom Design\n\n3. Proposal & Agreement\n\n4. Planning & Permits\n\n5. Installation & Commissioning\n\n6. Handover & Warranty Start\n\nThe total timeline varies based on system complexity, permit processing times, and site conditions. Our team will provide a detailed timeline during the proposal stage and keep you updated throughout the process. Pre-assembled systems enable faster installation and shorter project timelines.",
      },
      {
        question: "What site requirements are needed for commercial battery installation?",
        answer:
          "Commercial battery systems require:\n\n• Adequate space for the battery units (outdoor installation)\n\n• Proper electrical infrastructure and connection points\n\n• Compliance with local building codes and utility requirements\n\n• Appropriate clearance and safety zones\n\n• Access for installation and future maintenance\n\nDuring the needs assessment, we evaluate your site conditions and provide recommendations for optimal placement and installation.",
      },
      {
        question: "Do I need permits for commercial battery installation?",
        answer:
          "Yes, commercial battery installations typically require permits and approvals from local municipalities, electrical safety authorities, and utility companies. As part of our turnkey service, we handle all necessary permits and approvals, including building permits, electrical permits, and utility interconnection approvals. We take care of all paperwork and coordination with relevant authorities.",
      },
      {
        question: "What maintenance is required for commercial battery systems?",
        answer:
          "Commercial battery systems require minimal maintenance. Our systems are designed for long-lasting performance with built-in monitoring and protection systems. The Energy Management System provides remote monitoring, allowing us to track system health and performance. We recommend periodic inspections and can provide maintenance services as needed. All maintenance requirements and schedules are detailed in your system documentation.",
      },
      {
        question: "What happens if there's an issue with the system?",
        answer:
          "Our systems include comprehensive monitoring and remote diagnostics through the Energy Management System. If any issues arise, our support team can often diagnose and resolve problems remotely. For on-site service needs, we have experienced technicians available. All systems come with warranty coverage, and we provide ongoing support to ensure optimal performance throughout the system's lifetime.",
      },
    ],
  },
  {
    title: "Operations & Performance",
    questions: [
      {
        question: "How does peak load management work?",
        answer:
          "Peak load management uses stored battery energy during high-demand hours to avoid drawing power from the grid at peak rates. The Energy Management System automatically monitors your facility's energy consumption and grid rates, then dispatches stored energy during peak periods. This reduces demand charges (which are often based on your highest 15-minute or 30-minute power draw) and can result in significant cost savings.",
      },
      {
        question: "Can the battery system provide backup power during outages?",
        answer:
          "Yes, commercial battery systems can provide emergency backup power during outages, ensuring continuity of critical services needed to operate your business. The system automatically switches to backup mode when grid power is lost, providing power to essential loads. The duration of backup power depends on battery capacity and load requirements. We can design systems to meet specific backup duration needs for your critical operations.",
      },
      {
        question: "How does demand-response work with battery storage?",
        answer:
          "Demand-response with battery storage provides fast response times to your facility's energy supply and demand fluctuations. The system can quickly charge or discharge to help balance the grid, participate in demand-response programs, and optimize energy costs. The intelligent EMS enables precise energy dispatch, allowing your facility to respond to grid signals and market conditions in real-time.",
      },
      {
        question: "Can I monitor my battery system remotely?",
        answer:
          "Yes, all our commercial battery systems include remote monitoring capabilities through the Energy Management System. You can access real-time data on battery status, energy flow, performance metrics, and system health from any device with internet access. This allows you to monitor system performance, track energy savings, and receive alerts if any issues arise.",
      },
      {
        question: "What is the expected lifespan of a commercial battery system?",
        answer:
          "Commercial battery systems are designed for long-term operation, typically with warranties covering 10+ years. The actual lifespan depends on usage patterns, depth of discharge, and environmental conditions. Our systems use advanced battery management to optimize performance and extend battery life. We provide detailed warranty information and expected performance metrics in your project proposal.",
      },
    ],
  },
]

export function CommercialBatterySolutionsFAQ() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    solution: "",
    message: "",
    subscribe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 relative min-h-screen w-full flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/commercial-solar-panels-on-warehouse-building.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          </div>
          
          <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                We're here to help! Whether you have questions about commercial battery solutions, rebates, or installation, our
                team is ready to assist. Send us a message, and we'll get back to you soon!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="commercialBatteryFirstName" className="text-primary-foreground">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="commercialBatteryFirstName"
                  placeholder="First Name"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commercialBatteryLastName" className="text-primary-foreground">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="commercialBatteryLastName"
                  placeholder="Last Name"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="commercialBatteryEmail" className="text-primary-foreground">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="commercialBatteryEmail"
                  type="email"
                  placeholder="Email"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="commercialBatteryPhone" className="text-primary-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="commercialBatteryPhone"
                  type="tel"
                  placeholder="+1 XXX-XXX-XXXX"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-primary-foreground">
                  Province <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.province}
                  onValueChange={(value) => setFormData({ ...formData, province: value })}
                  required
                >
                  <SelectTrigger className="border-input bg-input text-primary-foreground">
                    <SelectValue placeholder="Select your province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alberta">Alberta</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    <SelectItem value="nova-scotia">Nova Scotia</SelectItem>
                    <SelectItem value="ontario">Ontario</SelectItem>
                    <SelectItem value="pei">Prince Edward Island</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-primary-foreground">
                  What energy solution you are looking for? <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.solution}
                  onValueChange={(value) => setFormData({ ...formData, solution: value })}
                  required
                >
                  <SelectTrigger className="border-input bg-input text-primary-foreground">
                    <SelectValue placeholder="Select energy solution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solar">Solar Solution</SelectItem>
                    <SelectItem value="battery">Battery Solution</SelectItem>
                    <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                    <SelectItem value="ev-charging">EV Charging Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="commercialBatteryMessage" className="text-primary-foreground">Tell us about your need (Optional)</Label>
              <Textarea
                id="commercialBatteryMessage"
                placeholder="Tell us about your need"
                className="min-h-[120px] border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="commercialBatterySubscribe"
                checked={formData.subscribe}
                onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                className="border-input data-[state=checked]:bg-primary"
              />
              <Label htmlFor="commercialBatterySubscribe" className="text-sm leading-relaxed text-primary-foreground/90">
                I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event
                invitations from Solar X Canada.
              </Label>
            </div>

            <Button type="submit" className="w-full py-6 text-lg font-semibold">
              Submit Survey
            </Button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

