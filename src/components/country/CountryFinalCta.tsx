import Reveal from "../Reveal";
import { ArrowRight } from "../Icons";
import type { CountryData } from "@/content/countries/types";

export default function CountryFinalCta({ data }: { data: CountryData }) {
  const c = data.finalCta;

  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="final-cta-glow pointer-events-none absolute inset-x-0 -bottom-40 h-[320px] blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(79,125,94,0.6), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <h2 className="relative text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">
              {c.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {c.description}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a href="#notify" className="btn btn-primary">
                {c.primaryCta}
                <ArrowRight size={17} />
              </a>
              <a href="#services" className="btn btn-ghost">
                {c.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
