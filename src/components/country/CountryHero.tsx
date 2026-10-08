import { ArrowRight } from "../Icons";
import type { CountryData, CountryVisual } from "@/content/countries/types";
import { getPositionClasses } from "@/content/countries/types";
import { getCountryFlag } from "@/content/countries";

/**
 * Hero chung cho mọi nước.
 *
 * Mobile: art ở trên, copy ở dưới.
 * Desktop (lg+): copy bên trái, art bên phải.
 */
export default function CountryHero({
  data,
  visual,
}: {
  data: CountryData;
  visual: CountryVisual;
}) {
  const h = data.hero;
  const Art = visual.Art;

  const flagClass = [
    visual.flagAnimationClass ?? "country-flag-float",
    getPositionClasses(visual.flagPosition),
  ].join(" ");

  const textClass = getPositionClasses(visual.textPosition);

  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-h)+16px)] pb-16 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 grid-overlay"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${data.accent.primary}55 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${data.accent.secondary}45 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      <div className="shell">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* ---------- Copy — order-2 trên mobile ---------- */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="pill mx-auto lg:mx-0">
              <span className="pill-dot" />
              {h.eyebrow}
            </span>

            <h1 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
              {h.title}
            </h1>

            <p className="mx-auto mt-5 max-w-[62ch] text-[15px] leading-relaxed text-[color:var(--text-muted)] sm:text-[17px] lg:mx-0">
              {h.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#notify" className="btn btn-primary">
                {h.primaryCta}
                <ArrowRight size={17} />
              </a>
              <a href="#services" className="btn btn-ghost">
                {h.secondaryCta}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 lg:justify-start">
              {h.trustPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-[color:var(--border)] bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-[color:var(--text)] sm:px-3.5 sm:text-[12.5px]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Art — order-1 trên mobile ---------- */}
          <div className="order-1 relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:order-2 lg:max-w-[480px]">
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <Art size={visual.artSize} />
              </div>

              <div className={flagClass}>
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-xl opacity-50 blur-lg"
                    style={{
                      background: `radial-gradient(circle, ${data.accent.primary}99 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getCountryFlag(data.code, 160)}
                    alt={data.nameEn}
                    width={72}
                    height={54}
                    className="relative rounded-md border-2 border-white/40 sm:h-[60px] sm:w-[80px]"
                    style={{
                      boxShadow: `0 10px 30px -8px ${data.accent.primary}aa, 0 0 0 1px ${data.accent.secondary}66`,
                    }}
                  />
                </div>
              </div>

              <div className={textClass}>
                <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  SMM Panel
                </div>
                <div className="mt-1 text-[20px] font-semibold leading-none tracking-[-0.02em] text-[color:var(--text)] sm:text-[22px]">
                  {h.displayName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
