import { NextResponse } from "next/server";

export const runtime = "edge";

const THEMES = [
  "glow",
  "stripes",
  "mesh",
  "spotlight",
  "lightMinimal",
  "lightSplit",
  "lightWave",
  "lightDots",
];

const HOOKS = {
  vi: [
    "Giá rẻ — chất lượng",
    "Uy tín hàng đầu",
    "Xử lý siêu nhanh",
    "Hỗ trợ nhiệt tình",
    "Đa nền tảng",
    "Một dashboard duy nhất",
    "Cho creators & agency",
    "Sẵn sàng API",
  ],
  en: [
    "Best value, real quality",
    "Trusted platform",
    "Lightning fast",
    "Dedicated support",
    "Multi-platform",
    "One dashboard",
    "For creators & agencies",
    "API-ready",
  ],
};

export async function GET() {
  const day = Math.floor(Date.now() / 86_400_000);
  const today = {
    theme: THEMES[day % THEMES.length],
    hookIndex: (day + 3) % 8,
  };

  return NextResponse.json({
    today,
    themes: THEMES,
    hooks: HOOKS,
    previewPage: "/og-preview.html",
    exampleUrls: {
      themeVi: "/api/og?locale=vi&theme=glow",
      themeEn: "/api/og?locale=en&theme=lightMinimal",
      hookOverride: "/api/og?locale=vi&hook=2",
      dailyDefault: "/api/og?locale=vi",
    },
  });
}
