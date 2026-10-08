import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

/* ============================================================
   CONFIG
   ============================================================ */

const DARK_THEMES = ["glow", "stripes", "mesh", "spotlight"] as const;
const LIGHT_THEMES = ["lightMinimal", "lightSplit", "lightWave", "lightDots"] as const;
const ALL_THEMES = [...DARK_THEMES, ...LIGHT_THEMES];
type Theme = (typeof ALL_THEMES)[number];

type Hook = { text: string };

const HOOKS: Record<"vi" | "en", Hook[]> = {
  vi: [
    { text: "Giá rẻ — chất lượng" },
    { text: "Uy tín hàng đầu" },
    { text: "Xử lý siêu nhanh" },
    { text: "Hỗ trợ nhiệt tình" },
    { text: "Đa nền tảng" },
    { text: "Một dashboard duy nhất" },
    { text: "Cho creators & agency" },
    { text: "Sẵn sàng API" },
  ],
  en: [
    { text: "Best value, real quality" },
    { text: "Trusted platform" },
    { text: "Lightning fast" },
    { text: "Dedicated support" },
    { text: "Multi-platform" },
    { text: "One dashboard" },
    { text: "For creators & agencies" },
    { text: "API-ready" },
  ],
};

const HEADLINES = {
  vi: { line1: "Tăng trưởng mạng xã hội,", line2: "được tái định nghĩa." },
  en: { line1: "Social Growth,", line2: "Reimagined." },
};

const TAGLINE = "SMM Panel · Social Media Marketing";

/* ============================================================
   PALETTE
   ============================================================ */

type Palette = {
  bg: string;
  text: string;
  textMuted: string;
  accent: string;
  border: string;
  badgeBg: string;
  badgeBorder: string;
  isLight: boolean;
};

const DARK: Palette = {
  bg: "#05090a",
  text: "#e9f1ec",
  textMuted: "#90a59a",
  accent: "#8ed6ad",
  border: "rgba(233,241,236,0.14)",
  badgeBg: "rgba(142,214,173,0.10)",
  badgeBorder: "rgba(142,214,173,0.45)",
  isLight: false,
};

const LIGHT: Palette = {
  bg: "#f6f8f6",
  text: "#0e1a14",
  textMuted: "#5a6b62",
  accent: "#2f6f47",
  border: "rgba(14,26,20,0.12)",
  badgeBg: "rgba(47,111,71,0.08)",
  badgeBorder: "rgba(47,111,71,0.35)",
  isLight: true,
};

const PALETTES: Record<Theme, Palette> = {
  glow: DARK,
  stripes: DARK,
  mesh: DARK,
  spotlight: DARK,
  lightMinimal: LIGHT,
  lightSplit: LIGHT,
  lightWave: LIGHT,
  lightDots: LIGHT,
};

/* ============================================================
   DAILY SELECTION
   ============================================================ */

function getDailySelection() {
  const day = Math.floor(Date.now() / 86_400_000);
  return {
    theme: ALL_THEMES[day % ALL_THEMES.length],
    hookIndex: (day + 3) % 8,
  };
}

/* ============================================================
   BACKGROUNDS — 8 biến thể
   ============================================================ */

function BgGlow({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        background: p.bg,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          left: -180,
          width: 780,
          height: 780,
          borderRadius: 390,
          background:
            "radial-gradient(circle, rgba(79,125,94,0.9) 0%, transparent 62%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -320,
          right: -200,
          width: 940,
          height: 940,
          borderRadius: 470,
          background:
            "radial-gradient(circle, rgba(142,214,173,0.4) 0%, transparent 58%)",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgStripes({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: -300,
            left: i * 90 - 200,
            width: 36,
            height: 1400,
            background:
              i % 3 === 0
                ? "linear-gradient(180deg, transparent, rgba(142,214,173,0.28), transparent)"
                : "linear-gradient(180deg, transparent, rgba(79,125,94,0.16), transparent)",
            transform: "rotate(20deg)",
            display: "flex",
          }}
        />
      ))}
    </div>
  );
}

function BgMesh({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, #0a1d16 0%, #05090a 50%, #0d2a1f 100%)",
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          left: "28%",
          width: 720,
          height: 720,
          borderRadius: 360,
          background:
            "radial-gradient(circle, rgba(79,125,94,0.85), transparent 62%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -220,
          left: -180,
          width: 640,
          height: 640,
          borderRadius: 320,
          background:
            "radial-gradient(circle, rgba(142,214,173,0.38), transparent 62%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: -200,
          width: 780,
          height: 780,
          borderRadius: 390,
          background:
            "radial-gradient(circle, rgba(60,99,73,0.85), transparent 62%)",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgSpotlight({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -420,
          right: -300,
          width: 1100,
          height: 1100,
          borderRadius: 550,
          background:
            "radial-gradient(circle, rgba(142,214,173,0.55) 0%, rgba(79,125,94,0.25) 35%, transparent 68%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -180,
          left: "10%",
          width: 420,
          height: 420,
          borderRadius: 210,
          background:
            "radial-gradient(circle, rgba(79,125,94,0.35), transparent 62%)",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgLightMinimal({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
      }}
    >
      {/* Vạch accent trên cùng */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background:
            "linear-gradient(90deg, #2f6f47 0%, #8ed6ad 50%, #2f6f47 100%)",
          display: "flex",
        }}
      />
      {/* Vòng tròn mờ góc dưới phải */}
      <div
        style={{
          position: "absolute",
          bottom: -260,
          right: -260,
          width: 720,
          height: 720,
          borderRadius: 360,
          background:
            "radial-gradient(circle, rgba(47,111,71,0.10), transparent 65%)",
          display: "flex",
        }}
      />
      {/* Chấm nhỏ góc trên phải */}
      <div
        style={{
          position: "absolute",
          top: 90,
          right: 100,
          width: 14,
          height: 14,
          borderRadius: 7,
          background: "#2f6f47",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 140,
          width: 6,
          height: 6,
          borderRadius: 3,
          background: "#8ed6ad",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgLightSplit({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
      }}
    >
      {/* Nửa trái tối */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#07100c",
          clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)",
          display: "flex",
        }}
      />
      {/* Ánh sáng xanh lơ giữa đường chéo */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: 400,
          height: 400,
          borderRadius: 200,
          background:
            "radial-gradient(circle, rgba(142,214,173,0.35), transparent 62%)",
          display: "flex",
        }}
      />
      {/* Chấm nhấn bên phải */}
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 100,
          width: 12,
          height: 12,
          borderRadius: 6,
          background: "#2f6f47",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgLightWave({ p }: { p: Palette }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Sóng cong lớn ở dưới */}
      <div
        style={{
          position: "absolute",
          bottom: -400,
          left: -200,
          right: -200,
          height: 700,
          borderRadius: "50% 50% 0 0",
          background:
            "linear-gradient(180deg, rgba(47,111,71,0.14), rgba(47,111,71,0.28))",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -450,
          left: -100,
          right: -100,
          height: 700,
          borderRadius: "50% 50% 0 0",
          background:
            "linear-gradient(180deg, rgba(142,214,173,0.18), rgba(142,214,173,0.35))",
          display: "flex",
        }}
      />
      {/* Chấm accent góc trên phải */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 120,
          width: 10,
          height: 10,
          borderRadius: 5,
          background: "#2f6f47",
          display: "flex",
        }}
      />
    </div>
  );
}

function BgLightDots({ p }: { p: Palette }) {
  const cols = 30;
  const rows = 16;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ r, c });
    }
  }
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: p.bg,
        display: "flex",
      }}
    >
      {/* Dot pattern */}
      {dots.map(({ r, c }) => {
        const isAccent = (r + c) % 7 === 0;
        return (
          <div
            key={`${r}-${c}`}
            style={{
              position: "absolute",
              top: r * 42,
              left: c * 42,
              width: isAccent ? 4 : 2,
              height: isAccent ? 4 : 2,
              borderRadius: 4,
              background: isAccent ? "rgba(47,111,71,0.35)" : "rgba(14,26,20,0.08)",
              display: "flex",
            }}
          />
        );
      })}
      {/* Vòng xanh mờ */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -180,
          width: 640,
          height: 640,
          borderRadius: 320,
          background:
            "radial-gradient(circle, rgba(47,111,71,0.08), transparent 62%)",
          display: "flex",
        }}
      />
    </div>
  );
}

const BACKGROUNDS: Record<Theme, (args: { p: Palette }) => JSX.Element> = {
  glow: BgGlow,
  stripes: BgStripes,
  mesh: BgMesh,
  spotlight: BgSpotlight,
  lightMinimal: BgLightMinimal,
  lightSplit: BgLightSplit,
  lightWave: BgLightWave,
  lightDots: BgLightDots,
};

/* ============================================================
   CONTENT
   ============================================================ */

function Content({
  locale,
  hookText,
  p,
}: {
  locale: "vi" | "en";
  hookText: string;
  p: Palette;
}) {
  const headline = HEADLINES[locale];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "68px 80px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* ------- Top: brand ------- */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: p.isLight
              ? "linear-gradient(155deg, #1a2f24, #0a1410)"
              : "linear-gradient(155deg, #1a2f24, #0a1410)",
            border: p.isLight
              ? "1px solid rgba(14,26,20,0.2)"
              : "1px solid rgba(233,241,236,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 32,
            color: "#cdf0dd",
          }}
        >
          Z
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: "-1px",
            display: "flex",
            color: p.text,
          }}
        >
          SMM
          <span style={{ color: p.accent, fontWeight: 700 }}>Zin</span>
          <span style={{ color: p.textMuted, fontWeight: 400 }}>.Com</span>
        </div>
      </div>

      {/* ------- Middle: hook + headline ------- */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Hook badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 26px",
            borderRadius: 999,
            border: `1px solid ${p.badgeBorder}`,
            background: p.badgeBg,
            fontSize: 22,
            fontWeight: 500,
            color: p.accent,
            letterSpacing: "-0.3px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: p.accent,
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>{hookText}</div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 34,
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            color: p.text,
          }}
        >
          <div style={{ display: "flex" }}>{headline.line1}</div>
          <div style={{ display: "flex", color: p.accent }}>{headline.line2}</div>
        </div>
      </div>

      {/* ------- Bottom: tagline ------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: p.textMuted,
            letterSpacing: "-0.3px",
            display: "flex",
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 18,
            fontWeight: 500,
            color: p.textMuted,
            letterSpacing: "3px",
          }}
        >
          SMMZIN.COM
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   GET handler
   ============================================================ */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale");
  const locale: "vi" | "en" = localeParam === "en" ? "en" : "vi";

  const themeParam = searchParams.get("theme") as Theme | null;
  const hookParam = searchParams.get("hook");

  const daily = getDailySelection();

  const theme: Theme =
    themeParam && (ALL_THEMES as readonly string[]).includes(themeParam)
      ? themeParam
      : daily.theme;

  const hookIndex = hookParam ? Number(hookParam) % 8 : daily.hookIndex;
  const hookText = HOOKS[locale][hookIndex].text;
  const palette = PALETTES[theme];
  const Background = BACKGROUNDS[theme];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: palette.bg,
          position: "relative",
        }}
      >
        <Background p={palette} />
        <Content locale={locale} hookText={hookText} p={palette} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control":
          "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
