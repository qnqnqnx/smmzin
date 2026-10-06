#!/usr/bin/env bash
set -euo pipefail

cat > src/content/dictionaries.ts << 'EOF'
import type { Locale } from "@/lib/i18n";
import type { PlatformItem } from "./platforms";

export type FeatureItem = { title: string; description: string };
export type StepItem = { number: string; title: string; description: string };
export type AudienceItem = { title: string; description: string };
export type ServiceGroup = { title: string; description: string; items: string[] };
export type FaqItem = { q: string; a: string };
export type NavItem = { label: string; href: string };
export type FooterColumn = { title: string; links: { label: string; href: string }[] };
export type LegalSection = { heading: string; body: string };

const vi = {
  meta: {
    title: "SMMZin — Nền tảng Social Media Marketing thế hệ mới",
    description:
      "SMMZin là nền tảng Social Media Marketing (SMM Panel) thế hệ mới giúp creators, agency và thương hiệu quản lý tăng trưởng mạng xã hội trên nhiều nền tảng. Sắp ra mắt.",
    keywords: [
      "SMMZin",
      "SMM Panel",
      "Social Media Marketing",
      "nền tảng mạng xã hội",
      "tăng trưởng mạng xã hội",
      "quản lý mạng xã hội",
      "API SMM",
    ],
  },

  common: {
    comingSoon: "SẮP RA MẮT",
    notifyMe: "Nhận thông báo",
    explore: "Khám phá SMMZin",
    languageLabel: "Chuyển đổi ngôn ngữ",
    backHome: "Về trang chủ",
  },

  nav: {
    items: [
      { label: "Trang chủ", href: "#home" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Tính năng", href: "#features" },
      { label: "Nền tảng", href: "#platforms" },
      { label: "Giải pháp", href: "#solutions" },
      { label: "Hỏi đáp", href: "#faq" },
    ] as NavItem[],
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },

  hero: {
    badge: "SẮP RA MẮT",
    title: "Tăng trưởng mạng xã hội, được tái định nghĩa.",
    description:
      "SMMZin đang xây dựng một nền tảng Social Media Marketing thế hệ mới — đơn giản hơn, thông minh hơn và mạnh mẽ hơn.",
    note: "Dành cho creators, agency và thương hiệu.",
    countdownLabel: "SẮP RA MẮT",
    countdownNote: "Đồng hồ đặt lại mỗi ngày lúc 00:00 (GMT+7).",
    hours: "GIỜ",
    minutes: "PHÚT",
    seconds: "GIÂY",
  },

  marquee: { heading: "ĐƯỢC XÂY DỰNG CHO MẠNG XÃ HỘI" },

  about: {
    eyebrow: "GIỚI THIỆU",
    title: "SMMZin là gì?",
    paragraphs: [
      "SMMZin là một nền tảng Social Media Marketing (SMM Panel) được thiết kế để đơn giản hoá việc tăng trưởng và vận hành marketing trên nhiều nền tảng mạng xã hội khác nhau.",
      "Thay vì phải làm việc với nhiều công cụ rời rạc, SMMZin hướng tới một hệ sinh thái thống nhất: quản lý dịch vụ, theo dõi đơn hàng, kiểm soát trạng thái và mở rộng quy mô — tất cả trong một nơi.",
      "Nền tảng hiện đang trong giai đoạn hoàn thiện sản phẩm và sẽ ra mắt trong thời gian tới.",
    ],
    audiencesLabel: "Được xây dựng cho",
    audiences: ["Creators", "Agency", "Reseller", "Thương hiệu", "Doanh nghiệp"],
    pillars: [
      { title: "Đa nền tảng", description: "Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads và Spotify." },
      { title: "Vận hành tập trung", description: "Một không gian duy nhất cho dịch vụ, đơn hàng và theo dõi." },
      { title: "Sẵn sàng mở rộng", description: "Định hướng cho agency, reseller và tích hợp API." },
    ],
  },

  benefits: {
    eyebrow: "VÌ SAO CHỌN SMMZIN",
    title: "Mọi thứ bạn cần để mở rộng hiện diện xã hội.",
    description:
      "SMMZin tập trung vào những gì thực sự tạo ra khác biệt: sự rõ ràng, tốc độ và khả năng mở rộng.",
    items: [
      { title: "Nền tảng thống nhất", description: "Quản lý quy trình tăng trưởng mạng xã hội trong một hệ sinh thái duy nhất." },
      { title: "Tự động hoá thông minh", description: "Giảm các tác vụ lặp lại bằng quy trình xử lý tự động." },
      { title: "Kiểm soát thời gian thực", description: "Theo dõi hoạt động và trạng thái đơn hàng rõ ràng hơn." },
      { title: "Thiết kế để mở rộng", description: "Phù hợp cho creators, agency và doanh nghiệp đang tăng trưởng." },
    ] as FeatureItem[],
  },

  features: {
    eyebrow: "TÍNH NĂNG",
    title: "Được thiết kế cho tăng trưởng xã hội hiện đại",
    description: "Những năng lực cốt lõi SMMZin đang xây dựng cho phiên bản ra mắt.",
    items: [
      { title: "Quản lý đa nền tảng", description: "Điều hành dịch vụ trên nhiều mạng xã hội từ một giao diện duy nhất." },
      { title: "Xử lý đơn tự động", description: "Quy trình tiếp nhận và xử lý đơn hàng được tự động hoá." },
      { title: "Quản lý dịch vụ", description: "Tổ chức danh mục dịch vụ rõ ràng, dễ tra cứu và cập nhật." },
      { title: "Theo dõi thời gian thực", description: "Nắm trạng thái, tiến độ và lịch sử hoạt động tức thời." },
      { title: "API cho nhà phát triển", description: "Định hướng tích hợp API cho developer, agency và reseller." },
      { title: "Sẵn sàng cho reseller", description: "Cấu trúc phù hợp cho mô hình bán lại và mở rộng dịch vụ." },
    ] as FeatureItem[],
  },

  platforms: {
    eyebrow: "HỆ SINH THÁI",
    title: "Một nền tảng. Nhiều mạng xã hội.",
    description:
      "SMMZin hướng tới hỗ trợ những nền tảng mạng xã hội phổ biến nhất, với danh mục dịch vụ rõ ràng cho từng nền tảng.",
    servicesLabel: "Nhóm dịch vụ",
    items: [
      { key: "facebook", name: "Facebook", description: "Hỗ trợ tăng trưởng cho trang, hồ sơ và nội dung.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "instagram", name: "Instagram", description: "Hỗ trợ tăng trưởng cho hồ sơ, bài đăng và reels.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "tiktok", name: "TikTok", description: "Hỗ trợ tăng trưởng cho kênh và nội dung video ngắn.", services: ["Followers", "Likes", "Views", "Engagement"] },
      { key: "youtube", name: "YouTube", description: "Hỗ trợ tăng trưởng cho kênh và nội dung video dài.", services: ["Subscribers", "Views", "Likes"] },
      { key: "telegram", name: "Telegram", description: "Hỗ trợ tăng trưởng cho kênh và nhóm cộng đồng.", services: ["Members", "Views", "Reactions"] },
      { key: "x", name: "X", description: "Hỗ trợ tăng trưởng cho hồ sơ và bài đăng.", services: ["Followers", "Likes", "Views"] },
      { key: "threads", name: "Threads", description: "Hỗ trợ tăng trưởng cho hồ sơ và nội dung văn bản.", services: ["Followers", "Likes", "Views"] },
      { key: "spotify", name: "Spotify", description: "Hỗ trợ tăng trưởng cho nghệ sĩ, playlist và nội dung âm thanh.", services: ["Plays", "Followers", "Playlist"] },
    ] as PlatformItem[],
  },
EOF

echo "part3 done"