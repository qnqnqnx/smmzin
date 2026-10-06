export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="smmzin-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2f24" />
          <stop offset="100%" stopColor="#0a1410" />
        </linearGradient>
        <linearGradient id="smmzin-mark-z" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eaf9f0" />
          <stop offset="55%" stopColor="#a7e2c1" />
          <stop offset="100%" stopColor="#6fa585" />
        </linearGradient>
      </defs>

      {/* Khung nền bo tròn */}
      <rect x="1" y="1" width="30" height="30" rx="9.5" fill="url(#smmzin-mark-bg)" />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9.5"
        fill="none"
        stroke="rgba(233,241,236,0.14)"
      />

      {/* Chữ Z — một nét liền: ngang trên → chéo → ngang dưới */}
      <path
        d="M10 10.5 H22 L10 21.5 H22"
        stroke="url(#smmzin-mark-z)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
