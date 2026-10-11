import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { countriesList } from "@/content/countries-data";
import { getCountryFlag } from "@/content/countries";
import { resolveLink } from "@/lib/i18n";
import {
  FacebookMark,
  InstagramMark,
  TelegramMark,
  XMark,
  Mail,
  ArrowUpRight,
} from "./Icons";
import { LogoMark } from "./Logo";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const year = new Date().getFullYear();
  const otherLocale = locale === "vi" ? "en" : "vi";
  const isVi = locale === "vi";

  const socials = [
    { key: "facebook", href: SITE_CONFIG.socialLinks.facebook, Icon: FacebookMark, label: "Facebook" },
    { key: "instagram", href: SITE_CONFIG.socialLinks.instagram, Icon: InstagramMark, label: "Instagram" },
    { key: "telegram", href: SITE_CONFIG.socialLinks.telegram, Icon: TelegramMark, label: "Telegram" },
    { key: "x", href: SITE_CONFIG.socialLinks.x, Icon: XMark, label: "X" },
  ];

  const availableCount = countriesList.filter((c) => c.available).length;

  return (
    <footer className="fo">
      {/* ============================================================
          SECTION 1 — Brand Hero (full-width)
          ============================================================ */}
      <section className="fo-hero">
        <div className="fo-hero-bg" aria-hidden="true" />
        <div className="shell fo-hero-inner">
          {/* Row 1: logo + socials */}
          <div className="fo-hero-row">
            <Link href="/" className="fo-hero-logo" aria-label={SITE_CONFIG.brandName}>
              <LogoMark size={52} />
              <span className="fo-hero-name">
                SMM<span className="fo-hero-zin">Zin</span>
                <span className="fo-hero-suffix">.Com</span>
              </span>
            </Link>

            <div className="fo-hero-socials">
              {socials.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-brand={key}
                  className="fo-hero-social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Row 2: description + contact cluster */}
          <div className="fo-hero-row fo-hero-row-bottom">
            <p className="fo-hero-desc">
              {isVi
                ? "Nền tảng Social Media Marketing thế hệ mới — nơi creators, agency và thương hiệu quản lý tăng trưởng mạng xã hội."
                : "The next-generation social media marketing platform — where creators, agencies and brands manage social growth."}
            </p>

            <div className="fo-hero-cluster">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="fo-hero-email"
              >
                <Mail size={14} />
                <span>{SITE_CONFIG.contact.email}</span>
                <ArrowUpRight size={12} className="fo-hero-email-arrow" />
              </a>

              <div className="fo-hero-status">
                <span className="fo-hero-status-dot" />
                <span>{isVi ? "Hoạt động bình thường" : "All systems operational"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Links (4 cột đều)
          ============================================================ */}
      <section className="fo-links">
        <div className="shell fo-links-grid">
          {dict.footer.columns.map((column) => (
            <nav key={column.title} className="fo-links-col">
              <p className="fo-links-title">{column.title}</p>
              <ul className="fo-links-list">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={resolveLink(locale as "vi" | "en", link.href)}
                      className="fo-links-link"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={11} className="fo-links-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Countries
          ============================================================ */}
      <section className="fo-countries">
        <div className="shell">
          <div className="fo-countries-head">
            <p className="fo-countries-title">
              {isVi
                ? "SMM PANEL TOÀN CẦU · THANH TOÁN NỘI ĐỊA"
                : "GLOBAL SMM PANEL · LOCAL PAYMENTS"}
            </p>
            <span className="fo-countries-badge">
              {availableCount} {isVi ? "quốc gia" : "countries"}
            </span>
          </div>

          <div className="fo-countries-list">
            {countriesList.map((country) => {
              const name = isVi ? country.nameVi : country.nameEn;

              if (country.available) {
                return (
                  <Link
                    key={country.code}
                    href={country.href}
                    className="fo-country"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getCountryFlag(country.code, 80)}
                      alt={name}
                      width={16}
                      height={12}
                      loading="lazy"
                      className="fo-country-flag"
                    />
                    <span>{name}</span>
                  </Link>
                );
              }

              return (
                <div
                  key={country.code}
                  className="fo-country fo-country-soon"
                  title={`${name} — ${isVi ? "sắp ra mắt" : "coming soon"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getCountryFlag(country.code, 80)}
                    alt={name}
                    width={16}
                    height={12}
                    loading="lazy"
                    className="fo-country-flag"
                  />
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Bottom bar
          ============================================================ */}
      <section className="fo-bottom">
        <div className="shell fo-bottom-inner">
          <p className="fo-copy">
            © {year} {SITE_CONFIG.brandName}. {dict.footer.rights}
          </p>

          <div className="fo-bottom-right">
            <Link href="/legal" className="fo-bottom-link">
              {isVi ? "Trung tâm pháp lý" : "Legal Center"}
            </Link>
            <span className="fo-bottom-sep" />
            <Link
              href={`/${otherLocale}`}
              className="fo-bottom-link"
              aria-label={dict.common.languageLabel}
            >
              {otherLocale === "vi" ? "Tiếng Việt" : "English"}
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
