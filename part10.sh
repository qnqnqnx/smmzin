#!/usr/bin/env bash
set -euo pipefail

cat > src/components/ProductPreview.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CHART_BARS = [38, 52, 44, 68, 58, 82, 74];

export default function ProductPreview({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.preview.eyebrow}
            title={dict.preview.title}
            description={dict.preview.description}
            maxWidth="max-w-[700px]"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="glass mt-10 rounded-[26px] p-2.5 sm:p-3">
            <div className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--bg-elev)] p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--border)] pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  <span className="ml-2 text-[13.5px] font-medium tracking-[-0.01em]">
                    {dict.preview.dashboardTitle}
                  </span>
                </div>
                <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                  {dict.preview.dashboardSubtitle}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {dict.preview.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[color:var(--border)] bg-white/[0.025] p-4">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-mono text-[22px] font-medium tabular-nums tracking-[-0.02em]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/[0.025] p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                    {dict.preview.chartLabel}
                  </p>
                  <div className="mt-5 flex h-[130px] items-end gap-2">
                    {CHART_BARS.map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[color:var(--primary-strong)] to-[color:var(--accent)] opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[color:var(--border)] bg-white/[0.025] p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                    {dict.preview.ordersTitle}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {dict.preview.orders.map((order) => (
                      <li key={order.id}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="truncate text-[13.5px] text-[color:var(--text)]">{order.service}</span>
                          <span className="shrink-0 font-mono text-[11px] text-[color:var(--text-muted)]">
                            {order.id}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                            <div
                              className="h-full rounded-full bg-[color:var(--accent)] opacity-70"
                              style={{ width: `${order.progress}%` }}
                            />
                          </div>
                          <span className="shrink-0 text-[11.5px] text-[color:var(--text-muted)]">
                            {order.status}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 text-center text-[12.5px] text-[color:var(--text-muted)]">
            {dict.preview.demoNotice}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
EOF

cat > src/components/ApiPreview.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { Check } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ApiPreview({ dict }: { dict: Dictionary }) {
  return (
    <section id="api" className="section">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={dict.api.eyebrow}
            title={dict.api.title}
            description={dict.api.description}
            maxWidth="max-w-[560px]"
          />

          <ul className="mt-7 space-y-3">
            {dict.api.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[14.5px] text-[color:var(--text)]">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--accent)]">
                  <Check size={13} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--bg-elev)]">
            <div className="flex items-center justify-between border-b border-[color:var(--border)] px-4 py-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                {dict.api.previewLabel}
              </span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/12" />
                <span className="h-2 w-2 rounded-full bg-white/12" />
                <span className="h-2 w-2 rounded-full bg-white/12" />
              </span>
            </div>

            <pre className="overflow-x-auto p-5 text-[12.5px] leading-[1.75] sm:text-[13px]">
              <code className="font-mono">
                <span className="text-[color:var(--accent)]">POST</span>{" "}
                <span className="text-[color:var(--text)]">/api/v2</span>
                {"\n\n"}
                <span className="text-[color:var(--text-muted)]">{"{"}</span>
                {"\n  "}
                <span className="text-[color:var(--text)]">&quot;key&quot;</span>
                <span className="text-[color:var(--text-muted)]">: </span>
                <span className="text-[color:var(--accent)]">&quot;YOUR_API_KEY&quot;</span>
                <span className="text-[color:var(--text-muted)]">,</span>
                {"\n  "}
                <span className="text-[color:var(--text)]">&quot;action&quot;</span>
                <span className="text-[color:var(--text-muted)]">: </span>
                <span className="text-[color:var(--accent)]">&quot;add&quot;</span>
                <span className="text-[color:var(--text-muted)]">,</span>
                {"\n  "}
                <span className="text-[color:var(--text)]">&quot;service&quot;</span>
                <span className="text-[color:var(--text-muted)]">: </span>
                <span className="text-[color:var(--accent)]">&quot;1234&quot;</span>
                <span className="text-[color:var(--text-muted)]">,</span>
                {"\n  "}
                <span className="text-[color:var(--text)]">&quot;link&quot;</span>
                <span className="text-[color:var(--text-muted)]">: </span>
                <span className="text-[color:var(--accent)]">&quot;https://example.com/post&quot;</span>
                <span className="text-[color:var(--text-muted)]">,</span>
                {"\n  "}
                <span className="text-[color:var(--text)]">&quot;quantity&quot;</span>
                <span className="text-[color:var(--text-muted)]">: </span>
                <span className="text-[color:var(--accent)]">1000</span>
                {"\n"}
                <span className="text-[color:var(--text-muted)]">{"}"}</span>
              </code>
            </pre>

            <p className="border-t border-[color:var(--border)] px-4 py-3 text-[12px] leading-relaxed text-[color:var(--text-muted)]">
              {dict.api.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
EOF

cat > src/components/Audience.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { Briefcase, Building, Store, UserRound } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
            maxWidth="max-w-[680px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.audience.groups.map((group, index) => {
            const Icon = ICONS[index] ?? UserRound;
            return (
              <Reveal key={group.title} delay={index * 60}>
                <article className="card h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">{group.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {group.description}
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

cat > src/components/Philosophy.tsx << 'EOF'
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
EOF

cat > src/components/Faq.tsx << 'EOF'
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
            maxWidth="max-w-[640px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {dict.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 40}>
              <details className="card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 marker:hidden">
                  <h3 className="text-[15.5px] font-medium leading-snug tracking-[-0.015em] text-[color:var(--text)]">
                    {item.q}
                  </h3>
                  <span className="mt-0.5 shrink-0 text-[color:var(--text-muted)] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="border-t border-[color:var(--border)] pt-4 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

echo "part10 done"