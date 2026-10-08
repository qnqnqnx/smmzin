"use client";

import { useMemo, useState, type CSSProperties, type MouseEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import type { PlatformItem } from "@/content/platforms";
import { rafThrottle } from "@/lib/throttle";
import { ArrowRight, Check } from "./Icons";
import { PlatformIcon } from "./PlatformIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function PlatformEcosystem({ dict }: { dict: Dictionary }) {
  const items: PlatformItem[] = dict.platforms.items;
  const [active, setActive] = useState<string>(items[0].key);

  // Lưu ý: currentTarget của React event bị null sau khi handler return.
  // Ta phải chụp element reference TRƯỚC khi truyền vào RAF callback.

  const handlePanelMouseMove = useMemo(
    () =>
      rafThrottle((element: HTMLElement, clientX: number, clientY: number) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--mx", `${clientX - rect.left}px`);
        element.style.setProperty("--my", `${clientY - rect.top}px`);
      }),
    [],
  );

  const handleTabMouseMove = useMemo(
    () =>
      rafThrottle((element: HTMLElement, clientX: number, clientY: number) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        element.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
      }),
    [],
  );

  return (
    <section id="platforms" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.platforms.eyebrow}
            title={dict.platforms.title}
            description={dict.platforms.description}
          />
        </Reveal>

        {/* ---------- Tab bar ---------- */}
        <Reveal delay={40}>
          <div className="platform-tabs mt-10" role="tablist" aria-label={dict.platforms.title}>
            {items.map((item) => {
              const isActive = item.key === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  id={`platform-tab-${item.key}`}
                  aria-selected={isActive}
                  aria-controls={`platform-panel-${item.key}`}
                  onClick={() => setActive(item.key)}
                  onMouseMove={(event: MouseEvent<HTMLButtonElement>) => {
                    const target = event.currentTarget;
                    handleTabMouseMove(target, event.clientX, event.clientY);
                  }}
                  className={`platform-tab ${isActive ? "is-active" : ""}`}
                  style={{ "--tab-accent": item.accent } as CSSProperties}
                >
                  <PlatformIcon name={item.key} size={15} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---------- Panels ---------- */}
        <div className="mt-6">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <article
                key={item.key}
                id={`platform-panel-${item.key}`}
                role="tabpanel"
                aria-labelledby={`platform-tab-${item.key}`}
                hidden={!isActive}
                onMouseMove={(event: MouseEvent<HTMLElement>) => {
                  const target = event.currentTarget;
                  handlePanelMouseMove(target, event.clientX, event.clientY);
                }}
                className="platform-panel"
                style={{ "--panel-accent": item.accent } as CSSProperties}
              >
                <div className="platform-panel-inner">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12">
                    {/* ----- Visual ----- */}
                    <div
                      className="platform-visual"
                      style={
                        {
                          "--visual-accent": item.accent,
                          background: `radial-gradient(circle at 50% 45%, ${item.accent}20, transparent 62%), linear-gradient(155deg, rgba(255,255,255,0.04), rgba(255,255,255,0.008))`,
                        } as CSSProperties
                      }
                    >
                      <div className="platform-visual-ring" />
                      <div className="platform-visual-ring platform-visual-ring-2" />

                      <div className="platform-visual-inner">
                        <div className="platform-visual-icon" style={{ color: item.accent }}>
                          <PlatformIcon name={item.key} size={44} />
                        </div>
                        <div className="platform-visual-name">{item.name}</div>
                      </div>
                    </div>

                    {/* ----- Detail ----- */}
                    <div>
                      <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.025em] sm:text-[28px]">
                        {item.name} SMM Panel
                      </h3>

                      <p className="mt-3 max-w-[72ch] text-[14.5px] leading-relaxed text-[color:var(--text-muted)]">
                        {item.longDescription}
                      </p>

                      <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                        {dict.platforms.keywordsLabel}
                      </p>

                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {item.keywords.map((kw) => (
                          <li key={kw.title} className="flex items-start gap-2.5">
                            <span className="keyword-check mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[color:var(--accent)]">
                              <Check size={10} />
                            </span>
                            <div className="min-w-0">
                              <span className="block text-[13.5px] font-medium leading-snug tracking-[-0.01em] text-[color:var(--text)]">
                                {kw.title}
                              </span>
                              <span className="mt-0.5 block text-[12px] leading-snug text-[color:var(--text-muted)]">
                                {kw.description}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#notify"
                        className="btn btn-ghost !mt-7 !h-9 !px-4 text-[13px]"
                      >
                        {dict.platforms.detailCta}
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
