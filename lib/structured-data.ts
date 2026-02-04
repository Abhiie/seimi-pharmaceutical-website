// Structured Data (Schema.org JSON-LD) Helper Functions

export interface Product {
    name: string
    description: string
    image: string
    category?: string
}

export function generateOrganizationSchema(baseUrl: string = 'https://www.seimi-innovation.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Seimi Innovation',
        description: 'Innovation in Preventive Nutrition. Premium pharmaceutical-grade nutritional supplements.',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@seimi-innovation.com',
        },
        sameAs: [
            // Add social media profiles here when available
            // 'https://www.facebook.com/seimiinnovation',
            // 'https://www.linkedin.com/company/seimiinnovation',
            // 'https://www.instagram.com/seimiinnovation',
        ],
    }
}

export function generateWebSiteSchema(baseUrl: string = 'https://www.seimi-innovation.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Seimi Innovation',
        url: baseUrl,
        description: 'Premium pharmaceutical-grade nutritional supplements for optimal health',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/products?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    }
}

export function generateProductSchema(
    product: Product,
    baseUrl: string = 'https://www.seimi-innovation.com'
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `${baseUrl}${product.image}`,
        brand: {
            '@type': 'Brand',
            name: 'Seimi Innovation',
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'Seimi Innovation',
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            // Add price when available
            // price: '29.99',
        },
    }
}

export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>,
    baseUrl: string = 'https://www.seimi-innovation.com'
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
        })),
    }
}

export function generateLocalBusinessSchema(baseUrl: string = 'https://www.seimi-innovation.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': baseUrl,
        name: 'Seimi Innovation',
        description: 'Premium pharmaceutical-grade nutritional supplements',
        url: baseUrl,
        telephone: '+1-XXX-XXX-XXXX', // Update with actual phone
        email: 'info@seimi-innovation.com',
        logo: `${baseUrl}/images/logo.png`,
        image: `${baseUrl}/images/logo.png`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Your Street Address', // Update with actual address
            addressLocality: 'City',
            addressRegion: 'State',
            postalCode: 'ZIP',
            addressCountry: 'US',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
    }
}
