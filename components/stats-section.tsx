"use client"

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString()
            }
        })
        return () => unsubscribe()
    }, [springValue])

    return <span ref={ref} />
}

export function StatsSection() {
    const stats = [
        { label: "", value: 25, suffix: "+", description: "Years Experience" },
        { label: "", value: 25000, suffix: " sqft", description: "Facility Area" },
        { label: "", value: 45, suffix: "+", description: "Countries Export" },
    ]

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center p-6"
                        >
                            <div className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 flex items-baseline">
                                <AnimatedNumber value={stat.value} />
                                <span className="text-3xl md:text-4xl ml-1">{stat.suffix}</span>
                            </div>
                            <div className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
