"use client";

/**
 * Angkor Wat + hoa Rumdul (quốc hoa) + Apsara dancer silhouette.
 * Màu: xanh navy + đỏ theo quốc kỳ Campuchia + vàng gold cho hoàng hôn.
 */
export function CambodiaVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="kh-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#e00025" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#e00025" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kh-sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9955" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffcc33" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="kh-temple" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2a1f" />
          <stop offset="100%" stopColor="#1a1210" />
        </linearGradient>
        <radialGradient id="kh-rumdul" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#fff5e0" />
          <stop offset="100%" stopColor="#e8d8a8" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#kh-glow)" />

      {/* Mặt trời lặn phía sau Angkor Wat */}
      <circle cx="200" cy="230" r="150" fill="url(#kh-sunset)" />
      <circle cx="200" cy="235" r="60" fill="#ffcc33" opacity="0.35" />
      <circle cx="200" cy="235" r="42" fill="#ffdd66" opacity="0.4" />

      {/* ============ HOA RUMDUL BÊN TRÁI ============ */}
      <g transform="translate(48 320)">
        <g className="kh-flower-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {/* Rumdul có 6-9 cánh hẹp, màu vàng nhạt */}
          {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="3.5"
              ry="11"
              fill="url(#kh-rumdul)"
              stroke="#c9a86a"
              strokeWidth="0.4"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#d4a017" />
          <circle cx="-1" cy="-1" r="1" fill="#8a6416" />
          <circle cx="1.5" cy="1" r="1" fill="#8a6416" />
        </g>
      </g>

      {/* ============ HOA RUMDUL BÊN PHẢI ============ */}
      <g transform="translate(352 320)">
        <g className="kh-flower-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="3"
              ry="9"
              fill="url(#kh-rumdul)"
              stroke="#c9a86a"
              strokeWidth="0.4"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#d4a017" />
        </g>
      </g>

      {/* ============ Apsara DANCER SILHOUETTE (bên trái) ============ */}
      <g className="kh-apsara-dance" transform="translate(85 165)" opacity="0.85">
        {/* Đầu + mũ miện */}
        <circle cx="0" cy="-62" r="9" fill="#1a1a1a" opacity="0.8" />
        <path d="M -10 -70 L -8 -85 L 0 -88 L 8 -85 L 10 -70 Z" fill="#1a1a1a" opacity="0.8" />
        <circle cx="0" cy="-91" r="2" fill="#d4a017" />
        {/* Thân */}
        <path d="M -8 -52 L -12 25 L 12 25 L 8 -52 Z" fill="#1a1a1a" opacity="0.8" />
        {/* Trang phục Apsara */}
        <path d="M -14 -20 L 14 -20" stroke="#d4a017" strokeWidth="1.5" />
        {/* Tay trái giơ cao — tư thế Apsara */}
        <path d="M -8 -45 L -30 -60 L -42 -85 L -32 -92" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
        {/* Bàn tay cong */}
        <path d="M -32 -92 Q -30 -100, -24 -100" stroke="#1a1a1a" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
        {/* Tay phải cong xuống */}
        <path d="M 8 -45 L 28 -55 L 35 -40 L 42 -55" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
        {/* Váy dài */}
        <path d="M -12 25 L -14 80 L 14 80 L 12 25 Z" fill="#1a1a1a" opacity="0.8" />
        {/* Trang trí trên váy */}
        <path d="M -12 40 L 12 40" stroke="#d4a017" strokeWidth="0.8" opacity="0.7" />
        <path d="M -13 55 L 13 55" stroke="#d4a017" strokeWidth="0.8" opacity="0.7" />
      </g>

      {/* ============ ANGKOR WAT (trung tâm) ============ */}
      <g transform="translate(200 265)">
        {/* Nền mờ hỗ trợ */}
        <ellipse cx="0" cy="60" rx="95" ry="5" fill="#000" opacity="0.15" />

        {/* Tầng 1 — nền rộng nhất */}
        <rect x="-72" y="20" width="144" height="35" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />

        {/* Tầng 2 */}
        <rect x="-52" y="-5" width="104" height="28" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />

        {/* Tầng 3 */}
        <rect x="-34" y="-30" width="68" height="28" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />

        {/* Tầng 4 — gần đỉnh */}
        <rect x="-18" y="-55" width="36" height="28" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />

        {/* Tháp trung tâm (đỉnh) */}
        <path d="M -10 -55 L -6 -85 L 6 -85 L 10 -55 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />
        <path d="M -6 -85 L 0 -100 L 6 -85 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.6" />
        {/* Đỉnh tháp */}
        <path d="M -2 -100 L 0 -108 L 2 -100 Z" fill="#d4a017" />

        {/* 4 tháp phụ — 2 bên trung tâm */}
        <path d="M -46 -30 L -43 -55 L -37 -55 L -34 -30 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />
        <path d="M -43 -55 L -40 -68 L -37 -55 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />
        <path d="M 34 -30 L 37 -55 L 43 -55 L 46 -30 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />
        <path d="M 37 -55 L 40 -68 L 43 -55 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />

        {/* 2 tháp nhỏ ngoài cùng */}
        <path d="M -68 20 L -65 -10 L -60 -10 L -57 20 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />
        <path d="M 57 20 L 60 -10 L 65 -10 L 68 20 Z" fill="url(#kh-temple)" stroke="#0a0806" strokeWidth="0.5" />

        {/* Cửa vào trung tâm (mờ) */}
        <path d="M -8 55 L -8 35 Q 0 30, 8 35 L 8 55 Z" fill="#0a0806" opacity="0.7" />

        {/* Hồ nước trước Angkor (phản chiếu mờ) */}
        <ellipse cx="0" cy="68" rx="90" ry="6" fill="#5a9bc7" opacity="0.28" />
        {/* Phản chiếu tháp */}
        <path d="M -6 68 L -4 60 L 4 60 L 6 68 Z" fill="#1a1210" opacity="0.3" />
      </g>

      {/* Sao lấp lánh */}
      <g className="kh-star-twinkle" transform="translate(80 85)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#ffcc33"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
