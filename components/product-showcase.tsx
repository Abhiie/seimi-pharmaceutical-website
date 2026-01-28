"use client"

import React from "react"

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, Heart, Brain, Droplets, Leaf, Activity, Pill, Grape } from "lucide-react"

interface Product {
  id: string
  name: string
  category: "syrup" | "tablet" | "capsule"
  tagline: string
  description: string
  benefits: string[]
  image: string
  volume: string
  icon: React.ReactNode
  color: string
}

const products: Product[] = [
  {
    id: "l-carnosine",
    name: "L-Carnosine with DHA",
    category: "syrup",
    tagline: "Brain Health & Nerve Function",
    description:
      "Advanced formulation to support cognitive function and enhance nerve health with DHA omega fatty acids.",
    benefits: [
      "Supports Brain Health",
      "Enhances Nerve Function",
      "Cognitive Support",
    ],
    image: "/images/l-20carnosine-20syrup-20-20box.png",
    volume: "100ML",
    icon: <Brain className="h-5 w-5" />,
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    id: "omega-3",
    name: "Omega 3 Fish Oil",
    category: "syrup",
    tagline: "Heart, Brain & Liver Support",
    description:
      "Premium fish oil syrup rich in EPA and DHA to support cardiovascular health, brain focus, and liver function.",
    benefits: ["Heart Health", "Brain Focus", "Liver Support"],
    image: "/images/omega-203-20syrup-20-20box.png",
    volume: "100ML",
    icon: <Heart className="h-5 w-5" />,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "silymarin",
    name: "Silymarin & L-Ornithine",
    category: "syrup",
    tagline: "Liver Tonic & Detox",
    description:
      "Powerful liver tonic with Silymarin and Vitamin B-Complex for optimal liver health and natural detoxification.",
    benefits: ["Liver Detox", "Vitamin B-Complex", "Natural Support"],
    image: "/images/silimarin-20syrup-20-20box.png",
    volume: "100ML",
    icon: <Droplets className="h-5 w-5" />,
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    id: "cranberry",
    name: "Cranberry Syrup",
    category: "syrup",
    tagline: "UTI Prevention & Kidney Support",
    description:
      "Natural cranberry extract with D-Mannose and Potassium Magnesium Citrate for urinary tract health.",
    benefits: [
      "UTI Prevention",
      "Kidney & Bladder Support",
      "Hydration Support",
    ],
    image: "/images/sei-20cranberry-20syrup-20box.png",
    volume: "100ML",
    icon: <Leaf className="h-5 w-5" />,
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    id: "alfa-keta",
    name: "Alfa Keta Analogue",
    category: "tablet",
    tagline: "Kidney Function Support",
    description:
      "Specialized amino acid supplementation for supporting kidney functions and maintaining optimal health.",
    benefits: ["Kidney Support", "Amino Acid Rich", "Health Maintenance"],
    image: "/images/alfa-keta.png",
    volume: "3x10 Tablets",
    icon: <Activity className="h-5 w-5" />,
    color: "from-violet-500/20 to-indigo-500/20",
  },
  {
    id: "digestive-enzyme",
    name: "Digestive Enzyme",
    category: "capsule",
    tagline: "Healthy Digestion Support",
    description:
      "Comprehensive enzyme blend to support healthy digestion and enhance nutrient absorption.",
    benefits: ["Healthy Digestion", "Nutrient Absorption", "Gut Health"],
    image: "/images/digestive-enzyme.png",
    volume: "3x10 Capsules",
    icon: <Pill className="h-5 w-5" />,
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: "grape-seed",
    name: "Grape Seed Extract",
    category: "tablet",
    tagline: "Heart & Immune Support",
    description:
      "Potent antioxidant formula with Resveratrol, Beta Carotene, Vitamin C, E, Zinc and Selenium.",
    benefits: ["Heart Health", "Immune System", "Healthy Blood Sugar"],
    image: "/images/grape-seed.png",
    volume: "3x10 Tablets",
    icon: <Grape className="h-5 w-5" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "5-htp",
    name: "5-HTP",
    category: "tablet",
    tagline: "Nervous System Support",
    description:
      "98% Griffonia Seed Extract with Vitamin B6 & Magnesium for normal nervous system functioning.",
    benefits: ["Nervous System", "Mental Balance", "Mood Support"],
    image: "/images/5-htp.png",
    volume: "30 Tablets",
    icon: <Brain className="h-5 w-5" />,
    color: "from-blue-500/20 to-sky-500/20",
  },
]

function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: Product
  index: number
  onSelect: (product: Product) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  // Parallax tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const scrollY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, perspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: index % 2 === 0 ? scrollY : 0
        }}
        onClick={() => onSelect(product)}
        className={`glass-card relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-300 md:p-8 hover:shadow-2xl hover:shadow-primary/10`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shine z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative mx-auto h-[200px] w-[120px] flex-shrink-0 md:mx-0 md:h-[280px] md:w-[160px]"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-500"
              sizes="(max-width: 768px) 120px, 160px"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {product.icon}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {product.category} | {product.volume}
              </span>
            </div>

            <h3 className="mb-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
              {product.name}
            </h3>

            <p className="mb-4 text-sm font-medium text-primary">
              {product.tagline}
            </p>

            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {product.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-primary/30 group-hover:bg-primary/10"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <span>Click for details</span>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl p-6 md:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mx-auto h-[300px] w-[150px] flex-shrink-0 md:h-[400px] md:w-[200px]"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="200px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {product.icon}
              </span>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {product.category === 'syrup' ? 'Food Supplement' : 'Dietary Supplement'}
                </span>
                <p className="text-xs text-muted-foreground">{product.volume}</p>
              </div>
            </div>

            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h2>

            <p className="mb-6 text-lg font-medium text-primary">
              {product.tagline}
            </p>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Key Benefits
              </h4>
              <div className="grid gap-3 md:grid-cols-2">
                {product.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-secondary/30 p-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                alt="USA Flag"
                width={40}
                height={24}
                className="rounded object-cover"
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Brand Collaboration with USA
                </p>
                <p className="text-xs text-muted-foreground">
                  DRHK Wellness LLC
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [filter, setFilter] = useState<"all" | "syrup" | "tablet" | "capsule">("all")
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter)

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen bg-background py-24 md:py-32"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Product Portfolio
          </span>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Advanced Formulations
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our range of pharmaceutical-grade supplements designed for
            optimal health and wellness.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {[
            { value: "all", label: "All Products" },
            { value: "syrup", label: "Syrups" },
            { value: "tablet", label: "Tablets" },
            { value: "capsule", label: "Capsules" },
          ].map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setFilter(tab.value as typeof filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${filter === tab.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
