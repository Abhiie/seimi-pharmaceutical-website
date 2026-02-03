"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function CoreValues() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-background py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        Our Philosophy
                    </span>
                    <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                        Core Values
                    </h2>
                </motion.div>

                <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl">
                    <motion.div style={{ scale, y }} className="absolute inset-0">
                        <Image
                            src="/images/core-values-placeholder.jpg"
                            alt="Seimi Core Values"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                            {["Integrity.", "Innovation.", "Impact."].map((word, i) => (
                                <motion.span
                                    key={word}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.2), duration: 0.8, ease: "easeOut" }}
                                    className="inline-block mx-2 text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-lg"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
