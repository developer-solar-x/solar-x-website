"use client"

import Image from "next/image"

const trustPartners = [
  {
    name: "Vancity Community Investment Bank",
    image: "/trust_partners/640px-Vancity_Community_Investment_Bank_logo.svg_.png",
  },
  {
    name: "Clean 50",
    image: "/trust_partners/Clean_50_emerging-leader.png",
  },
  {
    name: "Daco",
    image: "/trust_partners/Daco_4933446.png",
  },
  {
    name: "Trade Network",
    image: "/trust_partners/EFNS-2626-01-ENS-00604-Trade-Network-Logo-2016-KO.png",
  },
  {
    name: "Net Zero Home",
    image: "/trust_partners/logo_netzerohome_colour-qualified-energy-advisor-web-RGB.png",
  },
  {
    name: "Renomark",
    image: "/trust_partners/renomark-2048x1848.png",
  },
  {
    name: "Vaultpay",
    image: "/trust_partners/vaultpay__2_-removebg-preview.png",
  },
]

export function TrustPartnersCarousel() {
  return (
    <section className="py-12 md:py-16 bg-[#1a2b6b] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#e31b23] mb-2">
            Trusted Partners
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Proudly partnered with industry leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 animate-partners-marquee will-change-transform">
            {[...trustPartners, ...trustPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative h-20 md:h-24 min-w-[140px] md:min-w-[180px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-full h-full max-w-[220px]">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 12vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

