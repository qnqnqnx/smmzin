"use client";

/**
 * Merlion + Marina Bay Sands + Vanda Miss Joaquim (quốc hoa).
 * Màu: đỏ + trắng theo quốc kỳ Singapore + vàng gold cho Merlion.
 */
export function SingaporeVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sg-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ee2536" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ee2536" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sg-merlion" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e5ea" />
        </linearGradient>
        <linearGradient id="sg-mbs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8b8c8" />
          <stop offset="100%" stopColor="#5a6a7a" />
        </linearGradient>
        <radialGradient id="sg-orchid" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#e85cbf" />
          <stop offset="100%" stopColor="#9d1f7a" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#sg-glow)" />

      {/* ============ HOA LAN VANDA BÊN TRÁI ============ */}
      <g transform="translate(48 320)">
        <g className="sg-orchid-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          {/* Cánh lan trên */}
          <ellipse cx="0" cy="-18" rx="7" ry="12" fill="url(#sg-orchid)" transform="rotate(-15 0 -18)" />
          <ellipse cx="0" cy="-18" rx="7" ry="12" fill="url(#sg-orchid)" transform="rotate(15 0 -18)" />
          {/* Cánh lan ngang */}
          <ellipse cx="-10" cy="-4" rx="6" ry="10" fill="url(#sg-orchid)" transform="rotate(-60 -10 -4)" />
          <ellipse cx="10" cy="-4" rx="6" ry="10" fill="url(#sg-orchid)" transform="rotate(60 10 -4)" />
          {/* Cánh môi */}
          <ellipse cx="0" cy="4" rx="6" ry="9" fill="#ffb3e0" />
          {/* Nhị vàng */}
          <circle cx="0" cy="-2" r="3" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA LAN VANDA BÊN PHẢI ============ */}
      <g transform="translate(352 320)">
        <g className="sg-orchid-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="14" ry="3" fill="#3d7d4a" opacity="0.5" />
          <ellipse cx="0" cy="-16" rx="6" ry="10" fill="url(#sg-orchid)" transform="rotate(-15 0 -16)" />
          <ellipse cx="0" cy="-16" rx="6" ry="10" fill="url(#sg-orchid)" transform="rotate(15 0 -16)" />
          <ellipse cx="-8" cy="-2" rx="5" ry="8" fill="url(#sg-orchid)" transform="rotate(-60 -8 -2)" />
          <ellipse cx="8" cy="-2" rx="5" ry="8" fill="url(#sg-orchid)" transform="rotate(60 8 -2)" />
          <ellipse cx="0" cy="5" rx="5" ry="7" fill="#ffb3e0" />
          <circle cx="0" cy="0" r="2.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ MARINA BAY SANDS (phía sau Merlion) ============ */}
      <g transform="translate(200 220)">
        {/* 3 tòa nhà thấp */}
        <rect x="-90" y="15" width="20" height="70" fill="url(#sg-mbs)" stroke="#3a4a5a" strokeWidth="0.6" />
        <rect x="-62" y="5" width="20" height="80" fill="url(#sg-mbs)" stroke="#3a4a5a" strokeWidth="0.6" />
        <rect x="-34" y="15" width="20" height="70" fill="url(#sg-mbs)" stroke="#3a4a5a" strokeWidth="0.6" />

        {/* Sàn tàu uốn cong trên đỉnh */}
        <path
          d="M -95 12 Q -50 -5, 0 8 Q 50 18, 95 5 L 95 12 Q 50 25, 0 15 Q -50 2, -95 20 Z"
          fill="url(#sg-mbs)"
          stroke="#3a4a5a"
          strokeWidth="0.8"
        />
        {/* Đường sáng trên sàn */}
        <path d="M -92 14 Q -50 2, 0 11 Q 50 20, 90 8" stroke="#ee2536" strokeWidth="0.8" fill="none" opacity="0.6" />

        {/* Cột đèn trên sàn */}
        <circle cx="-40" cy="2" r="1" fill="#ffd966" />
        <circle cx="0" cy="8" r="1" fill="#ffd966" />
        <circle cx="40" cy="14" r="1" fill="#ffd966" />

        {/* Mặt nước phản chiếu dưới cùng */}
        <ellipse cx="0" cy="90" rx="100" ry="8" fill="#5a9bc7" opacity="0.25" />
        <path d="M -70 90 Q -40 86, 0 90 Q 40 94, 70 90" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.3" />
      </g>

      {/* ============ MERLION (trung tâm) ============ */}
      <g transform="translate(200 235)">
        <g className="sg-merlion-breathe">
          {/* Bệ đỡ */}
          <ellipse cx="0" cy="88" rx="42" ry="5" fill="#5a6a7a" opacity="0.4" />

          {/* Thân sư tử */}
          <ellipse cx="0" cy="30" rx="38" ry="45" fill="url(#sg-merlion)" stroke="#5a6a7a" strokeWidth="1.2" />

          {/* Bờm sư tử — vòng cung quanh đầu */}
          <path
            d="M -32 -25
               Q -42 -10, -38 5
               Q -35 15, -28 20
               Q -20 25, 0 26
               Q 20 25, 28 20
               Q 35 15, 38 5
               Q 42 -10, 32 -25
               Q 20 -35, 0 -38
               Q -20 -35, -32 -25 Z"
            fill="url(#sg-merlion)"
            stroke="#5a6a7a"
            strokeWidth="1"
          />
          {/* Chi tiết bờm — các lọn sóng */}
          <path d="M -30 -15 Q -25 -8, -30 0" stroke="#a8b8c8" strokeWidth="0.6" fill="none" opacity="0.7" />
          <path d="M -22 -22 Q -18 -15, -22 -5" stroke="#a8b8c8" strokeWidth="0.6" fill="none" opacity="0.7" />
          <path d="M 30 -15 Q 25 -8, 30 0" stroke="#a8b8c8" strokeWidth="0.6" fill="none" opacity="0.7" />
          <path d="M 22 -22 Q 18 -15, 22 -5" stroke="#a8b8c8" strokeWidth="0.6" fill="none" opacity="0.7" />

          {/* Mặt sư tử */}
          <circle cx="0" cy="-8" r="20" fill="url(#sg-merlion)" stroke="#5a6a7a" strokeWidth="0.8" />
          {/* Mắt */}
          <ellipse cx="-7" cy="-12" rx="2" ry="2.5" fill="#1a1a1a" />
          <ellipse cx="7" cy="-12" rx="2" ry="2.5" fill="#1a1a1a" />
          <circle cx="-6.5" cy="-13" r="0.6" fill="#ffffff" />
          <circle cx="7.5" cy="-13" r="0.6" fill="#ffffff" />
          {/* Mũi */}
          <path d="M -3 -3 L 3 -3 L 0 0 Z" fill="#5a6a7a" />
          {/* Miệng */}
          <path d="M 0 0 Q -4 3, -6 1" stroke="#5a6a7a" strokeWidth="0.6" fill="none" />
          <path d="M 0 0 Q 4 3, 6 1" stroke="#5a6a7a" strokeWidth="0.6" fill="none" />

          {/* Vòi phun nước */}
          <g className="sg-water-spout">
            <path
              d="M 0 12 Q -5 25, 0 35"
              stroke="#5ab8e0"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M 0 12 Q 5 25, 2 38"
              stroke="#5ab8e0"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* Giọt nước */}
            <circle cx="-3" cy="42" r="1.5" fill="#5ab8e0" opacity="0.5" />
            <circle cx="2" cy="46" r="1" fill="#5ab8e0" opacity="0.4" />
          </g>

          {/* Vây cá */}
          <path d="M -30 45 Q -42 40, -46 30" stroke="#5a6a7a" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M -30 55 Q -46 52, -52 42" stroke="#5a6a7a" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M -28 65 Q -48 62, -54 54" stroke="#5a6a7a" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Đuôi cá lên trên */}
          <path d="M 32 55 Q 48 48, 55 35" stroke="#5a6a7a" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M 32 65 Q 52 60, 60 50" stroke="#5a6a7a" strokeWidth="1" fill="none" opacity="0.6" />
        </g>
      </g>

      {/* Sao lấp lánh */}
      <g className="sg-star-twinkle" transform="translate(75 90)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#ee2536"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
