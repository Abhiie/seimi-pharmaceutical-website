"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Microscope, Shield, Award, FlaskConical, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Research-Driven",
    description:
      "Every formulation is backed by extensive scientific research and clinical studies.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Assured",
    description:
      "Manufactured in GMP-certified facilities with rigorous quality control protocols.",
  },
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: "Premium Ingredients",
    description:
      "We source only the highest quality nutraceutical ingredients worldwide.",
  },

]

export function ScienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={containerRef}
      id="science"
      className="relative pt-12 pb-24 md:pt-16 md:pb-32"
    >

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Our Science
            </span>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Innovation Meets{" "}
              <span className="text-primary">Preventive Nutrition</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              At Seimi, we believe in the power of preventive nutrition. Our
              formulations combine traditional wisdom with modern nutraceutical
              science to create supplements that truly make a difference in
              peoples lives.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:border-primary/30">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-2xl">
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />

              {/* Main product image */}
              <div className="relative flex h-full items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative h-[800px] w-[600px]"
                >
                  <Image
                    src="/images/l-carnosine-dha-bottle.png"
                    alt="L-Carnosine with DHA Syrup"
                    fill
                    className="object-contain drop-shadow-2xl transition-all duration-500 opacity-0"
                    onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                    sizes="600px"
                  />
                  <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/5 blur-3xl" />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass absolute -left-4 top-1/4 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Food Supplement
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Certified Quality
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass absolute -right-8 bottom-1/3 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Fast Absorption
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Liquid Formula
                    </p>
                  </div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
