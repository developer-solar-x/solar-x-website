import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Needs Assessment",
    description:
      "We start by understanding your energy needs, site conditions, and goals for solar installation.",
  },
  {
    number: 2,
    title: "Custom Design",
    description:
      "Based on the assessment, a tailored system design will be created focusing on technical specifications and feasibility.",
  },
  {
    number: 3,
    title: "Proposal & Agreement",
    description:
      "Deliver a comprehensive proposal that includes system performance estimates, financial analysis, and projected savings, followed by formalizing the agreement.",
  },
  {
    number: 4,
    title: "Planning & Permits",
    description: "Develop a project plan and handle all necessary permits and approvals.",
  },
  {
    number: 5,
    title: "Installation & Commissioning",
    description:
      "The experienced team will carry out the system installation, followed by thorough testing and commissioning. This ensures the system meets all project targets, adheres to industry standards, and functions as expected.",
  },
  {
    number: 6,
    title: "Handover & Warranty Start",
    description:
      "Upon final inspection, comprehensive documentation will be provided and conduct training sessions to ensure seamless operation of the system. The warranty period will begin at this stage, ensuring long-term support and reliability.",
  },
]

export function InstallationProcess() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Installation Process of Commercial Battery Energy Storage Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Full Turnkey Solution
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number}>
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-white hover:bg-primary/90">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}

