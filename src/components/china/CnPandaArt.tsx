/**
 * Gấu trúc đang gặm trúc.
 *
 * Cấu trúc:
 *   - Trúc 2 bên nền: lay động nhẹ
 *   - Gấu trúc: đầu gật gật như đang gặm + tay cầm cành trúc gần miệng
 *   - Tách 2 thẻ <g> cho positioning và animation
 */
export function CnPandaArt({ size = 380 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="panda-face" cx="0.4" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </radialGradient>
        <radialGradient id="panda-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#de2910" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#de2910" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow đỏ nhẹ phía sau */}
      <circle cx="200" cy="200" r="180" fill="url(#panda-glow)" />

      {/* ============ TRÚC BÊN TRÁI (nền) ============ */}
      <g transform="translate(48 340)">
        <g className="cn-bamboo-sway" style={{ transformOrigin: "0 0" }}>
          <path d="M 0 0 L 0 -250" stroke="#6b9b5c" strokeWidth="3" strokeLinecap="round" />
          <path d="M -8 -190 L 8 -190" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M -8 -140 L 8 -140" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M -8 -90 L 8 -90" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M 0 -200 Q -18 -210, -28 -202 Q -16 -195, 0 -200 Z" fill="#7fb069" />
          <path d="M 0 -150 Q -18 -160, -30 -150 Q -16 -143, 0 -150 Z" fill="#7fb069" />
          <path d="M 0 -100 Q -16 -108, -28 -100 Q -14 -93, 0 -100 Z" fill="#7fb069" />
        </g>
      </g>

      {/* ============ TRÚC BÊN PHẢI (nền) ============ */}
      <g transform="translate(352 340)">
        <g className="cn-bamboo-sway-rev" style={{ transformOrigin: "0 0" }}>
          <path d="M 0 0 L 0 -230" stroke="#6b9b5c" strokeWidth="3" strokeLinecap="round" />
          <path d="M -8 -170 L 8 -170" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M -8 -120 L 8 -120" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M -8 -70 L 8 -70" stroke="#6b9b5c" strokeWidth="2" strokeLinecap="round" />
          <path d="M 0 -180 Q 18 -190, 30 -182 Q 18 -175, 0 -180 Z" fill="#7fb069" />
          <path d="M 0 -130 Q 18 -140, 32 -130 Q 18 -123, 0 -130 Z" fill="#7fb069" />
          <path d="M 0 -80 Q 18 -88, 30 -80 Q 16 -73, 0 -80 Z" fill="#7fb069" />
        </g>
      </g>

      {/* ============ GẤU TRÚC ============ */}
      <g transform="translate(200 220)">
        <g className="cn-panda-munch">
          {/* Bóng đổ */}
          <ellipse cx="0" cy="88" rx="80" ry="8" fill="#000" opacity="0.08" />

          {/* Thân */}
          <ellipse cx="0" cy="42" rx="62" ry="60" fill="url(#panda-face)" stroke="#1a1a1a" strokeWidth="1.5" />

          {/* Chân */}
          <ellipse cx="-32" cy="92" rx="24" ry="16" fill="#1a1a1a" />
          <ellipse cx="32" cy="92" rx="24" ry="16" fill="#1a1a1a" />

          {/* Tay trái — đặt trên bụng */}
          <ellipse cx="-48" cy="34" rx="20" ry="26" fill="#1a1a1a" transform="rotate(-30 -48 34)" />

          {/* Tay phải — cầm trúc, giơ lên gần miệng */}
          <ellipse cx="42" cy="8" rx="18" ry="24" fill="#1a1a1a" transform="rotate(35 42 8)" />

          {/* ============ ĐẦU (animate gật) ============ */}
          <g className="cn-panda-head">
            {/* Đầu */}
            <circle cx="0" cy="-32" r="62" fill="url(#panda-face)" stroke="#1a1a1a" strokeWidth="1.5" />

            {/* Tai */}
            <circle cx="-50" cy="-72" r="20" fill="#1a1a1a" />
            <circle cx="50" cy="-72" r="20" fill="#1a1a1a" />

            {/* Vùng mắt */}
            <ellipse cx="-24" cy="-38" rx="16" ry="18" fill="#1a1a1a" transform="rotate(-15 -24 -38)" />
            <ellipse cx="24" cy="-38" rx="16" ry="18" fill="#1a1a1a" transform="rotate(15 24 -38)" />

            {/* Mắt — nhìn xuống cành trúc */}
            <circle cx="-23" cy="-35" r="6" fill="#ffffff" />
            <circle cx="-22" cy="-34" r="3" fill="#000" />
            <circle cx="21" cy="-35" r="6" fill="#ffffff" />
            <circle cx="22" cy="-34" r="3" fill="#000" />

            {/* Mũi */}
            <ellipse cx="0" cy="-12" rx="7" ry="5" fill="#1a1a1a" />

            {/* Miệng — đang gặm (hé mở) */}
            <ellipse cx="0" cy="-2" rx="8" ry="5" fill="#1a1a1a" opacity="0.9" />

            {/* Má hồng */}
            <circle cx="-32" cy="-14" r="6" fill="#ffb3b3" opacity="0.55" />
            <circle cx="32" cy="-14" r="6" fill="#ffb3b3" opacity="0.55" />
          </g>

          {/* ============ CÀNH TRÚC ĐANG GẶM (animate theo đầu) ============ */}
          <g className="cn-panda-bamboo">
            {/* Thân trúc chéo từ tay phải lên miệng */}
            <path
              d="M 40 20 Q 20 -5, 5 -20"
              stroke="#6b9b5c"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Đốt trúc */}
            <path d="M 33 8 L 40 12" stroke="#6b9b5c" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 22 -5 L 29 -1" stroke="#6b9b5c" strokeWidth="1.5" strokeLinecap="round" />

            {/* Lá trúc — 2 lá trên cành */}
            <path d="M 15 -12 Q 5 -22, -8 -18 Q 2 -10, 15 -12 Z" fill="#7fb069" />
            <path d="M 25 -8 Q 20 -22, 28 -30 Q 34 -18, 25 -8 Z" fill="#7fb069" opacity="0.9" />
            <path d="M 5 -20 Q -8 -28, -18 -24 Q -6 -16, 5 -20 Z" fill="#7fb069" opacity="0.85" />

            {/* Chồi trúc non */}
            <path d="M -8 -20 Q -14 -28, -12 -36" stroke="#8fc77a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
}
