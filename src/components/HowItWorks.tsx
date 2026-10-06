import type { Dictionary } from "@/content/dictionaries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.how.eyebrow}
            title={dict.how.title}
            description={dict.how.description}
            maxWidth="max-w-[620px]"
          />
        </Reveal>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {dict.how.steps.map((step, index) => (
            <li key={step.number} className="bg-[color:var(--bg-elev)] p-6">
              <Reveal delay={index * 60}>
                <span className="font-mono text-[12px] tracking-[0.12em] text-[color:var(--accent)]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[17px] font-medium tracking-[-0.02em]">{step.title}</h3>
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
