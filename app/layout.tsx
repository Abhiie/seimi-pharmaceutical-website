import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CursorFollower } from "@/components/cursor-follower"
import { SWRegistration } from "@/components/sw-registration"
import { GlobalGlow } from "@/components/global-glow"
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seimi-innovation.com'),
  title: {
    default: 'Seimi Innovation | Premium Nutritional Supplements',
    template: '%s | Seimi Innovation'
  },
  description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade syrups, suspensions, and tablets for optimal health. Discover our science-backed nutritional supplements.',
  keywords: [
    'nutritional supplements',
    'pharmaceutical grade supplements',
    'preventive nutrition',
    'health supplements',
    'premium syrups',
    'nutritional tablets',
    'omega-3 supplements',
    'cranberry supplements',
    'digestive enzymes',
    'grape seed extract',
    'silymarin supplements',
    'L-carnosine',
    '5-HTP supplements'
  ],
  authors: [{ name: 'Seimi Innovation' }],
  creator: 'Seimi Innovation',
  publisher: 'Seimi Innovation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/logo.png' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.seimi-innovation.com',
    siteName: 'Seimi Innovation',
    title: 'Seimi Innovation | Premium Nutritional Supplements',
    description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade syrups, suspensions, and tablets for optimal health.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Seimi Innovation - Premium Nutritional Supplements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seimi Innovation | Premium Nutritional Supplements',
    description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade supplements for optimal health.',
    images: ['/images/logo.png'],
    creator: '@seimiinnovation', // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Seimi Innovation',
              description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade nutritional supplements.',
              url: 'https://www.seimi-innovation.com',
              logo: 'https://www.seimi-innovation.com/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@seimi-innovation.com',
              },
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Seimi Innovation',
              url: 'https://www.seimi-innovation.com',
              description: 'Premium pharmaceutical-grade nutritional supplements for optimal health',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.seimi-innovation.com/products?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <GlobalGlow />
        <SWRegistration />
        <CursorFollower />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
