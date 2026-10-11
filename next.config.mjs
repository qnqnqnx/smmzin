/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  /**
   * Redirects 308 (Permanent) — tương đương 301 về SEO.
   * Google chuyển hết "SEO juice" và backlink từ URL cũ sang URL mới.
   *
   * Lý do: /privacy và /terms cũ đã được Google index trước khi
   * chúng ta tổ chức lại thành /legal/*. Nếu không redirect, các URL
   * cũ sẽ trả về 404 và mất toàn bộ ranking + backlink.
   */
  async redirects() {
    return [
      // Privacy Policy: /privacy → /legal/privacy
      {
        source: "/privacy",
        destination: "/legal/privacy",
        permanent: true,
      },
      // Terms of Service: /terms → /legal/terms
      {
        source: "/terms",
        destination: "/legal/terms",
        permanent: true,
      },
      // Bổ sung các route cũ nếu có (đề phòng tương lai)
      {
        source: "/cookies",
        destination: "/legal/cookies",
        permanent: true,
      },
      {
        source: "/refund",
        destination: "/legal/refund",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/legal/disclaimer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
