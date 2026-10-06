import { SITE_CONFIG } from "@/content/site.config";

export const locales = SITE_CONFIG.locales;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = SITE_CONFIG.defaultLocale;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeHref(locale: Locale, path = ""): string {
  if (!path) return `/${locale}`;
  if (path.startsWith("#")) return `/${locale}${path}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function resolveLink(locale: Locale, href: string): string {
  if (href.startsWith("#")) return href;
  if (href.startsWith("http") || href.startsWith("mailto:")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}
