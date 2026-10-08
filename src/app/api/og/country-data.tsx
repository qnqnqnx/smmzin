/**
 * Dữ liệu OG cho mỗi country.
 * - name: tên tiếng Anh (fallback)
 * - displayName: tên chữ bản địa
 * - accent / accent2: màu chủ đạo
 * - Icon: SVG silhouette đơn giản cho OG (monochrome-friendly)
 *
 * Icon SVG phải đơn giản (chỉ path đơn, không gradient, không filter)
 * để Satori render được.
 */
import type { JSX } from "react";

export type CountryOGEntry = {
  name: string;
  displayName: string;
  accent: string;
  accent2: string;
  Icon: () => JSX.Element;
};

// ------------------------------------------------------------
// SVG silhouettes — đơn giản, 1-2 màu, dùng currentColor
// ------------------------------------------------------------
function IconVietnamDrum() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Trống đồng: 4 vòng tròn đồng tâm + sao giữa */}
      {[46, 38, 30, 22].map((r) => (
        <circle key={r} cx="50" cy="50" r={r} stroke="currentColor" strokeWidth={r === 46 ? 1.5 : 0.7} opacity={1 - r / 70} />
      ))}
      {/* Tia sáng */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30) * Math.PI / 180;
        return (
          <line
            key={i}
            x1={50 + Math.cos(a) * 14}
            y1={50 + Math.sin(a) * 14}
            x2={50 + Math.cos(a) * 20}
            y2={50 + Math.sin(a) * 20}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
      {/* Sao giữa */}
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function IconChinaPanda() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Đầu gấu trúc */}
      <circle cx="50" cy="45" r="26" fill="currentColor" />
      {/* Tai */}
      <circle cx="28" cy="25" r="10" fill="currentColor" />
      <circle cx="72" cy="25" r="10" fill="currentColor" />
      {/* Vùng mắt — để trống (nền tối bên trong) */}
      <ellipse cx="40" cy="42" rx="7" ry="9" fill="black" opacity="0.6" />
      <ellipse cx="60" cy="42" rx="7" ry="9" fill="black" opacity="0.6" />
      {/* Mắt trắng */}
      <circle cx="40" cy="42" r="2.5" fill="currentColor" />
      <circle cx="60" cy="42" r="2.5" fill="currentColor" />
      {/* Mũi */}
      <ellipse cx="50" cy="56" rx="4" ry="3" fill="black" opacity="0.6" />
      {/* Trúc bên cạnh */}
      <rect x="80" y="30" width="3" height="55" rx="1.5" fill="currentColor" opacity="0.7" />
      <ellipse cx="86" cy="42" rx="8" ry="3" fill="currentColor" opacity="0.7" />
      <ellipse cx="86" cy="62" rx="8" ry="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function IconUsaEagle() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Cánh trái */}
      <path d="M 50 40 Q 20 30, 8 55 Q 20 65, 35 60 Q 42 58, 48 50 Z" fill="currentColor" />
      {/* Cánh phải */}
      <path d="M 50 40 Q 80 30, 92 55 Q 80 65, 65 60 Q 58 58, 52 50 Z" fill="currentColor" />
      {/* Đầu trắng (vùng trống) */}
      <circle cx="50" cy="28" r="12" fill="currentColor" />
      {/* Mắt */}
      <circle cx="45" cy="26" r="1.5" fill="black" opacity="0.7" />
      <circle cx="55" cy="26" r="1.5" fill="black" opacity="0.7" />
      {/* Mỏ */}
      <path d="M 50 30 L 44 38 L 56 38 Z" fill="black" opacity="0.5" />
      {/* Thân */}
      <ellipse cx="50" cy="58" rx="12" ry="18" fill="currentColor" />
      {/* Sao 2 bên */}
      <polygon points="15,20 17,26 23,26 18,30 20,36 15,32 10,36 12,30 7,26 13,26" fill="currentColor" opacity="0.8" />
      <polygon points="85,20 87,26 93,26 88,30 90,36 85,32 80,36 82,30 77,26 83,26" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function IconIndiaTaj() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Dome chính */}
      <path d="M 35 55 Q 35 25, 50 20 Q 65 25, 65 55 Z" fill="currentColor" />
      {/* Chóp */}
      <path d="M 47 20 L 50 12 L 53 20 Z" fill="currentColor" />
      {/* Thân chính */}
      <rect x="30" y="55" width="40" height="30" fill="currentColor" />
      {/* Cửa */}
      <path d="M 45 85 L 45 68 Q 50 62, 55 68 L 55 85 Z" fill="black" opacity="0.5" />
      {/* 2 minaret */}
      <rect x="18" y="35" width="5" height="50" fill="currentColor" />
      <circle cx="20.5" cy="32" r="4" fill="currentColor" />
      <rect x="77" y="35" width="5" height="50" fill="currentColor" />
      <circle cx="79.5" cy="32" r="4" fill="currentColor" />
      {/* Hoa sen nhỏ 2 bên */}
      <circle cx="12" cy="80" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="88" cy="80" r="4" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function IconThailandTemple() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Chóp vàng */}
      <path d="M 50 8 L 45 30 L 55 30 Z" fill="currentColor" />
      <path d="M 45 30 L 38 45 L 62 45 L 55 30 Z" fill="currentColor" />
      <path d="M 38 45 L 30 60 L 70 60 L 62 45 Z" fill="currentColor" />
      <path d="M 30 60 L 22 75 L 78 75 L 70 60 Z" fill="currentColor" />
      {/* Thân chùa */}
      <rect x="30" y="75" width="40" height="15" fill="currentColor" />
      {/* Cửa */}
      <rect x="46" y="80" width="8" height="10" fill="black" opacity="0.5" />
      {/* 2 tháp nhỏ 2 bên */}
      <rect x="14" y="68" width="4" height="22" fill="currentColor" />
      <path d="M 14 68 L 16 60 L 18 68 Z" fill="currentColor" />
      <rect x="82" y="68" width="4" height="22" fill="currentColor" />
      <path d="M 82 68 L 84 60 L 86 68 Z" fill="currentColor" />
    </svg>
  );
}

function IconIndonesiaWayang() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Mũ miện wayang */}
      <path d="M 40 30 L 50 8 L 60 30 Z" fill="currentColor" />
      <circle cx="50" cy="6" r="2" fill="currentColor" />
      {/* Đầu */}
      <ellipse cx="50" cy="38" rx="10" ry="12" fill="currentColor" />
      {/* Mắt */}
      <ellipse cx="45" cy="35" rx="2" ry="1.2" fill="black" opacity="0.6" />
      <ellipse cx="55" cy="35" rx="2" ry="1.2" fill="black" opacity="0.6" />
      {/* Thân */}
      <path d="M 42 50 L 38 88 L 62 88 L 58 50 Z" fill="currentColor" />
      {/* Tay */}
      <path d="M 40 55 L 22 45 L 16 55" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 60 55 L 78 60 L 84 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Hoạ tiết sarong */}
      <path d="M 42 70 L 58 70" stroke="black" strokeWidth="0.8" opacity="0.4" />
      <path d="M 42 78 L 58 78" stroke="black" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function IconSouthKoreaPagoda() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Mái cong tầng 2 */}
      <path d="M 30 30 Q 32 26, 38 26 L 45 26 Q 50 18, 55 26 L 62 26 Q 68 26, 70 30 Q 62 34, 55 30 L 45 30 Q 38 34, 30 30 Z" fill="currentColor" />
      {/* Mái cong tầng 1 */}
      <path d="M 20 55 Q 24 49, 32 49 L 42 49 Q 50 40, 58 49 L 68 49 Q 76 49, 80 55 Q 70 60, 60 55 L 40 55 Q 30 60, 20 55 Z" fill="currentColor" />
      {/* Cột */}
      {[30, 42, 54, 66].map((x) => (
        <rect key={x} x={x} y="60" width="4" height="28" fill="currentColor" />
      ))}
      {/* Cửa */}
      <rect x="46" y="66" width="8" height="22" fill="black" opacity="0.5" />
      {/* Nền */}
      <rect x="20" y="88" width="60" height="4" fill="currentColor" />
    </svg>
  );
}

function IconMalaysiaTwinTowers() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Tháp trái */}
      <rect x="25" y="25" width="10" height="65" fill="currentColor" />
      <path d="M 26 25 L 30 12 L 34 25 Z" fill="currentColor" />
      <circle cx="30" cy="10" r="1.5" fill="currentColor" />
      {/* Tháp phải */}
      <rect x="65" y="25" width="10" height="65" fill="currentColor" />
      <path d="M 66 25 L 70 12 L 74 25 Z" fill="currentColor" />
      <circle cx="70" cy="10" r="1.5" fill="currentColor" />
      {/* Cầu nối */}
      <rect x="35" y="55" width="30" height="4" fill="currentColor" />
      {/* Cửa sổ — vạch ngang */}
      {[35, 45, 65, 75].map((y) => (
        <g key={y}>
          <rect x="26" y={y} width="8" height="1" fill="black" opacity="0.4" />
          <rect x="66" y={y} width="8" height="1" fill="black" opacity="0.4" />
        </g>
      ))}
      {/* Nền */}
      <rect x="20" y="90" width="60" height="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function IconSingaporeMerlion() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Bờm sư tử */}
      <circle cx="50" cy="35" r="18" fill="currentColor" />
      {/* Mặt */}
      <circle cx="50" cy="35" r="13" fill="currentColor" opacity="0.9" />
      {/* Mắt */}
      <circle cx="45" cy="32" r="1.5" fill="black" opacity="0.7" />
      <circle cx="55" cy="32" r="1.5" fill="black" opacity="0.7" />
      {/* Mũi */}
      <circle cx="50" cy="38" r="1.2" fill="black" opacity="0.6" />
      {/* Thân cá */}
      <ellipse cx="50" cy="65" rx="18" ry="22" fill="currentColor" />
      {/* Vòi phun nước */}
      <path d="M 50 50 Q 45 55, 48 62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Vây */}
      <path d="M 32 65 L 20 60 L 28 72 Z" fill="currentColor" />
      <path d="M 32 75 L 18 78 L 28 82 Z" fill="currentColor" />
      <path d="M 68 65 L 80 60 L 72 72 Z" fill="currentColor" />
      <path d="M 68 75 L 82 78 L 72 82 Z" fill="currentColor" />
    </svg>
  );
}

function IconCambodiaAngkor() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* 5 tháp — 3 chính + 2 bên */}
      {/* Tháp giữa cao nhất */}
      <path d="M 46 20 L 44 30 L 56 30 L 54 20 Z" fill="currentColor" />
      <rect x="44" y="30" width="12" height="15" fill="currentColor" />
      <path d="M 44 45 L 42 55 L 58 55 L 56 45 Z" fill="currentColor" />
      {/* Tháp trái */}
      <path d="M 32 30 L 30 40 L 40 40 L 38 30 Z" fill="currentColor" />
      <rect x="30" y="40" width="10" height="15" fill="currentColor" />
      {/* Tháp phải */}
      <path d="M 60 30 L 58 40 L 68 40 L 66 30 Z" fill="currentColor" />
      <rect x="60" y="40" width="10" height="15" fill="currentColor" />
      {/* Tháp nhỏ ngoài */}
      <rect x="18" y="45" width="8" height="15" fill="currentColor" opacity="0.85" />
      <rect x="74" y="45" width="8" height="15" fill="currentColor" opacity="0.85" />
      {/* Nền tảng */}
      <rect x="14" y="60" width="72" height="4" fill="currentColor" />
      <rect x="10" y="64" width="80" height="4" fill="currentColor" opacity="0.85" />
      <rect x="6" y="68" width="88" height="4" fill="currentColor" opacity="0.7" />
      {/* Cửa */}
      <rect x="47" y="55" width="6" height="5" fill="black" opacity="0.5" />
    </svg>
  );
}

function IconPakistanMosque() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Trăng lưỡi liềm + sao */}
      <path d="M 70 15 A 8 8 0 1 0 70 31 A 6 6 0 1 1 70 15 Z" fill="currentColor" />
      <polygon points="80,20 82,24 86,24 83,27 84,31 80,28 76,31 77,27 74,24 78,24" fill="currentColor" />
      {/* Mái tam giác đặc trưng Faisal Mosque */}
      <path d="M 20 55 L 50 25 L 80 55 Z" fill="currentColor" />
      {/* Đường chéo trên mái */}
      <path d="M 30 55 L 50 32 L 70 55" stroke="black" strokeWidth="0.6" opacity="0.4" fill="none" />
      <path d="M 40 55 L 50 40 L 60 55" stroke="black" strokeWidth="0.6" opacity="0.4" fill="none" />
      {/* Nền */}
      <rect x="20" y="55" width="60" height="30" fill="currentColor" opacity="0.9" />
      {/* Cửa */}
      <rect x="44" y="65" width="12" height="20" fill="black" opacity="0.4" />
      {/* 4 minaret */}
      <rect x="14" y="35" width="4" height="50" fill="currentColor" />
      <path d="M 14 35 L 16 27 L 18 35 Z" fill="currentColor" />
      <rect x="82" y="35" width="4" height="50" fill="currentColor" />
      <path d="M 82 35 L 84 27 L 86 35 Z" fill="currentColor" />
    </svg>
  );
}

function IconBangladeshTiger() {
  return (
    <svg width="380" height="380" viewBox="0 0 100 100" fill="none">
      {/* Đầu hổ */}
      <circle cx="50" cy="45" r="22" fill="currentColor" />
      {/* Tai */}
      <circle cx="32" cy="28" r="7" fill="currentColor" />
      <circle cx="68" cy="28" r="7" fill="currentColor" />
      {/* Mắt */}
      <ellipse cx="42" cy="42" rx="3" ry="2.5" fill="black" opacity="0.7" />
      <ellipse cx="58" cy="42" rx="3" ry="2.5" fill="black" opacity="0.7" />
      <circle cx="42" cy="42" r="1" fill="currentColor" />
      <circle cx="58" cy="42" r="1" fill="currentColor" />
      {/* Vằn trán */}
      <path d="M 42 30 L 44 35" stroke="black" strokeWidth="0.8" opacity="0.5" />
      <path d="M 50 28 L 50 33" stroke="black" strokeWidth="0.8" opacity="0.5" />
      <path d="M 58 30 L 56 35" stroke="black" strokeWidth="0.8" opacity="0.5" />
      {/* Mũi + miệng */}
      <path d="M 47 52 L 53 52 L 50 55 Z" fill="black" opacity="0.6" />
      <path d="M 50 55 L 50 58 M 50 58 Q 46 60, 44 58 M 50 58 Q 54 60, 56 58" stroke="black" strokeWidth="0.8" opacity="0.6" fill="none" />
      {/* Hoa súng 2 bên */}
      <g transform="translate(15 70)">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse key={angle} cx="0" cy="-6" rx="2.5" ry="5" fill="currentColor" opacity="0.75" transform={`rotate(${angle} 0 0)`} />
        ))}
        <circle cx="0" cy="0" r="2" fill="currentColor" />
      </g>
      <g transform="translate(85 70)">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse key={angle} cx="0" cy="-6" rx="2.5" ry="5" fill="currentColor" opacity="0.75" transform={`rotate(${angle} 0 0)`} />
        ))}
        <circle cx="0" cy="0" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

// ------------------------------------------------------------
// Registry
// ------------------------------------------------------------
export const COUNTRY_OG_DATA: Record<string, CountryOGEntry> = {
  vn: {
    name: "Vietnam",
    displayName: "VIỆT NAM",
    accent: "#da251d",
    accent2: "#ffcd00",
    Icon: IconVietnamDrum,
  },
  cn: {
    name: "China",
    displayName: "中国",
    accent: "#de2910",
    accent2: "#ffde00",
    Icon: IconChinaPanda,
  },
  us: {
    name: "United States",
    displayName: "USA",
    accent: "#3c3b6e",
    accent2: "#b22234",
    Icon: IconUsaEagle,
  },
  in: {
    name: "India",
    displayName: "भारत",
    accent: "#ff9933",
    accent2: "#138808",
    Icon: IconIndiaTaj,
  },
  th: {
    name: "Thailand",
    displayName: "ประเทศไทย",
    accent: "#a51931",
    accent2: "#2d2a4a",
    Icon: IconThailandTemple,
  },
  id: {
    name: "Indonesia",
    displayName: "INDONESIA",
    accent: "#ce1126",
    accent2: "#ffffff",
    Icon: IconIndonesiaWayang,
  },
  kr: {
    name: "South Korea",
    displayName: "대한민국",
    accent: "#cd2e3a",
    accent2: "#0047a0",
    Icon: IconSouthKoreaPagoda,
  },
  my: {
    name: "Malaysia",
    displayName: "MALAYSIA",
    accent: "#cc0001",
    accent2: "#010066",
    Icon: IconMalaysiaTwinTowers,
  },
  sg: {
    name: "Singapore",
    displayName: "SINGAPORE",
    accent: "#ee2536",
    accent2: "#ffffff",
    Icon: IconSingaporeMerlion,
  },
  kh: {
    name: "Cambodia",
    displayName: "កម្ពុជា",
    accent: "#032ea1",
    accent2: "#e00025",
    Icon: IconCambodiaAngkor,
  },
  pk: {
    name: "Pakistan",
    displayName: "پاکستان",
    accent: "#01411c",
    accent2: "#ffffff",
    Icon: IconPakistanMosque,
  },
  bd: {
    name: "Bangladesh",
    displayName: "বাংলাদেশ",
    accent: "#006a4e",
    accent2: "#f42a41",
    Icon: IconBangladeshTiger,
  },
};
