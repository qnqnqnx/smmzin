import type { Dictionary } from "@/content/dictionaries";
import { ShieldCheck } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            description={dict.services.description}
            maxWidth="max-w-[720px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {dict.services.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <article className="card flex h-full flex-col p-6">
                <h3 className="text-[18px] font-medium tracking-[-0.02em]">{group.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                  {group.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-[color:var(--border)] pt-5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-[color:var(--text)]">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-[color:var(--border)] bg-white/[0.02] p-4 text-[13px] leading-relaxed text-[color:var(--text-muted)]">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[color:var(--accent)]" />
            {dict.services.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
