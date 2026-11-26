export function SmmPanelVietnamThumbnail() {
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
        <radialGradient id="svn-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#da251d" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#da251d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="svn-star" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffeb3b" />
          <stop offset="100%" stopColor="#ffc107" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="#0a120f" />
      <circle cx="200" cy="200" r="180" fill="url(#svn-glow)" />

      <circle cx="80" cy="90" r="1.5" fill="#fff" opacity="0.5" />
      <circle cx="320" cy="100" r="1" fill="#fff" opacity="0.4" />
      <circle cx="70" cy="280" r="1" fill="#fff" opacity="0.5" />
      <circle cx="330" cy="300" r="1.5" fill="#fff" opacity="0.4" />

      <ellipse cx="130" cy="290" rx="12" ry="30" fill="#da251d" opacity="0.15" />
      <ellipse cx="170" cy="280" rx="10" ry="28" fill="#da251d" opacity="0.2" />
      <ellipse cx="230" cy="280" rx="10" ry="28" fill="#da251d" opacity="0.2" />
      <ellipse cx="270" cy="290" rx="12" ry="30" fill="#da251d" opacity="0.15" />

      <polygon
        points="200,130 216,178 268,178 226,206 242,252 200,226 158,252 174,206 132,178 184,178"
        fill="url(#svn-star)"
        stroke="#ffeb3b"
        strokeWidth="1"
      />

      <path
        d="M 100 340 L 160 300 L 220 320 L 300 240"
        stroke="#8ed6ad"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 300 240 L 285 245 M 300 240 L 295 255"
        stroke="#8ed6ad"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      <rect x="155" y="40" width="90" height="26" rx="13" fill="#1a2f24" stroke="#da251d" strokeWidth="1.5" />
      <text
        x="200"
        y="57"
        textAnchor="middle"
        fill="#ffeb3b"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="700"
      >
        VIETNAM
      </text>
    </svg>
  );
}
