import type { Dictionary } from "@/content/dictionaries";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="final-cta-glow pointer-events-none absolute inset-x-0 -bottom-40 h-[320px] blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, rgba(79,125,94,0.6), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="relative text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-[42px] lg:text-[48px]">
              {dict.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {dict.finalCta.description}
            </p>
            <a href="#notify" className="btn btn-primary relative mt-8">
              {dict.finalCta.button}
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
