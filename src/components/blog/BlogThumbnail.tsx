/**
 * SVG thumbnail cho mỗi bài blog.
 * Thiết kế riêng mỗi bài — có vignette, noise, accent, depth.
 * Không dùng stock ảnh — self-contained, nhẹ, scalable.
 */

type ThumbnailProps = { slug: string };

// Shared wrapper với vignette + noise
function Wrap({
  children,
  bgFrom = "#0a1d16",
  bgTo = "#05090a",
}: {
  children: React.ReactNode;
  bgFrom?: string;
  bgTo?: string;
}) {
  const id = Math.random().toString(36).slice(2, 8);
  return (
    <svg viewBox="0 0 400 250" className="blog-thumb-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
        <radialGradient id={`vig-${id}`} cx="0.5" cy="0.5" r="0.75">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>
        <filter id={`noise-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.04 0" />
        </filter>
      </defs>
      <rect width="400" height="250" fill={`url(#bg-${id})`} />
      {children}
      <rect width="400" height="250" fill={`url(#vig-${id})`} />
      <rect width="400" height="250" filter={`url(#noise-${id})`} opacity="0.6" />
    </svg>
  );
}

// ---- 1. What is an SMM Panel ----------------------------------------
function ThumbWhatIsSMM() {
  return (
    <Wrap bgFrom="#0a1d16" bgTo="#05090a">
      <defs>
        <linearGradient id="acc1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cdf0dd" />
          <stop offset="100%" stopColor="#4f7d5e" />
        </linearGradient>
        <radialGradient id="glow1" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={250} stroke="white" strokeOpacity="0.035" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 40} x2={400} y2={i * 40} stroke="white" strokeOpacity="0.035" />
      ))}
      <circle cx="200" cy="125" r="100" fill="url(#glow1)" />
      <circle cx="200" cy="125" r="60" fill="none" stroke="url(#acc1)" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="200" cy="125" r="48" fill="none" stroke="url(#acc1)" strokeOpacity="0.25" strokeWidth="1" />
      <text
        x="200"
        y="155"
        textAnchor="middle"
        fontSize="72"
        fontWeight="700"
        fill="url(#acc1)"
        fontFamily="system-ui, sans-serif"
      >
        ?
      </text>
      <circle cx="90" cy="60" r="3" fill="#8ed6ad" opacity="0.6" />
      <circle cx="320" cy="200" r="4" fill="#4f7d5e" opacity="0.7" />
      <circle cx="330" cy="70" r="2" fill="#cdf0dd" opacity="0.4" />
    </Wrap>
  );
}

// ---- 2. How to Start an SMM Panel Business --------------------------
function ThumbStartBusiness() {
  return (
    <Wrap bgFrom="#0c1a2a" bgTo="#05090a">
      <defs>
        <linearGradient id="bar2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4f7d5e" />
          <stop offset="100%" stopColor="#8ed6ad" />
        </linearGradient>
        <radialGradient id="glow2" cx="0.8" cy="0.2" r="0.5">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="320" cy="50" r="100" fill="url(#glow2)" />
      {[40, 70, 55, 95, 130, 160].map((h, i) => (
        <rect
          key={i}
          x={55 + i * 48}
          y={205 - h}
          width="30"
          height={h}
          rx="5"
          fill="url(#bar2)"
          opacity={0.5 + i * 0.08}
        />
      ))}
      <path d="M 70 165 L 118 132 L 166 148 L 214 105 L 262 68 L 310 38" stroke="#cdf0dd" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="310" cy="38" r="5" fill="#cdf0dd" />
      <circle cx="310" cy="38" r="11" fill="#cdf0dd" opacity="0.25" />
      <text x="345" y="65" fontSize="42" fontWeight="800" fill="#8ed6ad" opacity="0.25" fontFamily="system-ui, sans-serif">
        $
      </text>
    </Wrap>
  );
}

// ---- 3. SMM Panel vs Agency -----------------------------------------
function ThumbVsAgency() {
  return (
    <svg viewBox="0 0 400 250" className="blog-thumb-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="left3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2018" />
          <stop offset="100%" stopColor="#05090a" />
        </linearGradient>
        <linearGradient id="right3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1a2a" />
          <stop offset="100%" stopColor="#05090a" />
        </linearGradient>
        <radialGradient id="vs3" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vig3" cx="0.5" cy="0.5" r="0.75">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="200" height="250" fill="url(#left3)" />
      <rect x="200" y="0" width="200" height="250" fill="url(#right3)" />
      <line x1="200" y1="0" x2="200" y2="250" stroke="#8ed6ad" strokeOpacity="0.25" strokeDasharray="3 6" />
      <circle cx="200" cy="125" r="60" fill="url(#vs3)" />
      <circle cx="200" cy="125" r="32" fill="#05090a" stroke="#8ed6ad" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="200" y="136" textAnchor="middle" fontSize="22" fontWeight="800" fill="#cdf0dd" fontFamily="system-ui, sans-serif">
        VS
      </text>
      <rect x="60" y="80" width="80" height="80" rx="12" fill="none" stroke="#8ed6ad" strokeOpacity="0.7" strokeWidth="1.8" />
      <rect x="72" y="96" width="22" height="6" rx="2" fill="#8ed6ad" />
      <rect x="72" y="110" width="34" height="6" rx="2" fill="#8ed6ad" opacity="0.6" />
      <rect x="72" y="124" width="28" height="6" rx="2" fill="#8ed6ad" opacity="0.4" />
      <rect x="72" y="138" width="40" height="6" rx="2" fill="#8ed6ad" opacity="0.25" />
      <circle cx="260" cy="105" r="12" fill="none" stroke="#8ed6ad" strokeOpacity="0.7" strokeWidth="1.8" />
      <circle cx="290" cy="105" r="12" fill="none" stroke="#8ed6ad" strokeOpacity="0.5" strokeWidth="1.8" />
      <path d="M 240 155 Q 260 138, 280 155 Q 300 138, 320 155" fill="none" stroke="#8ed6ad" strokeOpacity="0.55" strokeWidth="1.8" />
      <rect width="400" height="250" fill="url(#vig3)" />
    </svg>
  );
}

// ---- 4. Is Buying Followers Safe ------------------------------------
function ThumbSafeOrNot() {
  return (
    <Wrap bgFrom="#0a1211" bgTo="#05090a">
      <defs>
        <linearGradient id="shield4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ed6ad" />
          <stop offset="100%" stopColor="#4f7d5e" />
        </linearGradient>
        <radialGradient id="glow4" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="120" fill="url(#glow4)" />
      <path
        d="M 200 45 L 270 72 L 270 133 Q 270 185, 200 213 Q 130 185, 130 133 L 130 72 Z"
        fill="url(#shield4)"
        fillOpacity="0.1"
        stroke="url(#shield4)"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
      <path
        d="M 175 128 L 195 148 L 232 105"
        stroke="#cdf0dd"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="75" cy="70" r="3" fill="#f4a72c" opacity="0.75" />
      <circle cx="325" cy="180" r="4" fill="#f4a72c" opacity="0.55" />
      <circle cx="330" cy="65" r="2.5" fill="#cdf0dd" opacity="0.5" />
    </Wrap>
  );
}

// ---- 5. Instagram Growth Guide --------------------------------------
function ThumbInstagram() {
  return (
    <Wrap bgFrom="#0a1211" bgTo="#0a0510">
      <defs>
        <linearGradient id="ig5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="30%" stopColor="#fa7e1e" />
          <stop offset="60%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#962fbf" />
        </linearGradient>
        <radialGradient id="igglow5" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#d62976" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#d62976" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="115" fill="url(#igglow5)" />
      <rect x="130" y="60" width="140" height="130" rx="32" fill="none" stroke="url(#ig5)" strokeWidth="3.5" />
      <circle cx="200" cy="125" r="34" fill="none" stroke="url(#ig5)" strokeWidth="3.5" />
      <circle cx="200" cy="125" r="16" fill="url(#ig5)" fillOpacity="0.5" />
      <circle cx="245" cy="80" r="8" fill="url(#ig5)" />
      <circle cx="245" cy="80" r="13" fill="url(#ig5)" opacity="0.35" />
    </Wrap>
  );
}

// ---- 6. TikTok Views -----------------------------------------------
function ThumbTikTok() {
  return (
    <Wrap bgFrom="#0a1211" bgTo="#05090a">
      <defs>
        <radialGradient id="ttglow6" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#25F4EE" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#25F4EE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="115" fill="url(#ttglow6)" />
      <g transform="translate(200 125)">
        {/* Cyan note (behind) */}
        <path
          d="M 12 -58 L 12 42 Q 12 72, -18 72 Q -48 72, -48 47 Q -48 22, -18 22 Q -8 22, -3 27 L -3 -40 L 55 -50 L 55 42 Q 55 72, 25 72 Q -5 72, -5 47 Q -5 22, 25 22 Q 35 22, 40 27 L 40 -55 Z"
          fill="#25F4EE"
          fillOpacity="0.85"
        />
        {/* Red note (front) */}
        <path
          d="M 20 -50 L 20 50 Q 20 80, -10 80 Q -40 80, -40 55 Q -40 30, -10 30 Q 0 30, 5 35 L 5 -32 L 63 -42 L 63 50 Q 63 80, 33 80 Q 3 80, 3 55 Q 3 30, 33 30 Q 43 30, 48 35 L 48 -47 Z"
          fill="#FE2C55"
          fillOpacity="0.85"
        />
      </g>
    </Wrap>
  );
}

// ---- 7. YouTube Monetization ---------------------------------------
function ThumbYouTube() {
  return (
    <Wrap bgFrom="#0a0510" bgTo="#05090a">
      <defs>
        <radialGradient id="ytglow7" cx="0.5" cy="0.5" r="0.65">
          <stop offset="0%" stopColor="#FF0000" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="120" fill="url(#ytglow7)" />
      <rect x="90" y="65" width="220" height="120" rx="32" fill="#FF0000" fillOpacity="0.9" />
      <rect x="90" y="65" width="220" height="120" rx="32" fill="none" stroke="#ff6b6b" strokeOpacity="0.5" strokeWidth="1.5" />
      <path d="M 175 98 L 175 152 L 228 125 Z" fill="#ffffff" />
      <g opacity="0.85">
        <text x="320" y="80" fontSize="22" fontWeight="800" fill="#cdf0dd" fontFamily="system-ui, sans-serif">
          1K
        </text>
        <text x="50" y="220" fontSize="22" fontWeight="800" fill="#cdf0dd" fontFamily="system-ui, sans-serif">
          4K
        </text>
      </g>
    </Wrap>
  );
}

// ---- 8. SMM Panel Pricing ------------------------------------------
function ThumbPricing() {
  return (
    <Wrap bgFrom="#0a1211" bgTo="#05090a">
      <defs>
        <radialGradient id="priceglow8" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="120" fill="url(#priceglow8)" />
      {[100, 200, 300].map((x, i) => (
        <g key={x}>
          <rect
            x={x - 42}
            y={i === 1 ? 58 : 78}
            width="84"
            height={i === 1 ? 134 : 116}
            rx="12"
            fill={i === 1 ? "#8ed6ad" : "white"}
            fillOpacity={i === 1 ? 0.12 : 0.035}
            stroke={i === 1 ? "#8ed6ad" : "white"}
            strokeOpacity={i === 1 ? 0.75 : 0.14}
            strokeWidth="1.5"
          />
          <text
            x={x}
            y={i === 1 ? 98 : 112}
            textAnchor="middle"
            fontSize="10"
            fill={i === 1 ? "#cdf0dd" : "white"}
            fillOpacity={i === 1 ? 1 : 0.35}
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="1.5"
          >
            {["BASIC", "PRO", "AGENCY"][i]}
          </text>
          <text
            x={x}
            y={i === 1 ? 138 : 148}
            textAnchor="middle"
            fontSize="24"
            fontWeight="700"
            fill={i === 1 ? "#cdf0dd" : "white"}
            fillOpacity={i === 1 ? 1 : 0.55}
            fontFamily="system-ui, sans-serif"
          >
            ${["0.01", "0.008", "0.005"][i]}
          </text>
          <text
            x={x}
            y={i === 1 ? 162 : 172}
            textAnchor="middle"
            fontSize="9"
            fill="white"
            fillOpacity="0.35"
            fontFamily="system-ui, sans-serif"
          >
            per unit
          </text>
        </g>
      ))}
    </Wrap>
  );
}

// ---- 9. Social Media Automation ------------------------------------
function ThumbAutomation() {
  return (
    <Wrap bgFrom="#0a1211" bgTo="#05090a">
      <defs>
        <radialGradient id="autoglow9" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="125" r="120" fill="url(#autoglow9)" />
      <g transform="translate(200 125)">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="-6"
            y="-72"
            width="12"
            height="18"
            rx="3"
            fill="#8ed6ad"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r="58" fill="none" stroke="#8ed6ad" strokeWidth="3" />
        <circle r="26" fill="none" stroke="#8ed6ad" strokeWidth="3" />
        <circle r="8" fill="#cdf0dd" />
      </g>
      {[
        [60, 60],
        [340, 60],
        [60, 190],
        [340, 190],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#8ed6ad" strokeOpacity="0.5" strokeWidth="2" />
          <line
            x1={cx + (cx < 200 ? 12 : -12)}
            y1={cy + (cy < 125 ? 12 : -12)}
            x2={200 + (cx < 200 ? -55 : 55)}
            y2={125 + (cy < 125 ? -20 : 20)}
            stroke="#8ed6ad"
            strokeOpacity="0.28"
            strokeDasharray="3 4"
          />
        </g>
      ))}
    </Wrap>
  );
}

// ---- 10. Trends 2026 -----------------------------------------------
function ThumbTrends() {
  return (
    <Wrap bgFrom="#0a1d16" bgTo="#05090a">
      <defs>
        <linearGradient id="trendline10" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4f7d5e" />
          <stop offset="100%" stopColor="#cdf0dd" />
        </linearGradient>
        <radialGradient id="trglow10" cx="0.8" cy="0.15" r="0.5">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="330" cy="40" r="110" fill="url(#trglow10)" />
      <text x="50" y="90" fontSize="68" fontWeight="800" fill="#8ed6ad" fillOpacity="0.13" fontFamily="system-ui, sans-serif">
        2026
      </text>
      <path
        d="M 60 200 L 140 140 L 200 170 L 270 90 L 340 50"
        stroke="url(#trendline10)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M 320 45 L 345 45 L 345 70" stroke="#cdf0dd" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="90" cy="55" r="3" fill="#cdf0dd" opacity="0.7" />
      <circle cx="330" cy="120" r="4" fill="#8ed6ad" opacity="0.55" />
      <circle cx="300" cy="180" r="3" fill="#8ed6ad" opacity="0.6" />
    </Wrap>
  );
}

// ---- 11. How to Choose the Best SMM Panel --------------------------
function ThumbChooseBestPanel() {
  return (
    <Wrap bgFrom="#0c1a2a" bgTo="#05090a">
      <defs>
        <linearGradient id="check11" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cdf0dd" />
          <stop offset="100%" stopColor="#4f7d5e" />
        </linearGradient>
        <radialGradient id="glow11" cx="0.85" cy="0.2" r="0.5">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="320" cy="50" r="110" fill="url(#glow11)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 34} y1={0} x2={i * 34} y2={250} stroke="white" strokeOpacity="0.03" />
      ))}

      {/* Clipboard */}
      <g transform="translate(200 125)">
        <rect x="-70" y="-90" width="140" height="180" rx="12" fill="#0a1211" stroke="#8ed6ad" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="-24" y="-100" width="48" height="18" rx="6" fill="#0a1211" stroke="#8ed6ad" strokeOpacity="0.5" strokeWidth="1.5" />

        {/* Checklist rows */}
        {[-55, -20, 15, 50].map((y, i) => (
          <g key={y}>
            {/* Checkbox */}
            <circle cx="-45" cy={y} r="8" fill={i < 3 ? "url(#check11)" : "none"} stroke="#8ed6ad" strokeOpacity={i < 3 ? "1" : "0.4"} strokeWidth="1.5" />
            {/* Checkmark inside */}
            {i < 3 && (
              <path d={`M ${-49} ${y} l 3 3 l 6 -6`} stroke="#05090a" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
            {/* Line */}
            <rect x="-28" y={y - 2} width={60 - i * 8} height="3" rx="1.5" fill="#8ed6ad" opacity={0.25 + (3 - i) * 0.15} />
          </g>
        ))}

        {/* Emphasis underline on first item */}
        <rect x="-28" y="-58" width="50" height="1.5" rx="1" fill="url(#check11)" opacity="0.9" />
      </g>
    </Wrap>
  );
}

// ---- 12. SMM Panel Safety Guide ------------------------------------
function ThumbSafetyGuide() {
  return (
    <Wrap bgFrom="#1a0f0f" bgTo="#05090a">
      <defs>
        <linearGradient id="shield12" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ed6ad" />
          <stop offset="100%" stopColor="#4f7d5e" />
        </linearGradient>
        <radialGradient id="glow12" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#8ed6ad" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8ed6ad" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="warn12" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f4c77c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f4c77c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="125" r="120" fill="url(#glow12)" />
      <circle cx="320" cy="60" r="80" fill="url(#warn12)" />

      {/* Shield */}
      <g transform="translate(200 125)">
        <path
          d="M 0 -85 L 65 -58 L 65 5 Q 65 55, 0 85 Q -65 55, -65 5 L -65 -58 Z"
          fill="url(#shield12)"
          fillOpacity="0.08"
          stroke="url(#shield12)"
          strokeOpacity="0.7"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Inner shield line */}
        <path
          d="M 0 -72 L 52 -48 L 52 2 Q 52 46, 0 72 Q -52 46, -52 2 L -52 -48 Z"
          fill="none"
          stroke="url(#shield12)"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="3 5"
          strokeLinejoin="round"
        />

        {/* Checkmark */}
        <path
          d="M -25 0 L -8 18 L 30 -22"
          stroke="#cdf0dd"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small warning dot top-right */}
        <circle cx="55" cy="-55" r="14" fill="#0a1211" stroke="#f4c77c" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M 55 -63 L 55 -55" stroke="#f4c77c" strokeWidth="2" strokeLinecap="round" />
        <circle cx="55" cy="-50" r="1.2" fill="#f4c77c" />
      </g>
    </Wrap>
  );
}

// ------------------------------------------------------------
const MAP: Record<string, () => React.ReactElement> = {
  "what-is-an-smm-panel": ThumbWhatIsSMM,
  "how-to-start-an-smm-panel-business": ThumbStartBusiness,
  "smm-panel-vs-agency": ThumbVsAgency,
  "is-buying-followers-safe": ThumbSafeOrNot,
  "instagram-growth-guide": ThumbInstagram,
  "how-to-get-more-tiktok-views": ThumbTikTok,
  "youtube-monetization-guide": ThumbYouTube,
  "smm-panel-pricing-guide": ThumbPricing,
  "social-media-automation": ThumbAutomation,
  "social-media-trends-2026": ThumbTrends,
  "how-to-choose-best-smm-panel": ThumbChooseBestPanel,
  "smm-panel-safety-guide": ThumbSafetyGuide,
};

export default function BlogThumbnail({ slug }: ThumbnailProps) {
  const Component = MAP[slug];
  if (!Component) {
    return (
      <div className="blog-thumb-fallback">
        <div className="blog-thumb-fallback-inner" />
      </div>
    );
  }
  return <Component />;
}
