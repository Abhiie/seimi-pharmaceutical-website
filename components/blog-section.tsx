"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const blogs = [
    {
        title: "The Future of Preventive Healthcare",
        date: "March 15, 2024",
        excerpt: "Exploring how nutraceuticals are shaping the future of daily wellness and disease prevention.",
        image: "/images/blog-1.jpg"
    },
    {
        title: "Understanding Bioavailability",
        date: "March 10, 2024",
        excerpt: "Why the absorption rate of your supplements matters more than the dosage.",
        image: "/images/blog-2.jpg"
    },
    {
        title: "Sustainable Manufacturing",
        date: "March 5, 2024",
        excerpt: "How Seimi is reducing its carbon footprint through eco-friendly production practices.",
        image: "/images/blog-3.jpg"
    }
]

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function BlogSection() {
    return (
        <section className="py-32 bg-background border-t border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        Insights
                    </span>
                    <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                        Latest Updates
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-card transition-all hover:shadow-2xl hover:shadow-primary/5"
                            aria-label={`Read blog post: ${blog.title}`}
                        >
                            <div className="relative aspect-[4/3] w-full bg-secondary/20 overflow-hidden">
                                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
                                    <span className="text-muted-foreground text-sm">Image Placeholder</span>
                                </div>
                                {/* Scale Effect on Hover */}
                                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
                            </div>

                            <div className="flex flex-1 flex-col p-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-xs font-medium text-primary uppercase tracking-wider">
                                        {blog.date}
                                    </div>
                                </div>

                                <h3 className="mb-4 text-2xl font-bold font-serif text-card-foreground leading-tight group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="mb-6 text-base text-muted-foreground flex-1 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-primary">
                                    <span className="mr-2">Read Article</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
