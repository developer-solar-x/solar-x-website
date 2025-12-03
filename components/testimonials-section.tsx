"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

// Fallback testimonials if Google Reviews API is not configured
const fallbackTestimonials = [
  {
    name: "Carlos Zamorano",
    text: "Great company to work with. Very thorough when explaining the entire process and the cost. Everything went flawless from start to finish. Installation was all completed in 1 day and I couldn't be happier. These past few days when it's been much more sunnier production has been amazing!",
    rating: 5,
  },
  {
    name: "Cindy Nguyen",
    text: "Everyone at SolarX has been very helpful and knowledgeable. Wanted to cut power costs for my business and reached out after seeing a post about the 30% tax credit. They helped me work out everything with the paperwork and completed a clean installation. Special thanks to my specialist Tony for making sure I had everything I needed.",
    rating: 5,
  },
  {
    name: "Douglas Beach",
    text: "SolarX provides excellent service from start to finish and responsive customer support; any issues are quickly addressed and professional. Also, provides 0% financing with option to payout any time with no penalty. Highly recommend SolarX for your Solar panel installation.",
    rating: 5,
  },
  {
    name: "John Walker",
    text: "SolarX installed a solar system on our home this summer. It works great and my power usage is 100% offset by the system. I have banked power credits (kWh) as you can see from my bill. The only charge is a payment for heat pumps and the monthly connection charge. A satisfied customer.",
    rating: 5,
  },
  {
    name: "Jon Scott",
    text: "SolarX has been fantastic to deal with. Anything under their control has gone very quickly and smoothly. Update a few years in, I stand by this review. We had a couple issues post install but SolarX was right there to help. Great company to deal with.",
    rating: 5,
  },
  {
    name: "Kathy Day",
    text: "We have been dealing with SolarX for over two years, and have had no issues the communication or service. We would recommend them to others in the community.",
    rating: 5,
  },
  {
    name: "Matt Weir",
    text: "Excellent experience with SolarX. From planning to installation they have been helpful and informative. They stand by their work as well, even after install of the brackets I asked that a wire be moved and they jumped right on it. Great company. Highly recommend.",
    rating: 5,
  },
  {
    name: "Nick Pappas",
    text: "Very happy with my SolarX residential solution. 31 panels on my roof. SolarX has been very responsive to all my questions or minor issues.",
    rating: 5,
  },
]

interface Review {
  name: string
  text: string
  rating?: number
  profilePhoto?: string | null
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [testimonials, setTestimonials] = useState<Review[]>(fallbackTestimonials)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch Google reviews
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews')
        const data = await response.json()
        
        if (data.reviews && data.reviews.length > 0) {
          setTestimonials(data.reviews)
        }
      } catch (error) {
        console.error('Failed to fetch Google reviews, using fallback:', error)
        // Keep fallback testimonials
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" delay={0.1} className="mb-6 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e31b23]">
            Reviews
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">
            What our customers are saying
          </h2>
        </ScrollReveal>

        {/* Navigation Arrows */}
        <ScrollReveal direction="down" delay={0.15} className="flex justify-end gap-2 mb-8">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white border border-border hover:bg-foreground/5 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white border border-border hover:bg-foreground/5 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isLoading ? (
            <div className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-sm border border-border">
              <div className="animate-pulse space-y-4">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                direction="left"
                delay={index * 0.1}
                className="flex-shrink-0 w-[350px] bg-white rounded-xl p-6 shadow-sm border border-border snap-start"
              >
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.profilePhoto ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.profilePhoto}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#1a2b6b]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#1a2b6b] font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    {testimonial.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating!
                                ? "fill-[#e31b23] text-[#e31b23]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    {!testimonial.rating && <Quote className="w-5 h-5 text-[#e31b23] mt-1" />}
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-6">{testimonial.text}</p>
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
