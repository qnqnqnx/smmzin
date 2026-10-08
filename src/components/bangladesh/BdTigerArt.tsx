/**
 * Hổ Bengal — biểu tượng quốc gia Bangladesh.
 * Kèm hoa súng (শাপলা) — quốc hoa.
 * Màu xanh #006a4e + đỏ #f42a41 theo quốc kỳ.
 *
 * Animation áp dụng: đuôi vẫy nhẹ + hoa súng đung đưa.
 * Tách positioning (SVG attr) khỏi animation (CSS class).
 */
export function BdTigerArt({ size = 380 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tiger-body" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#f5b95c" />
          <stop offset="100%" stopColor="#d9903a" />
        </radialGradient>
        <radialGradient id="tiger-belly" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#fff5e0" />
          <stop offset="100%" stopColor="#f5deb3" />
        </radialGradient>
        <radialGradient id="tiger-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#006a4e" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#006a4e" stopOpacity="0" />
        </radialGradient>
        {/* Hoa súng — cánh hồng nhạt, nhuỵ vàng */}
        <radialGradient id="lily-petal" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fbd7e0" />
        </radialGradient>
        <radialGradient id="lily-center" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffd966" />
          <stop offset="100%" stopColor="#e8a93b" />
        </radialGradient>
      </defs>

      {/* Glow xanh lá nhẹ phía sau */}
      <circle cx="200" cy="200" r="180" fill="url(#tiger-glow)" />

      {/* ============ HOA SÚNG BÊN TRÁI ============ */}
      <g transform="translate(60 300)">
        <g className="bd-lily-sway" style={{ transformOrigin: "0 40px" }}>
          {/* Cuống hoa */}
          <path d="M 0 40 L 0 0" stroke="#3d7d4a" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Lá súng dưới */}
          <ellipse cx="0" cy="42" rx="30" ry="6" fill="#3d7d4a" opacity="0.5" />
          {/* Cánh hoa — 6 cánh */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-18"
              rx="6"
              ry="14"
              fill="url(#lily-petal)"
              stroke="#e8a7b8"
              strokeWidth="0.6"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          {/* Nhị hoa trung tâm */}
          <circle cx="0" cy="0" r="5" fill="url(#lily-center)" />
          <circle cx="-2" cy="-1" r="1" fill="#8a6820" />
          <circle cx="2" cy="-1" r="1" fill="#8a6820" />
          <circle cx="0" cy="2" r="1" fill="#8a6820" />
        </g>
      </g>

      {/* ============ HOA SÚNG BÊN PHẢI ============ */}
      <g transform="translate(340 310)">
        <g className="bd-lily-sway-rev" style={{ transformOrigin: "0 30px" }}>
          <path d="M 0 30 L 0 -5" stroke="#3d7d4a" strokeWidth="2" strokeLinecap="round" fill="none" />
          <ellipse cx="0" cy="32" rx="26" ry="5" fill="#3d7d4a" opacity="0.5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-16"
              rx="5"
              ry="12"
              fill="url(#lily-petal)"
              stroke="#e8a7b8"
              strokeWidth="0.6"
              transform={`rotate(${angle} 0 -5)`}
            />
          ))}
          <circle cx="0" cy="-5" r="4" fill="url(#lily-center)" />
        </g>
      </g>

      {/* ============ HỔ BENGAL ============ */}
      <g transform="translate(200 220)">
        {/* Bóng đổ */}
        <ellipse cx="0" cy="100" rx="90" ry="8" fill="#000" opacity="0.1" />

        {/* Đuôi — animate vẫy */}
        <g className="bd-tiger-tail">
          <path
            d="M -60 40 Q -110 30, -140 60 Q -155 80, -140 95"
            stroke="url(#tiger-body)"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          {/* Vằn trên đuôi */}
          <path d="M -80 42 L -80 52" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M -105 40 L -105 54" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M -128 50 L -128 65" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          {/* Chóp đuôi đen */}
          <ellipse cx="-137" cy="88" rx="10" ry="12" fill="#1a1a1a" transform="rotate(-30 -137 88)" />
        </g>

        {/* Thân */}
        <ellipse cx="0" cy="30" rx="72" ry="62" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />
        {/* Bụng trắng */}
        <ellipse cx="0" cy="50" rx="50" ry="38" fill="url(#tiger-belly)" />

        {/* Chân trước phải */}
        <ellipse cx="48" cy="82" rx="18" ry="24" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />
        {/* Chân trước trái */}
        <ellipse cx="20" cy="85" rx="16" ry="22" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />
        {/* Chân sau phải */}
        <ellipse cx="-45" cy="82" rx="18" ry="22" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />

        {/* Vằn trên thân */}
        <path d="M 30 -8 Q 32 5, 28 18" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M 45 5 Q 47 18, 42 30" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M -20 -10 Q -22 3, -18 16" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M -40 -5 Q -42 8, -38 20" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />

        {/* Đầu */}
        <circle cx="0" cy="-42" r="58" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />

        {/* Tai — tròn, có lông trắng bên trong */}
        <circle cx="-42" cy="-82" r="20" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />
        <circle cx="-42" cy="-82" r="10" fill="#ffd9a8" />
        <circle cx="42" cy="-82" r="20" fill="url(#tiger-body)" stroke="#a06a1f" strokeWidth="1.5" />
        <circle cx="42" cy="-82" r="10" fill="#ffd9a8" />

        {/* Vằn trên trán — hình chữ M cách điệu */}
        <path d="M -30 -68 Q -22 -58, -16 -64" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M 30 -68 Q 22 -58, 16 -64" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M -10 -78 L -8 -66" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 10 -78 L 8 -66" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* Mắt */}
        <ellipse cx="-20" cy="-46" rx="11" ry="9" fill="#ffffff" />
        <ellipse cx="20" cy="-46" rx="11" ry="9" fill="#ffffff" />
        <ellipse cx="-20" cy="-46" rx="5" ry="7" fill="#f4a72c" />
        <ellipse cx="20" cy="-46" rx="5" ry="7" fill="#f4a72c" />
        <ellipse cx="-20" cy="-46" rx="2" ry="5" fill="#1a1a1a" />
        <ellipse cx="20" cy="-46" rx="2" ry="5" fill="#1a1a1a" />
        {/* Chấm sáng mắt */}
        <circle cx="-22" cy="-49" r="1.5" fill="#ffffff" />
        <circle cx="18" cy="-49" r="1.5" fill="#ffffff" />

        {/* Mũi — hình tam giác */}
        <path d="M -8 -22 L 8 -22 L 0 -14 Z" fill="#ff9b9b" />

        {/* Miệng */}
        <path d="M 0 -14 L 0 -8" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 0 -8 Q -8 -2, -14 -6" stroke="#1a1a1a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 0 -8 Q 8 -2, 14 -6" stroke="#1a1a1a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* Ria mép */}
        <path d="M -12 -18 L -32 -22" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M -12 -14 L -32 -12" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M 12 -18 L 32 -22" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M 12 -14 L 32 -12" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}
