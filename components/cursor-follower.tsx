"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

export function CursorFollower() {
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Main cursor position
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Spring physics for smooth movement
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
    const smoothX = useSpring(cursorX, springConfig)
    const smoothY = useSpring(cursorY, springConfig)

    // Trail dots (array of springs with increasing delay/lag)
    const trailSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 }
    const trailX = useSpring(cursorX, trailSpringConfig)
    const trailY = useSpring(cursorY, trailSpringConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("hover-trigger")
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        document.body.addEventListener("mouseenter", handleMouseEnter)
        document.body.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            document.body.removeEventListener("mouseenter", handleMouseEnter)
            document.body.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseover", handleMouseOver)
        }
    }, [cursorX, cursorY, isVisible])

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null
    }

    return (
        <>
            {/* Main Magnetic "Revealer" Cursor */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full bg-white mix-blend-exclusion md:block"
                style={{
                    x: smoothX,
                    y: smoothY,
                    opacity: isVisible ? 1 : 0,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 6 : 1,
                    backgroundColor: isHovering ? "#ffffff" : "#ffffff",
                }}
                transition={{ duration: 0.2 }} // Fast scale transition
            />

            {/* Particle Trail - subtle following glowing dot */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-2 w-2 rounded-full bg-primary/80 blur-[2px] md:block"
                style={{
                    x: trailX,
                    y: trailY,
                    opacity: isVisible && !isHovering ? 0.6 : 0, // Hide trail when hovering to keep focus clean
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            {/* Extra trail particles for "pixie dust" effect */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-1 w-1 rounded-full bg-primary/50 blur-[1px] md:block"
                style={{
                    x: useSpring(cursorX, { damping: 40, stiffness: 150 }),
                    y: useSpring(cursorY, { damping: 40, stiffness: 150 }),
                    opacity: isVisible && !isHovering ? 0.4 : 0,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    )
}
