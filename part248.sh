#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 248: Thêm country page Laos ==="

# ------------------------------------------------------------
# 1. Data file: laos.ts
# ------------------------------------------------------------
cat > src/content/countries/laos.ts << 'XXENDXX'
import type { CountryData } from "./types";

export const laosData: CountryData = {
  code: "la",
  slug: "laos",
  available: true,

  nameVi: "Lào",
  nameEn: "Laos",
  tagVi: "SMM Panel Lào",
  tagEn: "SMM Panel Laos",

  seo: {
    title: "SMM Panel Laos — SMMZin | Facebook & TikTok growth, BCEL One accepted",
    description:
      "SMMZin is a modern SMM Panel for Lao creators, shops and agencies. Grow Facebook, TikTok, Instagram, YouTube and Telegram. Pay with BCEL One, LDB Trust, JDB Yes. 24/7 support.",
    keywords: [
      "SMM Panel Laos",
      "SMM Panel Lao",
      "best SMM panel Laos",
      "cheap SMM panel Laos",
      "Facebook likes Laos",
      "TikTok followers Laos",
      "Instagram followers Laos",
      "BCEL One SMM panel",
      "LDB Trust SMM panel",
      "JDB Yes SMM panel",
    ],
    htmlLang: "en",
    ogLocale: "en_US",
    inLanguage: "en",
  },

  accent: {
    primary: "#CE1126",
    secondary: "#002868",
  },

  hero: {
    eyebrow: "SMM PANEL LAOS",
    title: "Laos's SMM Panel for creators, shops and agencies.",
    subtitle:
      "Grow faster on Facebook, TikTok, Instagram, YouTube and Telegram. Built for Lao creators and small businesses — with BCEL One, LDB Trust and JDB Yes payments, plus 24/7 support.",
    primaryCta: "Start free",
    secondaryCta: "View services",
    trustPoints: [
      "BCEL One · LDB Trust · JDB Yes",
      "24/7 Laos support",
      "From ₭100 per unit",
    ],
    displayName: "ລາວ",
  },

  whatIs: {
    eyebrow: "UNDERSTANDING SMM PANELS",
    title: "What is an SMM Panel and why Lao creators use it?",
    paragraphs: [
      "An SMM Panel is a dashboard where you can buy social media growth services — followers, likes, views, comments and engagement — across every major platform, all in one place.",
      "Laos has one of the fastest-growing mobile internet adoption rates in Southeast Asia. Facebook dominates daily communication, community groups and live selling. TikTok is booming among younger audiences in Vientiane, Luang Prabang and Savannakhet. Small shops and online sellers increasingly rely on social channels to reach customers.",
      "Whether you're a Facebook seller in Vientiane, a TikTok creator in Luang Prabang, or an agency managing brands across the country, SMMZin helps you grow efficiently without hiring a full marketing team.",
    ],
    highlights: [
      { title: "Built for Laos's mobile-first market", description: "Fast processing for Facebook Live, TikTok and Instagram Reels." },
      { title: "All platforms, one dashboard", description: "Facebook, TikTok, Instagram, YouTube, Telegram — unified." },
      { title: "Real-time order tracking", description: "Watch every order update live from your phone." },
    ],
  },

  why: {
    eyebrow: "WHY LAO USERS CHOOSE SMMZIN",
    title: "Designed for Laos's growing digital economy.",
    description:
      "Laos has one of the youngest populations in Southeast Asia and a rapidly growing e-commerce scene. SMMZin is built for how Lao users actually work — mobile-first, price-conscious, and always connected.",
    items: [
      { title: "Priced for Laos", description: "Starting from ₭100 per unit. Volume discounts for shops and resellers." },
      { title: "Local e-wallet payments", description: "Pay with BCEL One, LDB Trust, JDB Yes or bank transfer. No foreign card required." },
      { title: "Built for Facebook & TikTok", description: "Fast processing for Facebook Live selling and viral TikTok clips." },
      { title: "24/7 Lao & English support", description: "Support via WhatsApp, Telegram and email — Lao and English." },
    ],
  },

  services: {
    eyebrow: "PLATFORMS WE SUPPORT",
    title: "Grow every platform Lao audiences love.",
    description:
      "Facebook and TikTok drive most social media activity in Laos. SMMZin supports every platform Lao users actually use.",
    platforms: [
      { key: "facebook", name: "Facebook", description: "Laos's #1 platform for business, community groups and live selling.", services: ["Page Likes", "Followers", "Video Views", "Reactions", "Shares", "Live Viewers"] },
      { key: "tiktok", name: "TikTok", description: "Fast-growing among Lao youth for entertainment, food and lifestyle content.", services: ["Followers", "Likes", "Views", "Live Viewers", "Shares"] },
      { key: "instagram", name: "Instagram", description: "Popular with younger urban audiences in Vientiane and Luang Prabang.", services: ["Followers", "Post Likes", "Reels Views", "Story Views", "Comments"] },
      { key: "youtube", name: "YouTube", description: "Used for music videos, entertainment, tutorials and food vlogs.", services: ["Subscribers", "Views", "Likes", "Watch Hours", "Comments"] },
      { key: "telegram", name: "Telegram", description: "Widely used for community channels, news and shop updates.", services: ["Channel Members", "Group Members", "Post Views", "Reactions"] },
      { key: "x", name: "X (Twitter)", description: "Niche but growing for news and entertainment communities.", services: ["Followers", "Likes", "Retweets", "Views"] },
    ],
    note: "Full service catalogue with pricing will be published when the platform officially launches.",
  },

  payment: {
    eyebrow: "PAYMENT FOR LAO USERS",
    title: "Pay the Lao way — BCEL One, LDB Trust, JDB Yes.",
    description:
      "SMMZin supports every major payment method used in Laos. Instant mobile wallet top-ups, no foreign card or USD conversion needed.",
    methods: [
      { name: "BCEL One", type: "Mobile wallet", speed: "Instant", note: "Laos's most popular e-wallet by BCEL Bank", status: "available" },
      { name: "LDB Trust", type: "Mobile wallet", speed: "Instant", note: "Lao Development Bank's payment app", status: "available" },
      { name: "JDB Yes", type: "Mobile wallet", speed: "Instant", note: "Joint Development Bank's payment app", status: "available" },
      { name: "U-Money", type: "Mobile wallet", speed: "Instant", note: "Unitel's mobile payment service", status: "available" },
      { name: "Bank Transfer", type: "Local transfer", speed: "5–30 min", note: "All major Lao banks", status: "available" },
      { name: "USDT (TRC20 / BEP20)", type: "Crypto", speed: "5–15 min", note: "For international payments", status: "available" },
    ],
    note: "SMMZin never stores your payment details. Every transaction is processed through licensed Lao payment gateways and banks.",
  },

  howToOrder: {
    eyebrow: "HOW TO ORDER",
    title: "Start growing your social media in 4 quick steps.",
    description:
      "From signup to your first live order in under 5 minutes. No technical knowledge required.",
    steps: [
      { number: "01", title: "Sign up free", description: "Register with your email or phone number. Free, no credit card required." },
      { number: "02", title: "Top up via BCEL One", description: "Load balance instantly with BCEL One, LDB Trust, JDB Yes or U-Money. No top-up fees." },
      { number: "03", title: "Pick a service", description: "Choose platform, select service, paste the link, set quantity and confirm." },
      { number: "04", title: "Watch it grow", description: "Track live progress in your dashboard. Most services start within minutes." },
    ],
  },

  faq: {
    eyebrow: "COMMON QUESTIONS FROM LAOS",
    title: "FAQs from Lao creators and online sellers.",
    description: "Answers to the questions we hear most from Lao users.",
    items: [
      { q: "What is an SMM Panel?", a: "An SMM Panel is a dashboard where you can order social media growth services — followers, likes, views, comments — across platforms like Facebook, TikTok, Instagram and YouTube." },
      { q: "Does SMMZin accept BCEL One and LDB Trust?", a: "Yes. We accept BCEL One, LDB Trust, JDB Yes, U-Money, local bank transfers and USDT. No foreign card required." },
      { q: "How much does it cost in Lao Kip?", a: "Services start from ₭100 per unit. Exact pricing depends on the platform and service. Full price list will be published at launch." },
      { q: "Is it safe for Lao creators?", a: "Yes. We use only authorised Lao payment gateways. Your data and payment details are never stored on our servers." },
      { q: "Do you support Facebook Live selling?", a: "Yes. Facebook Live growth is one of our most popular services in Laos, including live viewers, reactions and comment engagement." },
      { q: "How fast do orders deliver?", a: "Most orders start within 2–5 minutes. Larger orders (e.g. 100K TikTok views) may take hours to fully deliver." },
      { q: "Can Lao shops resell SMMZin?", a: "Absolutely. We offer partner pricing and white-label options for Lao shops, agencies and resellers. Contact support after signing up." },
      { q: "Is there an API for developers?", a: "Yes. Our API is being built for Lao dev shops and SaaS resellers. Documentation will be published at launch." },
    ],
  },

  finalCta: {
    title: "Join Laos's fastest-growing SMM Panel.",
    description:
      "Be the first to know when SMMZin launches in Laos. We'll send you an email — no spam, just launch updates.",
    primaryCta: "Notify me",
    secondaryCta: "Learn more",
  },
};
XXENDXX

echo "✅ Đã tạo src/content/countries/laos.ts"

# ------------------------------------------------------------
# 2. Visual: Thạt Luổng + Hoa Chăm Pa
# ------------------------------------------------------------
cat > src/components/country/visuals/LaosVisual.tsx << 'XXENDXX'
"use client";

/**
 * Thạt Luổng (Pha That Luang) + Hoa Chăm Pa (Dok Champa - quốc hoa Lào).
 * Màu: vàng gold (tháp) + đỏ (quốc kỳ) trên nền tối.
 */
export function LaosVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="la-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#CE1126" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#CE1126" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="la-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE57F" />
          <stop offset="40%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="la-champa" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="100%" stopColor="#F5E6B8" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#la-glow)" />

      {/* ============ HOA CHĂM PA BÊN TRÁI ============ */}
      <g transform="translate(48 320)">
        <g className="la-champa-sway">
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-13"
              rx="6.5"
              ry="12"
              fill="url(#la-champa)"
              stroke="#C9B47A"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#FFD700" />
        </g>
      </g>

      {/* ============ HOA CHĂM PA BÊN PHẢI ============ */}
      <g transform="translate(352 320)">
        <g className="la-champa-sway-rev">
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="12" ry="2.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="5.5"
              ry="10"
              fill="url(#la-champa)"
              stroke="#C9B47A"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#FFD700" />
        </g>
      </g>

      {/* ============ THẠT LUỔNG (PHA THAT LUANG) ============ */}
      <g transform="translate(200 260)">
        {/* Bệ đỡ dưới cùng */}
        <rect x="-90" y="40" width="180" height="15" fill="#8A6416" stroke="#5c4210" strokeWidth="1" />
        <rect x="-80" y="55" width="160" height="10" fill="#A67C1C" stroke="#5c4210" strokeWidth="0.8" />

        {/* 2 tháp nhỏ hai bên */}
        <g>
          <rect x="-75" y="15" width="20" height="25" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="1" />
          <path d="M -75 15 L -65 -5 L -55 15 Z" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="0.8" />

          <rect x="55" y="15" width="20" height="25" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="1" />
          <path d="M 55 15 L 65 -5 L 75 15 Z" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="0.8" />
        </g>

        {/* Tháp chính — tầng 1 (đế rộng) */}
        <path
          d="M -60 40 L -50 5 L 50 5 L 60 40 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 2 */}
        <path
          d="M -50 5 L -38 -30 L 38 -30 L 50 5 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 3 */}
        <path
          d="M -38 -30 L -25 -60 L 25 -60 L 38 -30 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 4 */}
        <path
          d="M -25 -60 L -14 -85 L 14 -85 L 25 -60 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Chóp nón */}
        <path
          d="M -14 -85 L -4 -120 L 4 -120 L 14 -85 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1"
        />

        {/* Đỉnh nhọn (Hti) */}
        <path d="M -4 -120 L 0 -150 L 4 -120 Z" fill="#FFC107" stroke="#8A6416" strokeWidth="0.8" />
        <circle cx="0" cy="-155" r="2.5" fill="#FFC107" />

        {/* Cửa sổ / hốc tường */}
        {[-30, 0, 30].map((x) => (
          <rect
            key={x}
            x={x - 3}
            y="15"
            width="6"
            height="18"
            rx="1.5"
            fill="#5c4210"
            opacity="0.65"
          />
        ))}

        {/* Trang trí dọc thân tháp */}
        <path d="M -8 -85 L -4 -115 M 8 -85 L 4 -115" stroke="#8A6416" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Sao lấp lánh */}
      <g className="la-star-twinkle" transform="translate(80 100)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#FFC107"
          opacity="0.6"
        />
      </g>
      <g className="la-star-twinkle-rev" transform="translate(320 110)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#CE1126"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
XXENDXX

echo "✅ Đã tạo LaosVisual.tsx"

# ------------------------------------------------------------
# 3. Page: /smm-panel-laos
# ------------------------------------------------------------
mkdir -p src/app/smm-panel-laos

cat > src/app/smm-panel-laos/page.tsx << 'XXENDXX'
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CountryPage from "@/components/country/CountryPage";
import { getCountryData, getCountryVisual } from "@/content/countries/registry";
import { buildCountryMetadata } from "@/content/countries/metadata";

const SLUG = "laos";
const data = getCountryData(SLUG);
const visual = getCountryVisual(SLUG);

export const metadata: Metadata = data ? buildCountryMetadata(data) : {};

export default function LaosPage() {
  if (!data || !visual) notFound();
  return <CountryPage data={data} visual={visual} />;
}
XXENDXX

echo "✅ Đã tạo trang /smm-panel-laos"

# ------------------------------------------------------------
# 4. Cập nhật registry.ts
# ------------------------------------------------------------
python - << 'PYEOF'
from pathlib import Path
path = Path("src/content/countries/registry.ts")
c = path.read_text(encoding="utf-8")

# 4a. Import laosData
if 'from "./laos"' not in c:
    marker = 'import { myanmarData } from "./myanmar";'
    if marker in c:
        c = c.replace(marker, marker + '\nimport { laosData } from "./laos";', 1)
        print("✅ Đã thêm import laosData")

# 4b. Dynamic import LaosVisual
if 'const LaosVisual = dynamic' not in c:
    marker = 'const MyanmarVisual = dynamic(() =>\n  import("@/components/country/visuals/MyanmarVisual").then((m) => m.MyanmarVisual),\n);'
    if marker in c:
        c = c.replace(marker, marker + '\nconst LaosVisual = dynamic(() =>\n  import("@/components/country/visuals/LaosVisual").then((m) => m.LaosVisual),\n);', 1)
        print("✅ Đã thêm dynamic import LaosVisual")
    else:
        # fallback: chèn sau VietnamVisual
        marker2 = 'const VietnamVisual = dynamic(() =>\n  import("@/components/country/visuals/VietnamVisual").then((m) => m.VietnamVisual),\n);'
        if marker2 in c:
            c = c.replace(marker2, marker2 + '\nconst LaosVisual = dynamic(() =>\n  import("@/components/country/visuals/LaosVisual").then((m) => m.LaosVisual),\n);', 1)
            print("✅ Đã thêm dynamic import LaosVisual (fallback)")

# 4c. Add to COUNTRY_DATA
if 'laos: laosData' not in c:
    marker = '  myanmar: myanmarData,'
    if marker in c:
        c = c.replace(marker, marker + '\n  laos: laosData,', 1)
        print("✅ Đã thêm laosData vào COUNTRY_DATA")

# 4d. Add to COUNTRY_VISUALS
if 'laos: {' not in c:
    marker = '''  myanmar: {
    Art: MyanmarVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "mm-flag-float",
  },'''
    if marker in c:
        new_entry = marker + ''',
  laos: {
    Art: LaosVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "la-flag-float",
  },'''
        c = c.replace(marker, new_entry, 1)
        print("✅ Đã thêm Laos vào COUNTRY_VISUALS")
    else:
        print("⚠️ Không tìm thấy block Myanmar trong COUNTRY_VISUALS để chèn theo")

path.write_text(c, encoding="utf-8")
PYEOF

# ------------------------------------------------------------
# 5. Cập nhật countries-data.ts: available true + href
# ------------------------------------------------------------
python - << 'PYEOF'
import re
from pathlib import Path

path = Path("src/content/countries-data.ts")
c = path.read_text(encoding="utf-8")

# Tìm block của Laos
m = re.search(r'code:\s*"la"', c)
if not m:
    print("❌ Không tìm thấy code: \"la\" trong countries-data.ts")
else:
    idx = m.start()
    start = c.rfind('{', 0, idx)
    end = c.find('}', idx) + 1
    block = c[start:end]

    new_block = block.replace('available: false', 'available: true')
    new_block = new_block.replace('href: "#notify"', 'href: "/smm-panel-laos"')

    if new_block == block:
        print("⚠️ Block Laos không có gì thay đổi (có thể đã available từ trước)")
    else:
        c = c[:start] + new_block + c[end:]
        path.write_text(c, encoding="utf-8")
        print("✅ Đã bật available: true và href: /smm-panel-laos cho Laos")
        print("\n--- Block Laos sau khi sửa ---")
        print(new_block)
PYEOF

# ------------------------------------------------------------
# 6. CSS animations cho Laos
# ------------------------------------------------------------
cat >> src/app/globals.css << 'XXENDXX'

/* ============================================================
   LAOS PAGE ANIMATIONS
   ============================================================ */

@keyframes la-champa-sway-kf {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes la-champa-sway-rev-kf {
  0%, 100% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
}

.la-champa-sway {
  animation: la-champa-sway-kf 5s ease-in-out infinite;
  transform-origin: 0 30px;
  transform-box: fill-box;
}

.la-champa-sway-rev {
  animation: la-champa-sway-rev-kf 5.5s ease-in-out infinite;
  transform-origin: 0 30px;
  transform-box: fill-box;
}

@keyframes la-star-twinkle-kf {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.15); }
}

.la-star-twinkle {
  animation: la-star-twinkle-kf 3s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

.la-star-twinkle-rev {
  animation: la-star-twinkle-kf 3.5s ease-in-out infinite;
  animation-delay: 1s;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes la-flag-float-kf {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
}

.la-flag-float {
  animation: la-flag-float-kf 5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .la-champa-sway,
  .la-champa-sway-rev,
  .la-star-twinkle,
  .la-star-twinkle-rev,
  .la-flag-float {
    animation: none !important;
  }
}
XXENDXX

echo "✅ Đã thêm CSS animations cho Laos"

# Verify CSS balance
python - << 'PYEOF'
path = "src/app/globals.css"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()
opens = c.count("{")
closes = c.count("}")
diff = opens - closes
if diff > 0:
    c = c.rstrip() + "\n" + ("}\n" * diff)
    with open(path, "w", encoding="utf-8") as f:
        f.write(c)
    print(f"✅ Fixed {diff} CSS brace(s)")
elif diff < 0:
    print(f"⚠️ Có {abs(diff)} dấu }} thừa — nhưng không tự sửa (cần review)")
else:
    print("✅ CSS braces balanced")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -15
