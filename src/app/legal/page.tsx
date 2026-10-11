import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import {
  PrivacyIcon,
  TermsIcon,
  CookiesIcon,
  RefundIcon,
  DisclaimerIcon,
} from "@/components/legal/LegalHubIcons";

const dictEn = getDictionary("en");

export const metadata: Metadata = {
  title: "Legal Center — SMMZin",
  description:
    "Legal documents for SMMZin — privacy, terms of service, cookies, refund policy and disclaimer.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal`,
  },
  robots: { index: false, follow: true },
};

type LegalDoc = {
  num: string;
  title: string;
  desc: string;
  href: string;
  Icon: (p: { size?: number }) => JSX.Element;
};

const customerDocs: LegalDoc[] = [
  {
    num: "01",
    title: "Privacy Policy",
    desc: "How we collect, use, disclose and safeguard your personal data across the SMMZin platform.",
    href: "/legal/privacy",
    Icon: PrivacyIcon,
  },
  {
    num: "02",
    title: "Cookies Policy",
    desc: "The types of cookies we use, how they work, and the controls available to you.",
    href: "/legal/cookies",
    Icon: CookiesIcon,
  },
  {
    num: "03",
    title: "Refund Policy",
    desc: "Rules covering order cancellations, refunds, refill guarantees, and balance withdrawals.",
    href: "/legal/refund",
    Icon: RefundIcon,
  },
];

const serviceDocs: LegalDoc[] = [
  {
    num: "04",
    title: "Terms and Conditions",
    desc: "The rules governing your use of SMMZin, including prohibited content, account obligations, and termination.",
    href: "/legal/terms",
    Icon: TermsIcon,
  },
  {
    num: "05",
    title: "Disclaimer",
    desc: "Important limitations and disclaimers about the SMMZin platform, services, and third-party content.",
    href: "/legal/disclaimer",
    Icon: DisclaimerIcon,
  },
];

export default function LegalHubPage() {
  return (
    <>
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
        <section className="legal-hub-hero">
          <div className="legal-hub-hero-bg" aria-hidden="true" />
          <div className="shell max-w-[860px] text-center relative">
            <div className="legal-hero-badge">
              <span className="legal-hero-badge-dot" />
              LEGAL CENTER · SMMZIN.COM
            </div>

            <h1 className="legal-hub-hero-title">
              Legal &amp; <span className="legal-hub-hero-accent">Compliance</span>
            </h1>

            <p className="legal-hub-hero-subtitle">
              Every policy that governs your use of SMMZin, in one place.
              Written in plain language, kept current, and designed so you
              always know exactly what you are agreeing to.
            </p>

            <div className="legal-hub-stats">
              <div className="legal-hub-stat">
                <div className="legal-hub-stat-num">5</div>
                <div className="legal-hub-stat-label">Documents</div>
              </div>
              <div className="legal-hub-stat-sep" />
              <div className="legal-hub-stat">
                <div className="legal-hub-stat-num">2026</div>
                <div className="legal-hub-stat-label">Last revised</div>
              </div>
              <div className="legal-hub-stat-sep" />
              <div className="legal-hub-stat">
                <div className="legal-hub-stat-num">48h</div>
                <div className="legal-hub-stat-label">Response time</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Category 1 — Customer Documents ============ */}
        <section className="legal-hub-section">
          <div className="shell max-w-[1120px]">
            <div className="legal-hub-category">
              <div className="legal-hub-category-line" aria-hidden="true" />
              <div className="legal-hub-category-label">
                <span className="legal-hub-category-dot" />
                Your Rights &amp; Data
              </div>
            </div>

            <div className="legal-hub-grid legal-hub-grid-3">
              {customerDocs.map((doc) => (
                <LegalHubCard key={doc.href} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* ============ Category 2 — Service Documents ============ */}
        <section className="legal-hub-section !pt-0">
          <div className="shell max-w-[1120px]">
            <div className="legal-hub-category">
              <div className="legal-hub-category-line" aria-hidden="true" />
              <div className="legal-hub-category-label">
                <span className="legal-hub-category-dot" />
                Service Terms
              </div>
            </div>

            <div className="legal-hub-grid legal-hub-grid-2">
              {serviceDocs.map((doc) => (
                <LegalHubCard key={doc.href} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* ============ Contact CTA ============ */}
        <section className="section !pt-8">
          <div className="shell max-w-[860px]">
            <div className="legal-hub-cta">
              <div className="legal-hub-cta-glow" aria-hidden="true" />
              <div className="legal-hub-cta-content">
                <div className="legal-hub-cta-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m3.5 7.5 8.5 6 8.5-6" />
                  </svg>
                </div>
                <h2 className="legal-hub-cta-title">
                  Questions about our policies?
                </h2>
                <p className="legal-hub-cta-desc">
                  Our team responds to legal and privacy questions within
                  48 hours. Reach out anytime.
                </p>
                <div className="legal-hub-cta-actions">
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="btn btn-primary !h-11 !px-5 text-[13.5px]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" />
                      <path d="m3.5 7.5 8.5 6 8.5-6" />
                    </svg>
                    {SITE_CONFIG.contact.email}
                  </a>
                  <a
                    href={SITE_CONFIG.contact.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !h-11 !px-5 text-[13.5px]"
                  >
                    Telegram Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dictEn} locale="en" />
    </>
  );
}

// ------------------------------------------------------------
// Card component
// ------------------------------------------------------------
function LegalHubCard({ doc }: { doc: LegalDoc }) {
  const { Icon } = doc;
  return (
    <Link href={doc.href} className="legal-hub-card">
      <div className="legal-hub-card-num">{doc.num}</div>

      <div className="legal-hub-card-icon">
        <Icon size={24} />
      </div>

      <h2 className="legal-hub-card-title">{doc.title}</h2>
      <p className="legal-hub-card-desc">{doc.desc}</p>

      <div className="legal-hub-card-footer">
        <span className="legal-hub-card-link">Read document</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="legal-hub-card-arrow">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}
