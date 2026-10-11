import Link from "next/link";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";

import { LegalSectionIcon } from "./LegalIcons";
import LegalReadingProgress from "./LegalReadingProgress";
import LegalBackToTop from "./LegalBackToTop";
import LegalToc from "./LegalToc";
import LegalFooterNotice from "./LegalFooterNotice";

const dictEn = getDictionary("en");

export type LegalSection = {
  id: string;
  heading: string;
  content: ReactNode;
};

export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  sections,
  relatedLinks,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: LegalSection[];
  relatedLinks?: { label: string; href: string }[];
}) {
  const tocSections = sections.map((s) => ({ id: s.id, heading: s.heading }));

  return (
    <>
      <LegalReadingProgress />

      <Navbar
        brand={SITE_CONFIG.brandName}
        items={dictEn.nav.items}
        notifyLabel={dictEn.common.notifyMe}
        demoLabel={dictEn.common.demo}
        themeLabelDark={dictEn.theme.toggleToDark}
        themeLabelLight={dictEn.theme.toggleToLight}
        openMenuLabel={dictEn.nav.openMenu}
        closeMenuLabel={dictEn.nav.closeMenu}
        countriesLabel={dictEn.nav.countriesLabel}
      />

      <main className="pt-[var(--nav-h)]">
        {/* ============ Hero ============ */}
        <section className="legal-hero">
          <div className="legal-hero-bg" aria-hidden="true" />
          <div className="shell max-w-[820px] text-center relative">
            <div className="legal-hero-badge">
              <span className="legal-hero-badge-dot" />
              LEGAL · SMMZIN.COM
            </div>
            <h1 className="legal-hero-title">{title}</h1>
            <p className="legal-hero-subtitle">{subtitle}</p>
            <div className="legal-hero-meta">
              <span className="legal-hero-meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M3 10h18" />
                </svg>
                Last updated: <strong>{lastUpdated}</strong>
              </span>
              <span className="legal-hero-meta-sep" />
              <span className="legal-hero-meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3 4 6v6c0 4.4 3.2 7.5 7.5 8.7C15.8 19.5 19 16.4 19 12V6l-7-3Z" />
                </svg>
                Effective: <strong>{effectiveDate}</strong>
              </span>
            </div>
          </div>
        </section>

        {/* ============ Contact card — căn giữa, rộng bằng layout ============ */}
        <section className="legal-contact-strip">
          <div className="shell">
            <div className="legal-contact-card-wrap">
              <div className="legal-contact-card">
                <div className="legal-contact-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m3.5 7.5 8.5 6 8.5-6" />
                  </svg>
                </div>
                <div className="legal-contact-text">
                  <p className="legal-contact-title">
                    Have a question about this policy?
                  </p>
                  <p className="legal-contact-desc">
                    Email us at{" "}
                    <a href={`mailto:${SITE_CONFIG.contact.email}`}>
                      {SITE_CONFIG.contact.email}
                    </a>
                    {" · "}
                    <Link href="/#notify">Contact page</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Main layout: TOC + Cards ============ */}
        <section className="section !pt-8">
          <div className="shell">
            <div className="legal-layout">
              {/* -------- Sidebar TOC (sticky + active state) -------- */}
              <aside className="legal-toc">
                <LegalToc
                  sections={tocSections}
                  contactEmail={SITE_CONFIG.contact.email}
                />
              </aside>

              {/* -------- Main content -------- */}
              <div className="legal-content">
                {sections.map((section, i) => (
                  <article key={section.id} id={section.id} className="legal-card">
                    <header className="legal-card-header">
                      <div className="legal-card-icon">
                        <LegalSectionIcon id={section.id} size={22} />
                      </div>
                      <div className="legal-card-heading-wrap">
                        <span className="legal-card-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="legal-card-title">{section.heading}</h2>
                      </div>
                    </header>
                    <div className="legal-card-body">{section.content}</div>
                  </article>
                ))}

                {/* -------- Related docs -------- */}
                {relatedLinks && relatedLinks.length > 0 && (
                  <div className="legal-related">
                    <p className="legal-related-title">
                      You may also want to review our related legal documents
                    </p>
                    <div className="legal-related-links">
                      {relatedLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="legal-related-link"
                        >
                          {link.label}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* -------- Reserved Rights notice -------- */}
                <LegalFooterNotice />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LegalBackToTop />
      <Footer dict={dictEn} locale="en" />
    </>
  );
}
