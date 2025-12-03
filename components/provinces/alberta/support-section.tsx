import { Home, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SupportSection() {
  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Big Support on Your Green Energy Journey
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Home className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Homes</h3>
              <p className="text-muted-foreground">
                Residential solar solutions tailored to your home's energy needs. Maximize savings and reduce your carbon footprint.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Businesses</h3>
              <p className="text-muted-foreground">
                Commercial solar installations designed to lower operating costs and enhance your business sustainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



