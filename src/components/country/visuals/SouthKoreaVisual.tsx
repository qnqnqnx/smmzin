"use client";

/**
 * Cung điện Gyeongbokgung + hoa Mugunghwa + Taeguk symbol.
 * Màu: đỏ + xanh dương theo quốc kỳ Taegukgi + vàng gold cho mái.
 */
export function SouthKoreaVisual({ size = 440 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="kr-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#cd2e3a" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#cd2e3a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kr-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4a6b" />
          <stop offset="100%" stopColor="#0d2a3f" />
        </linearGradient>
        <linearGradient id="kr-column" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a52a2a" />
          <stop offset="100%" stopColor="#7a1a1a" />
        </linearGradient>
        <radialGradient id="kr-mugunghwa" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffb3d1" />
          <stop offset="100%" stopColor="#e85c8f" />
        </radialGradient>
        <radialGradient id="kr-taeguk-red" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff4757" />
          <stop offset="100%" stopColor="#cd2e3a" />
        </radialGradient>
        <radialGradient id="kr-taeguk-blue" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3d6ec9" />
          <stop offset="100%" stopColor="#0047a0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#kr-glow)" />

      {/* ============ HOA MUGUNGHWA BÊN TRÁI ============ */}
      <g transform="translate(55 320)">
        <g className="kr-flower-sway" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-12"
              rx="7"
              ry="12"
              fill="url(#kr-mugunghwa)"
              stroke="#c9427a"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          {/* Nhị đỏ trung tâm đặc trưng Mugunghwa */}
          <circle cx="0" cy="0" r="4" fill="#8b1a3a" />
          <circle cx="-1" cy="-2" r="1" fill="#ffd966" />
          <circle cx="2" cy="-1" r="1" fill="#ffd966" />
        </g>
      </g>

      {/* ============ HOA MUGUNGHWA BÊN PHẢI ============ */}
      <g transform="translate(345 320)">
        <g className="kr-flower-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="32" rx="16" ry="3.5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-10"
              rx="6"
              ry="10"
              fill="url(#kr-mugunghwa)"
              stroke="#c9427a"
              strokeWidth="0.5"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill="#8b1a3a" />
        </g>
      </g>

      {/* ============ CUNG GYEONGBOKGUNG ============ */}
      <g transform="translate(200 235)">
        {/* Nền đá */}
        <rect x="-85" y="35" width="170" height="15" fill="#8a8a8a" stroke="#5a5a5a" strokeWidth="1" />
        <rect x="-75" y="45" width="150" height="10" fill="#a8a8a8" stroke="#7a7a7a" strokeWidth="0.8" />

        {/* Bậc thang dẫn vào */}
        <path d="M -30 55 L -25 45 L 25 45 L 30 55 Z" fill="#c0c0c0" stroke="#7a7a7a" strokeWidth="0.8" />

        {/* 6 cột đỏ */}
        {[-60, -36, -12, 12, 36, 60].map((x) => (
          <rect
            key={x}
            x={x - 5}
            y="-20"
            width="10"
            height="55"
            fill="url(#kr-column)"
            stroke="#5c1818"
            strokeWidth="0.8"
          />
        ))}

        {/* Tường chính giữa */}
        <rect x="-70" y="-15" width="140" height="40" fill="#c9a86a" stroke="#8a6416" strokeWidth="1" />

        {/* Cửa vào trung tâm */}
        <path d="M -14 25 L -14 -5 Q 0 -12, 14 -5 L 14 25 Z" fill="#5c1818" stroke="#8a6416" strokeWidth="0.8" />
        <circle cx="0" cy="5" r="2" fill="#ffd966" />

        {/* Cửa sổ 2 bên */}
        <rect x="-52" y="-5" width="14" height="18" rx="2" fill="#5c1818" opacity="0.7" />
        <rect x="38" y="-5" width="14" height="18" rx="2" fill="#5c1818" opacity="0.7" />

        {/* ============ MÁI CONG TẦNG 1 ============ */}
        <path
          d="M -90 -20
             Q -85 -30, -75 -30
             L -58 -30
             Q 0 -50, 58 -30
             L 75 -30
             Q 85 -30, 90 -20
             L 90 -18
             Q 75 -14, 60 -22
             L -60 -22
             Q -75 -14, -90 -18 Z"
          fill="url(#kr-roof)"
          stroke="#0d2a3f"
          strokeWidth="1.2"
        />
        {/* Viền vàng dưới mái */}
        <path d="M -85 -18 Q 0 -26, 85 -18" stroke="#ffd966" strokeWidth="1.2" fill="none" opacity="0.8" />

        {/* ============ MÁI CONG TẦNG 2 (đỉnh) ============ */}
        <path
          d="M -65 -48
             Q -60 -58, -50 -58
             L -35 -58
             Q 0 -72, 35 -58
             L 50 -58
             Q 60 -58, 65 -48
             L 65 -46
             Q 50 -42, 35 -50
             L -35 -50
             Q -50 -42, -65 -46 Z"
          fill="url(#kr-roof)"
          stroke="#0d2a3f"
          strokeWidth="1.2"
        />
        <path d="M -60 -46 Q 0 -54, 60 -46" stroke="#ffd966" strokeWidth="1.2" fill="none" opacity="0.8" />

        {/* Chóp nóc */}
        <circle cx="0" cy="-72" r="3" fill="#ffd966" stroke="#8a6416" strokeWidth="0.6" />
        <path d="M -3 -72 L 0 -80 L 3 -72 Z" fill="#ffd966" />

        {/* Trang trí cột 2 bên */}
        <circle cx="-70" cy="-15" r="2.5" fill="#ffd966" />
        <circle cx="70" cy="-15" r="2.5" fill="#ffd966" />
      </g>

      {/* ============ TAEGUK SYMBOL (góc trên phải) ============ */}
      <g className="kr-taeguk-rotate" transform="translate(325 90)">
        {/* Vòng tròn trắng nền */}
        <circle cx="0" cy="0" r="18" fill="#ffffff" opacity="0.15" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />
        {/* Nửa đỏ trên */}
        <path d="M -16 0 A 16 16 0 0 1 16 0 A 8 8 0 0 1 0 0 A 8 8 0 0 0 -16 0 Z" fill="url(#kr-taeguk-red)" />
        {/* Nửa xanh dưới */}
        <path d="M -16 0 A 16 16 0 0 0 16 0 A 8 8 0 0 1 0 0 A 8 8 0 0 0 -16 0 Z" fill="url(#kr-taeguk-blue)" />
      </g>

      {/* Sao lấp lánh */}
      <g className="kr-star-twinkle" transform="translate(75 90)">
        <polygon
          points="0,-8 2,-3 8,-3 3,1 5,7 0,4 -5,7 -3,1 -8,-3 -2,-3"
          fill="#cd2e3a"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
