"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Microscope, Shield, Award, FlaskConical } from "lucide-react"
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
      "We source only the highest quality pharmaceutical-grade ingredients worldwide.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "USA Collaboration",
    description:
      "Brand collaboration with DRHK Wellness LLC ensures international quality standards.",
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
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
      </div>

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
              formulations combine traditional wisdom with modern pharmaceutical
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
            <div className="relative mx-auto aspect-square max-w-lg">
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
                  className="relative h-[400px] w-[200px]"
                >
                  <Image
                    src="/images/l-20carnosine-20syrup.png"
                    alt="L-Carnosine Syrup"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="200px"
                  />
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
                className="glass absolute -right-4 bottom-1/3 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                    alt="USA"
                    width={32}
                    height={20}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      USA Collaboration
                    </p>
                    <p className="text-xs text-muted-foreground">
                      DRHK Wellness LLC
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
