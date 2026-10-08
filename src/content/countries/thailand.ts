import type { CountryData } from "./types";

export const thailandData: CountryData = {
  code: "th",
  slug: "thailand",
  available: true,

  nameVi: "Thái Lan",
  nameEn: "Thailand",
  tagVi: "SMM Panel Thái Lan",
  tagEn: "SMM Panel Thailand",

  seo: {
    title: "SMM Panel Thailand — SMMZin | TikTok & LINE growth, PromptPay accepted",
    description:
      "SMMZin is a modern SMM Panel for Thai creators and agencies. Grow TikTok, Facebook, Instagram, LINE, YouTube and more. Pay with PromptPay, TrueMoney, Rabbit LINE Pay. 24/7 support.",
    keywords: [
      "SMM Panel Thailand",
      "SMM Panel Thai",
      "best SMM panel Thailand",
      "cheap SMM panel Thailand",
      "TikTok followers Thailand",
      "LINE followers Thailand",
      "Instagram followers Thailand",
      "PromptPay SMM panel",
      "TrueMoney SMM panel",
      "Rabbit LINE Pay SMM panel",
    ],
    htmlLang: "en",
    ogLocale: "en_US",
    inLanguage: "en",
  },

  accent: {
    primary: "#a51931",
    secondary: "#2d2a4a",
  },

  hero: {
    eyebrow: "SMM PANEL THAILAND",
    title: "Thailand's SMM Panel for TikTok, LINE and every social platform.",
    subtitle:
      "Grow faster on TikTok, Facebook, Instagram, LINE and YouTube. Built for Thai creators, agencies and brands — with PromptPay payments and 24/7 support.",
    primaryCta: "Start now",
    secondaryCta: "View services",
    trustPoints: [
      "PromptPay · TrueMoney",
      "24/7 Thai support",
      "From ฿0.01 per unit",
    ],
    displayName: "ประเทศไทย",
  },

  whatIs: {
    eyebrow: "WHAT IS AN SMM PANEL?",
    title: "What is an SMM Panel and why do Thai creators use it?",
    paragraphs: [
      "An SMM Panel is a web dashboard where you can buy social media growth services — followers, likes, views and engagement — across all major platforms, from one place.",
      "Thailand has one of Southeast Asia's most engaged social media populations. TikTok, Facebook, LINE and Instagram dominate daily life. SMMZin helps Thai creators grow these channels without spending hours on manual promotion.",
      "Whether you're a TikToker in Bangkok, a Facebook Shop seller in Chiang Mai, or an agency managing clients across the country, SMMZin scales with your needs.",
    ],
    highlights: [
      { title: "Built for Thai platforms", description: "Full support for TikTok, LINE, Facebook and Instagram." },
      { title: "One dashboard", description: "Manage every platform without juggling tabs." },
      { title: "Live order tracking", description: "Watch every order progress in real time." },
    ],
  },

  why: {
    eyebrow: "WHY THAI USERS CHOOSE SMMZIN",
    title: "Designed for Thailand's social-first economy.",
    description:
      "Thailand ranks among the world's most social-media-active countries. We built SMMZin to match how Thai creators actually work.",
    items: [
      { title: "Priced for Thailand", description: "Starting from ฿0.01 per unit. Special rates for agencies handling many clients." },
      { title: "PromptPay-ready", description: "Pay with PromptPay, TrueMoney, Rabbit LINE Pay or ShopeePay. No foreign card required." },
      { title: "Built for TikTok", description: "Fast processing during viral moments. TikTok is Thailand's fastest-growing platform." },
      { title: "24/7 Thai support", description: "Real support via LINE, WhatsApp and Telegram — around the clock." },
    ],
  },

  services: {
    eyebrow: "PLATFORMS WE SUPPORT",
    title: "Grow every platform Thai audiences love.",
    description:
      "Thailand is one of the world's most social-media-active countries. SMMZin supports every platform Thai users actually use — including LINE.",
    platforms: [
      { key: "tiktok", name: "TikTok", description: "Thailand's fastest-growing platform. Grow followers, likes, views and live stream viewers.", services: ["Followers", "Video Likes", "Views", "Live Viewers", "Shares"] },
      { key: "facebook", name: "Facebook", description: "Still #1 for Facebook Shops, community groups and local business pages.", services: ["Page Likes", "Followers", "Video Views", "Reactions", "Shares"] },
      { key: "instagram", name: "Instagram", description: "Popular with Thai Gen Z, fashion and food influencers.", services: ["Followers", "Likes", "Reels Views", "Story Views", "Comments"] },
      { key: "youtube", name: "YouTube", description: "Huge for Thai music, gaming and lifestyle content.", services: ["Subscribers", "Video Views", "Likes", "Watch Hours", "Comments"] },
      { key: "telegram", name: "Telegram", description: "Growing fast for community channels and crypto trading groups.", services: ["Channel Members", "Group Members", "Post Views", "Reactions"] },
      { key: "x", name: "X (Twitter)", description: "Popular for Thai entertainment and K-pop fandoms.", services: ["Followers", "Likes", "Retweets", "Views"] },
    ],
    note: "Full service catalogue with pricing will be published when the platform officially launches.",
  },

  payment: {
    eyebrow: "PAYMENT FOR THAI USERS",
    title: "Pay the Thai way — PromptPay, wallets and bank transfer.",
    description:
      "SMMZin supports every payment method Thai users actually rely on. PromptPay covers over half of all digital transactions in Thailand.",
    methods: [
      { name: "PromptPay", type: "Instant transfer", speed: "Instant", note: "Thailand's national payment system", status: "available" },
      { name: "TrueMoney Wallet", type: "Digital wallet", speed: "Instant", note: "Most popular Thai e-wallet", status: "available" },
      { name: "Rabbit LINE Pay", type: "Digital wallet", speed: "Instant", note: "LINE's payment app in Thailand", status: "available" },
      { name: "ShopeePay", type: "Digital wallet", speed: "Instant", note: "For Shopee sellers and buyers", status: "available" },
      { name: "Bank Transfer", type: "Local transfer", speed: "5–30 min", note: "All major Thai banks (KBank, SCB, BBL)", status: "available" },
      { name: "USDT (TRC20 / BEP20)", type: "Crypto", speed: "5–15 min", note: "For international payments", status: "available" },
    ],
    note: "SMMZin never stores your payment details. Every transaction is processed through licensed Thai payment gateways and banks.",
  },

  howToOrder: {
    eyebrow: "HOW TO ORDER",
    title: "Start growing your social media in 4 quick steps.",
    description:
      "From signup to your first live order in under 5 minutes. No technical knowledge required.",
    steps: [
      { number: "01", title: "Sign up free", description: "Register with your email. Free, no credit card, no KYC needed." },
      { number: "02", title: "Top up via PromptPay", description: "Load your balance instantly with PromptPay, TrueMoney or Rabbit LINE Pay. No top-up fees." },
      { number: "03", title: "Pick a service", description: "Choose your platform, select the service, paste the link, set quantity and confirm." },
      { number: "04", title: "Watch it grow", description: "Track live progress in your dashboard. Most services start within minutes." },
    ],
  },

  faq: {
    eyebrow: "COMMON QUESTIONS FROM THAILAND",
    title: "FAQs from Thai creators and agencies.",
    description: "Answers to the questions we hear most from Thai users.",
    items: [
      { q: "What is an SMM Panel?", a: "An SMM Panel is a dashboard where you can order social media growth services — followers, likes, views, comments — across platforms like TikTok, Facebook, Instagram, LINE and YouTube." },
      { q: "Does SMMZin accept PromptPay?", a: "Yes. We accept PromptPay, TrueMoney Wallet, Rabbit LINE Pay, ShopeePay, local bank transfers and USDT. PromptPay works instantly without any top-up fee." },
      { q: "How much does it cost in Thai baht?", a: "Services start from ฿0.01 per unit. Exact pricing depends on the platform and service. Full price list will be published at launch." },
      { q: "Is it safe for Thai creators?", a: "Yes. We use only authorised Thai payment gateways. Your data and payment details are never stored on our servers." },
      { q: "How fast do orders deliver?", a: "Most orders start within 2–5 minutes. Larger orders (e.g. 100K TikTok views) may take hours to fully deliver." },
      { q: "Can Thai agencies resell SMMZin?", a: "Absolutely. We offer partner pricing and white-label options for Thai agencies. Contact support after signing up." },
      { q: "Is there an API for developers?", a: "Yes. Our API is being built for Thai dev agencies and SaaS resellers. Documentation will be published at launch." },
      { q: "Do you support LINE growth?", a: "Yes. LINE is one of Thailand's most-used platforms. We support LINE official accounts and LINE VOOM growth services." },
    ],
  },

  finalCta: {
    title: "Join Thailand's fastest-growing SMM Panel.",
    description:
      "Be the first to know when SMMZin launches in Thailand. We'll send you an email — no spam, just launch updates.",
    primaryCta: "Notify me",
    secondaryCta: "Learn more",
  },
};
