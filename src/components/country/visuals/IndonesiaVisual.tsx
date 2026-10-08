"use client";

/**
 * Wayang Kulit (rối bóng Java) + Borobudur silhouette + hoa nhài Melati.
 * Màu: đỏ + trắng theo quốc kỳ Indonesia + vàng gold (wayang).
 */
export function IndonesiaVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="id-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ce1126" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ce1126" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="id-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd966" />
          <stop offset="55%" stopColor="#d4a017" />
          <stop offset="100%" stopColor="#8a6416" />
        </linearGradient>
        <radialGradient id="id-melati" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff5e0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#id-glow)" />

      {/* ============ HOA NHÀI MELATI BÊN TRÁI ============ */}
      <g transform="translate(50 320)">
        <g className="id-melati-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -8" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-14"
              rx="6"
              ry="12"
              fill="url(#id-melati)"
              stroke="#e8d8a8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA NHÀI MELATI BÊN PHẢI ============ */}
      <g transform="translate(350 320)">
        <g className="id-melati-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -8" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="5"
              ry="11"
              fill="url(#id-melati)"
              stroke="#e8d8a8"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill="#ffd966" />
        </g>
      </g>

      {/* ============ WAYANG KULIT (rối bóng Java) ============ */}
      <g transform="translate(200 210)">
        {/* Bóng mờ phía sau */}
        <g opacity="0.35">
          <path
            d="M -10 -100 L 10 -100 L 15 -90 L 8 -85 L 12 -70 L 5 -60 L 8 -40 L 15 -30 L 10 -15 L 12 5 L 8 30 L 10 55 L 5 75 L -5 75 L -10 55 L -8 30 L -12 5 L -10 -15 L -15 -30 L -8 -40 L -5 -60 L -12 -70 L -8 -85 L -15 -90 Z"
            fill="#1a1a1a"
            transform="translate(4 6)"
          />
        </g>

        {/* Thân chính wayang */}
        <g className="id-wayang-sway" style={{ transformOrigin: "0 80px" }}>
          {/* Mũ miện chóp nhọn */}
          <path d="M -22 -100 L 0 -140 L 22 -100 Z" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />
          <path d="M -18 -100 L 0 -132 L 18 -100" stroke="#ffd966" strokeWidth="1" fill="none" />
          {/* Trang trí đỉnh */}
          <circle cx="0" cy="-146" r="3" fill="#ffd966" stroke="#5c1818" strokeWidth="0.6" />
          <path d="M -3 -146 L 0 -155 L 3 -146 Z" fill="#ce1126" />

          {/* Đầu + mặt nghiêng */}
          <ellipse cx="0" cy="-78" rx="20" ry="24" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />
          {/* Mắt */}
          <ellipse cx="-6" cy="-84" rx="3.5" ry="2" fill="#1a1a1a" />
          <ellipse cx="7" cy="-84" rx="3.5" ry="2" fill="#1a1a1a" />
          {/* Chân mày cong */}
          <path d="M -12 -90 Q -6 -93, -1 -90" stroke="#5c1818" strokeWidth="1" fill="none" />
          <path d="M 2 -90 Q 7 -93, 13 -90" stroke="#5c1818" strokeWidth="1" fill="none" />
          {/* Miệng */}
          <path d="M -6 -70 Q 0 -66, 6 -70" stroke="#5c1818" strokeWidth="1" fill="none" />
          {/* Trang trí trán */}
          <circle cx="0" cy="-95" r="2.5" fill="#ce1126" />

          {/* Cổ + thân */}
          <path d="M -14 -56 L -18 20 L 18 20 L 14 -56 Z" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />

          {/* Tay trái giơ lên */}
          <g>
            <path d="M -18 -30 L -55 -20 L -70 -45 L -60 -55" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" strokeLinejoin="round" />
            {/* Bàn tay với ngón chỉ */}
            <path d="M -70 -45 L -82 -58 L -78 -62 L -68 -50 Z" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1" />
            <path d="M -60 -55 L -72 -66 L -68 -70 L -58 -60 Z" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1" />
          </g>

          {/* Tay phải chống hông */}
          <g>
            <path d="M 18 -30 L 45 -10 L 55 15" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" strokeLinejoin="round" />
          </g>

          {/* Sarong (váy) với hoạ tiết */}
          <path d="M -20 20 L -24 70 L 24 70 L 20 20 Z" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />
          {/* Hoạ tiết batik trên sarong */}
          <path d="M -12 35 Q 0 30, 12 35" stroke="#ce1126" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M -14 50 Q 0 45, 14 50" stroke="#ce1126" strokeWidth="1" fill="none" opacity="0.7" />
          <circle cx="0" cy="42" r="2" fill="#ce1126" opacity="0.7" />

          {/* Chân */}
          <path d="M -16 70 L -18 100 L -8 100 L -6 70" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />
          <path d="M 6 70 L 8 100 L 18 100 L 16 70" fill="url(#id-gold)" stroke="#5c1818" strokeWidth="1.2" />

          {/* Dây điều khiển rối */}
          <path d="M -70 -45 L -95 -110" stroke="#8a6416" strokeWidth="0.6" fill="none" opacity="0.6" />
          <path d="M 45 -10 L 95 -90" stroke="#8a6416" strokeWidth="0.6" fill="none" opacity="0.6" />
        </g>
      </g>

      {/* ============ BOROBUDUR SILHOUETTE (dưới cùng) ============ */}
      <g opacity="0.28">
        {/* Chân đế */}
        <path d="M 55 355 L 55 340 L 345 340 L 345 355 Z" fill="#1a1a1a" />
        {/* Tầng 2 */}
        <path d="M 75 340 L 75 325 L 325 325 L 325 340 Z" fill="#1a1a1a" />
        {/* Tầng 3 */}
        <path d="M 95 325 L 95 312 L 305 312 L 305 325 Z" fill="#1a1a1a" />
        {/* Tầng 4 */}
        <path d="M 115 312 L 115 300 L 285 300 L 285 312 Z" fill="#1a1a1a" />
        {/* Tầng 5 */}
        <path d="M 135 300 L 135 290 L 265 290 L 265 300 Z" fill="#1a1a1a" />
        {/* Stupa trung tâm */}
        <path d="M 175 290 L 175 275 Q 200 250, 225 275 L 225 290 Z" fill="#1a1a1a" />
        <path d="M 195 275 L 200 258 L 205 275 Z" fill="#1a1a1a" />
        {/* Stupa nhỏ 2 bên */}
        <circle cx="145" cy="280" r="6" fill="#1a1a1a" />
        <circle cx="255" cy="280" r="6" fill="#1a1a1a" />
      </g>

      {/* Sao lấp lánh */}
      <g className="id-star-twinkle" transform="translate(75 90)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#ce1126"
          opacity="0.5"
        />
      </g>
      <g className="id-star-twinkle-rev" transform="translate(325 85)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#d4a017"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
