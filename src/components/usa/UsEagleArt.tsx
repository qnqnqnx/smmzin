/**
 * Bald Eagle (đại bàng đầu trắng) — quốc điểu Mỹ.
 * Kèm vài ngôi sao 5 cánh + vòng nguyệt quế.
 * Màu: trắng + vàng (mỏ) + nâu (lông) + đỏ/xanh dương (cờ).
 *
 * Animation: cánh đập nhẹ + sao lấp lánh.
 */
export function UsEagleArt({ size = 380 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="eagle-head" cx="0.4" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </radialGradient>
        <radialGradient id="eagle-body" cx="0.5" cy="0.4" r="0.65">
          <stop offset="0%" stopColor="#5a3a1f" />
          <stop offset="100%" stopColor="#3d2616" />
        </radialGradient>
        <linearGradient id="eagle-beak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd34a" />
          <stop offset="100%" stopColor="#e8a517" />
        </linearGradient>
        <radialGradient id="eagle-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3c3b6e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3c3b6e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow xanh navy phía sau */}
      <circle cx="200" cy="200" r="180" fill="url(#eagle-glow)" />

      {/* ============ NGÔI SAO LẤP LÁNH ============ */}
      {/* Sao lớn — góc trên trái */}
      <g className="us-star-twinkle" transform="translate(60 90)" style={{ transformOrigin: "0 0" }}>
        <polygon
          points="0,-12 3,-4 12,-4 5,2 7,11 0,6 -7,11 -5,2 -12,-4 -3,-4"
          fill="#b22234"
          opacity="0.55"
        />
      </g>

      {/* Sao lớn — góc dưới phải */}
      <g className="us-star-twinkle-2" transform="translate(340 310)" style={{ transformOrigin: "0 0" }}>
        <polygon
          points="0,-12 3,-4 12,-4 5,2 7,11 0,6 -7,11 -5,2 -12,-4 -3,-4"
          fill="#b22234"
          opacity="0.55"
        />
      </g>

      {/* Sao nhỏ — góc trên phải */}
      <g className="us-star-twinkle" transform="translate(340 80)" style={{ transformOrigin: "0 0" }}>
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#3c3b6e"
          opacity="0.5"
        />
      </g>

      {/* Sao nhỏ — góc dưới trái */}
      <g className="us-star-twinkle-2" transform="translate(60 310)" style={{ transformOrigin: "0 0" }}>
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#3c3b6e"
          opacity="0.5"
        />
      </g>

      {/* ============ ĐẠI BÀNG ============ */}
      <g transform="translate(200 210)">
        {/* Cánh trái — animate vỗ */}
        <g className="us-eagle-wing-l" style={{ transformOrigin: "20px 20px" }}>
          <path
            d="M -20 20
               Q -70 -10, -110 30
               Q -130 60, -100 90
               Q -80 110, -50 95
               Q -30 80, -20 60
               Z"
            fill="url(#eagle-body)"
            stroke="#1a0f08"
            strokeWidth="1.5"
          />
          {/* Lông cánh */}
          <path d="M -50 40 Q -70 45, -85 60" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M -55 60 Q -75 65, -90 80" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M -40 80 Q -60 82, -75 90" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          {/* Chóp trắng trên cánh */}
          <path d="M -100 40 Q -105 45, -100 55" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M -95 60 Q -100 65, -95 75" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>

        {/* Cánh phải — animate vỗ */}
        <g className="us-eagle-wing-r" style={{ transformOrigin: "-20px 20px" }}>
          <path
            d="M 20 20
               Q 70 -10, 110 30
               Q 130 60, 100 90
               Q 80 110, 50 95
               Q 30 80, 20 60
               Z"
            fill="url(#eagle-body)"
            stroke="#1a0f08"
            strokeWidth="1.5"
          />
          <path d="M 50 40 Q 70 45, 85 60" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 55 60 Q 75 65, 90 80" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 40 80 Q 60 82, 75 90" stroke="#1a0f08" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 100 40 Q 105 45, 100 55" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M 95 60 Q 100 65, 95 75" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>

        {/* Thân — nâu */}
        <ellipse cx="0" cy="40" rx="42" ry="62" fill="url(#eagle-body)" stroke="#1a0f08" strokeWidth="1.5" />

        {/* Lông ngực — lớp trắng */}
        <path
          d="M -20 50 Q 0 60, 20 50 L 15 90 Q 0 95, -15 90 Z"
          fill="#f5f5f5"
          opacity="0.85"
        />

        {/* Chân — vàng, móng vuốt */}
        <g>
          {/* Chân trái */}
          <path d="M -18 95 L -18 115" stroke="#e8a517" strokeWidth="4" strokeLinecap="round" />
          <path d="M -18 115 L -28 122" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
          <path d="M -18 115 L -18 124" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
          <path d="M -18 115 L -10 122" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
          {/* Chân phải */}
          <path d="M 18 95 L 18 115" stroke="#e8a517" strokeWidth="4" strokeLinecap="round" />
          <path d="M 18 115 L 8 122" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
          <path d="M 18 115 L 18 124" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
          <path d="M 18 115 L 26 122" stroke="#e8a517" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Đầu — trắng */}
        <circle cx="0" cy="-42" r="42" fill="url(#eagle-head)" stroke="#1a0f08" strokeWidth="1.5" />

        {/* Lông đầu xù nhẹ */}
        <path d="M -25 -70 Q -20 -78, -14 -72" stroke="#d9d9d9" strokeWidth="1.5" fill="none" />
        <path d="M 25 -70 Q 20 -78, 14 -72" stroke="#d9d9d9" strokeWidth="1.5" fill="none" />

        {/* Mắt — sắc bén */}
        <circle cx="-14" cy="-48" r="5" fill="#ffffff" />
        <circle cx="14" cy="-48" r="5" fill="#ffffff" />
        <circle cx="-13" cy="-48" r="3.5" fill="#1a0f08" />
        <circle cx="15" cy="-48" r="3.5" fill="#1a0f08" />
        <circle cx="-14" cy="-50" r="1.2" fill="#ffffff" />
        <circle cx="14" cy="-50" r="1.2" fill="#ffffff" />

        {/* Lông mày — dữ tợn */}
        <path d="M -22 -56 L -6 -54" stroke="#1a0f08" strokeWidth="2" strokeLinecap="round" />
        <path d="M 22 -56 L 6 -54" stroke="#1a0f08" strokeWidth="2" strokeLinecap="round" />

        {/* Mỏ — vàng, có móc */}
        <path
          d="M 0 -32
             Q 8 -30, 12 -20
             Q 14 -12, 8 -8
             Q 4 -6, 0 -8
             Q -4 -6, -8 -8
             Q -14 -12, -12 -20
             Q -8 -30, 0 -32 Z"
          fill="url(#eagle-beak)"
          stroke="#a06a0d"
          strokeWidth="1.2"
        />
        {/* Đường mỏ */}
        <path d="M 0 -32 L 0 -10" stroke="#a06a0d" strokeWidth="0.8" opacity="0.6" />
      </g>
    </svg>
  );
}
