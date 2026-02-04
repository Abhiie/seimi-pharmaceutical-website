import { ProductsPage } from "@/components/products-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Products - Premium Nutritional Supplements',
    description: 'Explore our comprehensive range of premium pharmaceutical-grade nutritional supplements including syrups, tablets, and suspensions. Science-backed formulations for optimal health.',
    keywords: [
        'nutritional supplements products',
        'omega-3 supplements',
        'cranberry supplements',
        'digestive enzyme supplements',
        'grape seed extract',
        'silymarin',
        'L-carnosine supplements',
        '5-HTP',
        'alfa keta supplements'
    ],
    openGraph: {
        title: 'Our Products - Premium Nutritional Supplements | Seimi Innovation',
        description: 'Explore our comprehensive range of premium pharmaceutical-grade nutritional supplements.',
        url: 'https://www.seimi-innovation.com/products',
        type: 'website',
        images: [
            {
                url: '/images/logo.png',
                width: 1200,
                height: 630,
                alt: 'Seimi Innovation Products',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Products - Premium Nutritional Supplements',
        description: 'Explore our comprehensive range of premium pharmaceutical-grade nutritional supplements.',
        images: ['/images/logo.png'],
    },
}

export default function Products() {
    return (
        <>
            {/* Breadcrumb Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: 'https://www.seimi-innovation.com',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Products',
                                item: 'https://www.seimi-innovation.com/products',
                            },
                        ],
                    }),
                }}
            />
            <ProductsPage />
        </>
    )
}
