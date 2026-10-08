import type { Metadata } from "next";
import type { CountryData } from "./types";
import { SITE_CONFIG } from "../site.config";

/**
 * Sinh metadata cho 1 country page.
 * Tự động dùng nativeTitle/nativeDescription nếu có, fallback về EN.
 * OG image tự động truyền `?country=XX` để API render ảnh đúng nước.
 */
export function buildCountryMetadata(data: CountryData): Metadata {
  const url = `${SITE_CONFIG.siteUrl}/smm-panel-${data.slug}`;
  const title = data.seo.nativeTitle || data.seo.title;
  const description = data.seo.nativeDescription || data.seo.description;
  const ogImageUrl = `${SITE_CONFIG.siteUrl}/api/og?locale=en&country=${data.code}`;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title,
    description,
    keywords: [...data.seo.keywords],
    applicationName: SITE_CONFIG.brandName,
    authors: [{ name: SITE_CONFIG.brandName }],
    creator: SITE_CONFIG.brandName,
    publisher: SITE_CONFIG.brandName,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      url,
      siteName: SITE_CONFIG.brandName,
      title,
      description,
      locale: data.seo.ogLocale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
