export function SmmPanelHowItWorksThumbnail() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="wsp-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#5a9bc7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#5a9bc7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wsp-rocket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e5ea" />
          <stop offset="100%" stopColor="#8a9ba8" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="#0a1520" />
      <circle cx="200" cy="200" r="180" fill="url(#wsp-glow)" />
      
      {/* Stars */}
      <circle cx="100" cy="100" r="1.5" fill="#fff" opacity="0.6" />
      <circle cx="300" cy="80" r="2" fill="#fff" opacity="0.8" />
      <circle cx="80" cy="250" r="1" fill="#fff" opacity="0.4" />
      <circle cx="320" cy="220" r="1.5" fill="#fff" opacity="0.5" />
      <circle cx="150" cy="60" r="1" fill="#fff" opacity="0.7" />

      {/* Rocket */}
      <g transform="translate(200 200) rotate(-45)">
        {/* Body */}
        <path d="M 0 -80 C 30 -40 30 40 0 80 C -30 40 -30 -40 0 -80 Z" fill="url(#wsp-rocket)" />
        
        {/* Window */}
        <circle cx="0" cy="-20" r="12" fill="#0a1520" stroke="#5a9bc7" strokeWidth="3" />
        <circle cx="0" cy="-20" r="5" fill="#5a9bc7" opacity="0.6" />
        
        {/* Fins */}
        <path d="M -20 40 L -40 70 L -20 60 Z" fill="#ce1126" />
        <path d="M 20 40 L 40 70 L 20 60 Z" fill="#ce1126" />

        {/* Exhaust Flame */}
        <path d="M -10 75 Q 0 120 10 75 Z" fill="#ffd966" opacity="0.9" />
        <path d="M -5 75 Q 0 100 5 75 Z" fill="#ff9e00" opacity="0.8" />
      </g>

      {/* Growth Arrow */}
      <path d="M 280 300 L 330 250 M 330 250 L 310 250 M 330 250 L 330 270" stroke="#8ed6ad" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
