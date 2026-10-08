"use client";

/**
 * Faisal Mosque + hoa Jasmine (quốc hoa) + trăng lưỡi liềm và sao.
 * Màu: xanh lá đậm + trắng theo quốc kỳ Pakistan.
 */
export function PakistanVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pk-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#01411c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#01411c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pk-mosque" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>
        <linearGradient id="pk-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#b8b8b8" />
        </linearGradient>
        <radialGradient id="pk-jasmine" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5f0e0" />
        </radialGradient>
        <radialGradient id="pk-moon" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#pk-glow)" />

      {/* ============ HOA JASMINE BÊN TRÁI ============ */}
      <g transform="translate(50 320)">
        <g className="pk-jasmine-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {/* Jasmine có 6-8 cánh trắng */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="4"
              ry="10"
              fill="url(#pk-jasmine)"
              stroke="#d8d0b8"
              strokeWidth="0.4"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#d4a017" />
        </g>
      </g>

      {/* ============ HOA JASMINE BÊN PHẢI ============ */}
      <g transform="translate(350 320)">
        <g className="pk-jasmine-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="3.5"
              ry="9"
              fill="url(#pk-jasmine)"
              stroke="#d8d0b8"
              strokeWidth="0.4"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="2.5" fill="#d4a017" />
        </g>
      </g>

      {/* ============ CRESCENT + STAR (góc trên phải) ============ */}
      <g className="pk-moon-glow" transform="translate(330 85)">
        {/* Vòng sáng mờ */}
        <circle cx="0" cy="0" r="26" fill="#ffffff" opacity="0.06" />
        {/* Trăng lưỡi liềm */}
        <path
          d="M 8 -18
             A 18 18 0 1 0 8 18
             A 14 14 0 1 1 8 -18 Z"
          fill="url(#pk-moon)"
          stroke="#c0c0c0"
          strokeWidth="0.5"
        />
        {/* Sao 5 cánh */}
        <polygon
          points="14,-2 16,3 21,3 17,6 18.5,11 14,8 9.5,11 11,6 7,3 12,3"
          fill="#ffffff"
          stroke="#c0c0c0"
          strokeWidth="0.4"
        />
      </g>

      {/* ============ FAISAL MOSQUE (trung tâm) ============ */}
      <g transform="translate(200 245)">
        {/* Bóng đổ */}
        <ellipse cx="0" cy="95" rx="95" ry="6" fill="#000" opacity="0.1" />

        {/* Nền móng */}
        <rect x="-85" y="60" width="170" height="12" fill="#c8c8c8" stroke="#8a8a8a" strokeWidth="0.8" />

        {/* 4 tháp minaret — góc */}
        {/* Minaret trái */}
        <rect x="-85" y="-60" width="8" height="120" fill="url(#pk-mosque)" stroke="#8a8a8a" strokeWidth="0.6" />
        <path d="M -85 -60 L -81 -85 L -77 -60 Z" fill="url(#pk-roof)" stroke="#8a8a8a" strokeWidth="0.6" />
        <circle cx="-81" cy="-88" r="1.5" fill="#d4a017" />

        {/* Minaret phải */}
        <rect x="77" y="-60" width="8" height="120" fill="url(#pk-mosque)" stroke="#8a8a8a" strokeWidth="0.6" />
        <path d="M 77 -60 L 81 -85 L 85 -60 Z" fill="url(#pk-roof)" stroke="#8a8a8a" strokeWidth="0.6" />
        <circle cx="81" cy="-88" r="1.5" fill="#d4a017" />

        {/* 2 minaret sau (nhỏ hơn) */}
        <rect x="-60" y="-35" width="6" height="95" fill="url(#pk-mosque)" stroke="#8a8a8a" strokeWidth="0.5" />
        <path d="M -60 -35 L -57 -55 L -54 -35 Z" fill="url(#pk-roof)" stroke="#8a8a8a" strokeWidth="0.5" />
        <rect x="54" y="-35" width="6" height="95" fill="url(#pk-mosque)" stroke="#8a8a8a" strokeWidth="0.5" />
        <path d="M 54 -35 L 57 -55 L 60 -35 Z" fill="url(#pk-roof)" stroke="#8a8a8a" strokeWidth="0.5" />

        {/* Thân chính của mosque — mái hình tam giác đặc trưng Faisal */}
        <path
          d="M -70 60
             L -50 -30
             L 50 -30
             L 70 60 Z"
          fill="url(#pk-roof)"
          stroke="#8a8a8a"
          strokeWidth="1"
        />

        {/* Các đường chéo trên mái — tạo hình tam giác */}
        <path d="M -50 -30 L 0 30 L 50 -30" stroke="#c0c0c0" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M -40 -15 L 0 45 L 40 -15" stroke="#c0c0c0" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M -30 0 L 0 55 L 30 0" stroke="#c0c0c0" strokeWidth="0.6" fill="none" opacity="0.4" />

        {/* Cửa sổ / lỗ trên mái */}
        <path d="M -12 30 L -12 15 Q 0 8, 12 15 L 12 30 Z" fill="#7a7a7a" opacity="0.5" />
        <path d="M -22 45 L -22 35 Q -15 30, -8 35 L -8 45 Z" fill="#7a7a7a" opacity="0.4" />
        <path d="M 8 45 L 8 35 Q 15 30, 22 35 L 22 45 Z" fill="#7a7a7a" opacity="0.4" />

        {/* Trăng lưỡi liềm nhỏ trên đỉnh */}
        <g transform="translate(0 -42)">
          <circle cx="0" cy="0" r="3" fill="#d4a017" />
          <circle cx="2" cy="0" r="2.5" fill="url(#pk-roof)" />
        </g>

        {/* Cổng chính */}
        <path d="M -18 72 L -18 45 Q 0 35, 18 45 L 18 72 Z" fill="#5a5a5a" opacity="0.6" />

        {/* Sân trước */}
        <ellipse cx="0" cy="80" rx="80" ry="6" fill="#c8c8c8" opacity="0.4" />
      </g>
    </svg>
  );
}
