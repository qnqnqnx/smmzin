#!/usr/bin/env bash
set -euo pipefail

cat > src/content/site.config.ts << 'EOF'
export const SITE_CONFIG = {
  brandName: "SMMZin",
  tagline: {
    vi: "Nền tảng Social Media Marketing thế hệ mới.",
    en: "Next-generation social media marketing platform.",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://YOUR-DOMAIN.com",
  defaultLocale: "vi" as const,
  locales: ["vi", "en"] as const,
  ogImage: "/og-image.svg",
  themeColor: "#05090a",

  contact: {
    email: "hello@YOUR-DOMAIN.com",
    telegram: "https://t.me/YOUR-TELEGRAM",
  },

  socialLinks: {
    facebook: "https://facebook.com/YOUR-PAGE",
    instagram: "https://instagram.com/YOUR-PAGE",
    telegram: "https://t.me/YOUR-CHANNEL",
    x: "https://x.com/YOUR-HANDLE",
  },

  countdown: {
    mode: "daily" as "daily" | "fixed",
    timezone: "Asia/Ho_Chi_Minh",
    launchDate: "2026-06-01T00:00:00+07:00",
  },
} as const;
EOF

cat > src/content/platforms.ts << 'EOF'
export type PlatformKey =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "telegram"
  | "x"
  | "threads"
  | "spotify";

export type PlatformItem = {
  key: PlatformKey;
  name: string;
  description: string;
  services: string[];
};

export const marqueePlatforms: { key: PlatformKey; name: string }[] = [
  { key: "facebook", name: "Facebook" },
  { key: "instagram", name: "Instagram" },
  { key: "tiktok", name: "TikTok" },
  { key: "youtube", name: "YouTube" },
  { key: "telegram", name: "Telegram" },
  { key: "x", name: "X" },
  { key: "threads", name: "Threads" },
  { key: "spotify", name: "Spotify" },
];
EOF

cat > src/lib/i18n.ts << 'EOF'
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
EOF

cat > src/lib/countdown.ts << 'EOF'
export type CountdownMode = "daily" | "fixed";

export type CountdownConfig = {
  mode: CountdownMode;
  timezone: string;
  launchDate: string;
};

const DAY_MS = 86_400_000;

export function getTimezoneOffsetMs(timeZone: string, date: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);

  const map: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") map[part.type] = part.value;
  }

  const asUTC = Date.UTC(
    Number(map.year),
    Number(map.month) - 1,
    Number(map.day),
    Number(map.hour) % 24,
    Number(map.minute),
    Number(map.second),
  );

  return asUTC - Math.floor(date.getTime() / 1000) * 1000;
}

export function getRemainingMs(config: CountdownConfig, now: Date = new Date()): number {
  if (config.mode === "fixed") {
    return Math.max(0, new Date(config.launchDate).getTime() - now.getTime());
  }

  const offset = getTimezoneOffsetMs(config.timezone, now);
  const wallClock = now.getTime() + offset;
  const msIntoDay = ((wallClock % DAY_MS) + DAY_MS) % DAY_MS;
  return DAY_MS - msIntoDay;
}

export type RemainingParts = { hours: number; minutes: number; seconds: number };

export function splitRemaining(ms: number): RemainingParts {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function pad(value: number): string {
  return String(value).padStart(2, "0");
}
EOF

echo "part2 done"