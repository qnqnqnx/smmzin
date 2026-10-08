"use client";

/**
 * Taj Mahal + Lotus flowers — visual Ấn Độ.
 * Màu saffron + xanh navy theo quốc kỳ.
 */
export function IndiaVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="in-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff9933" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ff9933" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="in-taj" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0e6d2" />
        </linearGradient>
        <radialGradient id="in-lotus" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#fff5f7" />
          <stop offset="100%" stopColor="#ffb3c1" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#in-glow)" />

      {/* ============ HOA SEN BÊN TRÁI ============ */}
      <g transform="translate(55 305)">
        <g className="in-lotus-sway" style={{ transformOrigin: "0 35px" }}>
          <path d="M 0 35 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="36" rx="20" ry="4" fill="#3d7d4a" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="5"
              ry="12"
              fill="url(#in-lotus)"
              stroke="#e8a7b8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="4" fill="#ffd966" />
          <circle cx="-1" cy="-1" r="1" fill="#8a6820" />
          <circle cx="2" cy="1" r="1" fill="#8a6820" />
        </g>
      </g>

      {/* ============ HOA SEN BÊN PHẢI ============ */}
      <g transform="translate(345 305)">
        <g className="in-lotus-sway-rev" style={{ transformOrigin: "0 35px" }}>
          <path d="M 0 35 L 0 0" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="36" rx="20" ry="4" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="4"
              ry="10"
              fill="url(#in-lotus)"
              stroke="#e8a7b8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ TAJ MAHAL ============ */}
      <g transform="translate(200 235)">
        {/* Nền chính */}
        <rect x="-75" y="-10" width="150" height="75" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1.2" />
        {/* Đường ngang trên nền */}
        <path d="M -75 -10 L 75 -10" stroke="#c9b98a" strokeWidth="1" opacity="0.6" />

        {/* Vòm chính giữa */}
        <path d="M -28 -10 Q -28 -65, 0 -75 Q 28 -65, 28 -10 Z" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1.2" />
        {/* Chóp vòm chính */}
        <path d="M -4 -75 L 0 -88 L 4 -75 Z" fill="#d4a017" />
        <circle cx="0" cy="-92" r="2" fill="#d4a017" />

        {/* Vòm nhỏ trái */}
        <path d="M -68 -10 Q -68 -45, -55 -50 Q -42 -45, -42 -10 Z" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1" />
        <path d="M -57 -50 L -55 -58 L -53 -50 Z" fill="#d4a017" />

        {/* Vòm nhỏ phải */}
        <path d="M 42 -10 Q 42 -45, 55 -50 Q 68 -45, 68 -10 Z" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1" />
        <path d="M 53 -50 L 55 -58 L 57 -50 Z" fill="#d4a017" />

        {/* 4 minaret tháp */}
        <rect x="-90" y="-30" width="7" height="100" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1" />
        <path d="M -90 -30 Q -86.5 -42, -83 -30 Z" fill="#d4a017" />
        <rect x="83" y="-30" width="7" height="100" fill="url(#in-taj)" stroke="#a89968" strokeWidth="1" />
        <path d="M 83 -30 Q 86.5 -42, 90 -30 Z" fill="#d4a017" />

        {/* Cửa vào */}
        <path d="M -9 65 Q -9 35, 0 28 Q 9 35, 9 65 Z" fill="#5a4a2a" opacity="0.45" />

        {/* Hồ nước phản chiếu */}
        <ellipse cx="0" cy="82" rx="105" ry="14" fill="#5a9bc7" opacity="0.3" />
        <ellipse cx="0" cy="82" rx="88" ry="9" fill="#7ab8dd" opacity="0.35" />
        <path d="M -60 82 Q -30 78, 0 82 Q 30 86, 60 82" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.4" />
      </g>

      {/* Sao lấp lánh */}
      <g className="in-star-twinkle" transform="translate(75 95)">
        <polygon
          points="0,-10 2.5,-3.5 10,-3.5 4,1.5 6,9 0,5 -6,9 -4,1.5 -10,-3.5 -2.5,-3.5"
          fill="#ff9933"
          opacity="0.6"
        />
      </g>
      <g className="in-star-twinkle-rev" transform="translate(325 90)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#138808"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
