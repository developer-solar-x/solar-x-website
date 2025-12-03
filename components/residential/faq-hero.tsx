import { Button } from "@/components/ui/button"

export function FAQHero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Residential Frequently Asked Questions
          </h1>
          <p className="mt-8 text-3xl font-medium text-white/90">
            Stay curious about renewable energy that could enhance your home&apos;s profitability.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

