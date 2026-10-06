import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["vi", "en"] as const;
const DEFAULT_LOCALE = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon\\.svg|og-image\\.svg|site\\.webmanifest|robots\\.txt|sitemap\\.xml).*)"],
};
