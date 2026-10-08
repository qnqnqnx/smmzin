import Reveal from "../Reveal";
import type { CountryData } from "@/content/countries/types";

export default function CountryHowToOrder({ data }: { data: CountryData }) {
  const h = data.howToOrder;

  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="eyebrow">{h.eyebrow}</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {h.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {h.description}
            </p>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, i) => (
            <li key={step.number} className="bg-[color:var(--bg-elev)] p-6">
              <Reveal delay={i * 60}>
                <span className="font-mono text-[12px] tracking-[0.12em] text-[color:var(--accent)]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[17px] font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
