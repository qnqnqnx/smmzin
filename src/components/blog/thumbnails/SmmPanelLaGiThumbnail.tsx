export function SmmPanelLaGiThumbnail() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sp-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sp-chart" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4f7d5e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="#0a1d16" />
      <circle cx="200" cy="200" r="180" fill="url(#sp-glow)" />
      
      {/* Dashboard Mockup */}
      <rect x="60" y="100" width="280" height="200" rx="12" fill="#111816" stroke="#2a4035" strokeWidth="2" />
      
      {/* Header bar */}
      <rect x="60" y="100" width="280" height="40" rx="12" fill="#1a2e24" />
      <rect x="60" y="130" width="280" height="10" fill="#1a2e24" />
      <circle cx="80" cy="120" r="5" fill="#8ed6ad" opacity="0.5" />
      <circle cx="95" cy="120" r="5" fill="#8ed6ad" opacity="0.3" />
      <circle cx="110" cy="120" r="5" fill="#8ed6ad" opacity="0.1" />
      
      {/* Chart area */}
      <path d="M 80 250 L 120 220 L 160 240 L 200 180 L 240 200 L 280 150 L 320 160 L 320 280 L 80 280 Z" fill="url(#sp-chart)" />
      <path d="M 80 250 L 120 220 L 160 240 L 200 180 L 240 200 L 280 150 L 320 160" stroke="#8ed6ad" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Data points */}
      <circle cx="120" cy="220" r="4" fill="#0a1d16" stroke="#8ed6ad" strokeWidth="2" />
      <circle cx="200" cy="180" r="4" fill="#0a1d16" stroke="#8ed6ad" strokeWidth="2" />
      <circle cx="280" cy="150" r="4" fill="#0a1d16" stroke="#8ed6ad" strokeWidth="2" />
      
      {/* Question mark */}
      <circle cx="200" cy="200" r="30" fill="#0a1d16" stroke="#8ed6ad" strokeWidth="2" opacity="0.9" />
      <text x="200" y="214" textAnchor="middle" fill="#8ed6ad" fontSize="36" fontWeight="bold" fontFamily="sans-serif">?</text>
    </svg>
  );
}
