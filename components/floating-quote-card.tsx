"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

const floatingImages = [
  {
    src: "/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg",
    alt: "Aerial view of solar installation",
  },
  {
    src: "/residential-solar-panels-on-modern-home-rooftop.jpg",
    alt: "Modern home rooftop solar installation",
  },
  {
    src: "/ground-mounted-solar-array-in-green-field.jpg",
    alt: "Ground-mounted solar array in a green field",
  },
]

export function FloatingQuoteCard() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (floatingImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % floatingImages.length)
    }, 6000) // change image every 6 seconds

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-5 duration-300">
      <div className="bg-background rounded-xl shadow-2xl border border-border overflow-hidden w-80 md:w-96">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-foreground/70" />
        </button>

        {/* Image slideshow */}
        <div className="relative h-36 md:h-40 overflow-hidden">
          {floatingImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 text-center space-y-4">
          <p className="text-base md:text-lg font-semibold text-[#ff4a4a]">Find Out Your Solar Savings in 15 Seconds</p>
          <Link href="/contact" className="w-full block">
            <Button className="w-full bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full text-sm md:text-base font-semibold shadow-lg" suppressHydrationWarning>
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
