"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeft,
    Search,
    Menu,
    X,
    Filter,
    SlidersHorizontal,
    ChevronRight,
    LayoutGrid,
    List,
    Star,
    Info,
    Sparkles
} from "lucide-react"

const products = [
    {
        id: "l-carnosine",
        name: "L-Carnosine with DHA",
        category: "Syrup",
        form: "SYRUP | 100ML",
        tagline: "Brain Health & Nerve Function",
        description: "Advanced formulation to support cognitive function and enhance nerve health with DHA omega fatty acids.",
        benefits: ["Brain Health", "Nerve Function"],
        goals: ["Brain", "Energy"],
        image: "/images/l-20carnosine-20syrup-20-20box.png",
        color: "from-purple-500/20 to-pink-500/20",
        accentColor: "text-purple-600",
        rating: 4.8,
        reviews: 24,
    },
    {
        id: "omega-3",
        name: "Omega 3 Fish Oil",
        category: "Syrup",
        form: "SYRUP | 100ML",
        tagline: "Heart, Brain & Liver Support",
        description: "Premium fish oil syrup rich in EPA and DHA to support cardiovascular health, brain focus, and liver function.",
        benefits: ["Heart Health", "Brain Focus", "Liver Support"],
        goals: ["Heart", "Brain", "Liver"],
        image: "/images/omega-203-20syrup-20-20box.png",
        color: "from-amber-500/20 to-orange-500/20",
        accentColor: "text-amber-600",
        rating: 4.9,
        reviews: 56,
    },
    {
        id: "5-htp",
        name: "5-HTP",
        category: "Tablet",
        form: "TABLET",
        tagline: "Mood & Sleep Support",
        description: "Natural mood enhancer and sleep aid derived from Griffonia simplicifolia seeds.",
        benefits: ["Mood Enhancement", "Better Sleep"],
        goals: ["Mood", "Sleep"],
        image: "/images/5-htp.png",
        color: "from-blue-500/20 to-cyan-500/20",
        accentColor: "text-blue-600",
        rating: 4.7,
        reviews: 38,
    },
    {
        id: "digestive-enzyme",
        name: "Digestive Enzyme",
        category: "Capsule",
        form: "CAPSULE",
        tagline: "Healthy Gut Function",
        description: "Comprehensive enzyme blend to enhance nutrient absorption and support digestive health.",
        benefits: ["Improves Digestion", "Nutrient Absorption"],
        goals: ["Digestion", "Gut Health"],
        image: "/images/digestive-enzyme.png",
        color: "from-green-500/20 to-emerald-500/20",
        accentColor: "text-green-600",
        rating: 4.8,
        reviews: 42,
    },
    {
        id: "grape-seed",
        name: "Grape Seed Extract",
        category: "Capsule",
        form: "CAPSULE",
        tagline: "Antioxidant Protection",
        description: "Powerful antioxidant support for cardiovascular health and cellular protection.",
        benefits: ["Antioxidant Support", "Heart Health"],
        goals: ["Heart", "Immunity"],
        image: "/images/grape-seed.png",
        color: "from-violet-500/20 to-purple-500/20",
        accentColor: "text-violet-600",
        rating: 4.6,
        reviews: 19,
    },
    {
        id: "alfa-keta",
        name: "Alfa Keta Analogue",
        category: "Tablet",
        form: "TABLET",
        tagline: "Kidney Health Support",
        description: "Specialized formulation to support kidney function and protein metabolism.",
        benefits: ["Kidney Support", "Protein Balance"],
        goals: ["Kidney", "Metabolism"],
        image: "/images/alfa-keta.png",
        color: "from-rose-500/20 to-red-500/20",
        accentColor: "text-rose-600",
        rating: 4.9,
        reviews: 15,
    },
]

const categories = ["All Products", "Syrup", "Tablet", "Capsule"]
const healthGoals = ["All Goals", "Brain", "Heart", "Liver", "Mood", "Sleep", "Digestion", "Kidney"]

export function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All Products")
    const [selectedGoal, setSelectedGoal] = useState("All Goals")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortBy, setSortBy] = useState("Recommended")
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory
            const matchesGoal = selectedGoal === "All Goals" || p.goals.includes(selectedGoal)

            return matchesSearch && matchesCategory && matchesGoal
        }).sort((a, b) => {
            if (sortBy === "Name A-Z") return a.name.localeCompare(b.name)
            if (sortBy === "Name Z-A") return b.name.localeCompare(a.name)
            if (sortBy === "Reviews") return b.reviews - a.reviews
            return 0 // Recommended
        })
    }, [searchQuery, selectedCategory, selectedGoal, sortBy])

    return (
        <div className="min-h-screen text-foreground relative overflow-hidden">
            {/* Nav Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                        <ArrowLeft size={16} />
                        <span className="hidden sm:inline">Back to Home</span>
                    </Link>

                    <div className="relative flex-1 max-w-md mx-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-full border border-border bg-secondary/50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="mb-8 flex gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">Products</span>
                </nav>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar Filters - Desktop */}
                    <aside className="hidden w-64 flex-shrink-0 lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all hover:bg-secondary ${selectedCategory === cat ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground"}`}
                                        >
                                            {cat}
                                            {selectedCategory === cat && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border" />

                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Health Goals</h3>
                                <div className="flex flex-wrap gap-2">
                                    {healthGoals.map((goal) => (
                                        <button
                                            key={goal}
                                            onClick={() => setSelectedGoal(goal)}
                                            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${selectedGoal === goal ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:bg-border"}`}
                                        >
                                            {goal}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border" />

                            {/* Promotional Banner */}
                            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary p-6">
                                <Sparkles className="mb-4 text-primary" size={24} />
                                <h4 className="mb-2 font-serif text-lg font-bold">Try Our Bestseller</h4>
                                <p className="mb-4 text-xs text-muted-foreground">Discover why thousands trust our Omega 3 formulations.</p>
                                <button className="w-full rounded-lg bg-primary py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">Learn More</button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* List Controls */}
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                            <div className="flex items-center gap-2 font-medium">
                                <span className="text-sm text-foreground">{filteredProducts.length} Results</span>
                                {searchQuery && <span className="text-xs text-muted-foreground italic">for "{searchQuery}"</span>}
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="hidden items-center gap-1 rounded-lg border border-border bg-card p-1 sm:flex">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`rounded px-2 py-1 transition-colors ${viewMode === "grid" ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/50"}`}
                                    >
                                        <LayoutGrid size={18} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`rounded px-2 py-1 transition-colors ${viewMode === "list" ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/50"}`}
                                    >
                                        <List size={18} />
                                    </button>
                                </div>
                                <select
                                    className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-primary/50"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option>Recommended</option>
                                    <option>Name A-Z</option>
                                    <option>Name Z-A</option>
                                    <option>Reviews</option>
                                </select>
                                <button
                                    onClick={() => setIsMobileFiltersOpen(true)}
                                    className="rounded-lg border border-border bg-card p-2 text-foreground lg:hidden"
                                >
                                    <Filter size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Product Selection */}
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.length > 0 ? (
                                <motion.div
                                    layout
                                    className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}
                                >
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} viewMode={viewMode} />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="mb-4 rounded-full bg-secondary p-6">
                                        <Search size={48} className="text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold">No products found</h3>
                                    <p className="mt-2 text-muted-foreground">Try adjusting your filters or search query.</p>
                                    <button
                                        onClick={() => { setSearchQuery(""); setSelectedCategory("All Products"); setSelectedGoal("All Goals"); }}
                                        className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                                    >
                                        Reset All Filters
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {/* Mobile Filters Drawer */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileFiltersOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 right-0 top-0 z-[70] w-full max-w-sm border-l border-border bg-background p-6 shadow-2xl lg:hidden"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <h2 className="flex items-center gap-2 text-xl font-bold">
                                    <SlidersHorizontal size={24} />
                                    Filters
                                </h2>
                                <button onClick={() => setIsMobileFiltersOpen(false)} className="rounded-full bg-secondary p-2 transition-colors hover:bg-border">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`rounded-xl border px-4 py-2 text-sm transition-all ${selectedCategory === cat ? "border-primary bg-primary/5 font-semibold text-primary" : "border-border text-muted-foreground"}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Health Goals</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {healthGoals.map((goal) => (
                                            <button
                                                key={goal}
                                                onClick={() => setSelectedGoal(goal)}
                                                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${selectedGoal === goal ? "border-primary bg-primary text-white" : "border-border text-muted-foreground hover:bg-secondary"}`}
                                            >
                                                {goal}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsMobileFiltersOpen(false)}
                                className="absolute bottom-6 left-6 right-6 rounded-full bg-primary py-4 font-bold text-white shadow-lg shadow-primary/20"
                            >
                                Show {filteredProducts.length} Results
                            </button>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Footer Tagline */}
            <footer className="border-t border-border bg-secondary/30 py-12">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <p className="text-sm font-medium text-muted-foreground">
                        All products are manufactured in WHO-GMP certified facilities with focus on preventive healthcare.
                    </p>
                </div>
            </footer>
        </div>
    )
}

function ProductCard({ product, viewMode }: { product: any, viewMode: string }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`group relative flex overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 ${viewMode === "grid" ? "flex-col" : "flex-row gap-6 p-4 items-center"
                }`}
        >
            {/* Image Section */}
            <div className={`relative ${viewMode === "grid" ? "h-64 w-full p-4" : "h-40 w-40 flex-shrink-0 rounded-xl overflow-hidden"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-30 transition-opacity group-hover:opacity-50`} />
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                    sizes={viewMode === "grid" ? "(max-width: 768px) 100vw, 33vw" : "160px"}
                />

            </div>

            {/* Content Section */}
            <div className={`p-6 ${viewMode === "grid" ? "flex flex-col flex-1" : "flex-1"}`}>
                <div className="mb-2 flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${product.accentColor}`}>
                        {product.form}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                        <Star size={10} fill="currentColor" />
                        {product.rating}
                    </div>
                </div>

                <h3 className="mb-1 font-serif text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                <p className="mb-4 text-xs font-medium text-muted-foreground italic">
                    {product.tagline}
                </p>

                {viewMode === "grid" && (
                    <p className="mb-6 line-clamp-2 text-xs text-muted-foreground/80">
                        {product.description}
                    </p>
                )}

                <div className="mt-auto flex items-center justify-between gap-4">
                    <Link
                        href={`/products/${product.id}`}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary/10 py-3 text-xs font-bold transition-all hover:bg-primary hover:text-white"
                    >
                        LEARN MORE <ChevronRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Benefit Badges - Grid Only */}
            {viewMode === "grid" && (
                <div className="absolute left-6 top-6 flex flex-col gap-1 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100">
                    {product.benefits.slice(0, 2).map(b => (
                        <span key={b} className="rounded-md bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-foreground shadow-sm backdrop-blur-sm">
                            {b}
                        </span>
                    ))}
                </div>
            )}
        </motion.article>
    )
}
