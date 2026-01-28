"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { AboutSection } from "@/components/about-section"
import { RndSection } from "@/components/rnd-section"
import { ScienceSection } from "@/components/science-section"
import { StickyGallery } from "@/components/sticky-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <RndSection />
      <ProductShowcase />
      <ScienceSection />
      <StickyGallery />
      <Footer />
    </main>
  )
}
