import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, CreditCard, BarChart3, FileText, Building2, Settings, Package } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "All-in-One Solutions to Fit Your Business Needs",
    description: "Tailored Solutions for Every Business",
  },
  {
    icon: CreditCard,
    title: "Exclusive In-House Financing",
    description: "Sunline Flexible Payment",
  },
  {
    icon: BarChart3,
    title: "Asset Management and More",
    description: "Optimizing Your Renewable Energy Investment",
  },
  {
    icon: FileText,
    title: "Incentive Application Assistance",
    description: "Maximizing Renewable Energy Savings with Rebates",
  },
  {
    icon: Building2,
    title: "EPC Services",
    description: "Engineering, Procurement, and Construction",
  },
  {
    icon: Settings,
    title: "Multi-Operations & Maintenance",
    description: "Expert Care Across Various Sectors",
  },
  {
    icon: Package,
    title: "Supply Chain Stability",
    description: "Partnerships with Reliable Brands",
  },
]

export function GoingGreenSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Going Green Has Never Been Easier
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Solar X Canada offers complete turnkey solutions and expert knowledge for every project stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}


