import type { Dictionary } from "@/content/dictionaries";
import Reveal from "./Reveal";

export default function Philosophy({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-gradient-to-b from-white/[0.045] to-white/[0.01] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(79,125,94,0.55), transparent 70%)" }}
              aria-hidden="true"
            />

            <p className="eyebrow relative">{dict.philosophy.eyebrow}</p>

            <h2 className="relative mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
              {dict.philosophy.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="relative mt-7 max-w-[62ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {dict.philosophy.description}
            </p>

            <ul className="relative mt-9 flex flex-wrap gap-2.5">
              {dict.philosophy.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-[color:var(--border-strong)] px-4 py-2 text-[13px] text-[color:var(--text)]"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
