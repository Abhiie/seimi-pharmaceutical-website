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

  const products = [
    {
      src: "/images/alfa-keta.png",
      alt: "Alfa Keta Analogue",
      rotate: -15,
    },
    {
      src: "/images/digestive-enzyme.png",
      alt: "Digestive Enzyme",
      rotate: -5,
    },
    {
      src: "/images/grape-seed.png",
      alt: "Grape Seed",
      rotate: 5,
    },
    {
      src: "/images/5-htp.png",
      alt: "5-HTP",
      rotate: 15,
    },
    {
      src: "/images/l-20carnosine-20syrup-20-20box.png",
      alt: "L-Carnosine with DHA",
      rotate: 25,
    },
    {
      src: "/images/omega-203-20syrup-20-20box.png",
      alt: "Omega 3 Fish Oil",
      rotate: -25,
    },
  ]

  // Create an infinite duplicate list for the marquee
  const marqueeProducts = [...products, ...products, ...products]

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
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
            className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            <span className="text-balance">Premium Health</span>
            <br />
            <span className="text-primary">Supplements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-16 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            Advanced pharmaceutical-grade formulations designed to support brain
            health, liver function, and overall wellness. Made with the highest
            quality ingredients.
          </motion.p>

          {/* Infinite Marquee Product showcase */}
          <div className="relative mx-auto w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
              className="flex gap-12 md:gap-20"
              animate={{ x: [0, -100 * products.length * 2] }} // Adjust based on estimated width logic or percentage
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {marqueeProducts.map((product, index) => (
                <motion.div
                  key={`${product.alt}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotateY: 10,
                    filter: "brightness(1.1)",
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="relative flex-shrink-0 cursor-pointer perspective-1000"
                >
                  <div className="relative h-[280px] w-[160px] md:h-[350px] md:w-[220px]">
                    <Image
                      src={product.src || "/placeholder.svg"}
                      alt={product.alt}
                      fill
                      className="object-contain drop-shadow-2xl transition-all duration-300"
                      sizes="(max-width: 768px) 160px, 220px"
                    />
                    {/* Reflection effect */}
                    <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 blur-sm transform scale-y-[-1]" />
                  </div>
                </motion.div>
              ))}
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
