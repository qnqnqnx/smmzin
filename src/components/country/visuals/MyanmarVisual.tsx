"use client";

/**
 * Shwedagon Pagoda + Hoa Padauk (quốc hoa Myanmar).
 * Màu: vàng gold (chùa) + đỏ (quốc kỳ) trên nền tối.
 */
export function MyanmarVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mm-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FECB00" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FECB00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5cc" />
          <stop offset="40%" stopColor="#FECB00" />
          <stop offset="100%" stopColor="#b8861f" />
        </linearGradient>
        <radialGradient id="mm-padauk" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffb3c1" />
          <stop offset="100%" stopColor="#EA2839" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#mm-glow)" />

      {/* ============ HOA PADAUK BÊN TRÁI ============ */}
      <g transform="translate(50 320)">
        <g className="mm-padauk-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {/* Cánh hoa Padauk */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="7"
              ry="13"
              fill="url(#mm-padauk)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA PADAUK BÊN PHẢI ============ */}
      <g transform="translate(350 320)">
        <g className="mm-padauk-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="6"
              ry="11"
              fill="url(#mm-padauk)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#ffd966" />
        </g>
      </g>

      {/* ============ CHÙA SHWEDAGON ============ */}
      <g transform="translate(200 250)">
        {/* Bệ đỡ */}
        <rect x="-80" y="40" width="160" height="15" fill="#8a6416" stroke="#5c4210" strokeWidth="1" />
        <rect x="-70" y="55" width="140" height="10" fill="#a67c1c" stroke="#5c4210" strokeWidth="0.8" />

        {/* Tầng 1 — nền chùa */}
        <path d="M -60 40 L -50 10 L 50 10 L 60 40 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        {/* Cửa sổ / hốc tường */}
        {[-40, -20, 0, 20, 40].map((x) => (
          <rect key={x} x={x - 4} y="18" width="8" height="14" rx="2" fill="#5c4210" opacity="0.7" />
        ))}

        {/* Tầng 2 */}
        <path d="M -50 10 L -35 -20 L 35 -20 L 50 10 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        
        {/* Tầng 3 */}
        <path d="M -35 -20 L -20 -50 L 20 -50 L 35 -20 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />

        {/* Tầng 4 (thu nhỏ) */}
        <path d="M -20 -50 L -12 -75 L 12 -75 L 20 -50 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />

        {/* Tháp chuông (Spire) */}
        <path d="M -12 -75 L -4 -105 L 4 -105 L 12 -75 Z" fill="url(#mm-gold)" stroke="#8a6416" strokeWidth="1.2" />
        
        {/* Chóp vàng (Hti) */}
        <path d="M -4 -105 L 0 -130 L 4 -105 Z" fill="#FECB00" stroke="#8a6416" strokeWidth="0.8" />
        <circle cx="0" cy="-136" r="2.5" fill="#FECB00" />
        <path d="M -2 -136 L 0 -145 L 2 -136 Z" fill="#FECB00" />

        {/* Trang trí dọc thân tháp */}
        <path d="M -6 -75 L -2 -100 M 6 -75 L 2 -100" stroke="#8a6416" strokeWidth="0.6" opacity="0.5" />

        {/* Hào quang quanh chùa (rất mờ) */}
        <circle cx="0" cy="-50" r="90" fill="url(#mm-glow)" opacity="0.6" />
      </g>

      {/* Sao lấp lánh */}
      <g className="mm-star-twinkle" transform="translate(75 90)">
        <polygon points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3" fill="#FECB00" opacity="0.6" />
      </g>
      <g className="mm-star-twinkle-rev" transform="translate(325 100)">
        <polygon points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3" fill="#EA2839" opacity="0.5" />
      </g>
    </svg>
  );
}
