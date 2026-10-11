import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/content/site.config";
import { listAllCountries } from "@/content/countries/registry";
import { getAllSlugs } from "@/content/blog/registry";

/**
 * Sitemap tự động từ registry.
 * Thêm nước mới (available: true) → tự xuất hiện ở đây.
 * Không cần sửa file này nữa.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_CONFIG.siteUrl;

  // Trang chủ — priority cao nhất
  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Country pages — chỉ nước có landing
  const countries = listAllCountries()
    .filter((c) => c.available)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  for (const country of countries) {
    entries.push({
      url: `${base}/smm-panel-${country.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Blog listing
  entries.push({
    url: `${base}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  // Blog posts — tự động
  const allPostSlugs = getAllSlugs();
  for (const slug of allPostSlugs) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Trang tĩnh
  entries.push(
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  );


  // Privacy Policy — public-facing trust document
  entries.push({
    url: `${base}/legal/privacy`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  });

  return entries;
}
