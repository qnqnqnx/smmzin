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
