export function SmmPanelProviderThumbnail() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="spp-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#0a120f" />
      <circle cx="200" cy="200" r="180" fill="url(#spp-glow)" />

      {/* Source node */}
      <circle cx="200" cy="180" r="42" fill="#0d1f18" stroke="#8ed6ad" strokeWidth="3" />
      <text
        x="200"
        y="188"
        textAnchor="middle"
        fill="#8ed6ad"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="600"
      >
        SRC
      </text>

      {/* Downstream lines */}
      <path d="M 200 222 L 200 260" stroke="#8ed6ad" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 200 260 L 120 300" stroke="#8ed6ad" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 200 260 L 280 300" stroke="#8ed6ad" strokeWidth="2" strokeDasharray="4 4" />

      {/* Layer nodes */}
      <rect x="88" y="300" width="64" height="32" rx="6" fill="#111f19" stroke="#5a8a72" strokeWidth="1.5" />
      <text x="120" y="320" textAnchor="middle" fill="#9ac4b2" fontSize="10" fontFamily="monospace">API</text>

      <rect x="248" y="300" width="64" height="32" rx="6" fill="#111f19" stroke="#5a8a72" strokeWidth="1.5" />
      <text x="280" y="320" textAnchor="middle" fill="#9ac4b2" fontSize="10" fontFamily="monospace">API</text>

      {/* Badge */}
      <rect x="150" y="110" width="100" height="24" rx="12" fill="#1a2f24" stroke="#8ed6ad" strokeWidth="1" />
      <text x="200" y="126" textAnchor="middle" fill="#cdf0dd" fontSize="9" fontFamily="monospace">PROVIDER</text>
    </svg>
  );
}
