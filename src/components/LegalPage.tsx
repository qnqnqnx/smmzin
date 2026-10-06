import Link from "next/link";
import type { LegalSection } from "@/content/dictionaries";
import { ArrowRight } from "./Icons";

export default function LegalPage({
  title,
  intro,
  sections,
  updatedLabel,
  updated,
  backLabel,
  locale,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedLabel: string;
  updated: string;
  backLabel: string;
  locale: string;
}) {
  return (
    <main className="pt-[calc(var(--nav-h)+64px)] pb-24">
      <div className="shell max-w-[760px]">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-[13px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
        >
          <ArrowRight size={15} className="rotate-180" />
          {backLabel}
        </Link>

        <h1 className="mt-7 text-[32px] font-semibold leading-[1.15] tracking-[-0.035em] sm:text-[42px]">
          {title}
        </h1>

        <p className="mt-3 text-[12.5px] uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
          {updatedLabel}: {updated}
        </p>

        <p className="mt-7 text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[18px] font-medium tracking-[-0.02em]">{section.heading}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--text-muted)]">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
