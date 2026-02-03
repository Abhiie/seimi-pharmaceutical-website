"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sparkles, Heart, ShoppingCart } from "lucide-react"

const products = [
    {
        id: "l-carnosine",
        name: "L-Carnosine with DHA",
        category: "Syrup",
        type: "SYRUP | 100ML",
        tagline: "Brain Health & Nerve Function",
        description: "Advanced formulation to support cognitive function and enhance nerve health with DHA omega fatty acids.",
        benefits: ["Supports Brain Health", "Enhances Nerve Function"],
        image: "/images/l-20carnosine-20syrup-20-20box.png",
        color: "from-purple-500/20 to-pink-500/20",
        accentColor: "text-purple-500",
    },
    {
        id: "omega-3",
        name: "Omega 3 Fish Oil",
        category: "Syrup",
        type: "SYRUP | 100ML",
        tagline: "Heart, Brain & Liver Support",
        description: "Premium fish oil syrup rich in EPA and DHA to support cardiovascular health, brain focus, and liver function.",
        benefits: ["Heart Health", "Brain Focus", "Liver Support"],
        image: "/images/omega-203-20syrup-20-20box.png",
        color: "from-amber-500/20 to-orange-500/20",
        accentColor: "text-amber-500",
    },
    {
        id: "5-htp",
        name: "5-HTP",
        category: "Tablet",
        type: "TABLET",
        tagline: "Mood & Sleep Support",
        description: "Natural mood enhancer and sleep aid derived from Griffonia simplicifolia seeds.",
        benefits: ["Mood Enhancement", "Better Sleep"],
        image: "/images/5-htp.png",
        color: "from-blue-500/20 to-cyan-500/20",
        accentColor: "text-blue-500",
    },
    {
        id: "digestive-enzyme",
        name: "Digestive Enzyme",
        category: "Capsule",
        type: "CAPSULE",
        tagline: "Healthy Gut Function",
        description: "Comprehensive enzyme blend to enhance nutrient absorption and support digestive health.",
        benefits: ["Improves Digestion", "Nutrient Absorption"],
        image: "/images/digestive-enzyme.png",
        color: "from-green-500/20 to-emerald-500/20",
        accentColor: "text-green-500",
    },
    {
        id: "grape-seed",
        name: "Grape Seed Extract",
        category: "Capsule",
        type: "CAPSULE",
        tagline: "Antioxidant Protection",
        description: "Powerful antioxidant support for cardiovascular health and cellular protection.",
        benefits: ["Antioxidant Support", "Heart Health"],
        image: "/images/grape-seed.png",
        color: "from-violet-500/20 to-purple-500/20",
        accentColor: "text-violet-500",
    },
    {
        id: "alfa-keta",
        name: "Alfa Keta Analogue",
        category: "Tablet",
        type: "TABLET",
        tagline: "Kidney Health Support",
        description: "Specialized formulation to support kidney function and protein metabolism.",
        benefits: ["Kidney Support", "Protein Balance"],
        image: "/images/alfa-keta.png",
        color: "from-rose-500/20 to-red-500/20",
        accentColor: "text-rose-500",
    },
]

export function ProductsPage() {
    const [activeFilter, setActiveFilter] = useState("All Products")
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

    const filters = ["All Products", "Syrups", "Tablets", "Capsules"]

    const filteredProducts = products.filter((product) => {
        if (activeFilter === "All Products") return true
        if (activeFilter === "Syrups") return product.category === "Syrup"
        if (activeFilter === "Tablets") return product.category === "Tablet"
        if (activeFilter === "Capsules") return product.category === "Capsule"
        return true
    })

    return (
        <div className="min-h-screen bg-background">
            {/* Animated Background */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px]"
                />
            </div>

            {/* Header */}
            <div className="relative border-b border-border bg-background/80 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border py-20 md:py-32">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary"
                        >
                            <Sparkles className="h-3 w-3" />
                            Product Portfolio
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="mt-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text font-serif text-5xl font-bold tracking-tight text-transparent md:text-7xl"
                    >
                        Advanced Formulations
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                    >
                        Discover our range of pharmaceutical-grade supplements designed for optimal health and wellness.
                    </motion.p>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-0 z-30 border-b border-border bg-background/80 py-6 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter, index) => (
                            <motion.button
                                key={filter}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveFilter(filter)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all ${activeFilter === filter
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                {activeFilter === filter && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-primary"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{filter}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="relative py-20 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    onHoverStart={() => setHoveredProduct(product.id)}
                                    onHoverEnd={() => setHoveredProduct(null)}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    {/* Glow Effect */}
                                    <motion.div
                                        className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${product.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                                    />

                                    {/* Card */}
                                    <motion.div
                                        whileTap={{ scale: 0.98 }}
                                        className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-lg transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl"
                                    >
                                        {/* Floating Badge */}
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                            className="mb-6 flex items-center gap-2"
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: hoveredProduct === product.id ? [1, 1.2, 1] : 1,
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className={`h-2 w-2 rounded-full ${product.accentColor.replace('text-', 'bg-')}`}
                                            />
                                            <span className={`text-xs font-semibold uppercase tracking-wider ${product.accentColor}`}>
                                                {product.type}
                                            </span>
                                        </motion.div>

                                        {/* Product Image */}
                                        <div className="relative mx-auto mb-8 h-72 w-56">
                                            <motion.div
                                                animate={{
                                                    rotateY: hoveredProduct === product.id ? [0, 5, -5, 0] : 0,
                                                    scale: hoveredProduct === product.id ? 1.05 : 1,
                                                }}
                                                transition={{ duration: 0.6 }}
                                                className="relative h-full w-full"
                                            >
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain drop-shadow-2xl transition-all duration-500"
                                                />
                                            </motion.div>

                                            {/* Floating Heart Icon */}
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{
                                                    opacity: hoveredProduct === product.id ? 1 : 0,
                                                    scale: hoveredProduct === product.id ? 1 : 0,
                                                }}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="absolute right-0 top-0 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                                            >
                                                <Heart className="h-5 w-5" />
                                            </motion.button>
                                        </div>

                                        {/* Product Info */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                        >
                                            <h3 className="mb-2 font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                                                {product.name}
                                            </h3>
                                            <p className={`mb-4 text-sm font-medium ${product.accentColor}`}>
                                                {product.tagline}
                                            </p>
                                            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                                                {product.description}
                                            </p>

                                            {/* Benefits */}
                                            <div className="mb-6 flex flex-wrap gap-2">
                                                {product.benefits.map((benefit, i) => (
                                                    <motion.span
                                                        key={benefit}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
                                                        className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                                                    >
                                                        {benefit}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                                            >
                                                <ShoppingCart className="h-4 w-4" />
                                                View Details
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    )
}
