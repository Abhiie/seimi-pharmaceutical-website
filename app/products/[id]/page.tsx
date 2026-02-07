
import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Share2, ShieldCheck, Truck, Clock } from "lucide-react"

export function generateStaticParams() {
    return products.map((product: any) => ({
        id: product.id,
    }))
}

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const product = products.find((p) => p.id === params.id)

    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                    <Link href="/products" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                        <ArrowLeft size={16} />
                        <span>Back to Products</span>
                    </Link>
                    <Link href="/" className="font-serif text-xl font-bold">
                        Seimi
                    </Link>
                    <div className="w-20" /> {/* Spacer */}
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/30 p-2 lg:aspect-auto lg:h-[700px]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
                        <div className="relative h-full w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 flex items-center gap-4">
                            <span className={`rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary`}>
                                {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
                                <Star size={14} fill="currentColor" />
                                {product.rating} ({product.reviews} Reviews)
                            </div>
                        </div>

                        <h1 className="mb-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                            {product.name}
                        </h1>

                        <p className="mb-6 text-lg font-medium text-primary">
                            {product.tagline}
                        </p>

                        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>

                        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {product.benefits.map((benefit) => (
                                <div key={benefit} className="rounded-lg border border-border bg-card p-3 text-center transition-colors hover:border-primary/30">
                                    <span className="text-sm font-semibold">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8 space-y-4 rounded-xl bg-secondary/50 p-6">
                            <h3 className="font-bold uppercase tracking-wider text-sm">Product Features</h3>
                            <ul className="space-y-2">
                                {product.features?.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <ShieldCheck className="text-primary h-4 w-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {product.ingredients && (
                            <div className="mb-8">
                                <h3 className="mb-2 font-bold uppercase tracking-wider text-sm">Key Ingredients</h3>
                                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                            </div>
                        )}

                        {product.usage && (
                            <div className="mb-8">
                                <h3 className="mb-2 font-bold uppercase tracking-wider text-sm">Recommended Usage</h3>
                                <p className="text-sm text-muted-foreground">{product.usage}</p>
                            </div>
                        )}

                        <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                            <button className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40">
                                <ShoppingCart size={18} />
                                Inquire Now
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-bold transition-all hover:bg-secondary">
                                <Share2 size={18} />
                                Share
                            </button>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-6">
                            <div className="flex items-center gap-2">
                                <Truck size={14} />
                                <span>Free Shipping</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <ShieldCheck size={14} />
                                <span>Quality Guarantee</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>Fast Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
