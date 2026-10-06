import type { Dictionary } from "@/content/dictionaries";
import { PlatformIcon } from "./PlatformIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

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
              <SpotlightCard className="flex h-full flex-col p-5">
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
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
