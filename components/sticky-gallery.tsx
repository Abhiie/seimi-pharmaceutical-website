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

// Duplicate products to ensure a long smooth flow
const streamProducts = [...galleryProducts, ...galleryProducts, ...galleryProducts]

export function StickyGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Shorten the scroll distance for quicker gratification
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, streamProducts.length])

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-orange-50/20"> 
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-[1000px]">
       
       {/* Ambient Depth Background - Absolute Layer */}
       <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-orange-50/30 to-white">
          <FloatingParticle className="top-[30%] left-[20%] bg-blue-500/10 w-[500px] h-[500px] blur-[100px]" delay={0} />
          <FloatingParticle className="bottom-[20%] right-[20%] bg-orange-500/10 w-[600px] h-[600px] blur-[120px]" delay={2} />
          {/* Grid lines for depth perception */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

       {/* Content Layer - Relative on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        
        {/* Header - Positioned absolutely at top so it doesn't push content */}
        <div className="absolute top-4 z-20 w-full text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground">
                <span className="text-primary">Deep</span> Focus
            </h2>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                Precision Engineered Wellness
            </p>
        </div>

        {/* The Stream Container - Absolute centered */}
        <div className="absolute inset-0 flex h-full w-full items-center justify-center transform-3d z-10 pointer-events-none"> 
             {streamProducts.map((product, index) => {
                 return (
                     <div key={`${product.name}-${index}`} className="pointer-events-auto flex items-center justify-center">
                        <StreamItem 
                            product={product} 
                            index={index} 
                            activeIndex={activeIndex} 
                        />
                     </div>
                 )
             })}
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-2 opacity-50">
             <span className="text-[9px] uppercase tracking-widest text-foreground/80 font-bold">Scroll to Explore</span>
             <div className="h-8 w-[1px] bg-foreground/20" />
        </div>
      </div>
      
      </div>
    </section>
  )
}

function StreamItem({ 
    product, 
    index, 
    activeIndex 
}: { 
    product: typeof galleryProducts[0] 
    index: number
    activeIndex: any
}) {
    // Logic:
    // Calculate distance from the "active" floating index.
    // diff = activeIndex - index
    // If diff is 0, we are at the screen.
    // If diff is negative (e.g. -5), we are 5 "units" deep in the background.
    // If diff is positive (e.g. +1), we have passed the camera.
    
    // Z-Position:
    const zStep = 900 // Increased spacing for more distinct "stations"
    
    const zPosition = useTransform(activeIndex, (current: number) => {
        const diff = index - current
        return diff * zStep
    })

    // Opacity:
    // Fade in from deep. 
    const opacity = useTransform(zPosition, (z: number) => {
        if (z > 300) return 0 // Passed camera
        if (z < -3500) return 0 // Too deep
        
        // Fully visible in the "active zone"
        if (z > -1200) return 1 
        
        // Fade in gradually from distance
        return 1 - (Math.abs(z + 1200) / 2300)
    })

    // Scale:
    // Not strictly needed with CSS perspective, but let's clamp it so distant items aren't microscopic pixels,
    // or to add extra "punch" as it hits close range.
    // Actually, let standard perspective handle scale, it's more natural.
    
    // Blur Effect:
    // Blur when deep. Crisp at 0.
    const blur = useTransform(zPosition, (z: number) => {
        if (z > 100) return "20px"
        if (z < -500) return "4px"
        return "0px"
    })
    
    // Is Active? (Roughly centered)
    // Used for the specific effects
    const isActive = useTransform(zPosition, (z: number) => Math.abs(z) < 200 ? 1 : 0)

    return (
        <motion.div
            className="absolute flex items-center justify-center will-change-transform" // Optimized for performance
            style={{
                z: zPosition,
                opacity: opacity,
                filter: useTransform(blur, (b) => `blur(${b})`),
            }}
        >
             <CardContent product={product} index={index} isActive={isActive} />
        </motion.div>
    )
}

function FloatingParticle({ className, delay }: { className?: string, delay: number }) {
    return (
        <motion.div 
            animate={{ 
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className={`absolute rounded-full blur-[50px] mix-blend-multiply ${className}`}
        />
    )
}

function CardContent({ product, index, isActive }: { product: typeof galleryProducts[0]; index: number; activeIndex?: any; isActive?: any }) {
  // We can use the isActive motion value to drive specific focus states
  // For now, let's just make the card look awesome
  
  return (
    <motion.div 
      className="group relative h-[600px] w-[500px] overflow-hidden rounded-[3rem] border border-white/40 bg-white/60 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500"
      style={{
        boxShadow: `0 40px 80px -20px ${product.color}50`,
        borderColor: `${product.color}40`
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/80 to-white/20 opacity-80" />
      
      {/* Scanning Light Effect - Horizontal line sweeping down */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear",
            delay: index * 1 // Offset scan for each card
        }}
        className="absolute left-0 right-0 h-[2px] z-10 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
      />
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear",
            delay: index * 1
        }}
        className="absolute left-0 right-0 h-[20px] z-10 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-md"
      />
      
      {/* Colored glow spot */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 h-80 w-80 rounded-full blur-[100px]"
        style={{ background: product.color }}
      />
      
      {/* Decorative 'Deep Think' Tech Elements */}
      <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-foreground/40 font-bold z-20">
          ID-{index.toString().padStart(3, '0')} // SEIMI-LABS
      </div>

      <div className="relative z-10 flex h-full flex-col">
          {/* Image Container - Larger */}
          <div className="relative flex-[1.5] overflow-hidden rounded-3xl shadow-sm mb-6">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-6 drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

        <div className="mt-2 text-center">
            <h3 className="mb-2 font-serif text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              {product.name}
            </h3>
            <p 
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: product.color }}
            >
              {product.tagline}
            </p>
            <p className="line-clamp-3 text-base text-gray-600 leading-relaxed font-medium px-4">
              {product.description}
            </p> 
        </div>
      </div>
    </motion.div>
  )
}
