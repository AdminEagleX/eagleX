import { MetadataRoute } from "next";
import siteContent from "@/content/site.json";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = siteContent.site.url;

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
