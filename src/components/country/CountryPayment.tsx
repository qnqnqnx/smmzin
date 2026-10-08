import Reveal from "../Reveal";
import { ShieldCheck } from "../Icons";
import type { CountryData } from "@/content/countries/types";

/**
 * Bảng payment — responsive:
 *   - Mobile: 2 cột (Method + Status), ẩn Type
 *   - sm+: 3 cột (Method + Type + Status)
 */
export default function CountryPayment({ data }: { data: CountryData }) {
  const p = data.payment;

  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {p.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[62ch] text-[14.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[15.5px]">
              {p.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--bg-elev)] sm:rounded-[24px]">
            {/* Header */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-[color:var(--border)] px-4 py-3 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,0.7fr)] sm:gap-4 sm:px-7 sm:py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--text-muted)] sm:text-[11px]">
                Method
              </p>
              <p className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--text-muted)] sm:block">
                Type
              </p>
              <p className="text-right text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--text-muted)] sm:text-[11px]">
                Status
              </p>
            </div>

            {/* Rows */}
            <ul>
              {p.methods.map((m, i) => (
                <li
                  key={m.name}
                  className={[
                    "country-payment-row grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3.5 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,0.7fr)] sm:gap-4 sm:py-4",
                    i < p.methods.length - 1
                      ? "border-b border-[color:var(--border)]"
                      : "",
                  ].join(" ")}
                >
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-medium tracking-[-0.01em] sm:text-[14.5px]">
                      {m.name}
                    </p>
                    <p className="mt-0.5 truncate text-[11.5px] text-[color:var(--text-muted)] sm:text-[12.5px]">
                      {m.note}
                    </p>
                  </div>

                  <p className="hidden text-[13px] text-[color:var(--text-muted)] sm:block">
                    {m.type}
                  </p>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[rgba(142,214,173,0.25)] bg-[rgba(142,214,173,0.08)] px-2 py-1 text-[10px] font-medium text-[color:var(--accent)] sm:px-2.5 sm:text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      {m.speed}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-[color:var(--border)] bg-white/[0.02] p-4 text-[12.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[13px]">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[color:var(--accent)]" />
            {p.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
