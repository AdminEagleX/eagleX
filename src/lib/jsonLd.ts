// Utility to generate structured JSON-LD format
import siteContent from "@/content/site.json";

// Organization Schema (for Home and About sections)
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: siteContent.site.url,
        logo: `${siteContent.site.url}/asset/logo.png`,
        name: siteContent.site.name,
        description: siteContent.site.description,
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: siteContent.site.phone.replace(/[^+\d]/g, ""),
                contactType: "customer service",
                email: siteContent.site.email,
                areaServed: "Global",
                availableLanguage: ["English"],
            },
        ],
        sameAs: Object.values(siteContent.social),
        address: {
            "@type": "PostalAddress",
            streetAddress: siteContent.site.address.street,
            addressLocality: siteContent.site.address.city,
            addressRegion: siteContent.site.address.state,
            postalCode: siteContent.site.address.zip,
            addressCountry: siteContent.site.address.country,
        },
    };
}

// Service Schema (for individual service pages)
export function generateServiceSchema(title: string, description: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description: description,
        provider: {
            "@type": "Organization",
            name: siteContent.site.name,
        },
        url: url,
    };
}

// Article / BlogPosting Schema (for insights)
export function generateArticleSchema(title: string, description: string, date: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        datePublished: new Date(date).toISOString(),
        author: {
            "@type": "Organization",
            name: siteContent.site.name,
        },
        publisher: {
            "@type": "Organization",
            name: siteContent.site.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteContent.site.url}/asset/logo.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };
}

// FAQ Schema Wrapper (if needed in the future)
export function generateFAQSchema(questions: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: q.answer,
            },
        })),
    };
}
