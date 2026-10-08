import type { Dictionary } from "@/content/dictionaries";
import { ChevronDown } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.faq.eyebrow}
            title={dict.faq.title}
            description={dict.faq.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {dict.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 40}>
              <details className="faq-item card group">
                <summary className="flex list-none items-start justify-between gap-4 p-5">
                  <h3 className="text-[15.5px] font-medium leading-snug tracking-[-0.015em] text-[color:var(--text)]">
                    {item.q}
                  </h3>
                  <span className="faq-chevron mt-0.5 shrink-0 text-[color:var(--text-muted)]">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="faq-content">
                  <div>
                    <p className="border-t border-[color:var(--border)] px-5 pb-5 pt-4 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
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
