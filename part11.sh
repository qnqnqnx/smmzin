#!/usr/bin/env bash
set -euo pipefail

cat > src/components/NotifyMe.tsx << 'EOF'
"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { ArrowRight, Check } from "./Icons";
import { SITE_CONFIG } from "@/content/site.config";

async function submitEmail(_email: string, _locale: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NotifyMe({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const value = email.trim();
    if (!value) {
      setError(dict.notify.errorRequired);
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError(dict.notify.errorInvalid);
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      await submitEmail(value, locale);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      setError(dict.notify.errorInvalid);
    }
  }

  return (
    <section id="notify" className="section">
      <div className="shell">
        <div className="glass mx-auto max-w-[720px] rounded-[26px] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="eyebrow">{dict.notify.eyebrow}</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
            {dict.notify.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[color:var(--text-muted)]">
            {dict.notify.description}
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mx-auto mt-8 flex max-w-[440px] items-center justify-center gap-2.5 rounded-2xl border border-[color:var(--border-strong)] bg-white/[0.04] px-5 py-4 text-[14px] text-[color:var(--text)]"
            >
              <Check size={17} className="shrink-0 text-[color:var(--accent)]" />
              {dict.notify.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 max-w-[480px]">
              <label htmlFor="notify-email" className="sr-only">
                {dict.notify.label}
              </label>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <input
                  id="notify-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={dict.notify.placeholder}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(null);
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "notify-error" : undefined}
                  className={[
                    "h-12 w-full rounded-full border bg-white/[0.03] px-5 text-[14.5px] text-[color:var(--text)] outline-none transition-colors placeholder:text-[color:var(--text-muted)]",
                    error
                      ? "border-[#c98b8b]"
                      : "border-[color:var(--border-strong)] focus:border-[color:var(--accent)]",
                  ].join(" ")}
                />

                <button type="submit" disabled={status === "sending"} className="btn btn-primary !h-12 shrink-0 disabled:opacity-70">
                  {status === "sending" ? dict.notify.sending : dict.notify.button}
                  {status !== "sending" && <ArrowRight size={17} />}
                </button>
              </div>

              {error && (
                <p id="notify-error" role="alert" className="mt-3 text-left text-[13px] text-[#e0a3a3]">
                  {error}
                </p>
              )}

              <p className="mt-4 text-[12.5px] text-[color:var(--text-muted)]">{dict.notify.privacy}</p>
            </form>
          )}

          <p className="mt-6 text-[12px] text-[color:var(--text-muted)] opacity-70">
            {SITE_CONFIG.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/FinalCta.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-x-0 -bottom-40 h-[320px] opacity-70 blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, rgba(79,125,94,0.6), transparent 70%)" }}
              aria-hidden="true"
            />
            <h2 className="relative text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-[42px] lg:text-[48px]">
              {dict.finalCta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
              {dict.finalCta.description}
            </p>
            <a href="#notify" className="btn btn-primary relative mt-8">
              {dict.finalCta.button}
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
EOF

cat > src/components/Footer.tsx << 'EOF'
import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { resolveLink } from "@/lib/i18n";
import { InstagramMark, FacebookMark, TelegramMark, XMark } from "./Icons";
import { LogoMark } from "./Logo";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  const socials = [
    { key: "facebook", href: SITE_CONFIG.socialLinks.facebook, Icon: FacebookMark, label: "Facebook" },
    { key: "instagram", href: SITE_CONFIG.socialLinks.instagram, Icon: InstagramMark, label: "Instagram" },
    { key: "telegram", href: SITE_CONFIG.socialLinks.telegram, Icon: TelegramMark, label: "Telegram" },
    { key: "x", href: SITE_CONFIG.socialLinks.x, Icon: XMark, label: "X" },
  ];

  const otherLocale = locale === "vi" ? "en" : "vi";

  return (
    <footer className="relative mt-8 border-t border-[color:var(--border)] pt-14">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-[17px] font-semibold tracking-[-0.02em]">{SITE_CONFIG.brandName}</span>
            </div>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-relaxed text-[color:var(--text-muted)]">
              {dict.footer.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {dict.footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--text)]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={resolveLink(locale as "vi" | "en", link.href)}
                        className="text-[13.5px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[color:var(--border)] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-[color:var(--text-muted)]">
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. {dict.footer.rights}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={`/${otherLocale}`}
              className="text-[12.5px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
            >
              {otherLocale === "vi" ? "Tiếng Việt" : "English"}
            </Link>
            <span className="text-[12.5px] text-[color:var(--text-muted)] opacity-50">
              {SITE_CONFIG.contact.email}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF

cat > src/components/LegalPage.tsx << 'EOF'
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
EOF

echo "part11 done"