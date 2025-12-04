"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { 
  ClipboardList, 
  Palette, 
  FileText, 
  FileCheck, 
  Wrench, 
  CheckCircle2
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: 1,
    title: "Needs Assessment",
    description:
      "We start by understanding your energy needs, site conditions, and goals for solar installation.",
    icon: ClipboardList,
  },
  {
    number: 2,
    title: "Custom Design",
    description:
      "Based on the assessment, a tailored system design will be created focusing on technical specifications and feasibility.",
    icon: Palette,
  },
  {
    number: 3,
    title: "Proposal & Agreement",
    description:
      "Deliver a comprehensive proposal that includes system performance estimates, financial analysis, and projected savings, followed by formalizing the agreement.",
    icon: FileText,
  },
  {
    number: 4,
    title: "Planning & Permits",
    description: "Develop a project plan and handle all necessary permits and approvals.",
    icon: FileCheck,
  },
  {
    number: 5,
    title: "Installation & Commissioning",
    description:
      "The experienced team will carry out the system installation, followed by thorough testing and commissioning. This ensures the system meets all project targets, adheres to industry standards, and functions as expected.",
    icon: Wrench,
  },
  {
    number: 6,
    title: "Handover & Warranty Start",
    description:
      "Upon final inspection, comprehensive documentation will be provided and conduct training sessions to ensure seamless operation of the system. The warranty period will begin at this stage, ensuring long-term support and reliability.",
    icon: CheckCircle2,
  },
]

function TimelineLine({ activeSteps }: { activeSteps: number }) {
  const totalSteps = steps.length
  const progress = (activeSteps / totalSteps) * 100

  return (
    <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block">
      {/* Background line */}
      <div className="absolute inset-0 bg-muted rounded-full" />
      {/* Animated progress line with glow effect */}
      <div
        className="absolute top-0 left-0 right-0 bg-primary rounded-full transition-all duration-1500 ease-out shadow-lg shadow-primary/50"
        style={{ height: `${progress}%` }}
      />
      {/* Animated pulse effect at the end */}
      {progress > 0 && (
        <div
          className="absolute left-0 w-3 h-3 rounded-full bg-primary -translate-x-1 transition-all duration-1500 ease-out shadow-lg shadow-primary/50 animate-pulse"
          style={{ top: `${progress}%`, marginTop: '-6px' }}
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
  const dotRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          onIntersect(index, true)
        } else {
          // Reset animation when scrolling out of view
          setIsInView(false)
          onIntersect(index, false)
        }
      },
      { threshold: 0.3, rootMargin: "-50px" }
    )

    if (stepRef.current) {
      observer.observe(stepRef.current)
    }

    return () => observer.disconnect()
  }, [index, onIntersect])

  return (
    <div ref={stepRef} className="relative flex items-start gap-6 md:gap-8">
      {/* Timeline dot with dramatic animation */}
      <div className="relative z-10 flex-shrink-0">
        <div
          ref={dotRef}
          className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-700 ease-out ${
            isInView
              ? "scale-100 rotate-0 ring-4 ring-primary/30 ring-offset-2 ring-offset-secondary"
              : "scale-0 rotate-180 ring-2 ring-primary/20 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 0.2}s`,
          }}
        >
          <Icon 
            className={`h-6 w-6 transition-all duration-700 ${
              isInView ? "scale-100 rotate-0" : "scale-0 rotate-180"
            }`}
            style={{
              transitionDelay: `${index * 0.2 + 0.3}s`,
            }}
          />
          {/* Number badge */}
          <div 
            className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary border-2 border-primary text-xs font-semibold text-foreground shadow-md transition-all duration-500 ${
              isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 0.2 + 0.5}s`,
            }}
          >
            {step.number}
          </div>
        </div>
      </div>

      {/* Content card with dramatic slide-in */}
      <div className="flex-1 pt-2">
        <Card
          ref={cardRef}
          className={`group relative border transition-all duration-700 ease-out hover:shadow-xl ${
            isInView
              ? "translate-x-0 opacity-100 border-primary/40 shadow-md bg-card"
              : "translate-x-[-100px] opacity-0 border-border"
          }`}
          style={{
            transitionDelay: `${index * 0.2 + 0.1}s`,
          }}
        >
          <CardHeader>
            <CardTitle 
              className={`text-xl md:text-2xl font-semibold text-foreground transition-all duration-700 ${
                isInView 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-[-20px] opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 0.2 + 0.3}s`,
              }}
            >
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription 
              className={`text-base leading-relaxed text-muted-foreground transition-all duration-700 ${
                isInView 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-[20px] opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 0.2 + 0.5}s`,
              }}
            >
              {step.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function InstallationProcess() {
  const [activeSteps, setActiveSteps] = useState(0)
  const visibleStepsRef = useRef<Set<number>>(new Set())

  const handleStepIntersect = (index: number, isVisible: boolean) => {
    if (isVisible) {
      visibleStepsRef.current.add(index)
    } else {
      visibleStepsRef.current.delete(index)
    }
    // Calculate the highest visible step index
    const maxVisibleIndex = Math.max(...Array.from(visibleStepsRef.current), -1)
    setActiveSteps(Math.max(0, maxVisibleIndex + 1))
  }

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={0} duration={1} triggerOnce={false}>
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              Installation Process of Commercial Battery Energy Storage Projects
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Full Turnkey Solution
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 relative">
          <TimelineLine activeSteps={activeSteps} />

          <div className="space-y-8 md:space-y-16">
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

        <ScrollReveal direction="up" delay={0.8} duration={0.8} threshold={0.3} triggerOnce={false}>
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-[#1a2b6b] hover:bg-[#152254] text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Request a Quote
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

