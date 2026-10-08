import type { Locale } from "@/lib/i18n";
import type { PlatformItem } from "./platforms";
import { platformsVi, platformsEn } from "./platforms-data";

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
    title: "SMMZin — SMM Panel & Nền tảng Social Media Marketing thế hệ mới",
    description:
      "SMMZin là SMM Panel thế hệ mới giúp creators, agency, reseller và thương hiệu quản lý tăng trưởng mạng xã hội. Hỗ trợ Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads, Spotify. Sắp ra mắt.",
    keywords: [
      "SMMZin",
      "SMM Panel",
      "SMM Panel Việt Nam",
      "SMM Panel giá rẻ",
      "SMM Panel uy tín",
      "panel SMM",
      "hệ thống SMM Panel",
      "nền tảng SMM Panel",
      "SMM Panel cho Agency",
      "SMM Panel cho Reseller",
      "API SMM đại lý",
      "tăng like Facebook",
      "tăng like TikTok",
      "tăng like Instagram",
      "mua like Facebook",
      "buff like",
      "tăng follow Facebook",
      "tăng follow TikTok",
      "tăng follow Instagram",
      "mua follow",
      "buff follow",
      "tăng view TikTok",
      "tăng view YouTube",
      "buff view TikTok",
      "mua view TikTok",
      "tăng sub YouTube",
      "mua sub YouTube",
      "buff sub",
      "tăng mắt livestream TikTok",
      "buff mắt live TikTok",
      "tăng mắt live",
      "tăng tương tác mạng xã hội",
      "dịch vụ tăng tương tác",
      "dịch vụ seeding",
      "seeding mạng xã hội",
      "mua thành viên Telegram",
      "tăng member Telegram",
      "buff Telegram",
      "SMM Panel là gì",
      "buff là gì",
      "buff like là gì",
      "buff follow là gì",
      "buff view là gì",
      "dịch vụ tăng like uy tín",
      "tăng like giá rẻ",
      "tăng follow không tụt",
      "buff like không tụt",
    ],
  },

  common: {
    comingSoon: "SẮP RA MẮT",
    notifyMe: "Nhận thông báo",
    explore: "Khám phá SMMZin",
    languageLabel: "Chuyển đổi ngôn ngữ",
    backHome: "Về trang chủ",
    demo: "Trải nghiệm trước",
  },

  theme: {
    toggleToLight: "Chuyển sang giao diện sáng",
    toggleToDark: "Chuyển sang giao diện tối",
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
    countdownLabel: "SẮP RA MẮT",
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
    keywordsLabel: "Dịch vụ phổ biến",
    detailCta: "Xem dịch vụ",
    items: platformsVi as PlatformItem[],
  },

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
      { q: "Làm sao để nhận thông tin ra mắt?", a: "Bạn có thể để lại email ở phần Nhận thông báo trên trang này. Chúng tôi chỉ liên hệ khi có thông tin về ngày ra mắt." },
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

const en: Dictionary = {
  meta: {
    title: "SMMZin — Next Generation SMM Panel & Social Media Marketing Platform",
    description:
      "SMMZin is a next-generation SMM panel for creators, agencies, resellers and brands. Manage social media growth across Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads and Spotify. Launching soon.",
    keywords: [
      "SMMZin",
      "SMM panel",
      "SMM panel 2026",
      "best SMM panel",
      "best SMM panel 2026",
      "cheapest SMM panel",
      "cheap SMM panel",
      "affordable SMM panel",
      "social media marketing panel",
      "SMM panel Vietnam",
      "SMM panel for resellers",
      "SMM reseller panel",
      "best SMM panel for resellers",
      "white label SMM panel",
      "SMM panel for agencies",
      "SMM panel API integration",
      "SMM panel with API",
      "SMM panel instant delivery",
      "wholesale social media services",
      "buy Instagram followers",
      "buy Instagram likes",
      "buy TikTok followers",
      "buy TikTok views",
      "buy YouTube views",
      "buy YouTube subscribers",
      "buy Facebook page likes",
      "buy Facebook followers",
      "buy Twitter followers",
      "buy Spotify plays",
      "buy Telegram members",
      "SMM panel reviews",
      "trusted SMM panel",
      "legit SMM panel",
      "real SMM panel",
      "non-drop SMM panel",
      "best SMM panel for Instagram",
      "best SMM panel for TikTok",
      "what is an SMM panel",
      "how does an SMM panel work",
    ],
  },

  common: {
    comingSoon: "COMING SOON",
    notifyMe: "Notify Me",
    explore: "Explore SMMZin",
    languageLabel: "Switch language",
    backHome: "Back to home",
    demo: "Try Demo",
  },

  theme: {
    toggleToLight: "Switch to light mode",
    toggleToDark: "Switch to dark mode",
  },

  nav: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Platforms", href: "#platforms" },
      { label: "Solutions", href: "#solutions" },
      { label: "FAQ", href: "#faq" },
    ] as NavItem[],
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "COMING SOON",
    title: "Social Growth, Reimagined.",
    description:
      "SMMZin is building a smarter, simpler and more powerful platform for modern social media marketing and growth.",
    countdownLabel: "COMING SOON",
    hours: "HOURS",
    minutes: "MINUTES",
    seconds: "SECONDS",
  },

  marquee: { heading: "BUILT FOR THE SOCIAL WEB" },

  about: {
    eyebrow: "ABOUT",
    title: "What is SMMZin?",
    paragraphs: [
      "SMMZin is a Social Media Marketing platform (SMM Panel) designed to simplify social media growth and marketing workflows across multiple networks.",
      "Instead of juggling disconnected tools, SMMZin aims to be one unified ecosystem: manage services, follow orders, track status and scale — all in one place.",
      "The platform is currently in development and will launch soon.",
    ],
    audiencesLabel: "Built for",
    audiences: ["Creators", "Agencies", "Resellers", "Brands", "Businesses"],
    pillars: [
      { title: "Multi-platform", description: "Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads and Spotify." },
      { title: "Centralised operations", description: "One workspace for services, orders and tracking." },
      { title: "Built to scale", description: "Designed with agencies, resellers and API integration in mind." },
    ],
  },

  benefits: {
    eyebrow: "WHY SMMZIN",
    title: "Everything You Need To Scale Social.",
    description:
      "SMMZin focuses on what actually makes a difference: clarity, speed and the ability to scale.",
    items: [
      { title: "Unified Platform", description: "Manage social media growth workflows from one ecosystem." },
      { title: "Smart Automation", description: "Reduce repetitive tasks with automated workflows." },
      { title: "Real-time Control", description: "Track activity and order status more efficiently." },
      { title: "Built To Scale", description: "Designed for creators, agencies and growing businesses." },
    ] as FeatureItem[],
  },

  features: {
    eyebrow: "FEATURES",
    title: "Designed For Modern Social Growth",
    description: "The core capabilities SMMZin is building for launch.",
    items: [
      { title: "Multi-platform Management", description: "Operate services across multiple social networks from one interface." },
      { title: "Automated Order Processing", description: "Order intake and processing handled through automated workflows." },
      { title: "Service Management", description: "Organise service catalogues clearly, easy to browse and update." },
      { title: "Real-time Tracking", description: "See status, progress and activity history instantly." },
      { title: "Developer API", description: "A planned API layer for developers, agencies and resellers." },
      { title: "Reseller Ready", description: "Structured for resale models and growing service businesses." },
    ] as FeatureItem[],
  },

  platforms: {
    eyebrow: "ECOSYSTEM",
    title: "One Platform. Multiple Networks.",
    description:
      "SMMZin is being built to support the most widely used social platforms, with clear service categories for each.",
    servicesLabel: "Service categories",
    keywordsLabel: "Popular services",
    detailCta: "View Services",
    items: platformsEn as PlatformItem[],
  },

  services: {
    eyebrow: "SERVICE CATEGORIES",
    title: "Social Media Services",
    description:
      "SMMZin aims to cover common social media service categories. Detailed catalogues and specifications will be published at launch.",
    disclaimer:
      "SMMZin does not guarantee specific results. Outcomes depend on the platform, the content and how services are used.",
    groups: [
      { title: "Followers", description: "Grow audiences and members across networks.", items: ["Followers", "Subscribers", "Members"] },
      { title: "Engagement", description: "Increase interaction on posts and content.", items: ["Likes", "Views", "Comments", "Reactions", "Shares"] },
      { title: "Growth", description: "Support overall channel and brand growth.", items: ["Audience growth", "Engagement growth", "Social visibility"] },
    ] as ServiceGroup[],
  },

  how: {
    eyebrow: "HOW IT WORKS",
    title: "Simple From Start To Scale.",
    description: "Four steps. Nothing unnecessary.",
    steps: [
      { number: "01", title: "Create", description: "Create your SMMZin account and set up your workspace." },
      { number: "02", title: "Choose", description: "Pick the platform and service category that fits your goal." },
      { number: "03", title: "Manage", description: "Track progress, status and history in one place." },
      { number: "04", title: "Scale", description: "Expand as demand and client volume grow." },
    ] as StepItem[],
  },

  preview: {
    eyebrow: "PRODUCT PREVIEW",
    title: "A Better Way To Manage Social Growth.",
    description: "The view below is a preview of the SMMZin interface during development.",
    demoNotice: "Interface preview. Figures are illustrative only and are not real SMMZin data.",
    dashboardTitle: "SMMZin Dashboard",
    dashboardSubtitle: "Preview build",
    stats: [
      { label: "Balance", value: "$2,480.00" },
      { label: "Orders", value: "12,842" },
      { label: "Completed", value: "98.7%" },
    ],
    chartLabel: "7-day volume",
    ordersTitle: "Recent Orders",
    orders: [
      { service: "Instagram Followers", id: "#10241", status: "Completed", progress: 100 },
      { service: "TikTok Views", id: "#10240", status: "Running", progress: 64 },
      { service: "YouTube Views", id: "#10239", status: "Running", progress: 38 },
      { service: "Facebook Likes", id: "#10238", status: "Completed", progress: 100 },
    ],
  },

  api: {
    eyebrow: "API",
    title: "Built For Developers, Too.",
    description:
      "SMMZin is designed with future API integration in mind for developers, agencies and resellers. The endpoint below is a preview.",
    previewLabel: "API PREVIEW",
    note: "Not live. This is a preview of the intended API structure, not an active endpoint.",
    points: ["API key authentication", "Create and track orders", "Query service catalogues", "Status update webhooks"],
  },

  audience: {
    eyebrow: "WHO IT'S FOR",
    title: "Built For People Who Grow Online.",
    description: "SMMZin is designed for a range of working models.",
    groups: [
      { title: "Creators", description: "For creators managing their own channel growth." },
      { title: "Agencies", description: "For agencies handling multiple clients at once." },
      { title: "Resellers", description: "For businesses building their own social media services." },
      { title: "Brands", description: "For businesses managing social presence and growth." },
    ] as AudienceItem[],
  },

  philosophy: {
    eyebrow: "PRODUCT PHILOSOPHY",
    lines: ["Less Friction.", "More Growth."],
    description:
      "We believe the best tool is the one that makes the work clearer. SMMZin is built around that principle: fewer steps, less confusion, more time for the work that actually matters.",
    values: ["Simple", "Powerful", "Scalable"],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description: "Things you may want to know about SMMZin.",
    items: [
      { q: "What is SMMZin?", a: "SMMZin is a next-generation Social Media Marketing platform (SMM Panel) that helps manage and simplify growth workflows across multiple social networks." },
      { q: "Is SMMZin an SMM Panel?", a: "Yes. SMMZin belongs to the SMM Panel / Social Media Marketing platform category, but it is designed as a modern SaaS product rather than a traditional panel." },
      { q: "Which social media platforms does SMMZin support?", a: "SMMZin is being built to support Facebook, Instagram, TikTok, YouTube, Telegram, X, Threads and Spotify." },
      { q: "Who is SMMZin built for?", a: "SMMZin is built for creators, agencies, resellers, brands and businesses that need to manage social media growth." },
      { q: "Will SMMZin support API integration?", a: "Yes. API integration is part of the SMMZin roadmap for developers, agencies and resellers. Specific endpoints will be published at launch." },
      { q: "When will SMMZin launch?", a: "SMMZin is currently in development. Leave your email and we will let you know as soon as we launch." },
      { q: "How can I receive launch updates?", a: "Use the Notify Me form on this page. We only reach out with launch-related information." },
    ] as FaqItem[],
  },

  notify: {
    eyebrow: "NOTIFY ME",
    title: "Be The First To Know.",
    description: "SMMZin is getting ready. Leave your email and receive a notification when we launch.",
    label: "Email address",
    placeholder: "Your email",
    button: "Notify Me",
    sending: "Sending…",
    success: "Thank you. We will reach out when SMMZin launches.",
    errorRequired: "Please enter your email address.",
    errorInvalid: "That email address doesn't look right. Please check it.",
    privacy: "We only use your email to notify you about SMMZin.",
  },

  finalCta: {
    title: "Something Better Is Coming.",
    description: "SMMZin is almost ready.",
    button: "Notify Me",
  },

  footer: {
    description: "Next-generation social media marketing platform.",
    columns: [
      { title: "Product", links: [
        { label: "Features", href: "#features" },
        { label: "Platforms", href: "#platforms" },
        { label: "API", href: "#api" },
      ]},
      { title: "Resources", links: [
        { label: "FAQ", href: "#faq" },
        { label: "Documentation", href: "#api" },
      ]},
      { title: "Company", links: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#notify" },
      ]},
      { title: "Legal", links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]},
    ] as FooterColumn[],
    rights: "All rights reserved.",
  },

  legal: {
    updatedLabel: "Last updated",
    updated: "January 1, 2026",
    privacy: {
      title: "Privacy Policy",
      intro: "This page describes how SMMZin handles information during the pre-launch stage. It will be expanded once the product is live.",
      sections: [
        { heading: "Information we collect", body: "At this stage, SMMZin only collects the email address you voluntarily provide through the Notify Me form." },
        { heading: "How we use it", body: "Your email is used solely to notify you when SMMZin launches. We do not sell or share this data with third parties for advertising." },
        { heading: "Storage and removal", body: "You can request removal of your email at any time by contacting us at the address listed in the footer." },
      ] as LegalSection[],
    },
    terms: {
      title: "Terms of Use",
      intro: "This page describes the terms that apply to the SMMZin website during the pre-launch stage. It will be expanded once the product is live.",
      sections: [
        { heading: "Nature of this website", body: "This website is a product introduction page for software in development. Some content, including interface and API previews, is illustrative only." },
        { heading: "No guaranteed results", body: "SMMZin makes no guarantee of specific results. The outcome of any service depends on the platform, the content and how it is used." },
        { heading: "Changes", body: "We may change the content, features and terms on this website at any time without prior notice." },
      ] as LegalSection[],
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.vi;
}
