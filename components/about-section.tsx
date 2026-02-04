"use client"

import { motion } from "framer-motion"
import { ShieldCheck, FlaskRound, HeartHandshake, Users, Leaf, Microscope } from "lucide-react"

export function AboutSection() {
    const values = [
        {
            icon: <ShieldCheck className="h-8 w-8" />,
            title: "Quality Assurance",
            description: "Rigorous standards at every step of manufacturing.",
            color: "border-blue-500/40 bg-blue-500/15 text-blue-600 shadow-blue-500/10",
        },
        {
            icon: <Microscope className="h-8 w-8" />,
            title: "Research Driven",
            description: "Evidence-based formulations supported by clinical data.",
            color: "border-purple-500/40 bg-purple-500/15 text-purple-600 shadow-purple-500/10",
        },
        {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Customer Wellness",
            description: "Dedicated to improving lives through better health.",
            color: "border-green-500/40 bg-green-500/15 text-green-600 shadow-green-500/10",
        },
        {
            icon: <Leaf className="h-8 w-8" />,
            title: "Ethical Standards",
            description: "Transparency and integrity in all our operations.",
            color: "border-amber-500/40 bg-amber-500/15 text-amber-600 shadow-amber-500/10",
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
                            Our mission is to empower individuals to take proactive control of their health through premium, scientifically-formulated supplements. We combine pharmaceutical-grade manufacturing precision with the finest natural ingredients to deliver products that truly make a difference.
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

                    {/* Rotating Grid Container */}
                    <div className="relative mx-auto flex h-[500px] w-full max-w-[500px] items-center justify-center lg:h-[600px] lg:w-[600px]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        rotate: { ease: "linear", duration: 20, repeat: Infinity },
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.5 }
                                    }}
                                    className={`group relative flex h-48 w-48 flex-col justify-center overflow-hidden rounded-3xl border-2 backdrop-blur-sm ${value.color} p-6 text-center shadow-2xl transition-all hover:scale-110 hover:shadow-2xl sm:h-56 sm:w-56`}
                                >
                                    <div className="mx-auto mb-4 inline-flex rounded-2xl bg-white p-3 shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground/80">
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
