"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Thermometer,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react"

const footerLinks = {
  products: [
    { label: "L-Carnosine with DHA", href: "#products" },
    { label: "Omega 3 Fish Oil", href: "#products" },
    { label: "Silymarin Liver Tonic", href: "#products" },
    { label: "Cranberry Syrup", href: "#products" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Science", href: "#science" },
    { label: "Quality Assurance", href: "#" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="mb-6 inline-block -ml-1">
              <div className="relative h-12 w-32 md:h-14 md:w-40">
                <Image
                  src="/images/logo.png"
                  alt="Seimi Innovation Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Innovation in Preventive Nutrition. We create premium
              pharmaceutical-grade supplements designed to support your overall
              health and wellness.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
                { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([category, links], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-foreground">support@seimei.us</p>
                  <p className="text-xs text-muted-foreground">
                    Feedback & Assistance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-foreground">www.seimei.us</p>
                  <p className="text-xs text-muted-foreground">Website</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-foreground">
                    Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Manufactured by: Aeron Lifescience Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Warnings section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-4 rounded-2xl border border-border bg-secondary/30 p-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">
                Important Notice
              </p>
              <p className="text-xs text-muted-foreground">
                This product is not intended to diagnose, treat, cure or prevent
                any disease.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
              <Thermometer className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Storage</p>
              <p className="text-xs text-muted-foreground">
                Store in cool, dry & dark place below 25°C. Protect from
                sunlight.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Warning</p>
              <p className="text-xs text-muted-foreground">
                Keep out of reach of children. Please do not exceed the dosage.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Seimei Innovation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              Nutritional Dietary Supplement
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              Not For Medicinal Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
