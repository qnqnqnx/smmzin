import Reveal from "../Reveal";
import type { CountryData } from "@/content/countries/types";

export default function CountryWhy({ data }: { data: CountryData }) {
  const w = data.why;

  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">{w.eyebrow}</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {w.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {w.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {w.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="country-platform-card card h-full p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] font-mono text-[11px] text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
