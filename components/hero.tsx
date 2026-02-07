"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  // Extended products array with details for the 3D carousel
  const carouselProducts = [
    {	
      src: "/images/alfa-keta.png",
      name: "Alfa Keta Analogue",
      tagline: "Kidney Health",
      description: "Essential amino acids for kidney support.",
      color: "#F97316",
    },
    {
      src: "/images/digestive-enzyme.png",
      name: "Digestive Enzyme",
      tagline: "Healthy Digestion",
      description: "Comprehensive enzyme blend for digestion.",
      color: "#F97316",
    },
    {
      src: "/images/grape-seed.png",
      name: "Grape Seed",
      tagline: "Heart & Immune",
      description: "Potent antioxidant formula.",
      color: "#F97316",
    },
     {
      src: "/images/5-htp.png",
      name: "5-HTP",
      tagline: "Mental Wellness",
      description: "Support for mood and sleep regulation.",
      color: "#F97316",
    },
    {
      src: "/images/l-20carnosine-20syrup-20-20box.png",
      name: "L-Carnosine",
      tagline: "Brain Health",
      description: "Advanced formula for nerve function.",
      color: "#F97316",
    },
    {
      src: "/images/omega-203-20syrup-20-20box.png",
      name: "Omega 3 Fish Oil",
      tagline: "Heart Health",
      description: "Premium fish oil for cardiovascular wellness.",
      color: "#F97316",
    },
  ]

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-32 text-white"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Innovation in Preventive Nutrition
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            <span className="text-balance">Premium Health</span>
            <br />
            <span className="text-primary">Supplements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-16 max-w-2xl text-pretty text-lg text-gray-400 md:text-xl"
          >
            Advanced pharmaceutical-grade formulations designed to support brain
            health, liver function, and overall wellness. Made with the highest
            quality ingredients.
          </motion.p>

          {/* 3D Auto-Rotating Carousel */}
          <div className="relative mx-auto flex h-[500px] w-full items-center justify-center perspective-[2000px]">
            <motion.div
              animate={{ rotateY: [0, -360] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative flex h-[350px] w-[250px] items-center justify-center"
            >
              {[...carouselProducts, ...carouselProducts].map((product, index) => {
                const count = carouselProducts.length * 2
                const radius = 600
                const angle = (index / count) * 360

                return (
                  <div
                    key={`${product.name}-${index}`}
                    className="absolute flex h-[350px] w-[250px] origin-center items-center justify-center p-2"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div
                      className="group relative h-full w-full overflow-hidden rounded-3xl border p-5 shadow-xl transition-all duration-500"
                      style={{
                        borderColor: `${product.color}40`,
                        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.90) 100%)`,
                        boxShadow: `0 8px 32px -8px ${product.color}20`,
                      }}
                    >
                      {/* Colored glow spot */}
                      <div
                        className="absolute -top-20 -right-20 h-32 w-32 rounded-full blur-[50px] opacity-40 transition-opacity group-hover:opacity-60"
                        style={{ background: product.color }}
                      />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="relative flex-1">
                          <Image
                            src={product.src || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                            sizes="250px"
                            priority={index < 4}
                          />
                        </div>

                        <div className="mt-4 text-center">
                          <h3 className="mb-1 font-serif text-lg font-bold text-foreground">
                            {product.name}
                          </h3>
                          <p
                            className="text-[10px] font-medium uppercase tracking-wider"
                            style={{ color: product.color }}
                          >
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Scroll to Explore
          </span>
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
