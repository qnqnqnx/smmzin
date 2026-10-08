import Reveal from "../Reveal";
import type { CountryData } from "@/content/countries/types";

export default function CountryWhatIs({ data }: { data: CountryData }) {
  const w = data.whatIs;

  return (
    <section className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{w.eyebrow}</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {w.title}
            </h2>

            <div className="mt-6 space-y-4">
              {w.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="max-w-[64ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ul className="space-y-4">
              {w.highlights.map((item, i) => (
                <li key={item.title} className="card flex gap-4 p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border)] font-mono text-[11px] text-[color:var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
