import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const solarxLinks = [
  { label: "About", href: "#" },
  { label: "Product", href: "#" },
  { label: "Warranty", href: "#" },
  { label: "Terms and Policies", href: "#" },
  { label: "Referral Program", href: "#" },
  { label: "SolarX Academy", href: "#" },
  { label: "News", href: "#" },
  { label: "Employee Portal", href: "#" },
]

const serviceAreas = [
  { label: "Alberta", href: "/provinces/alberta" },
  { label: "British Columbia", href: "#" },
  { label: "New Brunswick", href: "/provinces/new-brunswick" },
  { label: "Nova Scotia", href: "/provinces/nova-scotia" },
  { label: "Ontario", href: "/provinces/ontario" },
]

const otherLocations = [
  "North York, Ontario",
  "Calgary, Alberta",
  "Edmonton, Alberta",
  "Nova Scotia",
  "British Columbia",
]

export function Footer() {
  return (
    <footer className="bg-[#0f1a3d] text-white">
      {/* Tagline Banner - Updated to SolarX navy */}
      <div className="bg-[#1a2b6b] py-4 text-center">
        <p className="text-white font-medium">Together We Create a Micro-Generation Future</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* SolarX Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SolarX</h3>
            <ul className="space-y-2">
              {solarxLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.label}>
                  <Link href={area.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+18883181988"
                  className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (888) 318-1988
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@solarx.com"
                  className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@solarx.com
                </Link>
              </li>
              <li className="pt-2">
                <Link href="#" className="text-[#e31b23] hover:underline text-sm">
                  View on Google Map
                </Link>
              </li>
              <li className="pt-2">
                <p className="text-white/70 text-sm font-medium">Toronto, Ontario Head Office</p>
                <p className="text-white/50 text-sm flex items-start gap-2 mt-1">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  3761 Victoria Park Ave. Unit 9<br />
                  Scarborough, Ontario M1W 3S2
                </p>
              </li>
            </ul>
          </div>

          {/* Other Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Locations</h3>
            <ul className="space-y-2">
              {otherLocations.map((location) => (
                <li key={location}>
                  <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                    {location}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e31b23] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e31b23] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e31b23] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e31b23] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0f1a3d" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Updated to SolarX */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">Copyright © SolarX 2021 - 2025</p>
        </div>
      </div>
    </footer>
  )
}
