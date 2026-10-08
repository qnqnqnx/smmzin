"use client";

/**
 * Chùa Thái (Wat) với mái nhọn nhiều tầng vàng + hoa nhài 2 bên.
 * Màu: vàng gold + đỏ + trắng theo quốc kỳ Thái.
 */
export function ThailandVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="th-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffc72c" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffc72c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="th-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd966" />
          <stop offset="55%" stopColor="#e8b432" />
          <stop offset="100%" stopColor="#b8861f" />
        </linearGradient>
        <linearGradient id="th-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9302c" />
          <stop offset="100%" stopColor="#a51931" />
        </linearGradient>
        <radialGradient id="th-jasmine" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff5e0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#th-glow)" />

      {/* ============ HOA NHÀI BÊN TRÁI ============ */}
      <g transform="translate(55 320)">
        <g className="th-jasmine-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="5"
              ry="11"
              fill="url(#th-jasmine)"
              stroke="#e8d8a8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA NHÀI BÊN PHẢI ============ */}
      <g transform="translate(345 320)">
        <g className="th-jasmine-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="4"
              ry="9"
              fill="url(#th-jasmine)"
              stroke="#e8d8a8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#ffd966" />
        </g>
      </g>

      {/* ============ CHÙA THÁI ============ */}
      <g transform="translate(200 240)">
        {/* Nền chùa — 2 tầng */}
        <rect x="-72" y="20" width="144" height="50" fill="url(#th-gold)" stroke="#8a6416" strokeWidth="1.2" />
        <rect x="-58" y="0" width="116" height="22" fill="url(#th-gold)" stroke="#8a6416" strokeWidth="1.2" />

        {/* Cửa vào */}
        <path d="M -12 68 L -12 40 Q 0 32, 12 40 L 12 68 Z" fill="#5c1818" stroke="#8a6416" strokeWidth="1" />

        {/* Cửa sổ 2 bên */}
        <rect x="-48" y="32" width="10" height="14" rx="2" fill="#5c1818" opacity="0.7" />
        <rect x="38" y="32" width="10" height="14" rx="2" fill="#5c1818" opacity="0.7" />

        {/* ============ TẦNG MÁI 1 ============ */}
        <path d="M -75 20 L -55 -8 L 55 -8 L 75 20 Z" fill="url(#th-red)" stroke="#8a1a1a" strokeWidth="1.2" />
        {/* Điểm nhấn vàng trên mái */}
        <path d="M -75 20 L -55 -8" stroke="#ffd966" strokeWidth="2" />
        <path d="M 75 20 L 55 -8" stroke="#ffd966" strokeWidth="2" />
        {/* Chóp mái */}
        <path d="M -6 -8 L 0 -20 L 6 -8 Z" fill="#ffd966" stroke="#8a6416" strokeWidth="0.8" />

        {/* ============ TẦNG MÁI 2 ============ */}
        <path d="M -58 0 L -38 -28 L 38 -28 L 58 0 Z" fill="url(#th-red)" stroke="#8a1a1a" strokeWidth="1.2" />
        <path d="M -58 0 L -38 -28" stroke="#ffd966" strokeWidth="2" />
        <path d="M 58 0 L 38 -28" stroke="#ffd966" strokeWidth="2" />
        <path d="M -5 -28 L 0 -42 L 5 -28 Z" fill="#ffd966" stroke="#8a6416" strokeWidth="0.8" />

        {/* ============ TẦNG MÁI 3 (đỉnh) ============ */}
        <path d="M -38 -28 L -18 -58 L 18 -58 L 38 -28 Z" fill="url(#th-red)" stroke="#8a1a1a" strokeWidth="1.2" />
        <path d="M -38 -28 L -18 -58" stroke="#ffd966" strokeWidth="2" />
        <path d="M 38 -28 L 18 -58" stroke="#ffd966" strokeWidth="2" />

        {/* ============ CHÓP VÀNG ============ */}
        <path d="M -18 -58 L 0 -88 L 18 -58 Z" fill="url(#th-gold)" stroke="#8a6416" strokeWidth="1" />
        {/* Lớp phủ vàng trên chóp */}
        <path d="M -12 -62 L 0 -82 L 12 -62" stroke="#ffd966" strokeWidth="1.5" fill="none" />
        {/* Đỉnh nhọn */}
        <path d="M -3 -88 L 0 -98 L 3 -88 Z" fill="#ffd966" stroke="#8a6416" strokeWidth="0.6" />
        {/* Trang trí trên đỉnh */}
        <circle cx="0" cy="-102" r="2.5" fill="#ffd966" stroke="#8a6416" strokeWidth="0.5" />

        {/* ============ 2 THÁP NHỎ 2 BÊN ============ */}
        <g transform="translate(-88 60)">
          <rect x="-6" y="-15" width="12" height="15" fill="url(#th-gold)" stroke="#8a6416" strokeWidth="1" />
          <path d="M -8 -15 L 0 -32 L 8 -15 Z" fill="url(#th-red)" stroke="#8a1a1a" strokeWidth="1" />
          <path d="M -2 -32 L 0 -42 L 2 -32 Z" fill="#ffd966" />
        </g>
        <g transform="translate(88 60)">
          <rect x="-6" y="-15" width="12" height="15" fill="url(#th-gold)" stroke="#8a6416" strokeWidth="1" />
          <path d="M -8 -15 L 0 -32 L 8 -15 Z" fill="url(#th-red)" stroke="#8a1a1a" strokeWidth="1" />
          <path d="M -2 -32 L 0 -42 L 2 -32 Z" fill="#ffd966" />
        </g>

        {/* Sân chùa */}
        <ellipse cx="0" cy="72" rx="100" ry="8" fill="#b8861f" opacity="0.15" />
      </g>

      {/* Sao lấp lánh */}
      <g className="th-star-twinkle" transform="translate(80 90)">
        <polygon
          points="0,-9 2.3,-3 9,-3 3.5,1.5 5.5,8 0,4.5 -5.5,8 -3.5,1.5 -9,-3 -2.3,-3"
          fill="#ffc72c"
          opacity="0.55"
        />
      </g>
      <g className="th-star-twinkle-rev" transform="translate(325 85)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#a51931"
          opacity="0.45"
        />
      </g>
    </svg>
  );
}
