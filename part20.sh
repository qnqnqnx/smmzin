#!/usr/bin/env bash
set -euo pipefail

cat > src/middleware.ts << 'EOF'
import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["vi", "en"] as const;
const DEFAULT_LOCALE = "vi";
const LOCALE_COOKIE = "smmzin-locale";

/**
 * Quyết định ngôn ngữ dựa trên:
 *   1. Cookie (khách đã tự chọn) — ưu tiên cao nhất
 *   2. Vercel geo header (x-vercel-ip-country)
 *   3. Cloudflare geo header (cf-ipcountry) — nếu có dùng Cloudflare proxy
 *   4. Accept-Language của trình duyệt
 *   5. Mặc định: tiếng Việt
 */
function detectLocale(request: NextRequest): string {
  // 1. Cookie — lựa chọn của khách
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Geo header từ Vercel
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  if (vercelCountry) {
    return vercelCountry === "VN" ? "vi" : "en";
  }

  // 3. Geo header từ Cloudflare (dự phòng nếu bật proxy cam)
  const cfCountry = request.headers.get("cf-ipcountry");
  if (cfCountry) {
    return cfCountry === "VN" ? "vi" : "en";
  }

  // 4. Accept-Language của trình duyệt
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const lower = acceptLanguage.toLowerCase();
  if (lower.startsWith("vi") || lower.includes("vi-") || lower.includes("vi,")) {
    return "vi";
  }
  if (acceptLanguage) {
    return "en";
  }

  // 5. Mặc định
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Nếu URL đã có locale → tôn trọng và ghi cookie
  const matchedLocale = LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (matchedLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, matchedLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Bỏ qua file tĩnh (favicon.svg, sitemap.xml...)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  // Chuyển hướng về ngôn ngữ phù hợp
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon\\.svg|og-image\\.svg|site\\.webmanifest|robots\\.txt|sitemap\\.xml).*)",
  ],
};
EOF

echo "part20 done"