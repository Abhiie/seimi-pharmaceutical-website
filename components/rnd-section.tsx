"use client"

import React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { FlaskConical, ClipboardCheck, Factory, Truck, CheckCircle2 } from "lucide-react"

const steps = [
    {
        icon: <FlaskConical className="h-6 w-6 text-white" />,
        title: "Clinical Research",
        subtitle: "Discovery & Validation",
        description: "Our process begins with identifying potent, science-backed ingredients. We collaborate with international research labs to validate the efficacy of every bioactive compound before it enters our formulation cycle.",
        image: "/images/rnd-clinical-research.png",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        accent: "text-primary",
    },
    {
        icon: <ClipboardCheck className="h-6 w-6 text-white" />,
        title: "Precision Formulation",
        subtitle: "Bioavailability Excellence",
        description: "We don't just mix ingredients; we optimize them. Our labs focus on molecular stability and bioavailability, ensuring that every dose is absorbed efficiently by the body for maximum therapeutic impact.",
        image: "/images/rnd-formulation.png",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        accent: "text-primary",
    },
    {
        icon: <CheckCircle2 className="h-6 w-6 text-white" />,
        title: "Quality Analytics",
        subtitle: "Uncompromising Standards",
        description: "Every batch undergoes rigorous multi-stage testing. From raw material purity to finished product stability, our quality control exceeds international pharmaceutical benchmarks.",
        image: "/images/rnd-quality-testing.png",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        accent: "text-primary",
    },
    {
        icon: <Factory className="h-6 w-6 text-white" />,
        title: "Smart Manufacturing",
        subtitle: "GMP Certified Excellence",
        description: "Utilizing state-of-the-art automated lines in sterile, controlled environments. Our manufacturing process minimizes human error and guarantees consistency across every single unit produced.",
        image: "/images/rnd-manufacturing.png",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        accent: "text-primary",
    },
    {
        icon: <Truck className="h-6 w-6 text-white" />,
        title: "Strategic Distribution",
        subtitle: "Integrity Maintained",
        description: "From our climate-controlled warehouse to your doorstep, we maintain the cold chain and structural integrity of our supplements, delivering premium health without compromise.",
        image: "/images/rnd-distribution.png",
        color: "bg-primary",
        lightColor: "bg-primary/10",
        accent: "text-primary",
    },
]

export function RndSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    return (
        <section id="rnd" ref={containerRef} className="relative bg-neutral-950 text-white py-24">

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header Section - Appears first */}
                <div className="flex flex-col justify-center items-center text-center pt-20 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                            The Science of Life
                        </span>
                        <h2 className="mb-6 font-serif text-5xl font-bold text-white md:text-7xl">
                            From Lab to <span className="text-primary italic">Life</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed">
                            Our commitment to innovation is mapped out in a meticulous process that ensures every product meets the highest pharmaceutical standards.
                        </p>
                    </motion.div>
                </div>

                {/* Steps Narrative */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Side: Sticky Image - Hidden on mobile, only visible on large screens */}
                    <div className="hidden lg:sticky lg:top-[15%] lg:h-[70vh] lg:flex items-center lg:order-1">
                        <div className="relative aspect-square w-full h-[400px] lg:h-full overflow-hidden rounded-3xl shadow-2xl border border-border/50 bg-card">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={steps[activeIndex].image}
                                        alt={steps[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Technical Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${steps[activeIndex].color}`}
                                    >
                                        {steps[activeIndex].icon}
                                    </motion.div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Scientific Phase</p>
                                        <div className="flex items-center gap-2">
                                            <p className="font-serif text-xl font-bold text-white">0{activeIndex + 1}</p>
                                            <div className="h-1 w-12 rounded-full bg-white/20">
                                                <motion.div
                                                    className="h-full bg-white"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Scrollable Content */}
                    <div className="flex flex-col gap-[40vh] lg:gap-[60vh] order-1 lg:order-2 pt-[20vh] pb-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0.1, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                onViewportEnter={() => setActiveIndex(index)}
                                transition={{ duration: 0.6 }}
                                viewport={{ amount: 0.6 }}
                                className="flex flex-col justify-center min-h-[40vh]"
                            >
                                <div className={`mb-4 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs ${step.accent}`}>
                                    <span className="h-[2px] w-8 bg-current" />
                                    Phase {index + 1}
                                </div>
                                <h3 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="mb-6 text-xl font-medium text-primary/80 italic">
                                    {step.subtitle}
                                </p>
                                <p className="text-lg leading-relaxed text-gray-400 font-medium">
                                    {step.description}
                                </p>

                                {/* Mobile Image */}
                                <div className="mt-8 lg:hidden">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg border border-border bg-card">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                        {/* Mobile Phase Indicator Overlay */}
                                        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg shadow-lg ${step.color}`}>
                                                <div className="scale-75">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-bold uppercase tracking-widest text-white/70">Phase 0{index + 1}</p>
                                                <div className="h-1 w-10 rounded-full bg-white/20">
                                                    <div
                                                        className="h-full bg-white transition-all duration-500"
                                                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed bottom-0 left-0 right-0 z-50 h-1.5 origin-left bg-gradient-to-r from-primary to-orange-400"
            />
        </section>
    )
}
