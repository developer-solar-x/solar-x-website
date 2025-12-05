"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Our <span className="text-[#ff4a4a]">Blog</span>
        </h1>
        <p className="mt-8 text-3xl font-medium text-white/90">
          Stay informed with the latest <span className="text-[#ff4a4a]">insights</span> and updates about solar energy.
        </p>
        <div className="mt-10">
          <Link href="#blog-posts">
            <Button
              size="lg"
              className="bg-[#ff4a4a] text-white hover:bg-[#e22f2f] rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-black/40 border border-white/10"
            >
              Explore Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

