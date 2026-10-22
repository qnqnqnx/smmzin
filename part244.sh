#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 244: Đồng bộ signature 2 thumbnail mới ==="

# 1. Ghi đè BuffLikeThumbnail — bỏ prop size
cat > src/components/blog/thumbnails/BuffLikeThumbnail.tsx << 'XXENDXX'
export function BuffLikeThumbnail() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bl-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#4f7d5e" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4f7d5e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#0a1d16" />
      <circle cx="200" cy="200" r="180" fill="url(#bl-glow)" />
      <path
        d="M200 320 C200 320 80 240 80 160 C80 110 120 80 160 80 C185 80 200 100 200 100 C200 100 215 80 240 80 C280 80 320 110 320 160 C320 240 200 320 200 320 Z"
        fill="none"
        stroke="#8ed6ad"
        strokeWidth="3"
        opacity="0.8"
      />
      <path
        d="M200 300 C200 300 100 230 100 160 C100 120 130 95 160 95 C180 95 200 110 200 110 C200 110 220 95 240 95 C270 95 300 120 300 160 C300 230 200 300 200 300 Z"
        fill="#8ed6ad"
        opacity="0.15"
      />
      <rect x="140" y="180" width="120" height="40" rx="8" fill="#1a2e24" stroke="#8ed6ad" strokeWidth="1.5" />
      <text x="200" y="207" textAnchor="middle" fill="#8ed6ad" fontSize="20" fontWeight="bold" fontFamily="monospace">1K+</text>
      <circle cx="100" cy="120" r="3" fill="#8ed6ad" opacity="0.6" />
      <circle cx="300" cy="130" r="2" fill="#8ed6ad" opacity="0.4" />
      <circle cx="90" cy="280" r="2.5" fill="#8ed6ad" opacity="0.5" />
      <circle cx="310" cy="290" r="3" fill="#8ed6ad" opacity="0.3" />
    </svg>
  );
}
XXENDXX

# 2. Ghi đè BuffSubThumbnail — bỏ prop size
cat > src/components/blog/thumbnails/BuffSubThumbnail.tsx << 'XXENDXX'
export function BuffSubThumbnail() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bs-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#e0a3a3" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#e0a3a3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#0a1d16" />
      <circle cx="200" cy="200" r="180" fill="url(#bs-glow)" />
      <path
        d="M200 80 C200 80 230 100 230 140 L230 180 C230 200 250 210 250 220 L150 220 C150 210 170 200 170 180 L170 140 C170 100 200 80 200 80 Z"
        fill="none"
        stroke="#e0a3a3"
        strokeWidth="3"
        opacity="0.8"
      />
      <path
        d="M185 230 C185 245 215 245 215 230"
        fill="none"
        stroke="#e0a3a3"
        strokeWidth="3"
        opacity="0.8"
      />
      <rect x="140" y="260" width="120" height="40" rx="8" fill="#2a1a1a" stroke="#e0a3a3" strokeWidth="1.5" />
      <text x="200" y="287" textAnchor="middle" fill="#e0a3a3" fontSize="20" fontWeight="bold" fontFamily="monospace">1K</text>
      <path d="M200 340 L200 310 M190 320 L200 310 L210 320" stroke="#e0a3a3" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}
XXENDXX

echo "✅ Đã đồng bộ signature 2 thumbnail (không nhận props)."

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
