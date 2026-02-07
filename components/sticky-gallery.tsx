"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryProducts = [
  {
    name: "L-Carnosine with DHA",
    tagline: "Brain Health & Support",
    description:
      "Advanced brain-supporting formula with DHA for enhanced nerve function.",
    image: "/images/l-20carnosine-20syrup-20-20box-202_.png",
    color: "#F97316", // Orange
  },
  {
    name: "Omega 3 Fish Oil",
    tagline: "Heart & Cognitive Wellness",
    description:
      "Premium fish oil syrup for cardiovascular and cognitive wellness.",
    image: "/images/omega-203-20syrup-20-20box.png",
    color: "#F97316", // Orange
  },
  {
    name: "Silymarin Liver Tonic",
    tagline: "Liver Detox & Support",
    description:
      "Powerful liver tonic with natural ingredients for optimal detoxification.",
    image: "/images/silimarin-20syrup-20-20box.png",
    color: "#F97316", // Orange
  },
  {
    name: "Cranberry Syrup",
    tagline: "UTI & Kidney Health",
    description:
      "Natural cranberry extract for urinary tract and kidney support.",
    image: "/images/sei-20cranberry-20syrup-20box.png",
    color: "#F97316", // Orange
  },
  {
    name: "Digestive Enzyme",
    tagline: "Healthy Digestion",
    description:
      "Comprehensive enzyme blend to support healthy digestion.",
    image: "/images/digestive-enzyme.png",
    color: "#F97316", // Orange
  },
  {
    name: "Grape Seed",
    tagline: "Heart & Immune",
    description:
      "Potent antioxidant formula with Resveratrol.",
    image: "/images/grape-seed.png",
    color: "#F97316", // Orange
  },
]

export function StickyGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Rotate the carousel based on scroll
  // We want to rotate a full 360 degrees (or more) over the scroll distance
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-orange-50">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-12 z-10 mx-auto max-w-2xl px-6 text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            360° Product View
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">
            Complete Wellness <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            Scroll to rotate the carousel and explore our range.
          </p>
        </motion.div>

        {/* 3D Scene Viewport */}
        <div className="flex h-[600px] w-full items-center justify-center perspective-[2000px]">
          {/* Carousel Container */}
          <motion.div
            style={{ 
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative flex h-[400px] w-[300px] items-center justify-center"
          >
            {/* Duplicate products to create a denser circle (12 items) */}
            {[...galleryProducts, ...galleryProducts].map((product, index) => {
              const count = galleryProducts.length * 2
              const radius = 650 // Increased radius for more items
              const angle = (index / count) * 360

              return (
                <div
                  key={`${product.name}-${index}`}
                  className="absolute flex h-[400px] w-[280px] origin-center items-center justify-center p-2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden", 
                  }}
                >
                  <CardContent product={product} />
                </div>
              )
            })}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
         <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
            <div className="h-12 w-[1px] bg-foreground/20"></div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to Rotate</span>
         </div>
      </div>
    </section>
  )
}

function CardContent({ product }: { product: typeof galleryProducts[0] }) {
  return (
    <div 
      className="group relative h-full w-full overflow-hidden rounded-3xl border p-6 shadow-xl transition-all duration-500"
      style={{
        borderColor: `${product.color}40`, 
        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.90) 100%)`, // High opacity white background
        boxShadow: `0 8px 32px -8px ${product.color}20` 
      }}
    >
      {/* Glossy sheen */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-20" />
      
      {/* Colored glow spot */}
      <div 
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[60px] opacity-40 transition-opacity group-hover:opacity-60"
        style={{ background: product.color }}
      />
      
      <div className="relative z-10 flex h-full flex-col">
          <div className="relative flex-1">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              sizes="280px"

            />
          </div>

        <div className="mt-4 text-center">
            <h3 className="mb-1 font-serif text-xl font-bold text-foreground">
              {product.name}
            </h3>
            <p 
              className="mb-2 text-xs font-medium uppercase tracking-wider"
              style={{ color: product.color }}
            >
              {product.tagline}
            </p>
            <p className="line-clamp-2 text-xs text-muted-foreground">
              {product.description}
            </p>
        </div>
      </div>
    </div>
  )
}
