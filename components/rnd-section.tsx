"use client"

import { motion } from "framer-motion"
import { FlaskConical, ClipboardCheck, Factory, Truck, CheckCircle2 } from "lucide-react"

export function RndSection() {
    const steps = [
        {
            icon: <FlaskConical className="h-6 w-6 text-white" />,
            title: "Clinical Research",
            description: "Identifying potent ingredients backed by scientific trials.",
            color: "bg-blue-500",
        },
        {
            icon: <ClipboardCheck className="h-6 w-6 text-white" />,
            title: "Formulation",
            description: "Optimizing bioavailability and efficacy in our labs.",
            color: "bg-purple-500",
        },
        {
            icon: <CheckCircle2 className="h-6 w-6 text-white" />,
            title: "Quality Testing",
            description: "Rigorous testing for purity, potency, and safety.",
            color: "bg-pink-500",
        },
        {
            icon: <Factory className="h-6 w-6 text-white" />,
            title: "Manufacturing",
            description: "Produced in GMP-certified state-of-the-art facilities.",
            color: "bg-orange-500",
        },
        {
            icon: <Truck className="h-6 w-6 text-white" />,
            title: "Distribution",
            description: "Delivering premium health directly to consumers.",
            color: "bg-green-500",
        },
    ]

    return (
        <section id="rnd" className="bg-secondary/20 py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        R&D Process
                    </span>
                    <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                        From Lab to Life
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Our commitment to innovation is mapped out in a meticulous process that ensures every product meets the highest pharmaceutical standards.
                    </p>
                </motion.div>

                {/* Development Timeline Animation */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute left-[50%] top-12 hidden h-1 w-full -translate-x-1/2 bg-border lg:block" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Step Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${step.color} ring-4 ring-background`}
                                >
                                    {step.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="mb-2 text-lg font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>

                                {/* Animated Line (Mobile) - Connecting downwards */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-1/2 top-16 -ml-px h-12 w-0.5 bg-border lg:hidden" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
