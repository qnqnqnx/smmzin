import { NextResponse, type NextRequest } from "next/server";

/**
 * Chuyển hướng cũ:
 *   /vi            → /
 *   /en            → /
 *   /vi/anything   → /anything
 *   /en/anything   → /anything
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const match = pathname.match(/^\/(vi|en)(\/.*)?$/);
  if (match) {
    const rest = match[2] ?? "";
    const url = request.nextUrl.clone();
    url.pathname = rest === "" ? "/" : rest;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon\\.svg|og-image\\.svg|site\\.webmanifest|robots\\.txt|sitemap\\.xml).*)",
  ],
};
