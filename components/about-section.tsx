"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, FlaskRound, HeartHandshake, Users, Leaf, Microscope } from "lucide-react"

export function AboutSection() {
    const values = [
        {
            icon: <ShieldCheck className="h-8 w-8" />,
            title: "Quality Assurance",
            description: "Rigorous standards at every step of manufacturing.",
            color: "border-cyan-500/20 bg-cyan-500/5 text-cyan-600 shadow-cyan-500/10 hover:border-cyan-500/40 hover:shadow-cyan-500/20",
        },
        {
            icon: <Microscope className="h-8 w-8" />,
            title: "Research Driven",
            description: "Evidence-based formulations supported by clinical data.",
            color: "border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-600 shadow-fuchsia-500/10 hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/20",
        },
        {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Customer Wellness",
            description: "Dedicated to improving lives through better health.",
            color: "border-orange-500/20 bg-orange-500/5 text-orange-600 shadow-orange-500/10 hover:border-orange-500/40 hover:shadow-orange-500/20",
        },
        {
            icon: <Leaf className="h-8 w-8" />,
            title: "Ethical Standards",
            description: "Transparency and integrity in all our operations.",
            color: "border-lime-500/20 bg-lime-500/5 text-lime-600 shadow-lime-500/10 hover:border-lime-500/40 hover:shadow-lime-500/20",
        },
    ]

    return (
        <section id="about" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            Who We Are
                        </span>
                        <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                            Innovation in <br />
                            <span className="text-primary">Preventive Nutrition</span>
                        </h2>
                        <p className="mb-6 text-lg text-muted-foreground">
                            Seimi Innovation is a forward-thinking pharmaceutical company dedicated to bridging the gap between nutritional science and daily wellness.
                        </p>
                        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                            Our mission is to empower individuals to take proactive control of their health through premium, scientifically-formulated supplements. We combine nutraceutical manufacturing precision with the finest natural ingredients to deliver products that truly make a difference.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-fit"
                        >
                            <a
                                href="#products"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/20"
                            >
                                Explore Our Range
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Responsive Grid Container */}
                    <div className="relative mx-auto flex h-[400px] w-full max-w-[400px] items-center justify-center sm:h-[500px] sm:max-w-[500px] lg:h-[600px] lg:max-w-[600px]">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                            className="grid grid-cols-2 gap-3 sm:gap-6"
                            // Disable animation on very small screens to prevent layout breaks
                            // Disable animation on very small screens to prevent layout breaks
                            // style={{ animationPlayState: 'paused', '@media (min-width: 640px)': { animationPlayState: 'running' } } as any}
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{ rotate: [0, -360] }}
                                    transition={{
                                        rotate: { ease: "linear", duration: 25, repeat: Infinity },
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.5 }
                                    }}
                                    className={`group relative flex h-36 w-36 flex-col justify-center overflow-hidden rounded-2xl border-2 backdrop-blur-sm ${value.color} p-4 text-center shadow-xl transition-all hover:scale-105 sm:h-52 sm:w-52 sm:rounded-3xl sm:p-6 lg:h-56 lg:w-56`}
                                >
                                    <div className="mx-auto mb-2 inline-flex rounded-xl bg-white p-2 shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6 sm:mb-4 sm:rounded-2xl sm:p-3">
                                        <div className="h-6 w-6 sm:h-8 sm:w-8">
                                            {value.icon}
                                        </div>
                                    </div>
                                    <h3 className="mb-1 font-serif text-sm font-bold text-foreground sm:mb-2 sm:text-xl">
                                        {value.title}
                                    </h3>
                                    <p className="line-clamp-2 px-1 text-[10px] leading-tight text-muted-foreground/80 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
