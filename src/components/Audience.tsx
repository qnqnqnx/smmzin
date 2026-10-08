import type { Dictionary } from "@/content/dictionaries";
import { Briefcase, Building, Store, UserRound } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const ICONS = [UserRound, Briefcase, Store, Building];

export default function Audience({ dict }: { dict: Dictionary }) {
  return (
    <section id="solutions" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.audience.eyebrow}
            title={dict.audience.title}
            description={dict.audience.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.audience.groups.map((group, index) => {
            const Icon = ICONS[index] ?? UserRound;
            return (
              <Reveal key={group.title} delay={index * 60}>
                <SpotlightCard className="h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">{group.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {group.description}
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
