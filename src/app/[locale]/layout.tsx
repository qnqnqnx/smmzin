import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { isLocale, locales, type Locale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE_CONFIG.themeColor,
  colorScheme: "light dark",
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const dict = getDictionary(locale);
  const url = `${SITE_CONFIG.siteUrl}/${locale}`;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    applicationName: SITE_CONFIG.brandName,
    authors: [{ name: SITE_CONFIG.brandName }],
    creator: SITE_CONFIG.brandName,
    publisher: SITE_CONFIG.brandName,
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    alternates: {
      canonical: url,
      languages: {
        "vi-VN": `${SITE_CONFIG.siteUrl}/vi`,
        en: `${SITE_CONFIG.siteUrl}/en`,
        "x-default": `${SITE_CONFIG.siteUrl}/vi`,
      },
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_CONFIG.brandName,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? "en_US" : "vi_VN",
      images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: dict.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Chống nháy theme: chạy trước khi React khởi động */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('smmzin-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}",
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal');" }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="ambient" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
