import { Battery, Wallet, Receipt } from "lucide-react"
import Image from "next/image"

export function FinancingSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            SolarX's Exclusive Sunline - Energy as a Service and BESSline Financing Program for Solar and Batteries.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe everyone should be able to light up their home with renewable clean energy.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Battery className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Battery</h3>
            <p className="mt-2 text-muted-foreground">Payments as low as $2.46/Day for solar energy systems*</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Wallet</h3>
            <p className="mt-2 text-muted-foreground">Record-breaking low rates, 0% interest for 16 months on battery systems*</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Receipt className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Receipt</h3>
            <p className="mt-2 text-muted-foreground">Solar and battery solutions that won't empty your pockets</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">*Program availability depends on your province</p>
      </div>
    </section>
  )
}



