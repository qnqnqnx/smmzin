import type { Dictionary } from "@/content/dictionaries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="section">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} />

          <div className="mt-6 space-y-4">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[62ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              {dict.about.audiencesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {dict.about.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-[color:var(--border)] bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-[color:var(--text)]"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-2 border-b border-[color:var(--border)] pb-4">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
            </div>

            <ul className="mt-5 space-y-5">
              {dict.about.pillars.map((pillar, index) => (
                <li key={pillar.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border)] font-mono text-[11px] text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium tracking-[-0.01em]">{pillar.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
