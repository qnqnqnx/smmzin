import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { countriesList } from "@/content/countries-data";
import { getCountryFlag } from "@/content/countries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Countries({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const isVi = locale === "vi";

  return (
    <section id="countries" className="section">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow={dict.countries.eyebrow}
            title={dict.countries.title}
            description={dict.countries.description}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 [grid-auto-rows:1fr]">
          {countriesList.map((country, index) => {
            const name = isVi ? country.nameVi : country.nameEn;
            const tag = isVi ? country.tagVi : country.tagEn;
            const className = `country-card ${country.available ? "" : "country-card-soon"}`;
            const inner = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getCountryFlag(country.code, 160)}
                  alt={name}
                  width={48}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="country-flag"
                />
                <div className="country-name">{name}</div>
                <div className="country-tag">{tag}</div>
              </>
            );

            return (
              <Reveal key={country.code} delay={index * 30}>
                {country.available ? (
                  <Link href={country.href} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <div className={className} title="Coming soon">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-[13px] leading-relaxed text-[color:var(--text-muted)]">
            {dict.countries.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
