"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryProducts = [
  {
    name: "L-Carnosine with DHA",
    tagline: "Brain Health & Cognitive Support",
    description:
      "Advanced brain-supporting formula with DHA for enhanced nerve function.",
    image: "/images/l-20carnosine-20syrup-20-20box-202_.png",
  },
  {
    name: "Omega 3 Fish Oil",
    tagline: "Heart, Brain & Liver Health",
    description:
      "Premium fish oil syrup for cardiovascular and cognitive wellness.",
    image: "/images/omega-203-20syrup-20-20box.png",
  },
  {
    name: "Silymarin Liver Tonic",
    tagline: "Liver Detox & Support",
    description:
      "Powerful liver tonic with natural ingredients for optimal detoxification.",
    image: "/images/silimarin-20syrup-20-20box.png",
  },
  {
    name: "Cranberry Syrup",
    tagline: "UTI Prevention & Kidney Health",
    description:
      "Natural cranberry extract for urinary tract and kidney support.",
    image: "/images/sei-20cranberry-20syrup-20box.png",
  },
]

export function StickyGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative bg-background">
      <div className="flex min-h-[400vh]">
        {/* Sticky left panel */}
        <div className="hidden w-1/2 lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center px-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Product Range
              </span>
              <h2 className="mb-6 font-serif text-5xl font-bold leading-tight text-foreground">
                Complete Wellness{" "}
                <span className="text-primary">Solutions</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                From brain health to liver support, our comprehensive range of
                pharmaceutical-grade supplements is designed to address your
                specific health needs.
              </p>

              {/* Progress indicator */}
              <div className="flex gap-2">
                {galleryProducts.map((_, index) => {
                  const segmentStart = index / galleryProducts.length
                  const segmentEnd = (index + 1) / galleryProducts.length

                  return (
                    <ProgressBar
                      key={index}
                      scrollProgress={scrollYProgress}
                      segmentStart={segmentStart}
                      segmentEnd={segmentEnd}
                    />
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling right panel */}
        <div className="w-full lg:w-1/2">
          {galleryProducts.map((product, index) => (
            <GalleryItem
              key={product.name}
              product={product}
              index={index}
              total={galleryProducts.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgressBar({
  scrollProgress,
  segmentStart,
  segmentEnd,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
  segmentStart: number
  segmentEnd: number
}) {
  const width = useTransform(scrollProgress, [segmentStart, segmentEnd], ["0%", "100%"])

  return (
    <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
      <motion.div style={{ width }} className="h-full bg-primary" />
    </div>
  )
}

function GalleryItem({
  product,
  index,
  total,
  scrollProgress,
}: {
  product: (typeof galleryProducts)[0]
  index: number
  total: number
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const segmentStart = index / total
  const segmentEnd = (index + 1) / total
  const midPoint = (segmentStart + segmentEnd) / 2

  const opacity = useTransform(
    scrollProgress,
    [
      segmentStart,
      segmentStart + 0.05,
      midPoint,
      segmentEnd - 0.05,
      segmentEnd,
    ],
    [0, 1, 1, 1, index === total - 1 ? 1 : 0]
  )

  const y = useTransform(
    scrollProgress,
    [segmentStart, segmentStart + 0.1, segmentEnd - 0.1, segmentEnd],
    [100, 0, 0, index === total - 1 ? 0 : -100]
  )

  return (
    <motion.div
      style={{ opacity, y }}
      className="flex h-screen items-center justify-center px-6 lg:px-12"
    >
      <div className="glass-card w-full max-w-lg overflow-hidden rounded-3xl p-8 lg:p-10">
        {/* Mobile header */}
        <div className="mb-6 lg:hidden">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative mx-auto mb-8 h-[280px] w-[140px] md:h-[320px] md:w-[160px]"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="160px"
          />
        </motion.div>

        <div className="text-center">
          <h3 className="mb-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
            {product.name}
          </h3>
          <p className="mb-4 text-sm font-medium text-primary">
            {product.tagline}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
