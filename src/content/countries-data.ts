import type { CountryItem } from "./countries";

/**
 * Danh sách quốc gia hiển thị ở section Countries + Navbar dropdown.
 *
 * Thứ tự hiển thị:
 *   1. Đông Nam Á (thị trường chính, ưu tiên VN)
 *   2. Đông Á
 *   3. Nam Á
 *   4. Trung Đông
 *   5. Châu Đại Dương
 *   6. Châu Mỹ
 *   7. Châu Âu
 *   8. Châu Phi
 *
 * Trong mỗi khu vực: available trước, coming soon sau.
 */
export type CountryRegion =
  | "southeast-asia"
  | "east-asia"
  | "south-asia"
  | "middle-east"
  | "oceania"
  | "americas"
  | "europe"
  | "africa";

export const regionLabels: Record<
  CountryRegion,
  { vi: string; en: string }
> = {
  "southeast-asia": { vi: "Đông Nam Á", en: "Southeast Asia" },
  "east-asia": { vi: "Đông Á", en: "East Asia" },
  "south-asia": { vi: "Nam Á", en: "South Asia" },
  "middle-east": { vi: "Trung Đông", en: "Middle East" },
  oceania: { vi: "Châu Đại Dương", en: "Oceania" },
  americas: { vi: "Châu Mỹ", en: "Americas" },
  europe: { vi: "Châu Âu", en: "Europe" },
  africa: { vi: "Châu Phi", en: "Africa" },
};

export type CountryListItem = CountryItem & {
  available: boolean;
  href: string;
  region: CountryRegion;
};

export const countriesList: CountryListItem[] = [
  // ============================================================
  // ĐÔNG NAM Á
  // ============================================================
  {
    code: "vn", slug: "vietnam",
    nameVi: "Việt Nam", nameEn: "Vietnam",
    tagVi: "SMM Panel Việt Nam", tagEn: "SMM Panel Vietnam",
    available: true, href: "/smm-panel-vietnam", region: "southeast-asia",
  },
  {
    code: "th", slug: "thailand",
    nameVi: "Thái Lan", nameEn: "Thailand",
    tagVi: "SMM Panel Thái Lan", tagEn: "SMM Panel Thailand",
    available: true, href: "/smm-panel-thailand", region: "southeast-asia",
  },
  {
    code: "id", slug: "indonesia",
    nameVi: "Indonesia", nameEn: "Indonesia",
    tagVi: "SMM Panel Indonesia", tagEn: "SMM Panel Indonesia",
    available: true, href: "/smm-panel-indonesia", region: "southeast-asia",
  },
  {
    code: "my", slug: "malaysia",
    nameVi: "Malaysia", nameEn: "Malaysia",
    tagVi: "SMM Panel Malaysia", tagEn: "SMM Panel Malaysia",
    available: true, href: "/smm-panel-malaysia", region: "southeast-asia",
  },
  {
    code: "sg", slug: "singapore",
    nameVi: "Singapore", nameEn: "Singapore",
    tagVi: "SMM Panel Singapore", tagEn: "SMM Panel Singapore",
    available: true, href: "/smm-panel-singapore", region: "southeast-asia",
  },
  {
    code: "kh", slug: "cambodia",
    nameVi: "Campuchia", nameEn: "Cambodia",
    tagVi: "SMM Panel Campuchia", tagEn: "SMM Panel Cambodia",
    available: true, href: "/smm-panel-cambodia", region: "southeast-asia",
  },
  {
    code: "ph", slug: "philippines",
    nameVi: "Philippines", nameEn: "Philippines",
    tagVi: "SMM Panel Philippines", tagEn: "SMM Panel Philippines",
    available: false, href: "#notify", region: "southeast-asia",
  },
  {
    code: "mm", slug: "myanmar",
    nameVi: "Myanmar", nameEn: "Myanmar",
    tagVi: "SMM Panel Myanmar", tagEn: "SMM Panel Myanmar",
    available: false, href: "#notify", region: "southeast-asia",
  },
  {
    code: "la", slug: "laos",
    nameVi: "Lào", nameEn: "Laos",
    tagVi: "SMM Panel Lào", tagEn: "SMM Panel Laos",
    available: false, href: "#notify", region: "southeast-asia",
  },
  {
    code: "bn", slug: "brunei",
    nameVi: "Brunei", nameEn: "Brunei",
    tagVi: "SMM Panel Brunei", tagEn: "SMM Panel Brunei",
    available: false, href: "#notify", region: "southeast-asia",
  },

  // ============================================================
  // ĐÔNG Á
  // ============================================================
  {
    code: "cn", slug: "china",
    nameVi: "Trung Quốc", nameEn: "China",
    tagVi: "SMM Panel Trung Quốc", tagEn: "SMM Panel China",
    available: true, href: "/smm-panel-china", region: "east-asia",
  },
  {
    code: "kr", slug: "south-korea",
    nameVi: "Hàn Quốc", nameEn: "South Korea",
    tagVi: "SMM Panel Hàn Quốc", tagEn: "SMM Panel South Korea",
    available: true, href: "/smm-panel-south-korea", region: "east-asia",
  },

  // ============================================================
  // NAM Á
  // ============================================================
  {
    code: "in", slug: "india",
    nameVi: "Ấn Độ", nameEn: "India",
    tagVi: "SMM Panel Ấn Độ", tagEn: "SMM Panel India",
    available: true, href: "/smm-panel-india", region: "south-asia",
  },
  {
    code: "bd", slug: "bangladesh",
    nameVi: "Bangladesh", nameEn: "Bangladesh",
    tagVi: "SMM Panel Bangladesh", tagEn: "SMM Panel Bangladesh",
    available: true, href: "/smm-panel-bangladesh", region: "south-asia",
  },
  {
    code: "pk", slug: "pakistan",
    nameVi: "Pakistan", nameEn: "Pakistan",
    tagVi: "SMM Panel Pakistan", tagEn: "SMM Panel Pakistan",
    available: true, href: "/smm-panel-pakistan", region: "south-asia",
  },
  {
    code: "np", slug: "nepal",
    nameVi: "Nepal", nameEn: "Nepal",
    tagVi: "SMM Panel Nepal", tagEn: "SMM Panel Nepal",
    available: false, href: "#notify", region: "south-asia",
  },

  // ============================================================
  // TRUNG ĐÔNG
  // ============================================================
  {
    code: "ae", slug: "uae",
    nameVi: "UAE", nameEn: "UAE",
    tagVi: "SMM Panel UAE", tagEn: "SMM Panel UAE",
    available: false, href: "#notify", region: "middle-east",
  },
  {
    code: "sa", slug: "saudi-arabia",
    nameVi: "Ả Rập Xê Út", nameEn: "Saudi Arabia",
    tagVi: "SMM Panel Ả Rập Xê Út", tagEn: "SMM Panel Saudi Arabia",
    available: false, href: "#notify", region: "middle-east",
  },

  // ============================================================
  // CHÂU ĐẠI DƯƠNG
  // ============================================================
  {
    code: "au", slug: "australia",
    nameVi: "Úc", nameEn: "Australia",
    tagVi: "SMM Panel Úc", tagEn: "SMM Panel Australia",
    available: false, href: "#notify", region: "oceania",
  },

  // ============================================================
  // CHÂU MỸ
  // ============================================================
  {
    code: "us", slug: "usa",
    nameVi: "Hoa Kỳ", nameEn: "United States",
    tagVi: "SMM Panel Hoa Kỳ", tagEn: "SMM Panel USA",
    available: true, href: "/smm-panel-usa", region: "americas",
  },
  {
    code: "ca", slug: "canada",
    nameVi: "Canada", nameEn: "Canada",
    tagVi: "SMM Panel Canada", tagEn: "SMM Panel Canada",
    available: false, href: "#notify", region: "americas",
  },
  {
    code: "mx", slug: "mexico",
    nameVi: "Mexico", nameEn: "Mexico",
    tagVi: "SMM Panel Mexico", tagEn: "SMM Panel Mexico",
    available: false, href: "#notify", region: "americas",
  },
  {
    code: "br", slug: "brazil",
    nameVi: "Brazil", nameEn: "Brazil",
    tagVi: "SMM Panel Brazil", tagEn: "SMM Panel Brazil",
    available: false, href: "#notify", region: "americas",
  },

  // ============================================================
  // CHÂU ÂU
  // ============================================================
  {
    code: "gb", slug: "uk",
    nameVi: "Vương quốc Anh", nameEn: "United Kingdom",
    tagVi: "SMM Panel Anh", tagEn: "SMM Panel UK",
    available: false, href: "#notify", region: "europe",
  },
  {
    code: "de", slug: "germany",
    nameVi: "Đức", nameEn: "Germany",
    tagVi: "SMM Panel Đức", tagEn: "SMM Panel Germany",
    available: false, href: "#notify", region: "europe",
  },
  {
    code: "fr", slug: "france",
    nameVi: "Pháp", nameEn: "France",
    tagVi: "SMM Panel Pháp", tagEn: "SMM Panel France",
    available: false, href: "#notify", region: "europe",
  },
  {
    code: "tr", slug: "turkey",
    nameVi: "Thổ Nhĩ Kỳ", nameEn: "Turkey",
    tagVi: "SMM Panel Thổ Nhĩ Kỳ", tagEn: "SMM Panel Turkey",
    available: false, href: "#notify", region: "europe",
  },

  // ============================================================
  // CHÂU PHI
  // ============================================================
  {
    code: "ng", slug: "nigeria",
    nameVi: "Nigeria", nameEn: "Nigeria",
    tagVi: "SMM Panel Nigeria", tagEn: "SMM Panel Nigeria",
    available: false, href: "#notify", region: "africa",
  },
  {
    code: "eg", slug: "egypt",
    nameVi: "Ai Cập", nameEn: "Egypt",
    tagVi: "SMM Panel Ai Cập", tagEn: "SMM Panel Egypt",
    available: false, href: "#notify", region: "africa",
  },
  {
    code: "za", slug: "south-africa",
    nameVi: "Nam Phi", nameEn: "South Africa",
    tagVi: "SMM Panel Nam Phi", tagEn: "SMM Panel South Africa",
    available: false, href: "#notify", region: "africa",
  },
  {
    code: "ke", slug: "kenya",
    nameVi: "Kenya", nameEn: "Kenya",
    tagVi: "SMM Panel Kenya", tagEn: "SMM Panel Kenya",
    available: false, href: "#notify", region: "africa",
  },
  {
    code: "ma", slug: "morocco",
    nameVi: "Maroc", nameEn: "Morocco",
    tagVi: "SMM Panel Maroc", tagEn: "SMM Panel Morocco",
    available: false, href: "#notify", region: "africa",
  },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------
export function getCountriesByRegion() {
  const grouped: Record<CountryRegion, CountryListItem[]> = {
    "southeast-asia": [],
    "east-asia": [],
    "south-asia": [],
    "middle-east": [],
    oceania: [],
    americas: [],
    europe: [],
    africa: [],
  };
  for (const c of countriesList) {
    grouped[c.region].push(c);
  }
  return grouped;
}
