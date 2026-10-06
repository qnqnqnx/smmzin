import type { Dictionary } from "@/content/dictionaries";
import { Activity, Layers, TrendingUp, Workflow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const ICONS = [Layers, Workflow, Activity, TrendingUp];

export default function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.benefits.eyebrow}
            title={dict.benefits.title}
            description={dict.benefits.description}
            maxWidth="max-w-[720px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.benefits.items.map((item, index) => {
            const Icon = ICONS[index] ?? Layers;
            return (
              <Reveal key={item.title} delay={index * 60}>
                <SpotlightCard className="h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon size={19} />
                  </span>
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
