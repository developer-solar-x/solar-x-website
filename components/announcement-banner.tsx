"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

// Helper function to remove emojis from text
const removeEmojis = (text: string) => {
  return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]/gu, '').trim()
}

const promotions = [
  {
    text: "Ontario Businesses: Get a FREE 54kWh Battery with Solar Installation!",
    link: "#",
    linkText: "Get Exclusive Offer",
  },
  {
    text: "Residential Solar: Save up to 90% on Your Energy Bills!",
    link: "#",
    linkText: "Learn More",
  },
  {
    text: "Limited Time: 30% Federal Tax Credit on All Solar Installations!",
    link: "#",
    linkText: "Claim Now",
  },
  {
    text: "Go Green: Zero Down Payment Available for Qualified Customers!",
    link: "#",
    linkText: "Apply Today",
  },
  {
    text: "Commercial Solar: ROI in as Little as 5 Years!",
    link: "#",
    linkText: "Get Quote",
  },
]

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length)
    }, 5000) // Change promotion every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1a2b6b] text-white py-3 px-4 text-center text-sm overflow-hidden relative min-h-[48px]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center gap-2 flex-shrink-0 px-2"
          >
            <span className="flex-shrink">{removeEmojis(promo.text)}</span>
            <Link
              href={promo.link}
              className="text-[#e31b23] hover:underline font-medium whitespace-nowrap flex-shrink-0 ml-1"
            >
              {promo.linkText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
