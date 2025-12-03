import { Sun, Calendar, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyAlbertaSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Why Alberta Should Install Solar and Battery Storage?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Alberta is one of the best provinces for renewable energy solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Sun className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">#1</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sunniest Province</h3>
              <p className="text-muted-foreground">
                Alberta is the sunniest province in Canada, making it ideal for solar energy generation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">320</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Days of Sunshine</h3>
              <p className="text-muted-foreground">
                Enjoy 320 days of sunshine per year, maximizing your solar panel efficiency and returns.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Rates</h3>
              <p className="text-muted-foreground">
                Flexible rates thanks to solar clubs that let you earn credits at a higher rate and use credits at a lower rate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



