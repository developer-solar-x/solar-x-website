"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { 
  ClipboardList, 
  Palette, 
  FileText, 
  FileEdit, 
  Wrench, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: 1,
    title: "Needs Assessment",
    description:
      "We start by understanding your energy needs, site conditions, and goals for solar installation. Our expert team conducts a comprehensive evaluation to ensure optimal system design.",
    icon: ClipboardList,
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    duration: "1-2 weeks",
    highlight: "Expert Consultation",
  },
  {
    number: 2,
    title: "Custom Design",
    description:
      "Based on the assessment, a tailored system design will be created focusing on technical specifications and feasibility. We leverage advanced modeling software to maximize your ROI.",
    icon: Palette,
    image: "/large-commercial-solar-farm-with-rows-of-panels.jpg",
    duration: "2-3 weeks",
    highlight: "3D Modeling & Simulation",
  },
  {
    number: 3,
    title: "Proposal & Agreement",
    description:
      "Deliver a comprehensive proposal that includes system performance estimates, financial analysis, and projected savings, followed by formalizing the agreement with transparent terms.",
    icon: FileText,
    image: "/industrial-solar-installation-on-factory-building.jpg",
    duration: "1 week",
    highlight: "Transparent Pricing",
  },
  {
    number: 4,
    title: "Planning & Permits",
    description: "Develop a project plan and handle all necessary permits and approvals. We manage all paperwork and coordinate with local authorities to ensure compliance.",
    icon: FileEdit,
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    duration: "3-6 weeks",
    highlight: "Hassle-Free Permits",
  },
  {
    number: 5,
    title: "Installation & Commissioning",
    description:
      "The experienced team will carry out the system installation, followed by thorough testing and commissioning. This ensures the system meets all project targets, adheres to industry standards, and functions as expected.",
    icon: Wrench,
    image: "/industrial-solar-installation-on-factory-building.jpg",
    duration: "2-4 weeks",
    highlight: "Professional Installation",
  },
  {
    number: 6,
    title: "Handover & Warranty Start",
    description:
      "Upon final inspection, comprehensive documentation will be provided and training sessions will be conducted to ensure seamless operation of the system. The warranty period will begin at this stage, ensuring long-term support and reliability.",
    icon: CheckCircle2,
    image: "/ground-mounted-solar-array-in-green-field.jpg",
    duration: "1 week",
    highlight: "Lifetime Support",
  },
]

function TimelineLine({ activeSteps }: { activeSteps: number }) {
  const totalSteps = steps.length
  const progress = (activeSteps / totalSteps) * 100

  return (
    <div className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-200 to-gray-200 rounded-full" />
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#ff4a4a] via-[#ff4a4a] to-[#1a2b6b] rounded-full transition-all duration-1000 ease-out shadow-lg shadow-[#ff4a4a]/30"
        style={{ height: `${progress}%` }}
      />
      {progress > 0 && (
        <div
          className="absolute left-1/2 w-4 h-4 rounded-full bg-[#ff4a4a] -translate-x-1/2 transition-all duration-1000 ease-out shadow-lg shadow-[#ff4a4a]/50 animate-pulse"
          style={{ top: `${progress}%`, marginTop: '-8px' }}
        />
      )}
    </div>
  )
}

function TimelineStep({ 
  step, 
  index, 
  isActive, 
  onIntersect 
}: { 
  step: typeof steps[0]
  index: number
  isActive: boolean
  onIntersect: (index: number, isVisible: boolean) => void
}) {
  const Icon = step.icon
  const stepRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          onIntersect(index, true)
        } else {
          setIsInView(false)
          onIntersect(index, false)
        }
      },
      { threshold: 0.4, rootMargin: "-100px" }
    )

    if (stepRef.current) {
      observer.observe(stepRef.current)
    }

    return () => observer.disconnect()
  }, [index, onIntersect])

  return (
    <div ref={stepRef} className="relative mb-20 lg:mb-32">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Content (alternates) */}
        <div className={`${isEven ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-8'} transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="group relative border-2 border-gray-100 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#1a2b6b]/30 overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b6b]/0 via-[#1a2b6b]/0 to-[#1a2b6b]/0 group-hover:from-[#1a2b6b]/5 group-hover:via-[#1a2b6b]/3 group-hover:to-[#1a2b6b]/5 transition-all duration-500" />
            
            <CardContent className="relative p-8">
              {/* Step Number Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a2b6b] to-[#152254] text-white shadow-lg transition-all duration-700 ${isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
                  <Icon className="h-7 w-7" />
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff4a4a] text-xs font-bold text-white shadow-md border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 mb-2">
                    <Sparkles className="w-3 h-3 text-[#ff4a4a]" />
                    <span className="text-xs font-semibold text-[#ff4a4a]">{step.highlight}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{step.duration}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1a2b6b] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {step.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Dot - Centered */}
        <div className="lg:col-span-2 lg:col-start-6 flex justify-center">
          <div className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-[#1a2b6b] shadow-2xl transition-all duration-700 z-10 ${isInView ? 'scale-100 ring-8 ring-[#1a2b6b]/20' : 'scale-0 ring-0'}`}>
            <Icon className={`h-10 w-10 text-[#1a2b6b] transition-all duration-700 ${isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} />
            <div className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4a4a] text-sm font-bold text-white shadow-lg border-2 border-white transition-all duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}>
              {step.number}
            </div>
          </div>
        </div>

        {/* Right Column - Image (alternates) */}
        <div className={`${isEven ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5 lg:col-start-1'} transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group/image">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-700 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                <p className="text-xs text-gray-600 mt-1">{step.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6">
        {/* Step Number & Icon */}
        <div className="flex items-center gap-4">
          <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a2b6b] to-[#152254] text-white shadow-lg transition-all duration-700 ${isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
            <Icon className="h-8 w-8" />
            <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff4a4a] text-xs font-bold text-white shadow-md border-2 border-white">
              {step.number}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 mb-2">
              <Sparkles className="w-3 h-3 text-[#ff4a4a]" />
              <span className="text-xs font-semibold text-[#ff4a4a]">{step.highlight}</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">{step.duration}</p>
          </div>
        </div>

        {/* Image */}
        <div className={`relative h-[280px] rounded-xl overflow-hidden shadow-xl transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content Card */}
        <Card className={`border-2 border-gray-100 bg-white shadow-lg transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {step.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function InstallationProcessSection() {
  const [activeSteps, setActiveSteps] = useState(0)
  const visibleStepsRef = useRef<Set<number>>(new Set())

  const handleStepIntersect = (index: number, isVisible: boolean) => {
    if (isVisible) {
      visibleStepsRef.current.add(index)
    } else {
      visibleStepsRef.current.delete(index)
    }
    const maxVisibleIndex = Math.max(...Array.from(visibleStepsRef.current), -1)
    setActiveSteps(Math.max(0, maxVisibleIndex + 1))
  }

  return (
    <section className="relative bg-gray-100 py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1a2b6b]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff4a4a]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20 lg:mb-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4a4a]/10 border border-[#ff4a4a]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#ff4a4a]" />
              <span className="text-sm font-semibold text-[#ff4a4a] uppercase tracking-wide">Installation Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From <span className="text-[#ff4a4a]">Consultation</span> to{" "}
              <span className="text-[#1a2b6b]">Completion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined, professional installation process ensures your commercial solar project is delivered on time, on budget, and exceeds expectations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff4a4a]" />
                <span>Full Turnkey Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff4a4a]" />
                <span>Expert Project Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff4a4a]" />
                <span>Transparent Communication</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          <TimelineLine activeSteps={activeSteps} />

          <div className="space-y-0 lg:pl-12">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={index}
                isActive={index < activeSteps}
                onIntersect={handleStepIntersect}
              />
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mt-24 lg:mt-32">
            <Card className="relative border-2 border-[#1a2b6b]/20 bg-gradient-to-br from-[#1a2b6b] via-[#152254] to-[#1a2b6b] shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4a4a] rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              
              <CardContent className="relative p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Solar Journey?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and custom quote for your commercial solar installation. Our experts are ready to help you maximize your energy savings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-[#ff4a4a] hover:bg-[#e22f2f] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-[#ff4a4a]/30 hover:shadow-2xl hover:shadow-[#ff4a4a]/40 transition-all duration-300 flex items-center gap-2 group"
                    >
                      Request a Free Quote
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/commercial/incentives">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
                    >
                      View Available Incentives
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
