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
