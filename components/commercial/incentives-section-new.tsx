"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Plus, Flame } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const provinces = [
  "All",
  "Canada Wide",
  "Ontario",
  "Alberta",
  "Nova Scotia",
  "New Brunswick",
]

type ProgramStatus = "Open" | "Currently Closed" | "Opening Soon" | "Ending Soon"
type BenefitType = "Payment Subscription" | "Tax Exemption" | "Funding" | "Grant" | "Loan" | "Rebates/Incentives" | "Tax Benefits"
type Solution = "Solar" | "Solar + Battery" | "EV Charger" | "Behind The Meter"
type EligibleApplicant = "All Businesses" | "Schools" | "Greenhouse" | "Municipalities" | "First Nations" | "Non Profit" | "MURB" | "Social Houses" | "Fishery and Aquaculture"

interface Program {
  id: string
  province: string
  title: string
  status: ProgramStatus
  isHotOffer?: boolean
  isLimitedFund?: boolean
  benefitTypes: BenefitType[]
  solutions: Solution[]
  eligibleApplicants: EligibleApplicant[]
  description: string
  details?: string[]
  deadline?: string
  learnMoreUrl?: string
}

// Sample programs data - you can expand this with real data
const programs: Program[] = [
  {
    id: "1",
    province: "Canada Wide",
    title: "Accelerated Capital Cost Allowance",
    status: "Open",
    isHotOffer: true,
    benefitTypes: ["Tax Benefits"],
    solutions: ["Solar + Battery"],
    eligibleApplicants: ["All Businesses"],
    description: "The Accelerated Capital Cost Allowance empowers businesses to recoup their clean energy project costs. The allowable CCA percentage will depend on your province and business type and the total will be calculated from the cost of your eligible solar expenses. Class 43.1 offers a rate of 30% while Class 43.2 offers a rate of 50%.",
    learnMoreUrl: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/report-business-income-expenses/claiming-capital-cost-allowance/classes-depreciable-property.html#class43.1",
  },
  {
    id: "2",
    province: "Canada Wide",
    title: "Clean Energy Investment Tax Credit",
    status: "Open",
    benefitTypes: ["Tax Benefits"],
    solutions: ["Solar + Battery"],
    eligibleApplicants: ["All Businesses"],
    description: "Organizations who make a clean energy investment between March, 28 2023 and 2035 are eligible for an investment tax credit refund. You can receive a tax credit of up to 30% on the capital cost of eligible solar generation and storage equipment.",
    learnMoreUrl: "https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-3-property-investments-savings-plans/series-3-property-investments-savings-plan-folio-8-resource-properties/income-tax-folio-s3-f8-c2-tax-incentives-clean-energy-equipment.html",
  },
  {
    id: "3",
    province: "Canada Wide",
    title: "Green Municipal Fund",
    status: "Open",
    benefitTypes: ["Grant", "Loan"],
    solutions: ["Solar"],
    eligibleApplicants: ["Municipalities"],
    description: "The Green Municipal fund offers municipalities grants and loans to assist with your transition to renewable energy. Receive between $100,000-$500,000 in grants that cover 50-80% of eligible project costs. First time applicants in northern and eligible indigenous communities may even qualify for a grant of up to 100% of eligible costs. The fund also offers a loan that can be paired with the grant for up to $10 million. If you use the loan, you can only receive 15% of the total loan amount for the grant.",
    learnMoreUrl: "https://greenmunicipalfund.ca/new-funding",
  },
  {
    id: "4",
    province: "Canada Wide",
    title: "Indigenous Clean Energy Charge Up Program",
    status: "Ending Soon",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["EV Charger"],
    eligibleApplicants: ["First Nations"],
    description: "The clean energy charge up programs are available for indigenous communities and businesses, offering up to 75% of total EV charging station installation costs. The program is available until September 1, 2025.",
    learnMoreUrl: "https://indigenouscleanenergy.com/our-programs/charge-up/",
  },
  {
    id: "5",
    province: "Ontario",
    title: "SaveOnEnergy Retrofit Program",
    status: "Open",
    isHotOffer: true,
    isLimitedFund: true,
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar", "Behind The Meter"],
    eligibleApplicants: ["All Businesses"],
    description: "Save On Energy's Retrofit program is intended to promote large distributed energy resource (DER) solar systems. Businesses can receive $860 per kW (AC) for a maximum of 1000 kW, totalling up to $860,000.",
    learnMoreUrl: "#",
  },
  {
    id: "6",
    province: "Ontario",
    title: "Electric Vehicle (EV) ChargeON Program",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["EV Charger"],
    eligibleApplicants: ["All Businesses"],
    description: "Businesses in Ontario can receive up to $1,000,000 in funding from the EV chargeOn program for EV related projects. Municipalities and Indigenous businesses can get up to 75% of total project costs while other businesses can receive up to 50%. The amount you're eligible for also depends on the type and output of your EV chargers.",
    learnMoreUrl: "#",
  },
  {
    id: "7",
    province: "Alberta",
    title: "Banff Solar PV Incentive Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses", "Municipalities"],
    description: "Only for Banff businesses. Banff is offering a post-installation rebate for property owners who have completed the installation of a solar PV system. Customers can receive $750/kW for a maximum of 20kW. The project must meet all safety code requirements and be CSA or ULC approved for installation in Canada.",
    learnMoreUrl: "https://banff.ca/807/Solar-Incentive-Program",
  },
  {
    id: "8",
    province: "Alberta",
    title: "City of Edmonton's Clean Energy Improvement Program",
    status: "Open",
    benefitTypes: ["Funding"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses", "Municipalities"],
    description: "Only available for Edmonton businesses. Businesses can finance up to 100% of their solar PV system projects through the Clean Energy Improvement program. The project would have to be recommended by an authorized audit ASHREA level 2 report. The financing term is set for 20 years at a 3.13% interest rate with a minimum cost of $3000 and a maximum cost of $1,000,000.",
    learnMoreUrl: "https://ceip.abmunis.ca/commercial/locations/edmonton/",
  },
  {
    id: "9",
    province: "Alberta",
    title: "Emissions Reduction Alberta Capital Retrofits",
    status: "Open",
    isHotOffer: true,
    isLimitedFund: true,
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses"],
    description: "The limited time Capital Retrofits Program offers up to $250,000 for Alberta businesses to install non-emitting retrofits, such as solar, that can reduce emissions by at least 5%. The incentive covers up to 20% of total project costs and will be available while funds last.",
    learnMoreUrl: "https://www.eralberta.ca/semi/capital-retrofits/",
  },
  {
    id: "10",
    province: "Nova Scotia",
    title: "Efficiency Nova Scotia EnergyForward New Homes",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses"],
    description: "EnergyForward New Homes program details.",
  },
  {
    id: "11",
    province: "Nova Scotia",
    title: "Efficiency Nova Scotia Solar Non-Profit Pilot Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["Non Profit"],
    description: "Solar pilot program for non-profit organizations in Nova Scotia.",
  },
  {
    id: "12",
    province: "Nova Scotia",
    title: "EV Ready Approach Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["EV Charger"],
    eligibleApplicants: ["All Businesses"],
    description: "EV Ready Approach Program for electric vehicle charging infrastructure.",
  },
  {
    id: "13",
    province: "Nova Scotia",
    title: "Halifax Solar City Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses", "Municipalities"],
    description: "Halifax Solar City Program for solar installations in Halifax.",
  },
  {
    id: "14",
    province: "Nova Scotia",
    title: "Multi-Unit EV Charger Rebates",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["EV Charger"],
    eligibleApplicants: ["MURB"],
    description: "Rebates for multi-unit residential building EV charger installations.",
  },
  {
    id: "15",
    province: "Nova Scotia",
    title: "Nova Scotia Community Solar Program",
    status: "Open",
    benefitTypes: ["Grant"],
    solutions: ["Solar"],
    eligibleApplicants: ["Non Profit", "Municipalities"],
    description: "Community solar program for Nova Scotia.",
  },
  {
    id: "16",
    province: "Nova Scotia",
    title: "Smart Synergy Demand Response Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar + Battery"],
    eligibleApplicants: ["All Businesses"],
    description: "Smart Synergy Demand Response Program for energy management.",
  },
  {
    id: "17",
    province: "Nova Scotia",
    title: "Sustainable Communities Challenge Fund",
    status: "Open",
    benefitTypes: ["Grant"],
    solutions: ["Solar"],
    eligibleApplicants: ["Municipalities", "Non Profit"],
    description: "Sustainable Communities Challenge Fund for community renewable energy projects.",
  },
  {
    id: "18",
    province: "Nova Scotia",
    title: "Efficiency Nova Scotia Business Rebates",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar", "Solar + Battery"],
    eligibleApplicants: ["All Businesses"],
    description: "Business energy efficiency rebates.",
  },
  {
    id: "19",
    province: "Nova Scotia",
    title: "Fisheries & Aquaculture Energy Efficiency Innovation Fund",
    status: "Currently Closed",
    benefitTypes: ["Funding"],
    solutions: ["Solar"],
    eligibleApplicants: ["Fishery and Aquaculture"],
    description: "Energy efficiency innovation fund for fisheries and aquaculture sector.",
  },
  {
    id: "20",
    province: "Nova Scotia",
    title: "HCi3 Grant",
    status: "Opening Soon",
    benefitTypes: ["Grant"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses"],
    description: "HCi3 Grant program details.",
  },
  {
    id: "21",
    province: "Nova Scotia",
    title: "Low Carbon Communities",
    status: "Currently Closed",
    benefitTypes: ["Grant"],
    solutions: ["Solar"],
    eligibleApplicants: ["Municipalities", "Non Profit"],
    description: "Low Carbon Communities program for reducing carbon emissions.",
  },
  {
    id: "19",
    province: "Ontario",
    title: "Greenhouse Save On Energy",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar + Battery", "Behind The Meter"],
    eligibleApplicants: ["Greenhouse"],
    description: "Southwestern Ontario Greenhouses are eligible for rebates on Distributed Energy Resource (DER) systems, including \"Behind the Meter\" rooftop solar PV systems and battery storage systems. The solar project would have to be at least 50 kW in size and must include a battery for energy storage that has a minimum size of 500kWh. Incentives include: $1,435/kW for solar PV systems and $260/kWh for battery storage.",
    learnMoreUrl: "#",
  },
  {
    id: "20",
    province: "Ontario",
    title: "Indigenous Energy Support Program",
    status: "Opening Soon",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["First Nations"],
    description: "The Indigenous Energy Support Program includes renewable energy project funds for indigenous and Metis communities.",
    learnMoreUrl: "#",
  },
  {
    id: "21",
    province: "Ontario",
    title: "Ottawa DER Large Solar PV Funding Incentive",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar", "Behind The Meter"],
    eligibleApplicants: ["All Businesses"],
    description: "Only Available for Ottawa Businesses (Except postal code K0A). Businesses in Ottawa can participate in Save On Energy's Retrofit program, intended to promote large distributed energy resource (DER) solar systems. Businesses can receive $860/kW (AC) for a maximum of 1000 kW, totalling up to $860,000. The main requirements to be eligible for the program are: 1. The system has the be at least 50 kW in size. 2. The system needs to be roof or wall-mounted. 3. The system has to be \"behind-the-meter\" and cannot be signed onto a net metering agreement. 4. The system size can't surpass the maximum load of the facility.",
    learnMoreUrl: "#",
  },
  {
    id: "22",
    province: "Alberta",
    title: "Edmonton Change Homes For Climate Program",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["MURB"],
    description: "Edmonton residential building owners or builders with more that 4 units/dwellings are eligible for up to $100,000 to make their properties more energy efficient. Eligible applicants can receive $0.5/watt to a maximum of $4000 per dwelling. Funding is limited and will be processed on a first-come first-serve basis until December 16th, 2024.",
    learnMoreUrl: "https://www.edmonton.ca/city_government/environmental_stewardship/change-homes-for-climate-guide",
  },
  {
    id: "23",
    province: "Alberta",
    title: "Solar Club",
    status: "Open",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses"],
    description: "The Alberta Solar Club gives solar customers access to flexible export rate options to optimize the credits received through sending excess energy back to the grid. During the summer months when you're exporting more energy, you can opt for the higher electricity rate to earn more credits. During the winter then you're expected to use more energy than you export, you can opt for a lower rate to pay less on your bills. Members will also receive a 2% cash back annually on all imported energy.",
    learnMoreUrl: "#",
  },
  {
    id: "24",
    province: "Alberta",
    title: "Alberta Municipal Solar Program",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["Municipalities"],
    description: "The Alberta Municipal Solar Program offers Municipalities and community related organizations rebates for solar installations on their properties or land. Approved applicants can receive up to $0.90/watt (no more than 30% of the project cost).",
    learnMoreUrl: "#",
  },
  {
    id: "25",
    province: "Alberta",
    title: "Canmore Incentive Program",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["All Businesses"],
    description: "Only Available for Canmore businesses. Property owners in Canmore are eligible for incentives of up to $20,000 to install solar on existing buildings or new constructions. Applicants who apply will be picked based on a lottery system and an amount will be allotted based on your property size.",
    learnMoreUrl: "#",
  },
  {
    id: "26",
    province: "Alberta",
    title: "Climate Innovation Grant Program",
    status: "Currently Closed",
    benefitTypes: ["Funding"],
    solutions: ["Solar"],
    eligibleApplicants: ["Non Profit"],
    description: "Only for Calgary and Edmonton. Calgary and Edmonton Non-profit and qualified charitable organizations can receive up to $100,000 to install solar panels and make a positive impact on the city.",
    learnMoreUrl: "#",
  },
  {
    id: "27",
    province: "Alberta",
    title: "Solar for Schools Program",
    status: "Currently Closed",
    benefitTypes: ["Rebates/Incentives"],
    solutions: ["Solar"],
    eligibleApplicants: ["Schools"],
    description: "Alberta schools can apply to receive funding for a new solar PV system. The goal is to incentivize schools to make an educational and sustainable investment that will also save money on their building's electricity costs. Approved schools will receive a rebate based on the size of their system. Under 10 kW: $1.50/Watt, Between 10 kW and 150 kW: $1.25/Watt, Between 150 kW and 2 MW: $1.10/Watt, Between 2 MW and 5 MW: $1.00/Watt.",
    learnMoreUrl: "#",
  },
]

export function IncentivesSectionNew() {
  const [selectedProvince, setSelectedProvince] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<Set<ProgramStatus>>(new Set())
  const [selectedBenefitTypes, setSelectedBenefitTypes] = useState<Set<BenefitType>>(new Set())
  const [selectedSolutions, setSelectedSolutions] = useState<Set<Solution>>(new Set())
  const [selectedApplicants, setSelectedApplicants] = useState<Set<EligibleApplicant>>(new Set())
  const [expandedPrograms, setExpandedPrograms] = useState<Set<string>>(new Set())

  const tabsRef = useRef<HTMLDivElement | null>(null)
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const hoverTimeoutRef = useRef<number | null>(null)
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null)
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  useEffect(() => {
    const currentProvince = hoveredProvince ?? selectedProvince
    const currentEl = tabButtonRefs.current[currentProvince]
    const containerEl = tabsRef.current

    if (!currentEl || !containerEl) return

    const currentRect = currentEl.getBoundingClientRect()
    const containerRect = containerEl.getBoundingClientRect()

    setUnderlineStyle({
      left: currentRect.left - containerRect.left,
      width: currentRect.width,
    })
  }, [selectedProvince, hoveredProvince])

  const toggleFilter = <T,>(
    set: Set<T>,
    setter: (set: Set<T>) => void,
    value: T
  ) => {
    const newSet = new Set(set)
    if (newSet.has(value)) {
      newSet.delete(value)
    } else {
      newSet.add(value)
    }
    setter(newSet)
  }

  const resetFilters = () => {
    setSelectedStatus(new Set())
    setSelectedBenefitTypes(new Set())
    setSelectedSolutions(new Set())
    setSelectedApplicants(new Set())
    setSearchQuery("")
  }

  const filteredPrograms = programs.filter((program) => {
    // Province filter - only show programs for provinces in submenu or Canada Wide
    const supportedProvinces = ["Canada Wide", "Ontario", "Alberta", "Nova Scotia", "New Brunswick"]
    if (!supportedProvinces.includes(program.province)) {
      return false
    }
    
    if (selectedProvince !== "All" && program.province !== selectedProvince) {
      return false
    }

    // Search filter
    if (searchQuery && !program.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Status filter
    if (selectedStatus.size > 0 && !selectedStatus.has(program.status)) {
      return false
    }

    // Benefit type filter
    if (selectedBenefitTypes.size > 0 && !program.benefitTypes.some((bt) => selectedBenefitTypes.has(bt))) {
      return false
    }

    // Solutions filter
    if (selectedSolutions.size > 0 && !program.solutions.some((s) => selectedSolutions.has(s))) {
      return false
    }

    // Eligible applicants filter
    if (selectedApplicants.size > 0 && !program.eligibleApplicants.some((ea) => selectedApplicants.has(ea))) {
      return false
    }

    return true
  })

  // Group programs by province
  const groupedPrograms = filteredPrograms.reduce((acc, program) => {
    if (!acc[program.province]) {
      acc[program.province] = []
    }
    acc[program.province].push(program)
    return acc
  }, {} as Record<string, Program[]>)

  const getStatusBadgeVariant = (status: ProgramStatus) => {
    switch (status) {
      case "Open":
        return "default"
      case "Currently Closed":
        return "secondary"
      case "Opening Soon":
        return "outline"
      case "Ending Soon":
        return "default"
      default:
        return "default"
    }
  }

  const getStatusColor = (status: ProgramStatus) => {
    switch (status) {
      case "Open":
        return "bg-green-500"
      case "Currently Closed":
        return "bg-gray-500"
      case "Opening Soon":
        return "bg-gray-400"
      case "Ending Soon":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  // Count programs by filter
  const statusCounts: Record<ProgramStatus, number> = {
    Open: programs.filter((p) => p.status === "Open").length,
    "Currently Closed": programs.filter((p) => p.status === "Currently Closed").length,
    "Opening Soon": programs.filter((p) => p.status === "Opening Soon").length,
    "Ending Soon": programs.filter((p) => p.status === "Ending Soon").length,
  }

  const benefitTypeCounts: Record<BenefitType, number> = {
    "Payment Subscription": programs.filter((p) => p.benefitTypes.includes("Payment Subscription")).length,
    "Tax Exemption": programs.filter((p) => p.benefitTypes.includes("Tax Exemption")).length,
    Funding: programs.filter((p) => p.benefitTypes.includes("Funding")).length,
    Grant: programs.filter((p) => p.benefitTypes.includes("Grant")).length,
    Loan: programs.filter((p) => p.benefitTypes.includes("Loan")).length,
    "Rebates/Incentives": programs.filter((p) => p.benefitTypes.includes("Rebates/Incentives")).length,
    "Tax Benefits": programs.filter((p) => p.benefitTypes.includes("Tax Benefits")).length,
  }

  const solutionCounts: Record<Solution, number> = {
    Solar: programs.filter((p) => p.solutions.includes("Solar")).length,
    "Solar + Battery": programs.filter((p) => p.solutions.includes("Solar + Battery")).length,
    "EV Charger": programs.filter((p) => p.solutions.includes("EV Charger")).length,
    "Behind The Meter": programs.filter((p) => p.solutions.includes("Behind The Meter")).length,
  }

  const applicantCounts: Record<EligibleApplicant, number> = {
    "All Businesses": programs.filter((p) => p.eligibleApplicants.includes("All Businesses")).length,
    Schools: programs.filter((p) => p.eligibleApplicants.includes("Schools")).length,
    Greenhouse: programs.filter((p) => p.eligibleApplicants.includes("Greenhouse")).length,
    Municipalities: programs.filter((p) => p.eligibleApplicants.includes("Municipalities")).length,
    "First Nations": programs.filter((p) => p.eligibleApplicants.includes("First Nations")).length,
    "Non Profit": programs.filter((p) => p.eligibleApplicants.includes("Non Profit")).length,
    MURB: programs.filter((p) => p.eligibleApplicants.includes("MURB")).length,
    "Social Houses": programs.filter((p) => p.eligibleApplicants.includes("Social Houses")).length,
    "Fishery and Aquaculture": programs.filter((p) => p.eligibleApplicants.includes("Fishery and Aquaculture")).length,
  }

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="border-b-2 border-border/60 bg-white/50 backdrop-blur-sm rounded-t-lg px-4 pt-2">
            <div
              ref={tabsRef}
              className="relative flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base"
            >
              {provinces.map((province) => (
                <button
                  key={province}
                  ref={(el) => {
                    tabButtonRefs.current[province] = el
                  }}
                  onClick={() => setSelectedProvince(province)}
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      window.clearTimeout(hoverTimeoutRef.current)
                    }
                    setHoveredProvince(province)
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = window.setTimeout(() => {
                      setHoveredProvince(null)
                    }, 160)
                  }}
                  className={`pb-3 pt-1 font-semibold transition-all duration-300 ${
                    selectedProvince === province
                      ? "text-primary scale-105"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {province}
                </button>
              ))}

              {/* Animated underline */}
              <span
                className="pointer-events-none absolute bottom-0 h-[3px] rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-500 ease-out"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
              />
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Left Sidebar - Search and Filters */}
          <div className="space-y-6">
            {/* Sticky sidebar wrapper */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search items"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-2 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="h-5 w-1 bg-primary rounded-full"></span>
                  Filter
                </h3>
                <div className="space-y-6">
                  {/* Status */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Status
                    </h4>
                    <div className="space-y-2">
                      {(Object.keys(statusCounts) as ProgramStatus[]).map((status) => (
                        statusCounts[status] > 0 && (
                          <button
                            key={status}
                            onClick={() => toggleFilter(selectedStatus, setSelectedStatus, status)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                              selectedStatus.has(status)
                                ? "bg-primary text-white shadow-md shadow-primary/30 scale-[1.02]"
                                : "bg-secondary/80 text-foreground hover:bg-secondary hover:shadow-sm border border-transparent hover:border-border"
                            }`}
                          >
                            {status} ({statusCounts[status]})
                          </button>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Benefit Type */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Benefit Type
                    </h4>
                    <div className="space-y-2">
                      {(Object.keys(benefitTypeCounts) as BenefitType[]).map((type) => (
                        benefitTypeCounts[type] > 0 && (
                          <button
                            key={type}
                            onClick={() => toggleFilter(selectedBenefitTypes, setSelectedBenefitTypes, type)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                              selectedBenefitTypes.has(type)
                                ? "bg-primary text-white shadow-md shadow-primary/30 scale-[1.02]"
                                : "bg-secondary/80 text-foreground hover:bg-secondary hover:shadow-sm border border-transparent hover:border-border"
                            }`}
                          >
                            {type} ({benefitTypeCounts[type]})
                          </button>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Solutions
                    </h4>
                    <div className="space-y-2">
                      {(Object.keys(solutionCounts) as Solution[]).map((solution) => (
                        solutionCounts[solution] > 0 && (
                          <button
                            key={solution}
                            onClick={() => toggleFilter(selectedSolutions, setSelectedSolutions, solution)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                              selectedSolutions.has(solution)
                                ? "bg-primary text-white shadow-md shadow-primary/30 scale-[1.02]"
                                : "bg-secondary/80 text-foreground hover:bg-secondary hover:shadow-sm border border-transparent hover:border-border"
                            }`}
                          >
                            {solution} ({solutionCounts[solution]})
                          </button>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Eligible Applicants */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Eligible Applicants
                    </h4>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                      {(Object.keys(applicantCounts) as EligibleApplicant[]).map((applicant) => (
                        applicantCounts[applicant] > 0 && (
                          <button
                            key={applicant}
                            onClick={() => toggleFilter(selectedApplicants, setSelectedApplicants, applicant)}
                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                              selectedApplicants.has(applicant)
                                ? "bg-primary text-white shadow-md shadow-primary/30 scale-[1.02]"
                                : "bg-secondary/80 text-foreground hover:bg-secondary hover:shadow-sm border border-transparent hover:border-border"
                            }`}
                          >
                            {applicant} ({applicantCounts[applicant]})
                          </button>
                        )
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={resetFilters}
                    variant="outline"
                    className="w-full border-2 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors font-semibold"
                  >
                    Reset Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Program Listings */}
          <div className="space-y-10">
            {Object.keys(groupedPrograms).length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-card border-2 border-dashed border-border rounded-xl p-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium text-muted-foreground">
                    No programs found matching your filters.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              </div>
            ) : (
              Object.entries(groupedPrograms).map(([province, provincePrograms]) => (
                <div key={province} className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <h2 className="text-3xl font-bold text-foreground">{province}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {provincePrograms.length} {provincePrograms.length === 1 ? "Program" : "Programs"}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    {provincePrograms.map((program) => (
                      <div
                        key={program.id}
                        className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
                      >
                        <div className="p-6 flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              {program.isHotOffer && (
                                <Badge
                                  variant="destructive"
                                  className="flex items-center gap-1.5 px-2.5 py-1 font-semibold shadow-sm"
                                >
                                  <Flame className="h-3.5 w-3.5" />
                                  Hot Offer
                                </Badge>
                              )}
                              <Badge
                                className={`${getStatusColor(program.status)} text-white font-semibold px-2.5 py-1 shadow-sm`}
                                variant={getStatusBadgeVariant(program.status)}
                              >
                                {program.status}
                              </Badge>
                              {program.isLimitedFund && (
                                <Badge
                                  variant="outline"
                                  className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/50 font-semibold px-2.5 py-1"
                                >
                                  Limited Fund
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {program.title}
                            </h3>
                          </div>
                          <button
                            onClick={() => {
                              const newExpanded = new Set(expandedPrograms)
                              if (newExpanded.has(program.id)) {
                                newExpanded.delete(program.id)
                              } else {
                                newExpanded.add(program.id)
                              }
                              setExpandedPrograms(newExpanded)
                            }}
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                            aria-label={expandedPrograms.has(program.id) ? "Collapse details" : "Expand details"}
                          >
                            <Plus
                              className={`h-5 w-5 transition-transform duration-300 ${
                                expandedPrograms.has(program.id) ? "rotate-45" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {expandedPrograms.has(program.id) && (
                          <div className="px-6 pb-6 border-t-2 border-border/50 bg-secondary/30 pt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {program.description}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-3">
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center gap-2">
                                  <span className="h-1 w-6 bg-primary rounded-full"></span>
                                  Benefit Types
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {program.benefitTypes.map((type) => (
                                    <Badge
                                      key={type}
                                      variant="outline"
                                      className="text-xs font-medium bg-background/50 border-2"
                                    >
                                      {type}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-3">
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center gap-2">
                                  <span className="h-1 w-6 bg-primary rounded-full"></span>
                                  Solutions
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {program.solutions.map((solution) => (
                                    <Badge
                                      key={solution}
                                      variant="outline"
                                      className="text-xs font-medium bg-background/50 border-2"
                                    >
                                      {solution}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-3 sm:col-span-2">
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center gap-2">
                                  <span className="h-1 w-6 bg-primary rounded-full"></span>
                                  Eligible Applicants
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {program.eligibleApplicants.map((applicant) => (
                                    <Badge
                                      key={applicant}
                                      variant="outline"
                                      className="text-xs font-medium bg-background/50 border-2"
                                    >
                                      {applicant}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {program.deadline && (
                              <div className="pt-4 border-t border-border/50">
                                <p className="text-sm font-semibold text-foreground">
                                  <span className="text-muted-foreground">Deadline:</span>{" "}
                                  <span className="text-primary">{program.deadline}</span>
                                </p>
                              </div>
                            )}
                            {program.learnMoreUrl && (program.status === "Open" || program.status === "Ending Soon") && (
                              <div className="pt-4 border-t border-border/50">
                                <a
                                  href={program.learnMoreUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                                >
                                  Learn More
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

