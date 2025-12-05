import Image from "next/image"

export function WhyOntarioSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#1a2b6b] mb-2">GET STARTED</p>
          <h2 className="text-3xl font-bold text-[#1a2b6b] sm:text-4xl">
            WHY GO SOLAR IN ONTARIO?
          </h2>
        </div>

        {/* Map and Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Map */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-lg">
              <Image
                src="/province/ontario.png"
                alt="Ontario Solar Potential Map"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Legend */}
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm font-semibold text-foreground mb-2">Solar Panel Power Canada (kWh/kW/yr)</p>
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-muted-foreground">1000</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-muted-foreground">1050</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-muted-foreground">1100</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-muted-foreground">1150</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-muted-foreground">1200</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-muted-foreground">1250</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Natural Resources Box */}
          <div className="bg-white rounded-lg border-2 border-[#1a2b6b] p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1a2b6b] mb-4">NATURAL RESOURCES</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ontario is number 4 of the sunniest places in Canada, and is geographically primed for solar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

