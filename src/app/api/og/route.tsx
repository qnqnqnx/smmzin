import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { COUNTRY_OG_DATA } from "./country-data";

export const runtime = "edge";

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

function getDailySelection() {
  const day = Math.floor(Date.now() / 86_400_000);
  return {
    theme: ALL_THEMES[day % ALL_THEMES.length],
    hookIndex: (day + 3) % 8,
  };
}

/* ============================================================
   DEFAULT (brand) content — dùng khi không có ?country
   ============================================================ */
function Content({ locale, hookText, p }: { locale: "vi" | "en"; hookText: string; p: Palette }) {
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
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "linear-gradient(155deg, #1a2f24, #0a1410)",
            border: "1px solid rgba(233,241,236,0.18)",
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

      <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div style={{ width: 10, height: 10, borderRadius: 5, background: p.accent, display: "flex" }} />
          <div style={{ display: "flex" }}>{hookText}</div>
        </div>
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

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 24, color: p.textMuted, letterSpacing: "-0.3px", display: "flex" }}>
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
   COUNTRY content — dùng khi có ?country=XX
   Bố cục 2 cột: chữ bên trái, icon silhouette bên phải
   Màu nền theo accent của nước
   ============================================================ */
function CountryContent({
  countryCode,
  hookText,
}: {
  countryCode: string;
  hookText: string;
}) {
  const data = COUNTRY_OG_DATA[countryCode];
  if (!data) return null;

  const { displayName, accent, accent2, Icon } = data;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        background: `radial-gradient(circle at 20% 15%, ${accent}30 0%, transparent 55%), radial-gradient(circle at 85% 90%, ${accent2}20 0%, transparent 55%), linear-gradient(135deg, #0a1211 0%, #05090a 100%)`,
        position: "relative",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ====== LEFT COLUMN: text (55%) ====== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "55%",
          height: "100%",
          padding: "56px 40px 56px 72px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(155deg, #1a2f24, #0a1410)",
              border: "1px solid rgba(233,241,236,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 28,
              color: "#cdf0dd",
            }}
          >
            Z
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.8px",
              display: "flex",
              color: "#e9f1ec",
            }}
          >
            SMM
            <span style={{ color: accent, fontWeight: 700 }}>Zin</span>
            <span style={{ color: "#90a59a", fontWeight: 400 }}>.Com</span>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Hook badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 22px",
              borderRadius: 999,
              border: `1px solid ${accent}88`,
              background: `${accent}15`,
              fontSize: 18,
              fontWeight: 500,
              color: accent,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: accent,
                display: "flex",
              }}
            />
            <div style={{ display: "flex" }}>{hookText}</div>
          </div>

          {/* "SMM Panel" small label */}
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 42,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-1.4px",
              color: "#90a59a",
            }}
          >
            SMM Panel
          </div>

          {/* Native country name — LỚN */}
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-2px",
              color: accent,
            }}
          >
            {displayName}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 15,
            color: "#90a59a",
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ display: "flex" }}>SMM Panel</span>
          <span style={{ display: "flex", opacity: 0.5 }}>·</span>
          <span style={{ display: "flex" }}>Social Media Marketing</span>
          <span style={{ display: "flex", opacity: 0.5 }}>·</span>
          <span style={{ display: "flex", fontWeight: 500, letterSpacing: "2px" }}>
            SMMZIN.COM
          </span>
        </div>
      </div>

      {/* ====== RIGHT COLUMN: icon + flag (45%) ====== */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "45%",
          height: "100%",
          position: "relative",
          padding: "40px 60px 40px 20px",
        }}
      >
        {/* Big glow behind icon */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}35 0%, transparent 65%)`,
            display: "flex",
          }}
        />

        {/* Icon — bigger */}
        <div
          style={{
            display: "flex",
            color: accent,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Icon />
        </div>

        {/* Flag badge — top right of icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w160/${countryCode}.png`}
          alt={data.name}
          width={86}
          height={64}
          style={{
            position: "absolute",
            top: 80,
            right: 50,
            borderRadius: 10,
            border: "3px solid rgba(255,255,255,0.4)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.55)",
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   Backgrounds (dùng cho Content mặc định)
   ============================================================ */
function BgGlow({ p }: { p: Palette }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", background: p.bg }}>
      <div
        style={{
          position: "absolute",
          top: -220,
          left: -180,
          width: 780,
          height: 780,
          borderRadius: 390,
          background: "radial-gradient(circle, rgba(79,125,94,0.9) 0%, transparent 62%)",
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
          background: "radial-gradient(circle, rgba(142,214,173,0.4) 0%, transparent 58%)",
          display: "flex",
        }}
      />
    </div>
  );
}

const BACKGROUNDS: Record<Theme, (args: { p: Palette }) => JSX.Element> = {
  glow: BgGlow,
  stripes: BgGlow,
  mesh: BgGlow,
  spotlight: BgGlow,
  lightMinimal: BgGlow,
  lightSplit: BgGlow,
  lightWave: BgGlow,
  lightDots: BgGlow,
};

/* ============================================================
   GET
   ============================================================ */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get("locale");
  const locale: "vi" | "en" = localeParam === "en" ? "en" : "vi";

  const themeParam = searchParams.get("theme") as Theme | null;
  const hookParam = searchParams.get("hook");
  const countryParam = searchParams.get("country");

  const daily = getDailySelection();

  const theme: Theme =
    themeParam && (ALL_THEMES as readonly string[]).includes(themeParam)
      ? themeParam
      : daily.theme;

  const hookIndex = hookParam ? Number(hookParam) % 8 : daily.hookIndex;
  const hookText = HOOKS[locale][hookIndex].text;
  const palette = PALETTES[theme];
  const Background = BACKGROUNDS[theme];

  const isCountryMode = countryParam && COUNTRY_OG_DATA[countryParam];

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
        {isCountryMode ? (
          <CountryContent countryCode={countryParam!} hookText={hookText} />
        ) : (
          <>
            <Background p={palette} />
            <Content locale={locale} hookText={hookText} p={palette} />
          </>
        )}
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
