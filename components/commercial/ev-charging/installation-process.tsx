import { ClipboardList, FileText, CheckCircle2, Wrench, Handshake } from "lucide-react"

const steps = [
  {
    step: "Step 1",
    title: "Premises Survey",
    description: "Starting with a detailed survey of your commercial premises to identify the best charger location for your stations and any installation-related details.",
    icon: ClipboardList,
  },
  {
    step: "Step 2",
    title: "Comprehensive Proposal",
    description: "We propose the best solution, tailored to your specific requirements, to meet your business needs and goals.",
    icon: FileText,
  },
  {
    step: "Step 3",
    title: "Rebate Approvals",
    description: "We manage all rebate documentation and work with local government or agencies to secure fast, hassle-free approvals for your EV charging installation.",
    icon: CheckCircle2,
  },
  {
    step: "Step 4",
    title: "Installation",
    description: "Our team of experienced electricians will install and commission the chargers with precision and care, ensuring everything operates smoothly from day one.",
    icon: Wrench,
  },
  {
    step: "Step 5",
    title: "Handover, System Support & After Service",
    description: "Your system will be fully operational upon handover, backed by up to a 5-year equipment warranty and a 2-year workmanship guarantee. Moreover, you can also choose from our optional O&M packages, which include annual inspections, firmware updates, and remote diagnostics and support.",
    icon: Handshake,
  },
]

export function InstallationProcess() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Installation Process
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Streamline Your Commercial EV Charging Project
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 items-start bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">{step.step}</span>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



