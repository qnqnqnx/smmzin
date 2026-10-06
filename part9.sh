#!/usr/bin/env bash
set -euo pipefail

cat > src/components/About.tsx << 'EOF'
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
EOF

cat > src/components/Benefits.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { Activity, Layers, TrendingUp, Workflow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
                <article className="card h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Features.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { Activity, Code, LayoutGrid, Package, Users, Workflow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
            maxWidth="max-w-[700px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, index) => {
            const Icon = ICONS[index] ?? LayoutGrid;
            return (
              <Reveal key={item.title} delay={index * 50}>
                <article className="card group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
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
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/PlatformEcosystem.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { PlatformIcon } from "./PlatformIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function PlatformEcosystem({ dict }: { dict: Dictionary }) {
  return (
    <section id="platforms" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.platforms.eyebrow}
            title={dict.platforms.title}
            description={dict.platforms.description}
            maxWidth="max-w-[720px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.platforms.items.map((platform, index) => (
            <Reveal key={platform.key} delay={index * 40}>
              <article className="card flex h-full flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--text)]">
                    <PlatformIcon name={platform.key} size={20} />
                  </span>
                  <h3 className="text-[15.5px] font-medium tracking-[-0.015em]">{platform.name}</h3>
                </div>

                <p className="mt-4 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                  {platform.description}
                </p>

                <div className="mt-5 border-t border-[color:var(--border)] pt-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                    {dict.platforms.servicesLabel}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {platform.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-md border border-[color:var(--border)] px-2 py-1 text-[11.5px] text-[color:var(--text-muted)]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/Services.tsx << 'EOF'
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
EOF

cat > src/components/HowItWorks.tsx << 'EOF'
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
EOF

echo "part9 done"