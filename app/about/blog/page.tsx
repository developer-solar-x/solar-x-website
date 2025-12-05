import { AnnouncementBanner } from "@/components/announcement-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingQuoteCard } from "@/components/floating-quote-card"
import { BlogHero } from "@/components/about/blog-hero"
import { BlogSection } from "@/components/blog-section"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      <BlogHero />
      <div id="blog-posts">
        <BlogSection />
      </div>
      <Footer />
      <FloatingQuoteCard />
    </main>
  )
}

