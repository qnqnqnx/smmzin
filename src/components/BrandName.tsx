/**
 * Tên thương hiệu SMMZin.Com với phong cách premium:
 *   - "SMM"   chữ trắng
 *   - "Zin"   chữ xanh emerald + glow nhẹ
 *   - ".Com"  chữ mảnh, mờ hơn để tạo phân cấp
 *
 * Đổi màu ở đây nếu muốn:
 *   - Chữ trắng  : var(--text)
 *   - Chữ xanh   : var(--accent)
 *   - Chữ mờ     : var(--text-muted)
 */
export default function BrandName({ size = "default" }: { size?: "default" | "large" }) {
  const sizeClass = size === "large" ? "text-[20px]" : "text-[17px]";
  return (
    <span className={`brand-name ${sizeClass} whitespace-nowrap`}>
      <span className="brand-main">SMM</span>
      <span className="brand-accent">Zin</span>
      <span className="brand-suffix">.Com</span>
    </span>
  );
}
