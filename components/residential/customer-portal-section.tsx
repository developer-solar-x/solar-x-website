import { Button } from "@/components/ui/button"
import { Shield, Gift, TrendingUp, LogIn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const portalFeatures = [
  {
    icon: Shield,
    title: "Secure Profile",
    description: "Stay updated on your solar project and financing status",
  },
  {
    icon: Gift,
    title: "Earn Credits",
    description: "Get credits for your energy production and redeem them in the Points Mall (Coming Soon)",
  },
  {
    icon: TrendingUp,
    title: "Review Savings",
    description: "Monitor your savings from your solar and battery systems.",
  },
]

export function CustomerPortalSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Track Your Project Progress On Our Customer Portal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-time project updates now available on your customer portal. Track your installation journey and manage
            your solar related finances in one convenient space.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {portalFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link href="/customer-portal">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/customer-portal/how-to-use" className="ml-4 text-primary hover:underline">
                How To Use Customer Portal
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl bg-muted">
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">Customer portal interface preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



