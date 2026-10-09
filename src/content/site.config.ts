// ============================================================
// SMMZin — CẤU HÌNH CHÍNH
// Đây là file bạn sẽ sửa nhiều nhất. Mọi thứ ở đây đều an toàn.
// ============================================================

export const SITE_CONFIG = {
  brandName: "SMMZin.Com",

  // Địa chỉ website thật của bạn (không có dấu / ở cuối)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://smmzin.com",

  defaultLocale: "vi" as const,
  locales: ["vi", "en"] as const,
  ogImage: "/api/og",
  themeColor: "#05090a",

  // ----------------------------------------------------------
  // NÚT "TRẢI NGHIỆM TRƯỚC"
  // Khi đã có web dùng thử, dán link vào đây.
  // Để trống "" nếu chưa có → nút sẽ tự ẩn.
  // Ví dụ: demoUrl: "https://app.smmzin.com",
  // ----------------------------------------------------------
  demoUrl: "https://trumsubviet.com",

  // ----------------------------------------------------------
  // LƯU EMAIL KHÁCH HÀNG (form "Nhận thông báo")
  //
  // Cách bật (miễn phí, không cần code):
  //   1. Vào https://formspree.io → Sign up (dùng email cũng được)
  //   2. Bấm "+ New Form" → đặt tên "SMMZin Notify"
  //   3. Copy "Endpoint" (dạng https://formspree.io/f/abcdwxyz)
  //   4. Dán vào dưới đây
  //   5. Xong. Mọi email khách để lại sẽ vào Dashboard Formspree
  //      → có thể xem online, tải CSV, hoặc bật forward qua email
  //
  // Để trống "" → form chạy chế độ demo (không lưu thật)
  // ----------------------------------------------------------
  notifyEndpoint: "https://formspree.io/f/mvkzzzye",

  // ----------------------------------------------------------
  // LIÊN HỆ
  // ----------------------------------------------------------
  contact: {
    email: "hello@smmzin.com",
    telegram: "https://t.me/+AWEP8ClL3oA1NWY1",
  },

  // ----------------------------------------------------------
  // MẠNG XÃ HỘI (hiện ở footer)
  // ----------------------------------------------------------
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61588850413247",
    instagram: "https://instagram.com/YOUR-PAGE",
    telegram: "https://t.me/+AWEP8ClL3oA1NWY1",
    x: "https://x.com/YOUR-HANDLE",
  },

  // ----------------------------------------------------------
  // ĐỒNG HỒ ĐẾM NGƯỢC
  // mode: "daily"  → tự reset mỗi ngày lúc 00:00 theo timezone
  // mode: "fixed"  → đếm tới launchDate
  // ----------------------------------------------------------
  countdown: {
    mode: "daily" as "daily" | "fixed",
    timezone: "Asia/Ho_Chi_Minh",
    launchDate: "2026-06-01T00:00:00+07:00",
  },
} as const;
