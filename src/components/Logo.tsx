export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="smmzin-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2f24" />
          <stop offset="100%" stopColor="#0a1410" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9.5" fill="url(#smmzin-mark)" />
      <rect x="1" y="1" width="30" height="30" rx="9.5" stroke="rgba(233,241,236,0.14)" />
      <path d="M9 20.5 16 13l7 7.5" stroke="#cdf0dd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 25 16 17.5 23 25" stroke="#6fa585" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
    </svg>
  );
}
