#!/usr/bin/env bash
set -euo pipefail

cat >> src/content/dictionaries.ts << 'EOF'

const en: Dictionary = {
  meta: {
    title: "SMMZin — Next Generation Social Media Marketing Platform",
    description:
      "SMMZin is a next-generation Social Media Marketing platform (SMM Panel) that helps creators, agencies and brands manage social growth across multiple networks. Launching soon.",
    keywords: [
      "SMMZin",
      "SMM Panel",
      "Social Media Marketing",
      "social media platform",
      "social growth",
      "social media management",
      "SMM API",
    ],
  },

  common: {
    comingSoon: "COMING SOON",
    notifyMe: "Notify Me",
    explore: "Explore SMMZin",
    languageLabel: "Switch language",
    backHome: "Back to home",
  },

  nav: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Platforms", href: "#platforms" },
      { label: "Solutions", href: "#solutions" },
      { label: "FAQ", href: "#faq" },
    ] as NavItem[],
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "COMING SOON",
    title: "Social Growth, Reimagined.",
    description:
      "SMMZin is building a smarter, simpler and more powerful platform for modern social media marketing and growth.",
    note: "Built for creators, agencies and brands.",
    countdownLabel: "COMING SOON",
    countdownNote: "Resets daily at 00:00 (GMT+7).",
    hours: "HOURS",
    minutes: "MINUTES",
    seconds: "SECONDS",
  },

  marquee: { heading: "BUILT FOR THE SOCIAL WEB" },

  about: {
    eyebrow: "ABOUT",
    title: "What is SMMZin?",
    paragraphs: [
      "SMMZin is a Social Media Marketing platform (SMM Panel) designed to simplify social media growth and marketing workflows across multiple networks.",
      "Instead of juggling disconnected tools, SMMZin aims to be one unified ecosystem: manage services, follow orders, track status and scale — all in one place.",
      "The platform is currently in development and will launch soon.",
    ],
    audiencesLabel: "Built for",
    audiences: ["Creators", "Agencies", "Resellers", "Brands", "Businesses"],
    pillars: [
      { title: "Multi-platform", description: "Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads and Spotify." },
      { title: "Centralised operations", description: "One workspace for services, orders and tracking." },
      { title: "Built to scale", description: "Designed with agencies, resellers and API integration in mind." },
    ],
  },

  benefits: {
    eyebrow: "WHY SMMZIN",
    title: "Everything You Need To Scale Social.",
    description:
      "SMMZin focuses on what actually makes a difference: clarity, speed and the ability to scale.",
    items: [
      { title: "Unified Platform", description: "Manage social media growth workflows from one ecosystem." },
      { title: "Smart Automation", description: "Reduce repetitive tasks with automated workflows." },
      { title: "Real-time Control", description: "Track activity and order status more efficiently." },
      { title: "Built To Scale", description: "Designed for creators, agencies and growing businesses." },
    ],
  },

  features: {
    eyebrow: "FEATURES",
    title: "Designed For Modern Social Growth",
    description: "The core capabilities SMMZin is building for launch.",
    items: [
      { title: "Multi-platform Management", description: "Operate services across multiple social networks from one interface." },
      { title: "Automated Order Processing", description: "Order intake and processing handled through automated workflows." },
      { title: "Service Management", description: "Organise service catalogues clearly, easy to browse and update." },
      { title: "Real-time Tracking", description: "See status, progress and activity history instantly." },
      { title: "Developer API", description: "A planned API layer for developers, agencies and resellers." },
      { title: "Reseller Ready", description: "Structured for resale models and growing service businesses." },
    ],
  },

  platforms: {
    eyebrow: "ECOSYSTEM",
    title: "One Platform. Multiple Networks.",
    description:
      "SMMZin is being built to support the most widely used social platforms, with clear service categories for each.",
    servicesLabel: "Service categories",
    items: [
      { key: "facebook", name: "Facebook", description: "Support for page, profile and content growth.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "instagram", name: "Instagram", description: "Support for profile, post and reels growth.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "tiktok", name: "TikTok", description: "Support for channel and short-form video growth.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "youtube", name: "YouTube", description: "Support for channel and long-form video growth.", services: ["Subscribers", "Views", "Likes"] },
      { key: "telegram", name: "Telegram", description: "Support for channel and community group growth.", services: ["Members", "Views", "Reactions"] },
      { key: "x", name: "X", description: "Support for profile and post growth.", services: ["Followers", "Likes", "Views"] },
      { key: "threads", name: "Threads", description: "Support for profile and text content growth.", services: ["Followers", "Likes", "Views"] },
      { key: "spotify", name: "Spotify", description: "Support for artists, playlists and audio content.", services: ["Plays", "Followers", "Playlist"] },
    ],
  },
EOF

echo "part5 done"