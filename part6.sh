#!/usr/bin/env bash
set -euo pipefail

cat >> src/content/dictionaries.ts << 'EOF'

  services: {
    eyebrow: "SERVICE CATEGORIES",
    title: "Social Media Services",
    description:
      "SMMZin aims to cover common social media service categories. Detailed catalogues and specifications will be published at launch.",
    disclaimer:
      "SMMZin does not guarantee specific results. Outcomes depend on the platform, the content and how services are used.",
    groups: [
      { title: "Followers", description: "Grow audiences and members across networks.", items: ["Followers", "Subscribers", "Members"] },
      { title: "Engagement", description: "Increase interaction on posts and content.", items: ["Likes", "Views", "Comments", "Reactions", "Shares"] },
      { title: "Growth", description: "Support overall channel and brand growth.", items: ["Audience growth", "Engagement growth", "Social visibility"] },
    ],
  },

  how: {
    eyebrow: "HOW IT WORKS",
    title: "Simple From Start To Scale.",
    description: "Four steps. Nothing unnecessary.",
    steps: [
      { number: "01", title: "Create", description: "Create your SMMZin account and set up your workspace." },
      { number: "02", title: "Choose", description: "Pick the platform and service category that fits your goal." },
      { number: "03", title: "Manage", description: "Track progress, status and history in one place." },
      { number: "04", title: "Scale", description: "Expand as demand and client volume grow." },
    ],
  },

  preview: {
    eyebrow: "PRODUCT PREVIEW",
    title: "A Better Way To Manage Social Growth.",
    description: "The view below is a preview of the SMMZin interface during development.",
    demoNotice: "Interface preview. Figures are illustrative only and are not real SMMZin data.",
    dashboardTitle: "SMMZin Dashboard",
    dashboardSubtitle: "Preview build",
    stats: [
      { label: "Balance", value: "$2,480.00" },
      { label: "Orders", value: "12,842" },
      { label: "Completed", value: "98.7%" },
    ],
    chartLabel: "7-day volume",
    ordersTitle: "Recent Orders",
    orders: [
      { service: "Instagram Followers", id: "#10241", status: "Completed", progress: 100 },
      { service: "TikTok Views", id: "#10240", status: "Running", progress: 64 },
      { service: "YouTube Views", id: "#10239", status: "Running", progress: 38 },
      { service: "Facebook Likes", id: "#10238", status: "Completed", progress: 100 },
    ],
  },

  api: {
    eyebrow: "API",
    title: "Built For Developers, Too.",
    description:
      "SMMZin is designed with future API integration in mind for developers, agencies and resellers. The endpoint below is a preview.",
    previewLabel: "API PREVIEW",
    note: "Not live. This is a preview of the intended API structure, not an active endpoint.",
    points: ["API key authentication", "Create and track orders", "Query service catalogues", "Status update webhooks"],
  },

  audience: {
    eyebrow: "WHO IT'S FOR",
    title: "Built For People Who Grow Online.",
    description: "SMMZin is designed for a range of working models.",
    groups: [
      { title: "Creators", description: "For creators managing their own channel growth." },
      { title: "Agencies", description: "For agencies handling multiple clients at once." },
      { title: "Resellers", description: "For businesses building their own social media services." },
      { title: "Brands", description: "For businesses managing social presence and growth." },
    ],
  },

  philosophy: {
    eyebrow: "PRODUCT PHILOSOPHY",
    lines: ["Less Friction.", "More Growth."],
    description:
      "We believe the best tool is the one that makes the work clearer. SMMZin is built around that principle: fewer steps, less confusion, more time for the work that actually matters.",
    values: ["Simple", "Powerful", "Scalable"],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description: "Things you may want to know about SMMZin.",
    items: [
      { q: "What is SMMZin?", a: "SMMZin is a next-generation Social Media Marketing platform (SMM Panel) that helps manage and simplify growth workflows across multiple social networks." },
      { q: "Is SMMZin an SMM Panel?", a: "Yes. SMMZin belongs to the SMM Panel / Social Media Marketing platform category, but it is designed as a modern SaaS product rather than a traditional panel." },
      { q: "Which social media platforms does SMMZin support?", a: "SMMZin is being built to support Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads and Spotify." },
      { q: "Who is SMMZin built for?", a: "SMMZin is built for creators, agencies, resellers, brands and businesses that need to manage social media growth." },
      { q: "Will SMMZin support API integration?", a: "Yes. API integration is part of the SMMZin roadmap for developers, agencies and resellers. Specific endpoints will be published at launch." },
      { q: "When will SMMZin launch?", a: "SMMZin is currently in development. Leave your email and we will let you know as soon as we launch." },
      { q: "How can I receive launch updates?", a: "Use the Notify Me form on this page. We only reach out with launch-related information." },
    ],
  },

  notify: {
    eyebrow: "NOTIFY ME",
    title: "Be The First To Know.",
    description: "SMMZin is getting ready. Leave your email and receive a notification when we launch.",
    label: "Email address",
    placeholder: "Your email",
    button: "Notify Me",
    sending: "Sending…",
    success: "Thank you. We will reach out when SMMZin launches.",
    errorRequired: "Please enter your email address.",
    errorInvalid: "That email address doesn't look right. Please check it.",
    privacy: "We only use your email to notify you about SMMZin.",
  },

  finalCta: {
    title: "Something Better Is Coming.",
    description: "SMMZin is almost ready.",
    button: "Notify Me",
  },

  footer: {
    description: "Next-generation social media marketing platform.",
    columns: [
      { title: "Product", links: [
        { label: "Features", href: "#features" },
        { label: "Platforms", href: "#platforms" },
        { label: "API", href: "#api" },
      ]},
      { title: "Resources", links: [
        { label: "FAQ", href: "#faq" },
        { label: "Documentation", href: "#api" },
      ]},
      { title: "Company", links: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#notify" },
      ]},
      { title: "Legal", links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]},
    ],
    rights: "All rights reserved.",
  },

  legal: {
    updatedLabel: "Last updated",
    updated: "January 1, 2026",
    privacy: {
      title: "Privacy Policy",
      intro: "This page describes how SMMZin handles information during the pre-launch stage. It will be expanded once the product is live.",
      sections: [
        { heading: "Information we collect", body: "At this stage, SMMZin only collects the email address you voluntarily provide through the Notify Me form." },
        { heading: "How we use it", body: "Your email is used solely to notify you when SMMZin launches. We do not sell or share this data with third parties for advertising." },
        { heading: "Storage and removal", body: "You can request removal of your email at any time by contacting us at the address listed in the footer." },
      ],
    },
    terms: {
      title: "Terms of Use",
      intro: "This page describes the terms that apply to the SMMZin website during the pre-launch stage. It will be expanded once the product is live.",
      sections: [
        { heading: "Nature of this website", body: "This website is a product introduction page for software in development. Some content, including interface and API previews, is illustrative only." },
        { heading: "No guaranteed results", body: "SMMZin makes no guarantee of specific results. The outcome of any service depends on the platform, the content and how it is used." },
        { heading: "Changes", body: "We may change the content, features and terms on this website at any time without prior notice." },
      ],
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.vi;
}
EOF

echo "part6 done"