import Reveal from "../Reveal";
import { ChevronDown } from "../Icons";
import type { CountryData } from "@/content/countries/types";

export default function CountryFaq({ data }: { data: CountryData }) {
  const f = data.faq;

  return (
    <section id="faq" className="section">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="eyebrow">{f.eyebrow}</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {f.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {f.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {f.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 30}>
              <details className="faq-item card group">
                <summary className="flex list-none items-start justify-between gap-4 p-5">
                  <h3 className="text-[15px] font-medium leading-snug tracking-[-0.015em] text-[color:var(--text)]">
                    {item.q}
                  </h3>
                  <span className="faq-chevron mt-0.5 shrink-0 text-[color:var(--text-muted)]">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="faq-content">
                  <div>
                    <p className="border-t border-[color:var(--border)] px-5 pb-5 pt-4 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
