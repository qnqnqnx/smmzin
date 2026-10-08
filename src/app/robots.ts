import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/content/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/og-preview.html"],
      },
    ],
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
    host: SITE_CONFIG.siteUrl,
  };
}
