"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#values", label: "Core Values" },
    { href: "#rnd", label: "R&D" },
    { href: "/products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden bg-primary text-primary-foreground py-2 text-xs md:block relative z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-3 w-3" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@seimi.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-3 w-3" />
              <span>info@seimi.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-primary-foreground/20 pr-4">
              <Link href="#" aria-label="Follow us on Facebook" className="hover:text-white/80 transition-colors"><Facebook className="h-3 w-3" /></Link>
              <Link href="#" aria-label="Follow us on Twitter" className="hover:text-white/80 transition-colors"><Twitter className="h-3 w-3" /></Link>
              <Link href="#" aria-label="Follow us on Instagram" className="hover:text-white/80 transition-colors"><Instagram className="h-3 w-3" /></Link>
              <Link href="#" aria-label="Follow us on LinkedIn" className="hover:text-white/80 transition-colors"><Linkedin className="h-3 w-3" /></Link>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors" role="search" aria-label="Search site">
              <Search className="h-3 w-3" />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 bg-background/95 backdrop-blur-md shadow-sm ${isScrolled
            ? "top-0 py-3"
            : "md:top-8 top-0 py-4"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 text-foreground" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Seimi Innovation Home">
            <div className="relative h-12 w-32 md:h-14 md:w-40">
              <Image
                src="/images/logo.png"
                alt="Seimi Innovation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Partner With Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-lg p-2 md:hidden hover:bg-secondary transition-colors text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-28">
                  <Image
                    src="/images/logo.png"
                    alt="Seimi Innovation Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-secondary text-foreground"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 p-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-block rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-xl"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
