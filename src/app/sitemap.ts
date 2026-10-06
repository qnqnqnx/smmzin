import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/content/site.config";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const item of paths) {
      entries.push({
        url: `${SITE_CONFIG.siteUrl}/${locale}${item.path}`,
        lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((alt) => [alt, `${SITE_CONFIG.siteUrl}/${alt}${item.path}`]),
          ),
        },
      });
    }
  }
  return entries;
}
