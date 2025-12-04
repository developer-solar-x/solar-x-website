"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Energy in Canada: Trends and Innovations",
    excerpt: "Discover the latest trends in solar energy technology and how they're shaping the future of renewable energy across Canada.",
    date: "March 15, 2024",
    image: "/residential-solar-panels-on-modern-home-rooftop.jpg",
    category: "Technology",
    href: "/blog/future-of-solar-energy",
  },
  {
    id: 2,
    title: "How to Maximize Your Solar Panel Efficiency This Winter",
    excerpt: "Learn practical tips and strategies to ensure your solar panels perform optimally during the colder months.",
    date: "March 10, 2024",
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    category: "Tips & Guides",
    href: "/blog/maximize-solar-efficiency-winter",
  },
  {
    id: 3,
    title: "Understanding Solar Incentives and Rebates in Your Province",
    excerpt: "A comprehensive guide to available solar incentives, rebates, and tax credits across different Canadian provinces.",
    date: "March 5, 2024",
    image: "/ground-mounted-solar-array-in-green-field.jpg",
    category: "Incentives",
    href: "/blog/solar-incentives-guide",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" delay={0.1} className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e31b23]">
            Latest Insights
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground">
            From Our Blog
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Stay informed with the latest news, tips, and insights about solar energy and sustainable living.
          </p>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              direction="up"
              delay={index * 0.1}
              className="group"
            >
              <Link
                href={post.href}
                className="block bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#e31b23] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#e31b23] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#e31b23] group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal direction="up" delay={0.4} className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#1a2b6b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a2b6b]/90 transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

