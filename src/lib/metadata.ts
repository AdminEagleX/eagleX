import type { Metadata } from "next";
import siteContent from "@/content/site.json";

interface MetadataOptions {
    title: string;
    description: string;
    path?: string;
}

export function generatePageMetadata({ title, description, path = "" }: MetadataOptions): Metadata {
    const siteUrl = siteContent.site.url;
    const fullTitle = `${title} | ${siteContent.site.name}`;
    const normalizedPath = path && path !== "/" ? `/${path.replace(/^\/+/, "")}` : "/";
    const canonicalUrl = `${siteUrl.replace(/\/+$/, "")}${normalizedPath}`;
    const defaultOgImage = `${siteUrl.replace(/\/+$/, "")}/asset/abstract-visualization.png`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonicalUrl,
            siteName: siteContent.site.name,
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: siteContent.site.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [defaultOgImage],
        },
    };
}
