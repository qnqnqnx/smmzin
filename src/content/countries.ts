export type CountryItem = {
  code: string;   // ISO 3166-1 alpha-2 lowercase: "vn"
  slug: string;   // For future URL: /smm-panel-vietnam
  nameVi: string;
  nameEn: string;
  tagVi: string;
  tagEn: string;
};

/** Ảnh cờ PNG từ flagcdn.com — hiển thị đúng trên mọi thiết bị (Windows không hỗ trợ emoji cờ). */
export function getCountryFlag(code: string, width: 80 | 160 = 160): string {
  return `https://flagcdn.com/w${width}/${code}.png`;
}
