import Image from "next/image"
import { CheckCircle2, Home, Building2, Battery, Globe, Zap } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  "Fully Transparent",
  "Professional Engineered Review",
  "Eliminate Technical Hurdles",
]

const reportItems = [
  {
    title: "Structural Condition",
    icon: Home,
  },
  {
    title: "Roof Condition",
    icon: Building2,
  },
  {
    title: "Existing Electrical Condition",
    icon: Battery,
  },
  {
    title: "Panel Layout",
    icon: Globe,
  },
  {
    title: "Wiring Route",
    icon: Zap,
  },
  {
    title: "BOS Design",
    icon: Zap,
  },
]

export function DroneTechnologySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Heading and Features on Left, Image on Right */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">
              Pioneer in 3D Measurement Simulations with Drone Technology
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">{feature}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/newhero/droneassesment.png"
              alt="Drone technology for 3D measurement simulations of solar panel installations"
              fill
              className="object-cover"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
        </div>

        {/* Bottom Section: Site Assessment Report */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Site Assessment Report</h3>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reportItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="rounded-xl bg-card border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex justify-center mb-4">
                          <div className="rounded-lg bg-primary/10 p-3">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <p className="font-medium text-foreground">{item.title}</p>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12" />
              <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}



