import type { Dictionary } from "@/content/dictionaries";
import { Activity, Code, LayoutGrid, Package, Users, Workflow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const ICONS = [LayoutGrid, Workflow, Package, Activity, Code, Users];

export default function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.features.eyebrow}
            title={dict.features.title}
            description={dict.features.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, index) => {
            const Icon = ICONS[index] ?? LayoutGrid;
            return (
              <Reveal key={item.title} delay={index * 50}>
                <SpotlightCard className="h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                      <Icon size={19} />
                    </span>
                    <span className="font-mono text-[11px] text-[color:var(--text-muted)] opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {item.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
