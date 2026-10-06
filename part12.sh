#!/usr/bin/env bash
set -euo pipefail

cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #05090a;
  --bg-elev: #080e0d;
  --surface: #0b1311;
  --surface-glass: rgba(13, 22, 19, 0.62);
  --primary: #4f7d5e;
  --primary-strong: #3c6349;
  --accent: #8ed6ad;
  --text: #e9f1ec;
  --text-muted: #90a59a;
  --border: rgba(233, 241, 236, 0.09);
  --border-strong: rgba(233, 241, 236, 0.18);
  --nav-h: 68px;
  --shell: 1200px;
}

@layer base {
  html {
    background-color: var(--bg);
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: transparent;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  h1, h2, h3 { text-wrap: balance; }
  ::selection { background: rgba(142, 214, 173, 0.22); color: #fff; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 8px; }
  section[id], div[id] { scroll-margin-top: 88px; }
  summary::-webkit-details-marker { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

.ambient {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 12% -8%, rgba(79, 125, 94, 0.22), transparent 62%),
    radial-gradient(760px 460px at 88% 2%, rgba(142, 214, 173, 0.09), transparent 60%),
    radial-gradient(1100px 700px at 50% 108%, rgba(60, 99, 73, 0.16), transparent 66%);
}

.shell {
  width: 100%;
  max-width: var(--shell);
  margin-inline: auto;
  padding-inline: 20px;
}
@media (min-width: 768px) { .shell { padding-inline: 28px; } }
@media (min-width: 1024px) { .shell { padding-inline: 40px; } }

.section {
  position: relative;
  padding-block: clamp(56px, 6.5vw, 96px);
}

.glass {
  background: var(--surface-glass);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  backdrop-filter: blur(18px) saturate(150%);
  border: 1px solid var(--border);
}

.card {
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.012) 100%);
  border: 1px solid var(--border);
  transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
}
.card:hover { border-color: var(--border-strong); }

.eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 32px;
  padding-inline: 14px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: rgba(255,255,255,0.03);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text);
}
.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(142, 214, 173, 0.14);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 46px;
  padding-inline: 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), background-color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
}
.btn:active { transform: scale(0.985); }
.btn-primary {
  background: linear-gradient(180deg, #588b69 0%, #3c6349 100%);
  color: #f4faf6;
  border: 1px solid rgba(142, 214, 173, 0.28);
  box-shadow: 0 10px 30px -14px rgba(79,125,94,0.9), inset 0 1px 0 rgba(255,255,255,0.14);
}
.btn-primary:hover {
  box-shadow: 0 18px 44px -16px rgba(79,125,94,1), inset 0 1px 0 rgba(255,255,255,0.2);
}
.btn-ghost {
  background: rgba(255,255,255,0.03);
  color: var(--text);
  border: 1px solid var(--border-strong);
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(233,241,236,0.28);
}

.grid-overlay {
  background-image:
    linear-gradient(to right, rgba(233,241,236,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(233,241,236,0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(circle at 50% 35%, #000 0%, transparent 72%);
  mask-image: radial-gradient(circle at 50% 35%, #000 0%, transparent 72%);
}

.orb {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 32% 26%, rgba(142, 214, 173, 0.38), transparent 52%),
    radial-gradient(circle at 72% 78%, rgba(79, 125, 94, 0.55), transparent 58%),
    linear-gradient(155deg, rgba(22, 42, 32, 0.95), rgba(6, 11, 10, 0.98));
  border: 1px solid rgba(233, 241, 236, 0.12);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.16),
    inset 0 -30px 60px -30px rgba(0,0,0,0.9),
    0 60px 140px -50px rgba(79,125,94,0.85);
}
.orb::after {
  content: "";
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: radial-gradient(circle at 62% 28%, rgba(255,255,255,0.1), transparent 46%);
  pointer-events: none;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(233, 241, 236, 0.07);
  pointer-events: none;
}

.float-slow { animation: smmzin-float 12s ease-in-out infinite; }
@keyframes smmzin-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
@media (prefers-reduced-motion: reduce) { .float-slow { animation: none; } }

.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: smmzin-marquee 48s linear infinite;
}
.marquee:hover .marquee-track { animation-play-state: paused; }
@keyframes smmzin-marquee {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }

@media (prefers-reduced-motion: no-preference) {
  .js-reveal .reveal { opacity: 0; transform: translateY(18px); }
  .js-reveal .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
  }
}
EOF

cat > src/app/robots.ts << 'EOF'
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/content/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/_next/", "/api/"] }],
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
    host: SITE_CONFIG.siteUrl,
  };
}
EOF

cat > src/app/sitemap.ts << 'EOF'
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
EOF

cat > "src/app/[locale]/layout.tsx" << 'EOF'
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
  colorScheme: "dark",
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
EOF

cat > "src/app/[locale]/page.tsx" << 'EOF'
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { getRemainingMs } from "@/lib/countdown";
import { isLocale, locales, type Locale } from "@/lib/i18n";

import ApiPreview from "@/components/ApiPreview";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import NotifyMe from "@/components/NotifyMe";
import Philosophy from "@/components/Philosophy";
import PlatformEcosystem from "@/components/PlatformEcosystem";
import PlatformMarquee from "@/components/PlatformMarquee";
import ProductPreview from "@/components/ProductPreview";
import Services from "@/components/Services";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const pageUrl = `${SITE_CONFIG.siteUrl}/${locale}`;
  const inLanguage = locale === "vi" ? "vi-VN" : "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
        name: SITE_CONFIG.brandName,
        url: SITE_CONFIG.siteUrl,
        logo: `${SITE_CONFIG.siteUrl}/favicon.svg`,
        description: dict.footer.description,
        sameAs: [
          SITE_CONFIG.socialLinks.facebook,
          SITE_CONFIG.socialLinks.instagram,
          SITE_CONFIG.socialLinks.telegram,
          SITE_CONFIG.socialLinks.x,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: SITE_CONFIG.brandName,
        inLanguage,
        publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
        inLanguage,
        about: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_CONFIG.brandName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: dict.meta.description,
        url: SITE_CONFIG.siteUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Navbar
        locale={locale}
        brand={SITE_CONFIG.brandName}
        items={dict.nav.items}
        notifyLabel={dict.common.notifyMe}
        openMenuLabel={dict.nav.openMenu}
        closeMenuLabel={dict.nav.closeMenu}
        languageLabel={dict.common.languageLabel}
      />

      <main>
        <Hero dict={dict} initialMs={getRemainingMs(SITE_CONFIG.countdown)} />
        <PlatformMarquee heading={dict.marquee.heading} />
        <About dict={dict} />
        <Benefits dict={dict} />
        <Features dict={dict} />
        <PlatformEcosystem dict={dict} />
        <Services dict={dict} />
        <HowItWorks dict={dict} />
        <ProductPreview dict={dict} />
        <ApiPreview dict={dict} />
        <Audience dict={dict} />
        <Philosophy dict={dict} />
        <Faq dict={dict} />
        <NotifyMe dict={dict} locale={locale} />
        <FinalCta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale} />
    </>
  );
}
EOF

cat > "src/app/[locale]/not-found.tsx" << 'EOF'
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[12px] tracking-[0.2em] text-[color:var(--accent)]">404</p>
        <h1 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">Page not found</h1>
        <p className="mt-3 text-[15px] text-[color:var(--text-muted)]">The page you are looking for does not exist.</p>
        <Link href="/vi" className="btn btn-ghost mt-8">
          <ArrowRight size={16} className="rotate-180" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
EOF

cat > "src/app/[locale]/privacy/page.tsx" << 'EOF'
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import LegalPage from "@/components/LegalPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.privacy.title}
      intro={dict.legal.privacy.intro}
      sections={dict.legal.privacy.sections}
      updatedLabel={dict.legal.updatedLabel}
      updated={dict.legal.updated}
      backLabel={dict.common.backHome}
    />
  );
}
EOF

cat > "src/app/[locale]/terms/page.tsx" << 'EOF'
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import LegalPage from "@/components/LegalPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.terms.title}
      intro={dict.legal.terms.intro}
      sections={dict.legal.terms.sections}
      updatedLabel={dict.legal.updatedLabel}
      updated={dict.legal.updated}
      backLabel={dict.common.backHome}
    />
  );
}
EOF

echo "part12 done"