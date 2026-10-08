"use client";

/**
 * Petronas Twin Towers + Bunga Raya (quốc hoa) + Wau Bulan (diều trăng truyền thống).
 * Màu: đỏ + xanh navy + vàng theo quốc kỳ Malaysia.
 */
export function MalaysiaVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="my-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#cc0001" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#cc0001" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="my-tower" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a8c4d9" />
          <stop offset="50%" stopColor="#e8f0f5" />
          <stop offset="100%" stopColor="#8aa8bd" />
        </linearGradient>
        <linearGradient id="my-bridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f0f5" />
          <stop offset="100%" stopColor="#a8c4d9" />
        </linearGradient>
        <radialGradient id="my-bunga" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ff4757" />
          <stop offset="100%" stopColor="#b8001f" />
        </radialGradient>
        <radialGradient id="my-wau" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffd966" />
          <stop offset="100%" stopColor="#cc9a00" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#my-glow)" />

      {/* ============ HOA BUNGA RAYA BÊN TRÁI ============ */}
      <g transform="translate(50 320)">
        <g className="my-flower-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#2d5a2d" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {/* 5 cánh hoa lớn — đặc trưng Bunga Raya */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="8"
              ry="13"
              fill="url(#my-bunga)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          {/* Nhị vàng dài đặc trưng dâm bụt */}
          <path d="M 0 0 L 0 -12" stroke="#ffd966" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="0" cy="-13" r="2" fill="#ffd966" />
          <circle cx="0" cy="0" r="3.5" fill="#8b0015" />
        </g>
      </g>

      {/* ============ HOA BUNGA RAYA BÊN PHẢI ============ */}
      <g transform="translate(350 320)">
        <g className="my-flower-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#2d5a2d" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="6"
              ry="11"
              fill="url(#my-bunga)"
              stroke="#8b0015"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <path d="M 0 0 L 0 -10" stroke="#ffd966" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="0" cy="0" r="3" fill="#8b0015" />
        </g>
      </g>

      {/* ============ WAW BULAN (diều trăng) — GÓC TRÊN TRÁI ============ */}
      <g className="my-wau-float" transform="translate(65 85)">
        {/* Dây diều */}
        <path d="M 0 25 Q 5 50, 0 75" stroke="#8a6416" strokeWidth="0.6" fill="none" opacity="0.5" />
        {/* Cánh diều chính — trăng lưỡi liềm */}
        <path
          d="M -20 0
             Q -20 -25, 0 -30
             Q 20 -25, 20 0
             Q 20 20, 0 25
             Q -20 20, -20 0 Z"
          fill="url(#my-wau)"
          stroke="#8a6416"
          strokeWidth="1"
        />
        {/* Trang trí trên diều */}
        <path d="M -12 -8 Q 0 -18, 12 -8" stroke="#8a6416" strokeWidth="0.8" fill="none" opacity="0.6" />
        <path d="M -12 8 Q 0 18, 12 8" stroke="#8a6416" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle cx="0" cy="0" r="3" fill="#8a6416" opacity="0.7" />
        {/* Đuôi diều */}
        <path d="M 0 25 Q -8 35, 0 45 Q 8 55, 0 65" stroke="#cc0001" strokeWidth="0.8" fill="none" />
      </g>

      {/* ============ PETRONAS TWIN TOWERS ============ */}
      <g transform="translate(200 235)">
        {/* Bóng dưới chân */}
        <ellipse cx="0" cy="90" rx="95" ry="6" fill="#000" opacity="0.08" />

        {/* Tháp trái */}
        <g>
          <rect x="-52" y="-120" width="20" height="210" fill="url(#my-tower)" stroke="#5a7a8f" strokeWidth="0.8" />
          {/* Cửa sổ */}
          {[-110, -95, -80, -65, -50, -35, -20, -5, 10, 25, 40, 55, 70].map((y) => (
            <rect key={`lt-${y}`} x="-50" y={y} width="16" height="4" fill="#5a7a8f" opacity="0.5" />
          ))}
          {/* Chóp tháp trái */}
          <path d="M -48 -120 L -42 -150 L -36 -120 Z" fill="url(#my-tower)" stroke="#5a7a8f" strokeWidth="0.8" />
          <path d="M -44 -150 L -42 -165 L -40 -150 Z" fill="#8aa8bd" stroke="#5a7a8f" strokeWidth="0.6" />
          <circle cx="-42" cy="-168" r="1.5" fill="#cc0001" />
        </g>

        {/* Tháp phải */}
        <g>
          <rect x="32" y="-120" width="20" height="210" fill="url(#my-tower)" stroke="#5a7a8f" strokeWidth="0.8" />
          {[-110, -95, -80, -65, -50, -35, -20, -5, 10, 25, 40, 55, 70].map((y) => (
            <rect key={`rt-${y}`} x="34" y={y} width="16" height="4" fill="#5a7a8f" opacity="0.5" />
          ))}
          <path d="M 36 -120 L 42 -150 L 48 -120 Z" fill="url(#my-tower)" stroke="#5a7a8f" strokeWidth="0.8" />
          <path d="M 40 -150 L 42 -165 L 44 -150 Z" fill="#8aa8bd" stroke="#5a7a8f" strokeWidth="0.6" />
          <circle cx="42" cy="-168" r="1.5" fill="#cc0001" />
        </g>

        {/* Cầu nối skybridge ở giữa */}
        <rect x="-32" y="-30" width="64" height="6" fill="url(#my-bridge)" stroke="#5a7a8f" strokeWidth="0.6" />
        {/* Chân cầu — 2 thanh chéo */}
        <path d="M -30 -24 L -20 -18" stroke="#5a7a8f" strokeWidth="0.6" />
        <path d="M 30 -24 L 20 -18" stroke="#5a7a8f" strokeWidth="0.6" />

        {/* Chân đế 2 tháp */}
        <rect x="-58" y="85" width="32" height="8" fill="#8aa8bd" stroke="#5a7a8f" strokeWidth="0.6" />
        <rect x="26" y="85" width="32" height="8" fill="#8aa8bd" stroke="#5a7a8f" strokeWidth="0.6" />
      </g>

      {/* Sao lấp lánh */}
      <g className="my-star-twinkle" transform="translate(325 90)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#ffd966"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
