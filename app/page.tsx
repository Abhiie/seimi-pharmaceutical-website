"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { CoreValues } from "@/components/core-values"
import { StatsSection } from "@/components/stats-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { ScienceSection } from "@/components/science-section"
import { RndSection } from "@/components/rnd-section"
import { StickyGallery } from "@/components/sticky-gallery"
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <RndSection />
      {/* <ProductShowcase /> */}
      <ScienceSection />
      <StickyGallery />
      <BlogSection />

      {/* <CoreValues /> */}
      <StatsSection />
      <Footer />
    </main>
  )
}
