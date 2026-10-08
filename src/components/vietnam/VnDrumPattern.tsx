/**
 * Trống đồng Đông Sơn cách điệu.
 * Màu đỏ-vàng đậm để nổi bật trên cả nền tối và sáng.
 */
export function VnDrumPattern({ size = 500 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="drum-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#da251d" />
          <stop offset="100%" stopColor="#ffcd00" />
        </linearGradient>
        <linearGradient id="drum-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffcd00" />
          <stop offset="100%" stopColor="#da251d" />
        </linearGradient>
      </defs>

      {/* Vòng ngoài cùng — viền chính */}
      <circle cx="250" cy="250" r="235" stroke="url(#drum-a)" strokeWidth="1.2" opacity="0.85" />
      <circle cx="250" cy="250" r="228" stroke="url(#drum-b)" strokeWidth="0.4" opacity="0.5" />

      {/* Vòng răng cưa — 60 tia nhỏ */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i * 360) / 60;
        const rad = (angle * Math.PI) / 180;
        const x1 = 250 + Math.cos(rad) * 218;
        const y1 = 250 + Math.sin(rad) * 218;
        const x2 = 250 + Math.cos(rad) * 225;
        const y2 = 250 + Math.sin(rad) * 225;
        return (
          <line
            key={`tooth-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#drum-a)"
            strokeWidth="0.9"
            opacity="0.75"
          />
        );
      })}

      {/* Vòng tròn đồng tâm — vòng lớn, đậm */}
      {[205, 188, 170, 152].map((r, i) => (
        <circle
          key={`ring-a-${r}`}
          cx="250"
          cy="250"
          r={r}
          stroke="url(#drum-a)"
          strokeWidth={i === 0 ? "1" : "0.6"}
          opacity={0.7 - i * 0.08}
        />
      ))}

      {/* Vòng có chấm nhỏ */}
      <circle
        cx="250"
        cy="250"
        r="132"
        stroke="url(#drum-b)"
        strokeWidth="0.8"
        strokeDasharray="2 6"
        opacity="0.7"
      />

      {/* Chim Lạc cách điệu — 6 con quanh vành */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={`bird-${angle}`} transform={`rotate(${angle} 250 250)`}>
          <path
            d="M 250 108 Q 258 100 264 106 Q 270 112 264 118 Q 258 124 250 120 Q 242 124 236 118 Q 230 112 236 106 Q 242 100 250 108 Z"
            stroke="url(#drum-a)"
            strokeWidth="1.1"
            fill="none"
            opacity="0.85"
          />
          {/* Đuôi chim */}
          <path
            d="M 250 120 Q 248 128 250 134 Q 252 128 250 120"
            stroke="url(#drum-a)"
            strokeWidth="0.7"
            fill="none"
            opacity="0.6"
          />
        </g>
      ))}

      {/* Vòng trung gian */}
      {[110, 92, 74].map((r, i) => (
        <circle
          key={`ring-b-${r}`}
          cx="250"
          cy="250"
          r={r}
          stroke="url(#drum-a)"
          strokeWidth="0.6"
          opacity={0.65 - i * 0.1}
        />
      ))}

      {/* Vòng tia sáng mặt trời — 16 tia */}
      <circle cx="250" cy="250" r="56" stroke="url(#drum-b)" strokeWidth="0.9" opacity="0.75" />

      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x1 = 250 + Math.cos(rad) * 32;
        const y1 = 250 + Math.sin(rad) * 32;
        const x2 = 250 + Math.cos(rad) * 52;
        const y2 = 250 + Math.sin(rad) * 52;
        return (
          <line
            key={`ray-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#drum-a)"
            strokeWidth="1.1"
            opacity="0.9"
          />
        );
      })}

      {/* Ngôi sao vàng trung tâm — 5 cánh */}
      <polygon
        points="250,232 254,244 268,245 258,254 261,268 250,261 239,268 242,254 232,245 246,244"
        fill="url(#drum-b)"
        opacity="0.95"
      />
      <circle cx="250" cy="250" r="34" stroke="url(#drum-a)" strokeWidth="0.8" opacity="0.8" />
    </svg>
  );
}
