#!/usr/bin/env bash
set -euo pipefail

cat >> src/content/dictionaries.ts << 'EOF'

  services: {
    eyebrow: "DANH MỤC DỊCH VỤ",
    title: "Dịch vụ mạng xã hội",
    description:
      "SMMZin hướng tới cung cấp các nhóm dịch vụ mạng xã hội phổ biến. Danh mục chi tiết và thông số cụ thể sẽ được công bố khi ra mắt.",
    disclaimer:
      "SMMZin không cam kết kết quả cụ thể. Hiệu quả phụ thuộc vào nền tảng, nội dung và cách sử dụng.",
    groups: [
      { title: "Followers", description: "Tăng lượng người theo dõi và thành viên trên các nền tảng.", items: ["Followers", "Subscribers", "Members"] },
      { title: "Engagement", description: "Gia tăng tương tác trên nội dung và bài đăng.", items: ["Likes", "Views", "Comments", "Reactions", "Shares"] },
      { title: "Growth", description: "Hỗ trợ tăng trưởng tổng thể cho kênh và thương hiệu.", items: ["Tăng trưởng người xem", "Tăng trưởng tương tác", "Hiện diện mạng xã hội"] },
    ] as ServiceGroup[],
  },

  how: {
    eyebrow: "CÁCH HOẠT ĐỘNG",
    title: "Đơn giản từ khởi đầu đến mở rộng.",
    description: "Bốn bước, không có bước nào thừa.",
    steps: [
      { number: "01", title: "Tạo", description: "Tạo tài khoản SMMZin và thiết lập không gian làm việc của bạn." },
      { number: "02", title: "Chọn", description: "Chọn nền tảng và nhóm dịch vụ phù hợp với mục tiêu của bạn." },
      { number: "03", title: "Quản lý", description: "Theo dõi tiến độ, trạng thái và lịch sử hoạt động trong một nơi." },
      { number: "04", title: "Mở rộng", description: "Mở rộng quy mô khi nhu cầu và số lượng khách hàng tăng lên." },
    ] as StepItem[],
  },

  preview: {
    eyebrow: "GIAO DIỆN SẢN PHẨM",
    title: "Cách quản lý tăng trưởng xã hội tốt hơn.",
    description: "Hình dung dưới đây là bản xem trước giao diện SMMZin trong giai đoạn phát triển.",
    demoNotice: "Bản xem trước giao diện. Số liệu chỉ mang tính minh hoạ, không phải dữ liệu thực tế của SMMZin.",
    dashboardTitle: "SMMZin Dashboard",
    dashboardSubtitle: "Bản xem trước",
    stats: [
      { label: "Số dư", value: "$2,480.00" },
      { label: "Đơn hàng", value: "12,842" },
      { label: "Hoàn thành", value: "98.7%" },
    ],
    chartLabel: "Lưu lượng 7 ngày",
    ordersTitle: "Đơn hàng gần đây",
    orders: [
      { service: "Instagram Followers", id: "#10241", status: "Hoàn thành", progress: 100 },
      { service: "TikTok Views", id: "#10240", status: "Đang chạy", progress: 64 },
      { service: "YouTube Views", id: "#10239", status: "Đang chạy", progress: 38 },
      { service: "Facebook Likes", id: "#10238", status: "Hoàn thành", progress: 100 },
    ],
  },

  api: {
    eyebrow: "API",
    title: "Dành cho cả nhà phát triển.",
    description:
      "SMMZin được thiết kế với định hướng tích hợp API cho developer, agency và reseller. Endpoint dưới đây là bản xem trước.",
    previewLabel: "API PREVIEW",
    note: "Chưa khả dụng. Đây là bản xem trước cấu trúc API dự kiến, không phải endpoint đang hoạt động.",
    points: ["Xác thực bằng API key", "Tạo và theo dõi đơn hàng", "Truy vấn danh mục dịch vụ", "Webhook cập nhật trạng thái"],
  },

  audience: {
    eyebrow: "DÀNH CHO AI",
    title: "Dành cho những ai tăng trưởng trên mạng.",
    description: "SMMZin được thiết kế cho nhiều mô hình công việc khác nhau.",
    groups: [
      { title: "Creators", description: "Cho nhà sáng tạo đang trực tiếp quản lý tăng trưởng kênh của mình." },
      { title: "Agencies", description: "Cho agency đang vận hành nhiều khách hàng cùng lúc." },
      { title: "Resellers", description: "Cho đơn vị xây dựng dịch vụ mạng xã hội của riêng mình." },
      { title: "Brands", description: "Cho doanh nghiệp quản lý hiện diện và tăng trưởng mạng xã hội." },
    ] as AudienceItem[],
  },

  philosophy: {
    eyebrow: "TRIẾT LÝ SẢN PHẨM",
    lines: ["Ít ma sát hơn.", "Tăng trưởng nhiều hơn."],
    description:
      "Chúng tôi tin rằng công cụ tốt nhất là công cụ khiến công việc trở nên rõ ràng hơn. SMMZin được xây dựng quanh nguyên tắc đó: ít bước hơn, ít nhầm lẫn hơn, nhiều thời gian hơn cho công việc thực sự.",
    values: ["Đơn giản", "Mạnh mẽ", "Có thể mở rộng"],
  },

  faq: {
    eyebrow: "HỎI ĐÁP",
    title: "Câu hỏi thường gặp",
    description: "Những điều bạn có thể muốn biết về SMMZin.",
    items: [
      { q: "SMMZin là gì?", a: "SMMZin là một nền tảng Social Media Marketing (SMM Panel) thế hệ mới, giúp quản lý và đơn giản hoá các quy trình tăng trưởng trên nhiều nền tảng mạng xã hội." },
      { q: "SMMZin có phải là một SMM Panel không?", a: "Có. SMMZin thuộc nhóm sản phẩm SMM Panel / nền tảng Social Media Marketing, nhưng được thiết kế theo hướng một sản phẩm SaaS hiện đại thay vì mô hình panel truyền thống." },
      { q: "SMMZin hỗ trợ những nền tảng nào?", a: "SMMZin hướng tới hỗ trợ Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads và Spotify." },
      { q: "SMMZin dành cho ai?", a: "SMMZin dành cho creators, agency, reseller, thương hiệu và doanh nghiệp đang cần quản lý tăng trưởng mạng xã hội." },
      { q: "SMMZin có hỗ trợ tích hợp API không?", a: "Có. API nằm trong định hướng phát triển của SMMZin cho developer, agency và reseller. Endpoint cụ thể sẽ được công bố khi ra mắt." },
      { q: "Khi nào SMMZin ra mắt?", a: "SMMZin hiện đang trong giai đoạn hoàn thiện sản phẩm. Hãy để lại email để nhận thông báo ngay khi chúng tôi ra mắt." },
      { q: "Làm sao để nhận thông tin ra mắt?", a: "Bạn có thể để lại email ở phần \"Nhận thông báo\" trên trang này. Chúng tôi chỉ liên hệ khi có thông tin về ngày ra mắt." },
    ] as FaqItem[],
  },

  notify: {
    eyebrow: "NHẬN THÔNG BÁO",
    title: "Là người đầu tiên biết.",
    description: "SMMZin đang được hoàn thiện. Để lại email và nhận thông báo khi chúng tôi ra mắt.",
    label: "Địa chỉ email",
    placeholder: "Email của bạn",
    button: "Nhận thông báo",
    sending: "Đang gửi…",
    success: "Cảm ơn bạn. Chúng tôi sẽ liên hệ khi SMMZin ra mắt.",
    errorRequired: "Vui lòng nhập email của bạn.",
    errorInvalid: "Email không hợp lệ. Vui lòng kiểm tra lại.",
    privacy: "Chúng tôi chỉ dùng email của bạn để thông báo về SMMZin.",
  },

  finalCta: {
    title: "Một điều gì đó tốt hơn đang đến.",
    description: "SMMZin đã gần hoàn thiện.",
    button: "Nhận thông báo",
  },

  footer: {
    description: "Nền tảng Social Media Marketing thế hệ mới.",
    columns: [
      { title: "Sản phẩm", links: [
        { label: "Tính năng", href: "#features" },
        { label: "Nền tảng", href: "#platforms" },
        { label: "API", href: "#api" },
      ]},
      { title: "Tài nguyên", links: [
        { label: "Hỏi đáp", href: "#faq" },
        { label: "Tài liệu", href: "#api" },
      ]},
      { title: "Công ty", links: [
        { label: "Giới thiệu", href: "#about" },
        { label: "Liên hệ", href: "#notify" },
      ]},
      { title: "Pháp lý", links: [
        { label: "Quyền riêng tư", href: "/privacy" },
        { label: "Điều khoản", href: "/terms" },
      ]},
    ] as FooterColumn[],
    rights: "Mọi quyền được bảo lưu.",
  },

  legal: {
    updatedLabel: "Cập nhật lần cuối",
    updated: "01/01/2026",
    privacy: {
      title: "Chính sách quyền riêng tư",
      intro: "Trang này mô tả cách SMMZin xử lý thông tin trong giai đoạn trước khi ra mắt. Nội dung sẽ được cập nhật đầy đủ khi sản phẩm chính thức hoạt động.",
      sections: [
        { heading: "Thông tin chúng tôi thu thập", body: "Ở giai đoạn hiện tại, SMMZin chỉ thu thập địa chỉ email bạn tự nguyện cung cấp thông qua biểu mẫu nhận thông báo." },
        { heading: "Mục đích sử dụng", body: "Email được sử dụng duy nhất để thông báo cho bạn khi SMMZin ra mắt. Chúng tôi không bán hoặc chia sẻ dữ liệu này cho bên thứ ba vì mục đích quảng cáo." },
        { heading: "Lưu trữ và xoá dữ liệu", body: "Bạn có thể yêu cầu xoá email của mình bất kỳ lúc nào bằng cách liên hệ với chúng tôi qua địa chỉ email ở chân trang." },
      ] as LegalSection[],
    },
    terms: {
      title: "Điều khoản sử dụng",
      intro: "Trang này mô tả các điều khoản áp dụng cho website SMMZin trong giai đoạn trước khi ra mắt. Nội dung sẽ được cập nhật đầy đủ khi sản phẩm chính thức hoạt động.",
      sections: [
        { heading: "Tính chất của website", body: "Website này là trang giới thiệu sản phẩm đang trong giai đoạn phát triển. Một số nội dung, bao gồm giao diện và API minh hoạ, chỉ mang tính chất xem trước." },
        { heading: "Không cam kết kết quả", body: "SMMZin không đưa ra cam kết về kết quả cụ thể. Hiệu quả của bất kỳ dịch vụ nào phụ thuộc vào nền tảng, nội dung và cách sử dụng." },
        { heading: "Thay đổi nội dung", body: "Chúng tôi có thể thay đổi nội dung, tính năng và điều khoản trên website này vào bất kỳ thời điểm nào mà không cần thông báo trước." },
      ] as LegalSection[],
    },
  },
};

export type Dictionary = typeof vi;
EOF

echo "part4 done"