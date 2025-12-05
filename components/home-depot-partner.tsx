import Image from "next/image"

export function HomeDepotPartner() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:order-1">
            <div className="relative h-32 w-64">
              <Image src="/home-depot-home-services-logo-orange-white.jpg" alt="Home Depot Home Services" fill className="object-contain" />
            </div>
          </div>
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Partner with Home Depot Home Services</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
