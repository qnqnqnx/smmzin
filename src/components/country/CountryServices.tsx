import Reveal from "../Reveal";
import { PlatformIcon } from "../PlatformIcons";
import type { CountryData } from "@/content/countries/types";

export default function CountryServices({ data }: { data: CountryData }) {
  const s = data.services;

  return (
    <section id="services" className="section">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
              {s.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {s.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.platforms.map((platform, i) => (
            <Reveal key={platform.key} delay={i * 40}>
              <article className="country-platform-card card flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--text)]">
                    <PlatformIcon name={platform.key} size={20} />
                  </span>
                  <h3 className="text-[16px] font-medium tracking-[-0.015em]">
                    {platform.name}
                  </h3>
                </div>

                <p className="mt-4 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                  {platform.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-[color:var(--border)] pt-5">
                  {platform.services.map((svc) => (
                    <li
                      key={svc}
                      className="flex items-center gap-2.5 text-[13.5px] text-[color:var(--text)]"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-[13px] leading-relaxed text-[color:var(--text-muted)]">
            {s.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
