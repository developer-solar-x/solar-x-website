import Image from "next/image"
import Link from "next/link"

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
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SolarX became an exclusive member of{" "}
              <Link href="https://www.homedepot.ca" className="text-primary hover:underline">
                The Home Depot's Local Pro
              </Link>{" "}
              community for the Maritimes on October 1, 2020. Since then, SolarX has expanded its Home Depot Home
              Services to{" "}
              <Link href="/residential/alberta" className="text-primary hover:underline">
                Alberta
              </Link>
              ,{" "}
              <Link href="/residential/british-columbia" className="text-primary hover:underline">
                British Columbia
              </Link>
              ,{" "}
              <Link href="/residential/nova-scotia" className="text-primary hover:underline">
                Nova Scotia
              </Link>
              ,{" "}
              <Link href="/residential/ontario" className="text-primary hover:underline">
                Ontario
              </Link>
              , and{" "}
              <Link href="/residential/prince-edward-island" className="text-primary hover:underline">
                Prince Edward Island
              </Link>
              , offering comprehensive solar solutions across these provinces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
