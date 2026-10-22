"use client";

/**
 * Thạt Luổng (Pha That Luang) + Hoa Chăm Pa (Dok Champa - quốc hoa Lào).
 * Màu: vàng gold (tháp) + đỏ (quốc kỳ) trên nền tối.
 */
export function LaosVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="la-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#CE1126" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#CE1126" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="la-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE57F" />
          <stop offset="40%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <radialGradient id="la-champa" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="100%" stopColor="#F5E6B8" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#la-glow)" />

      {/* ============ HOA CHĂM PA BÊN TRÁI ============ */}
      <g transform="translate(48 320)">
        <g className="la-champa-sway">
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-13"
              rx="6.5"
              ry="12"
              fill="url(#la-champa)"
              stroke="#C9B47A"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#FFD700" />
        </g>
      </g>

      {/* ============ HOA CHĂM PA BÊN PHẢI ============ */}
      <g transform="translate(352 320)">
        <g className="la-champa-sway-rev">
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="12" ry="2.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="5.5"
              ry="10"
              fill="url(#la-champa)"
              stroke="#C9B47A"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#FFD700" />
        </g>
      </g>

      {/* ============ THẠT LUỔNG (PHA THAT LUANG) ============ */}
      <g transform="translate(200 260)">
        {/* Bệ đỡ dưới cùng */}
        <rect x="-90" y="40" width="180" height="15" fill="#8A6416" stroke="#5c4210" strokeWidth="1" />
        <rect x="-80" y="55" width="160" height="10" fill="#A67C1C" stroke="#5c4210" strokeWidth="0.8" />

        {/* 2 tháp nhỏ hai bên */}
        <g>
          <rect x="-75" y="15" width="20" height="25" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="1" />
          <path d="M -75 15 L -65 -5 L -55 15 Z" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="0.8" />

          <rect x="55" y="15" width="20" height="25" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="1" />
          <path d="M 55 15 L 65 -5 L 75 15 Z" fill="url(#la-gold)" stroke="#8A6416" strokeWidth="0.8" />
        </g>

        {/* Tháp chính — tầng 1 (đế rộng) */}
        <path
          d="M -60 40 L -50 5 L 50 5 L 60 40 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 2 */}
        <path
          d="M -50 5 L -38 -30 L 38 -30 L 50 5 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 3 */}
        <path
          d="M -38 -30 L -25 -60 L 25 -60 L 38 -30 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Tầng 4 */}
        <path
          d="M -25 -60 L -14 -85 L 14 -85 L 25 -60 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1.2"
        />

        {/* Chóp nón */}
        <path
          d="M -14 -85 L -4 -120 L 4 -120 L 14 -85 Z"
          fill="url(#la-gold)"
          stroke="#8A6416"
          strokeWidth="1"
        />

        {/* Đỉnh nhọn (Hti) */}
        <path d="M -4 -120 L 0 -150 L 4 -120 Z" fill="#FFC107" stroke="#8A6416" strokeWidth="0.8" />
        <circle cx="0" cy="-155" r="2.5" fill="#FFC107" />

        {/* Cửa sổ / hốc tường */}
        {[-30, 0, 30].map((x) => (
          <rect
            key={x}
            x={x - 3}
            y="15"
            width="6"
            height="18"
            rx="1.5"
            fill="#5c4210"
            opacity="0.65"
          />
        ))}

        {/* Trang trí dọc thân tháp */}
        <path d="M -8 -85 L -4 -115 M 8 -85 L 4 -115" stroke="#8A6416" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Sao lấp lánh */}
      <g className="la-star-twinkle" transform="translate(80 100)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#FFC107"
          opacity="0.6"
        />
      </g>
      <g className="la-star-twinkle-rev" transform="translate(320 110)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#CE1126"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
