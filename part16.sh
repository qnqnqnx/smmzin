#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# 1. Layout — thêm script khởi tạo theme (chống nháy)
# ------------------------------------------------------------
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
EOF

# ------------------------------------------------------------
# 2. Navbar — thêm ThemeToggle + nút Trải nghiệm trước
# ------------------------------------------------------------
cat > src/components/Navbar.tsx << 'EOF'
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { ArrowUpRight, Close, Menu } from "./Icons";
import { LogoMark } from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({
  locale,
  brand,
  items,
  notifyLabel,
  demoLabel,
  themeLabelDark,
  themeLabelLight,
  openMenuLabel,
  closeMenuLabel,
  languageLabel,
}: {
  locale: string;
  brand: string;
  items: NavItem[];
  notifyLabel: string;
  demoLabel: string;
  themeLabelDark: string;
  themeLabelLight: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const otherLocale = locale === "vi" ? "en" : "vi";
  const switchHref = pathname.replace(/^\/(vi|en)(?=\/|$)/, `/${otherLocale}`) || `/${otherLocale}`;
  const hasDemo = Boolean(SITE_CONFIG.demoUrl);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b transition-colors duration-300",
        scrolled || open
          ? "border-[color:var(--border)] bg-[color:var(--surface-glass)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="shell flex h-full items-center justify-between gap-3" aria-label="Primary">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5 rounded-full" aria-label={brand}>
          <LogoMark />
          <span className="text-[17px] font-semibold tracking-[-0.02em]">{brand}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] text-[color:var(--text-muted)] transition-colors hover:bg-white/[0.05] hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            aria-label={languageLabel}
            className="hidden items-center gap-1 rounded-full border border-[color:var(--border)] px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors hover:border-[color:var(--border-strong)] sm:inline-flex"
          >
            <span className={locale === "vi" ? "text-[color:var(--text)]" : "text-[color:var(--text-muted)]"}>VI</span>
            <span className="text-[color:var(--text-muted)] opacity-40">/</span>
            <span className={locale === "en" ? "text-[color:var(--text)]" : "text-[color:var(--text-muted)]"}>EN</span>
          </Link>

          <ThemeToggle labelDark={themeLabelDark} labelLight={themeLabelLight} />

          {hasDemo && (
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden !h-9 !px-4 text-[13px] md:inline-flex"
            >
              {demoLabel}
              <ArrowUpRight size={14} />
            </a>
          )}

          <a href="#notify" className="btn btn-primary hidden !h-9 !px-4 text-[13px] sm:inline-flex">
            {notifyLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition-colors hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <Close size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass absolute inset-x-0 top-[var(--nav-h)] max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-b p-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-[15px] text-[color:var(--text)] transition-colors hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--border)] pt-3">
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="btn btn-ghost !h-10 flex-1 text-[13px]"
            >
              {locale === "vi" ? "Tiếng Việt / EN" : "English / VI"}
            </Link>
            <a href="#notify" onClick={() => setOpen(false)} className="btn btn-primary !h-10 flex-1 text-[13px]">
              {notifyLabel}
            </a>
          </div>

          {hasDemo && (
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-ghost !h-10 mt-2 w-full text-[13px]"
            >
              {demoLabel}
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
EOF

# ------------------------------------------------------------
# 3. Dictionaries — thêm key demo + theme
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/content/dictionaries.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Thêm "demo" vào common (VI)
if 'demo: "Trải nghiệm trước"' not in content:
    content = content.replace(
        '    backHome: "Về trang chủ",',
        '    backHome: "Về trang chủ",\n    demo: "Trải nghiệm trước",',
        1,
    )

# Thêm "demo" vào common (EN)
if 'demo: "Try Demo"' not in content:
    content = content.replace(
        '    backHome: "Back to home",',
        '    backHome: "Back to home",\n    demo: "Try Demo",',
        1,
    )

# Thêm "theme" block cho VI (chèn trước "nav:" đầu tiên)
vi_marker = '  nav: {\n    items: [\n      { label: "Trang chủ"'
vi_theme = '  theme: {\n    toggleToLight: "Chuyển sang giao diện sáng",\n    toggleToDark: "Chuyển sang giao diện tối",\n  },\n\n  nav: {\n    items: [\n      { label: "Trang chủ"'
if 'toggleToLight: "Chuyển sang' not in content:
    content = content.replace(vi_marker, vi_theme, 1)

# Thêm "theme" block cho EN
en_marker = '  nav: {\n    items: [\n      { label: "Home"'
en_theme = '  theme: {\n    toggleToLight: "Switch to light mode",\n    toggleToDark: "Switch to dark mode",\n  },\n\n  nav: {\n    items: [\n      { label: "Home"'
if 'toggleToLight: "Switch' not in content:
    content = content.replace(en_marker, en_theme, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Dictionaries updated")
PYEOF

# ------------------------------------------------------------
# 4. page.tsx — truyền props mới cho Navbar
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/app/[locale]/page.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '''      <Navbar
        locale={locale}
        brand={SITE_CONFIG.brandName}
        items={dict.nav.items}
        notifyLabel={dict.common.notifyMe}
        openMenuLabel={dict.nav.openMenu}
        closeMenuLabel={dict.nav.closeMenu}
        languageLabel={dict.common.languageLabel}
      />'''

new = '''      <Navbar
        locale={locale}
        brand={SITE_CONFIG.brandName}
        items={dict.nav.items}
        notifyLabel={dict.common.notifyMe}
        demoLabel={dict.common.demo}
        themeLabelDark={dict.theme.toggleToDark}
        themeLabelLight={dict.theme.toggleToLight}
        openMenuLabel={dict.nav.openMenu}
        closeMenuLabel={dict.nav.closeMenu}
        languageLabel={dict.common.languageLabel}
      />'''

if old in content:
    content = content.replace(old, new, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("page.tsx updated")
else:
    print("WARNING: Navbar block not found in page.tsx")
PYEOF

echo "part16 done"