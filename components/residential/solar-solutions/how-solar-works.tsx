"use client"

import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Sun, Moon } from "lucide-react"

export function HowSolarWorksSection() {
  const dayContent = {
    title: "Day Time",
    icon: Sun,
    iconColor: "text-yellow-500",
    description:
      "During the daytime, solar panels absorb sunlight and generate DC electricity. This electricity is then converted into AC electricity by inverters for use in your home. Any excess electricity is sent to the grid, earning you credits for future use.",
    image: "/images/daytime.png",
  }

  const nightContent = {
    title: "Night Time",
    icon: Moon,
    iconColor: "text-blue-500",
    description:
      "At night, when solar panels are not generating electricity, you can use the credits earned during the day to draw electricity from the grid. This ensures a continuous power supply, even when there is no sunlight.",
    image: "/images/nightime.png",
  }

  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-2">
            How <span className="text-[#ff4a4a]">Solar Energy</span> Works
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Understand how solar panels generate electricity during the day and how net metering ensures continuous power supply day and night.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="day" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger 
              value="day" 
              className="flex items-center gap-2 data-[state=active]:bg-[#ff4a4a] data-[state=active]:text-white"
            >
              <Sun className="w-5 h-5" />
              Day Time
            </TabsTrigger>
            <TabsTrigger 
              value="night"
              className="flex items-center gap-2 data-[state=active]:bg-[#1a2b6b] data-[state=active]:text-white"
            >
              <Moon className="w-5 h-5" />
              Night Time
            </TabsTrigger>
          </TabsList>

          {/* Day Time Content */}
          <TabsContent value="day" className="mt-0">
            <div className="flex flex-col items-center">
              {/* Image - Top Center */}
              <div className="relative w-full max-w-5xl min-h-[600px] lg:h-[700px] rounded-2xl overflow-hidden group bg-transparent mb-6">
                <Image
                  src={dayContent.image}
                  alt="Solar panels generating electricity during daytime"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Content - Bottom */}
              <div className="text-center max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {dayContent.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {dayContent.description}
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Night Time Content */}
          <TabsContent value="night" className="mt-0">
            <div className="flex flex-col items-center">
              {/* Image - Top Center */}
              <div className="relative w-full max-w-5xl min-h-[600px] lg:h-[700px] rounded-2xl overflow-hidden group bg-transparent mb-6">
                <Image
                  src={nightContent.image}
                  alt="Solar system using grid electricity during nighttime"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Content - Bottom */}
              <div className="text-center max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {nightContent.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {nightContent.description}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}



