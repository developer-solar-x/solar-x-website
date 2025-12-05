"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

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
  {
    id: 4,
    title: "Solar Panel Maintenance: A Complete Guide for Homeowners",
    excerpt: "Essential maintenance tips to keep your solar panels operating at peak efficiency year-round.",
    date: "February 28, 2024",
    image: "/residential-solar-panels-on-modern-home-rooftop.jpg",
    category: "Tips & Guides",
    href: "/blog/solar-panel-maintenance",
  },
  {
    id: 5,
    title: "Battery Storage Solutions: Powering Your Home 24/7",
    excerpt: "Explore how battery storage systems can help you maximize your solar investment and ensure uninterrupted power.",
    date: "February 22, 2024",
    image: "/home-battery-storage-system-on-wall-modern-house-i.jpg",
    category: "Technology",
    href: "/blog/battery-storage-solutions",
  },
  {
    id: 6,
    title: "Net Metering Explained: How to Earn Credits from Your Solar System",
    excerpt: "Learn how net metering works and how you can earn credits by sending excess energy back to the grid.",
    date: "February 18, 2024",
    image: "/modern-house-with-solar-panels-on-roof--sunn.jpg",
    category: "Incentives",
    href: "/blog/net-metering-explained",
  },
  {
    id: 7,
    title: "Commercial Solar Installation: Benefits for Your Business",
    excerpt: "Discover how commercial solar installations can reduce operating costs and improve your business's sustainability.",
    date: "February 12, 2024",
    image: "/commercial-solar-panels-on-warehouse-building.jpg",
    category: "Commercial",
    href: "/blog/commercial-solar-benefits",
  },
  {
    id: 8,
    title: "Solar Panel Types: Monocrystalline vs Polycrystalline",
    excerpt: "Compare different solar panel technologies to find the best option for your home or business.",
    date: "February 8, 2024",
    image: "/solar-panels-on-residential-roof-close-up-dark.jpg",
    category: "Technology",
    href: "/blog/solar-panel-types",
  },
  {
    id: 9,
    title: "EV Charging Stations: Integrating Solar with Electric Vehicles",
    excerpt: "Learn how to power your electric vehicle with clean solar energy and reduce your transportation costs.",
    date: "February 3, 2024",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
    category: "Technology",
    href: "/blog/ev-charging-solar",
  },
  {
    id: 10,
    title: "Alberta Solar Rebates: Complete Guide for 2024",
    excerpt: "Everything you need to know about solar rebates and incentives available in Alberta this year.",
    date: "January 28, 2024",
    image: "/alberta.jpg",
    category: "Incentives",
    href: "/blog/alberta-solar-rebates",
  },
  {
    id: 11,
    title: "Ontario Solar Programs: Maximizing Your Investment",
    excerpt: "Navigate Ontario's solar incentive programs and learn how to maximize your return on investment.",
    date: "January 22, 2024",
    image: "/ontario.jpg",
    category: "Incentives",
    href: "/blog/ontario-solar-programs",
  },
  {
    id: 12,
    title: "Residential Solar ROI: Calculating Your Payback Period",
    excerpt: "Understand how to calculate your solar investment return and payback period with real examples.",
    date: "January 15, 2024",
    image: "/residential-house-with-solar-panels-on-roof-sunny-.jpg",
    category: "Tips & Guides",
    href: "/blog/solar-roi-calculator",
  },
  {
    id: 13,
    title: "Solar Panel Installation Process: What to Expect",
    excerpt: "A step-by-step guide to the solar panel installation process from consultation to activation.",
    date: "January 10, 2024",
    image: "/modern-house-with-black-solar-panels-on-roof--sunn.jpg",
    category: "Tips & Guides",
    href: "/blog/installation-process",
  },
  {
    id: 14,
    title: "Microinverters vs String Inverters: Which is Better?",
    excerpt: "Compare microinverters and string inverters to determine the best option for your solar system.",
    date: "January 5, 2024",
    image: "/solar-panels-on-residential-roof-close-up-dark.jpg",
    category: "Technology",
    href: "/blog/microinverters-vs-string",
  },
  {
    id: 15,
    title: "Nova Scotia Solar Incentives: Your Complete Guide",
    excerpt: "Explore all available solar incentives and rebates for Nova Scotia residents in 2024.",
    date: "December 28, 2023",
    image: "/novascotia.jpg",
    category: "Incentives",
    href: "/blog/nova-scotia-incentives",
  },
  {
    id: 16,
    title: "Ground-Mounted vs Rooftop Solar: Making the Right Choice",
    excerpt: "Compare ground-mounted and rooftop solar installations to find the best solution for your property.",
    date: "December 22, 2023",
    image: "/ground-mounted-solar-array-in-green-field.jpg",
    category: "Tips & Guides",
    href: "/blog/ground-vs-rooftop",
  },
  {
    id: 17,
    title: "Solar Energy Myths Debunked: Separating Fact from Fiction",
    excerpt: "Address common misconceptions about solar energy and learn the truth about solar power.",
    date: "December 15, 2023",
    image: "/large-commercial-solar-farm-with-rows-of-panels.jpg",
    category: "Tips & Guides",
    href: "/blog/solar-myths-debunked",
  },
  {
    id: 18,
    title: "Commercial Solar Financing: Options for Your Business",
    excerpt: "Explore financing options available for commercial solar installations and find the best fit for your business.",
    date: "December 10, 2023",
    image: "/industrial-solar-installation-on-factory-building.jpg",
    category: "Commercial",
    href: "/blog/commercial-financing",
  },
  {
    id: 19,
    title: "Solar Panel Warranties: What You Need to Know",
    excerpt: "Understand different types of solar warranties and what coverage you should expect from your installer.",
    date: "December 5, 2023",
    image: "/residential-solar-panels-on-modern-home-rooftop.jpg",
    category: "Tips & Guides",
    href: "/blog/solar-warranties",
  },
  {
    id: 20,
    title: "New Brunswick Solar Opportunities: A Growing Market",
    excerpt: "Discover the growing solar market in New Brunswick and available opportunities for homeowners and businesses.",
    date: "November 28, 2023",
    image: "/newbrunswick.jpg",
    category: "Incentives",
    href: "/blog/new-brunswick-solar",
  },
]

const categories = ["All", "Technology", "Tips & Guides", "Incentives", "Commercial"]

interface BlogSectionProps {
  limit?: number
  showViewMore?: boolean
}

export function BlogSection({ limit, showViewMore = false }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)
  
  const displayedPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts
  const hasMorePosts = limit ? filteredPosts.length > limit : false

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" delay={0.1} className="mb-8 text-center">
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

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.2} className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 text-sm ${
                  selectedCategory === category
                    ? "bg-[#ff4a4a] hover:bg-[#e22f2f] text-white"
                    : "border-2 hover:border-[#ff4a4a]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
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

        {/* View More Button */}
        {showViewMore && hasMorePosts && (
          <ScrollReveal direction="up" delay={0.4} className="mt-12 text-center">
            <Link href="/about/blog">
              <Button
                className="bg-[#ff4a4a] hover:bg-[#e22f2f] text-white rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2 mx-auto"
              >
                View More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

