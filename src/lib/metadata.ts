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

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(siteUrl),
        openGraph: {
            title: fullTitle,
            description,
            url: `${siteUrl}${path}`,
            siteName: siteContent.site.name,
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
        },
    };
}
