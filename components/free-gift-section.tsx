import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FreeGiftSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              FREE Sign-Up Gift Worth Up to <span className="text-accent">$439</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose between our Portable 2-in-1 Flex-AC EV charger or a portable 300W power station when completing a
              solar or battery project with SolarX!
            </p>
            <Link href="/contact">
              <Button className="mt-6 bg-primary px-8 py-6 text-lg text-white hover:bg-primary/90">
                Request Consultation
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/ev-charger-and-portable-power-stations-solar-equip.jpg"
              alt="Free gift equipment set"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
