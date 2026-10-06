#!/usr/bin/env bash
set -euo pipefail

cat > public/favicon.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a2f24"/>
      <stop offset="100%" stop-color="#0a1410"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="30" height="30" rx="9.5" fill="url(#g)"/>
  <rect x="1" y="1" width="30" height="30" rx="9.5" fill="none" stroke="#e9f1ec" stroke-opacity="0.14"/>
  <path d="M9 20.5 16 13l7 7.5" fill="none" stroke="#cdf0dd" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 25 16 17.5 23 25" fill="none" stroke="#6fa585" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
</svg>
EOF

cat > public/og-image.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#07100c"/>
      <stop offset="100%" stop-color="#05090a"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.15" cy="0.1" r="0.7">
      <stop offset="0%" stop-color="#4f7d5e" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#4f7d5e" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.9" cy="0.95" r="0.7">
      <stop offset="0%" stop-color="#8ed6ad" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#8ed6ad" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a2f24"/>
      <stop offset="100%" stop-color="#0a1410"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect x="1" y="1" width="1198" height="628" fill="none" stroke="#e9f1ec" stroke-opacity="0.08"/>
  <g transform="translate(96, 208)">
    <rect x="0" y="0" width="88" height="88" rx="26" fill="url(#mark)"/>
    <rect x="0" y="0" width="88" height="88" rx="26" fill="none" stroke="#e9f1ec" stroke-opacity="0.16"/>
    <path d="M25 57 44 36l19 21" fill="none" stroke="#cdf0dd" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25 70 44 49l19 21" fill="none" stroke="#6fa585" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
  </g>
  <text x="216" y="252" font-family="Inter, Helvetica, Arial, sans-serif" font-size="46" font-weight="600" fill="#e9f1ec" letter-spacing="-1.2">SMMZin</text>
  <text x="96" y="392" font-family="Inter, Helvetica, Arial, sans-serif" font-size="66" font-weight="600" fill="#e9f1ec" letter-spacing="-2.4">Social Growth, Reimagined.</text>
  <text x="96" y="466" font-family="Inter, Helvetica, Arial, sans-serif" font-size="27" font-weight="400" fill="#90a59a">A next-generation Social Media Marketing platform.</text>
  <text x="96" y="536" font-family="Inter, Helvetica, Arial, sans-serif" font-size="19" font-weight="500" fill="#8ed6ad" letter-spacing="4">COMING SOON</text>
</svg>
EOF

cat > public/site.webmanifest << 'EOF'
{
  "name": "SMMZin — Social Media Marketing Platform",
  "short_name": "SMMZin",
  "description": "Next-generation social media marketing platform. Launching soon.",
  "start_url": "/vi",
  "scope": "/",
  "display": "standalone",
  "background_color": "#05090a",
  "theme_color": "#05090a",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable" }
  ]
}
EOF

cat > README.md << 'EOF'
# SMMZin — Landing Page

Premium pre-launch landing page for SMMZin, a next-generation Social
Media Marketing platform (SMM Panel).

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**.
No database. No backend. Deploys entirely on **Vercel**.

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_SITE_URL
npm run dev