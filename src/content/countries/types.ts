/**
 * Kiểu dữ liệu cho một quốc gia landing page.
 * Mỗi nước chỉ cần export 1 object CountryData tuân theo interface này.
 */

import type { PlatformKey } from "../platforms";

export type CountryServicePlatform = {
  key: PlatformKey;
  name: string;
  description: string;
  services: string[];
};

export type CountryPaymentMethod = {
  name: string;
  type: string;
  speed: string;
  note: string;
  status: "available" | "coming-soon";
};

export type CountryHighlight = {
  title: string;
  description: string;
};

export type CountryStep = {
  number: string;
  title: string;
  description: string;
};

export type CountryFaqItem = {
  q: string;
  a: string;
};

export type CountryData = {
  // ----- Định danh -----
  code: string;           // "vn", "cn", "bd", "us"
  slug: string;           // "vietnam" → URL /smm-panel-vietnam
  available: boolean;     // Hiển thị active trên section Countries

  // ----- Tên + tag (dùng cho section Countries) -----
  nameVi: string;
  nameEn: string;
  tagVi: string;
  tagEn: string;

  // ----- SEO metadata -----
  seo: {
    title: string;
    description: string;
    keywords: string[];
    htmlLang: string;     // "vi" | "zh-CN" | "en"
    ogLocale: string;     // "vi_VN" | "zh_CN" | "en_US"
    inLanguage: string;   // cho JSON-LD: "vi-VN" | "zh-CN" | "en"
  };

  // ----- Màu accent (hex, dùng cho CSS variable --country-accent) -----
  accent: {
    primary: string;
    secondary: string;
  };

  // ----- Hero -----
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
    // Chữ hiển thị ở góc (VD: "VIỆT NAM", "中国", "USA")
    displayName: string;
  };

  // ----- Nội dung còn lại -----
  whatIs: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: CountryHighlight[];
  };

  why: {
    eyebrow: string;
    title: string;
    description: string;
    items: CountryHighlight[];
  };

  services: {
    eyebrow: string;
    title: string;
    description: string;
    platforms: CountryServicePlatform[];
    note: string;
  };

  payment: {
    eyebrow: string;
    title: string;
    description: string;
    methods: CountryPaymentMethod[];
    note: string;
  };

  howToOrder: {
    eyebrow: string;
    title: string;
    description: string;
    steps: CountryStep[];
  };

  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: CountryFaqItem[];
  };

  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

// ------------------------------------------------------------
// Visual config — mỗi nước có hero art riêng
// ------------------------------------------------------------
export type CountryVisual = {
  /** React component vẽ SVG (nhận prop size) */
  Art: React.ComponentType<{ size?: number }>;
  /** Kích thước hiển thị */
  artSize: number;
  /** Vị trí cờ (top-left, top-right, bottom-left, bottom-right) */
  flagPosition: "tl" | "tr" | "bl" | "br";
  /** Vị trí chữ display name */
  textPosition: "tl" | "tr" | "bl" | "br";
  /** CSS class cho animation của art */
  artAnimationClass?: string;
  /** CSS class cho animation của cờ */
  flagAnimationClass?: string;
};

// ------------------------------------------------------------
// Helper position class cho Tailwind
// ------------------------------------------------------------
export function getPositionClasses(pos: "tl" | "tr" | "bl" | "br"): string {
  switch (pos) {
    case "tl": return "absolute top-[8%] left-[6%] z-10";
    case "tr": return "absolute top-[8%] right-[6%] z-10";
    case "bl": return "absolute bottom-[8%] left-[6%] z-10";
    case "br": return "absolute bottom-[8%] right-[6%] z-10";
  }
}
