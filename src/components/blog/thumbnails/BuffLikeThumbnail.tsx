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
