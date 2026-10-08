import { countriesList } from "@/content/countries-data";
import { getCountryFlag } from "@/content/countries";
import Reveal from "../Reveal";

/**
 * Box "multi-country coverage" — hiển thị ở cuối mỗi country page.
 * Nói về việc SMMZin không chỉ có dịch vụ ở 1 nước, mà còn nhiều nước khác.
 * Bên dưới là dải cờ chạy ngang.
 */
export default function CountryCoverage({
  locale = "en",
}: {
  locale?: "vi" | "en";
}) {
  const isVi = locale === "vi";

  const copy = {
    eyebrow: isVi ? "PHỦ SÓNG TOÀN CẦU" : "GLOBAL COVERAGE",
    title: isVi
      ? "Không chỉ dừng lại ở một quốc gia."
      : "Not just one country. Many.",
    description: isVi
      ? "SMMZin không chỉ cung cấp dịch vụ tại quốc gia này. Chúng tôi hoạt động trên nhiều thị trường khác nhau — mỗi thị trường có dịch vụ, phương thức thanh toán và cách thức hỗ trợ phù hợp với văn hoá địa phương. Một tài khoản, nhiều quốc gia, đa dạng dịch vụ."
      : "SMMZin isn't limited to a single country. We operate across multiple markets — each with services, payment methods and support tuned to local needs. One account, many countries, one unified platform.",
    statLabel: isVi ? "Quốc gia đang hoạt động" : "Active countries",
    statValue: String(countriesList.filter((c) => c.available).length),
    statLabel2: isVi ? "Sắp ra mắt" : "Coming soon",
    statValue2: String(countriesList.filter((c) => !c.available).length),
  };

  // Nhân đôi danh sách để marquee chạy mượt vô hạn
  const doubled = [...countriesList, ...countriesList];

  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-gradient-to-b from-white/[0.03] to-white/[0.008] px-6 py-12 sm:px-10 sm:py-14">
            {/* Glow nhẹ */}
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,125,94,0.55), transparent 65%)",
              }}
              aria-hidden="true"
            />

            {/* Header */}
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
              <div>
                <p className="eyebrow">{copy.eyebrow}</p>
                <h2 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
                  {copy.title}
                </h2>
                <p className="mt-4 max-w-[62ch] text-[14.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[15.5px]">
                  {copy.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-4 lg:flex-col lg:gap-5">
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/[0.03] px-5 py-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                    {copy.statLabel}
                  </div>
                  <div className="mt-1.5 font-mono text-[28px] font-semibold leading-none text-[color:var(--accent)]">
                    {copy.statValue}
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/[0.03] px-5 py-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                    {copy.statLabel2}
                  </div>
                  <div className="mt-1.5 font-mono text-[28px] font-semibold leading-none text-[color:var(--text-muted)]">
                    {copy.statValue2}
                  </div>
                </div>
              </div>
            </div>

            {/* Flag marquee */}
            <div className="relative mt-10 -mx-6 sm:-mx-10">
              <div className="country-flag-marquee">
                <div className="country-flag-marquee-track">
                  {doubled.map((country, index) => {
                    const name =
                      isVi ? country.nameVi : country.nameEn;
                    return (
                      <div
                        key={`${country.code}-${index}`}
                        className="country-flag-item"
                        style={{
                          opacity: country.available ? 1 : 0.35,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getCountryFlag(country.code, 160)}
                          alt={name}
                          width={56}
                          height={42}
                          loading="lazy"
                          className="country-flag-badge"
                        />
                        <span className="country-flag-name">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
