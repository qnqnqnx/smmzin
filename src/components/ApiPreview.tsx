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
                <span className="code-cursor" />
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
