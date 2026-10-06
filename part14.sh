#!/usr/bin/env bash
set -euo pipefail

cat > src/content/site.config.ts << 'EOF'
// ============================================================
// SMMZin — CẤU HÌNH CHÍNH
// Đây là file bạn sẽ sửa nhiều nhất. Mọi thứ ở đây đều an toàn.
// ============================================================

export const SITE_CONFIG = {
  brandName: "SMMZin",

  // Địa chỉ website thật của bạn (không có dấu / ở cuối)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://smmzin.com",

  defaultLocale: "vi" as const,
  locales: ["vi", "en"] as const,
  ogImage: "/og-image.svg",
  themeColor: "#05090a",

  // ----------------------------------------------------------
  // NÚT "TRẢI NGHIỆM TRƯỚC"
  // Khi đã có web dùng thử, dán link vào đây.
  // Để trống "" nếu chưa có → nút sẽ tự ẩn.
  // Ví dụ: demoUrl: "https://app.smmzin.com",
  // ----------------------------------------------------------
  demoUrl: "",

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
  notifyEndpoint: "",

  // ----------------------------------------------------------
  // LIÊN HỆ
  // ----------------------------------------------------------
  contact: {
    email: "hello@smmzin.com",
    telegram: "https://t.me/YOUR-TELEGRAM",
  },

  // ----------------------------------------------------------
  // MẠNG XÃ HỘI (hiện ở footer)
  // ----------------------------------------------------------
  socialLinks: {
    facebook: "https://facebook.com/YOUR-PAGE",
    instagram: "https://instagram.com/YOUR-PAGE",
    telegram: "https://t.me/YOUR-CHANNEL",
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
EOF

# Thêm icon Sun và Moon vào Icons.tsx (chèn trước dòng cuối)
python - << 'PYEOF'
import re
path = "src/components/Icons.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

addition = '''
export const Sun = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
    <path d="m5.6 5.6 1.4 1.4" />
    <path d="m17 17 1.4 1.4" />
    <path d="m18.4 5.6-1.4 1.4" />
    <path d="M7 17l-1.4 1.4" />
  </Line>
);

export const Moon = (p: IconProps) => (
  <Line {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </Line>
);
'''

# Chèn vào trước dòng "type BrandProps"
marker = "type BrandProps = "
if marker in content and "export const Sun" not in content:
    content = content.replace(marker, addition + "\n" + marker)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Icons updated")
PYEOF

echo "part14 done"