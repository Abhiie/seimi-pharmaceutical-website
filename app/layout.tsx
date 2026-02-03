import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CursorFollower } from "@/components/cursor-follower"
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Seimi Innovation | Premium Nutritional Supplements',
  description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade syrups, suspensions, and tablets for optimal health.',
  generator: 'Seimi Innovation',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <CursorFollower />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
