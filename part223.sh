#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

# ------------------------------------------------------------
# 1. Data Myanmar
# ------------------------------------------------------------
cat > src/content/countries/myanmar.ts << 'XXENDXX'
import type { CountryData } from "./types";

export const myanmarData: CountryData = {
  code: "mm",
  slug: "myanmar",
  available: true,

  nameVi: "Myanmar",
  nameEn: "Myanmar",
  tagVi: "SMM Panel Myanmar",
  tagEn: "SMM Panel Myanmar",

  seo: {
    title: "SMM Panel Myanmar — SMMZin | Facebook & TikTok growth, KBZPay accepted",
    description:
      "SMMZin is a modern SMM Panel for Myanmar creators and businesses. Grow Facebook, TikTok, Instagram, YouTube and Telegram. Pay with KBZPay, Wave Money, AYA Pay. 24/7 support.",
    keywords: [
      "SMM Panel Myanmar",
      "SMM Panel MM",
      "best SMM panel Myanmar",
      "cheap SMM panel Myanmar",
      "TikTok followers Myanmar",
      "Facebook likes Myanmar",
      "Instagram followers Myanmar",
      "KBZPay SMM panel",
      "Wave Money SMM panel",
      "AYA Pay SMM panel",
    ],
    htmlLang: "en",
    ogLocale: "en_US",
    inLanguage: "en",
  },

  accent: {
    primary: "#FECB00",
    secondary: "#EA2839",
  },

  hero: {
    eyebrow: "SMM PANEL MYANMAR",
    title: "Myanmar's SMM Panel for creators, agencies and businesses.",
    subtitle:
      "Grow faster on Facebook, TikTok, Instagram, YouTube and Telegram. Built for Myanmar creators, with KBZPay, Wave Money and AYA Pay payments and 24/7 support.",
    primaryCta: "Start free",
    secondaryCta: "View services",
    trustPoints: [
      "KBZPay · Wave Money · AYA Pay",
      "24/7 Myanmar support",
      "From Ks 10 per unit",
    ],
    displayName: "မြန်မာ",
  },

  whatIs: {
    eyebrow: "UNDERSTANDING SMM PANELS",
    title: "What is an SMM Panel and why Myanmar creators use it?",
    paragraphs: [
      "An SMM Panel is a dashboard where you can buy social media growth services — followers, likes, views, comments and engagement — across every major platform, all in one place.",
      "Myanmar is one of Southeast Asia's fastest-growing digital markets. Facebook dominates daily communication and business, while TikTok is booming among younger audiences. SMMZin helps creators and businesses grow these channels efficiently.",
      "Whether you're a Facebook seller in Yangon, a TikTok creator in Mandalay, or an agency managing multiple brands, SMMZin scales with your needs.",
    ],
    highlights: [
      { title: "Built for Myanmar's market", description: "Fast processing for Facebook and TikTok campaigns." },
      { title: "Every platform in one place", description: "Facebook, TikTok, Instagram, YouTube — unified." },
      { title: "Real-time tracking", description: "Watch every order update live from your phone." },
    ],
  },

  why: {
    eyebrow: "WHY MYANMAR USERS CHOOSE SMMZIN",
    title: "Designed for Myanmar's mobile-first digital economy.",
    description:
      "Myanmar has one of the highest social media engagement rates in the region. SMMZin is built for how Myanmar users actually work — mobile-first, price-conscious, and always connected.",
    items: [
      { title: "Priced for Myanmar", description: "Starting from Ks 10 per unit. Volume discounts for agencies and resellers." },
      { title: "Local e-wallet payments", description: "Pay with KBZPay, Wave Money, AYA Pay or UAB Pay. No foreign card required." },
      { title: "Built for Facebook & TikTok", description: "Fast processing for viral posts and live selling campaigns." },
      { title: "24/7 Burmese & English support", description: "Support via Telegram, WhatsApp and email — Burmese and English." },
    ],
  },

  services: {
    eyebrow: "PLATFORMS WE SUPPORT",
    title: "Grow every platform Myanmar audiences love.",
    description:
      "Facebook and TikTok drive most social media activity in Myanmar. SMMZin supports every platform Myanmar users actually use.",
    platforms: [
      { key: "facebook", name: "Facebook", description: "Myanmar's primary platform for business, community and marketplace.", services: ["Page Likes", "Followers", "Video Views", "Reactions", "Shares"] },
      { key: "tiktok", name: "TikTok", description: "Fast-growing among Myanmar youth for entertainment and live selling.", services: ["Followers", "Likes", "Views", "Live Viewers", "Shares"] },
      { key: "instagram", name: "Instagram", description: "Popular with younger urban audiences and lifestyle influencers.", services: ["Followers", "Post Likes", "Reels Views", "Story Views", "Comments"] },
      { key: "youtube", name: "YouTube", description: "Used for long-form content, music videos and entertainment.", services: ["Subscribers", "Views", "Likes", "Watch Hours", "Comments"] },
      { key: "telegram", name: "Telegram", description: "Widely used for community channels, news and updates.", services: ["Channel Members", "Group Members", "Post Views", "Reactions"] },
      { key: "x", name: "X (Twitter)", description: "Niche but growing for news and entertainment communities.", services: ["Followers", "Likes", "Retweets", "Views"] },
    ],
    note: "Full service catalogue with pricing will be published when the platform officially launches.",
  },

  payment: {
    eyebrow: "PAYMENT FOR MYANMAR USERS",
    title: "Pay the Myanmar way — KBZPay, Wave Money, AYA Pay.",
    description:
      "SMMZin supports every major payment method in Myanmar. Instant mobile wallet top-ups, no foreign card needed.",
    methods: [
      { name: "KBZPay", type: "Mobile wallet", speed: "Instant", note: "Myanmar's most popular e-wallet", status: "available" },
      { name: "Wave Money", type: "Mobile wallet", speed: "Instant", note: "Leading mobile financial service", status: "available" },
      { name: "AYA Pay", type: "Mobile wallet", speed: "Instant", note: "AYA Bank's payment app", status: "available" },
      { name: "UAB Pay", type: "Mobile wallet", speed: "Instant", note: "UAB Bank's payment app", status: "available" },
      { name: "Bank Transfer", type: "Local transfer", speed: "5–30 min", note: "All major Myanmar banks", status: "available" },
      { name: "USDT (TRC20 / BEP20)", type: "Crypto", speed: "5–15 min", note: "For international payments", status: "available" },
    ],
    note: "SMMZin never stores your payment details. Every transaction is processed through licensed Myanmar payment gateways and banks.",
  },

  howToOrder: {
    eyebrow: "HOW TO ORDER",
    title: "Start growing your social media in 4 quick steps.",
    description:
      "From signup to your first live order in under 5 minutes. No technical knowledge required.",
    steps: [
      { number: "01", title: "Sign up free", description: "Register with your email or phone number. Free, no credit card required." },
      { number: "02", title: "Top up via KBZPay", description: "Load balance instantly with KBZPay, Wave Money, AYA Pay or UAB Pay. No top-up fees." },
      { number: "03", title: "Pick a service", description: "Choose platform, select service, paste the link, set quantity and confirm." },
      { number: "04", title: "Watch it grow", description: "Track live progress in your dashboard. Most services start within minutes." },
    ],
  },

  faq: {
    eyebrow: "COMMON QUESTIONS FROM MYANMAR",
    title: "FAQs from Myanmar creators and agencies.",
    description: "Answers to the questions we hear most from Myanmar users.",
    items: [
      { q: "What is an SMM Panel?", a: "An SMM Panel is a dashboard where you can order social media growth services — followers, likes, views, comments — across platforms like Facebook, TikTok, Instagram and YouTube." },
      { q: "Does SMMZin accept KBZPay and Wave Money?", a: "Yes. We accept KBZPay, Wave Money, AYA Pay, UAB Pay, local bank transfers and USDT. No foreign card required." },
      { q: "How much does it cost in Myanmar Kyat?", a: "Services start from Ks 10 per unit. Exact pricing depends on the platform and service. Full price list will be published at launch." },
      { q: "Is it safe for Myanmar creators?", a: "Yes. We use only authorised Myanmar payment gateways. Your data and payment details are never stored on our servers." },
      { q: "Do you support Facebook Live selling?", a: "Yes. Facebook Live growth is one of our most popular services in Myanmar, including live viewers, reactions and comment engagement." },
      { q: "How fast do orders deliver?", a: "Most orders start within 2–5 minutes. Larger orders (e.g. 100K TikTok views) may take hours to fully deliver." },
      { q: "Can Myanmar agencies resell SMMZin?", a: "Absolutely. We offer partner pricing and white-label options for Myanmar agencies. Contact support after signing up." },
      { q: "Is there an API for developers?", a: "Yes. Our API is being built for Myanmar dev agencies and SaaS resellers. Documentation will be published at launch." },
    ],
  },

  finalCta: {
    title: "Join Myanmar's fastest-growing SMM Panel.",
    description:
      "Be the first to know when SMMZin launches in Myanmar. We'll send you an email — no spam, just launch updates.",
    primaryCta: "Notify me",
    secondaryCta: "Learn more",
  },
};
XXENDXX

# ------------------------------------------------------------
# 2. Visual — Shwedagon Pagoda + Padauk flowers
# ------------------------------------------------------------
cat > src/components/country/visuals/MyanmarVisual.tsx << 'XXENDXX'
"use client";

/**
 * Shwedagon Pagoda + Hoa Padauk (quốc hoa Myanmar).
 * Màu: vàng gold (chùa) + đỏ (quốc kỳ) trên nền tối.
 */
export function MyanmarVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mm-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FECB00" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FECB00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5cc" />
          <stop offset="40%" stopColor="#FECB00" />
          <stop offset="100%" stopColor="#b8861f" />
        </linearGradient>
        <radialGradient id="mm-padauk" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffb3c1" />
          <stop offset="100%" stopColor="#EA2839" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#mm-glow)" />

      {/* ============ HOA PADAUK BÊN TRÁI ============ */}
      <g transform="translate(50 320)">
        <g className="mm-padauk-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {/* Cánh hoa Padauk */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="7"
              ry="13"
              fill="url(#mm-padauk)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA PADAUK BÊN PHẢI ============ */}
      <g transform="translate(350 320)">
        <g className="mm-padauk-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="6"
              ry="11"
              fill="url(#mm-padauk)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#ffd966" />
        </g>
      </g>

      {/* ============ CHÙA SHWEDAGON ============ */}
      <g transform="translate(200 250)">
        {/* Bệ đỡ */}
        <rect x="-80" y="40" width="160" height="15" fill="#8a6416" stroke="#5c4210" strokeWidth="1" />
        <rect x="-70" y="55" width="140" height="10" fill="#a67c1c" stroke="#5c4210" strokeWidth="0.8" />

        {/* Tầng 1 — nền chùa */}
        <path d="M -60 40 L -50 10 L 50 10 L 60 40 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        {/* Cửa sổ / hốc tường */}
        {[-40, -20, 0, 20, 40].map((x) => (
          <rect key={x} x={x - 4} y="18" width="8" height="14" rx="2" fill="#5c4210" opacity="0.7" />
        ))}

        {/* Tầng 2 */}
        <path d="M -50 10 L -35 -20 L 35 -20 L 50 10 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        
        {/* Tầng 3 */}
        <path d="M -35 -20 L -20 -50 L 20 -50 L 35 -20 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />

        {/* Tầng 4 (thu nhỏ) */}
        <path d="M -20 -50 L -12 -75 L 12 -75 L 20 -50 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />

        {/* Tháp chuông (Spire) */}
        <path d="M -12 -75 L -4 -105 L 4 -105 L 12 -75 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        
        {/* Chóp vàng (Hti) */}
        <path d="M -4 -105 L 0 -130 L 4 -105 Z" fill="#FECB00" stroke="#8a6416" strokeWidth="0.8" />
        <circle cx="0" cy="-136" r="2.5" fill="#FECB00" />
        <path d="M -2 -136 L 0 -145 L 2 -136 Z" fill="#FECB00" />

        {/* Trang trí dọc thân tháp */}
        <path d="M -6 -75 L -2 -100 M 6 -75 L 2 -100" stroke="#8a6416" strokeWidth="0.6" opacity="0.5" />

        {/* Hào quang quanh chùa (rất mờ) */}
        <circle cx="0" cy="-50" r="90" fill="url(#mm-glow)" opacity="0.6" />
      </g>

      {/* Sao lấp lánh */}
      <g className="mm-star-twinkle" transform="translate(75 90)">
        <polygon points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3" fill="#FECB00" opacity="0.6" />
      </g>
      <g className="mm-star-twinkle-rev" transform="translate(325 100)">
        <polygon points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3" fill="#EA2839" opacity="0.5" />
      </g>
    </svg>
  );
}
XXENDXX

echo "✅ Data + Visual for Myanmar created"