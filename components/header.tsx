"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Residential", href: "/residential", hasSubmenu: true, submenuKey: "residential" },
  { label: "Commercial", href: "/commercial", hasSubmenu: true, submenuKey: "commercial" },
  { label: "Provinces", href: "#", hasSubmenu: true, submenuKey: "provinces" },
  { label: "About", href: "/about", hasSubmenu: true, submenuKey: "about" },
  { label: "Contact", href: "#" },
]

const residentialSubmenu = [
  { label: "Solar Solutions", href: "/residential/solar-solutions" },
  { label: "Battery Solutions", href: "/residential/battery-solutions" },
  { label: "HVAC", href: "/residential/hvac" },
  { label: "FAQs", href: "/about#faqs" },
]

const commercialSubmenu = [
  { label: "Solar Solutions", href: "/commercial/solar-solution" },
  { label: "Battery Solutions", href: "/commercial/battery-solution" },
  { label: "EV Charging Solutions", href: "/commercial/ev-charging-solutions" },
  { label: "Incentives", href: "/commercial/incentives" },
  { label: "FAQs", href: "/about#faqs" },
]

const provincesSubmenu = [
  { label: "Alberta", href: "/provinces/alberta" },
  { label: "New Brunswick", href: "/provinces/new-brunswick" },
  { label: "Nova Scotia", href: "/provinces/nova-scotia" },
  { label: "Ontario", href: "/provinces/ontario" },
]

const aboutSubmenu = [
  { label: "FAQs", href: "/about#faqs" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getSubmenu = (key: string | undefined) => {
    if (key === "residential") return residentialSubmenu
    if (key === "commercial") return commercialSubmenu
    if (key === "provinces") return provincesSubmenu
    if (key === "about") return aboutSubmenu
    return null
  }

  return (
    <header 
      className="bg-background border-b border-border sticky top-0 z-50"
      onMouseLeave={() => setHoveredSubmenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/solarxlogo-20cropped.png"
              alt="SolarX - Modern Solar Solutions"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasSubmenu && item.submenuKey && setHoveredSubmenu(item.submenuKey)}
              >
                <Link
                  href={item.href}
                  className={`text-foreground/80 hover:text-foreground text-sm font-medium transition-colors relative flex items-center gap-1 ${
                    item.hasSubmenu && hoveredSubmenu === item.submenuKey ? "text-foreground" : ""
                  }`}
                >
                  {item.label}
                  {item.hasSubmenu && isScrolled && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {item.hasSubmenu && hoveredSubmenu === item.submenuKey && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Get Quote Button - Right */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-[#e31b23] hover:bg-[#c91920] text-white" suppressHydrationWarning>Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub-navigation bar that appears on hover */}
      {hoveredSubmenu && getSubmenu(hoveredSubmenu) && (
        <div 
          className="hidden md:block bg-background border-b border-border"
          onMouseEnter={() => setHoveredSubmenu(hoveredSubmenu)}
          onMouseLeave={() => setHoveredSubmenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center gap-8 h-12">
              {getSubmenu(hoveredSubmenu)?.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors relative"
                >
                  {subItem.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground text-sm font-medium px-2 py-1"
                  >
                    {item.label}
                  </Link>
                  {item.hasSubmenu && getSubmenu(item.submenuKey) && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {getSubmenu(item.submenuKey)?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="text-foreground/60 hover:text-foreground text-sm px-2 py-1"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="rounded-full bg-[#e31b23] hover:bg-[#c91920] text-white mt-2 w-fit" suppressHydrationWarning>Get Quote</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
