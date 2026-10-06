#!/usr/bin/env bash
set -euo pipefail

cat > src/components/Logo.tsx << 'EOF'
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="smmzin-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2f24" />
          <stop offset="100%" stopColor="#0a1410" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9.5" fill="url(#smmzin-mark)" />
      <rect x="1" y="1" width="30" height="30" rx="9.5" stroke="rgba(233,241,236,0.14)" />
      <path d="M9 20.5 16 13l7 7.5" stroke="#cdf0dd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 25 16 17.5 23 25" stroke="#6fa585" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
    </svg>
  );
}
EOF

cat > src/components/Countdown.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/content/site.config";
import { getRemainingMs, pad, splitRemaining } from "@/lib/countdown";

type Labels = {
  label: string;
  hours: string;
  minutes: string;
  seconds: string;
  note: string;
};

export default function Countdown({ labels, initialMs }: { labels: Labels; initialMs: number }) {
  const [remaining, setRemaining] = useState(initialMs);

  useEffect(() => {
    const tick = () => setRemaining(getRemainingMs(SITE_CONFIG.countdown));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const { hours, minutes, seconds } = splitRemaining(remaining);

  const cells = [
    { value: pad(hours), unit: labels.hours },
    { value: pad(minutes), unit: labels.minutes },
    { value: pad(seconds), unit: labels.seconds },
  ];

  return (
    <div className="glass rounded-[22px] p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">{labels.label}</p>
          <p className="mt-1.5 text-[12.5px] text-[color:var(--text-muted)]">{labels.note}</p>
        </div>

        <div className="flex items-center gap-2" role="timer" aria-live="off">
          {cells.map((cell, index) => (
            <div key={cell.unit} className="flex items-center gap-2">
              <div className="min-w-[68px] rounded-2xl border border-[color:var(--border)] bg-white/[0.035] px-3 py-2.5 text-center sm:min-w-[80px]">
                <span className="block font-mono text-[26px] font-medium leading-none tabular-nums tracking-tight sm:text-[30px]">
                  {cell.value}
                </span>
                <span className="mt-1.5 block text-[9.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                  {cell.unit}
                </span>
              </div>
              {index < cells.length - 1 && (
                <span className="pb-5 text-[20px] leading-none text-[color:var(--text-muted)] opacity-50">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF

cat > src/components/Navbar.tsx << 'EOF'
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/dictionaries";
import { Close, Menu } from "./Icons";
import { LogoMark } from "./Logo";

export default function Navbar({
  locale,
  brand,
  items,
  notifyLabel,
  openMenuLabel,
  closeMenuLabel,
  languageLabel,
}: {
  locale: string;
  brand: string;
  items: NavItem[];
  notifyLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const otherLocale = locale === "vi" ? "en" : "vi";
  const switchHref = pathname.replace(/^\/(vi|en)(?=\/|$)/, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b transition-colors duration-300",
        scrolled || open
          ? "border-[color:var(--border)] bg-[color:var(--surface-glass)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="shell flex h-full items-center justify-between gap-3" aria-label="Primary">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5 rounded-full" aria-label={brand}>
          <LogoMark />
          <span className="text-[17px] font-semibold tracking-[-0.02em]">{brand}</span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] text-[color:var(--text-muted)] transition-colors hover:bg-white/[0.05] hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            aria-label={languageLabel}
            className="hidden items-center gap-1 rounded-full border border-[color:var(--border)] px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors hover:border-[color:var(--border-strong)] sm:inline-flex"
          >
            <span className={locale === "vi" ? "text-[color:var(--text)]" : "text-[color:var(--text-muted)]"}>VI</span>
            <span className="text-[color:var(--text-muted)] opacity-40">/</span>
            <span className={locale === "en" ? "text-[color:var(--text)]" : "text-[color:var(--text-muted)]"}>EN</span>
          </Link>

          <a href="#notify" className="btn btn-primary hidden !h-9 !px-4 text-[13px] sm:inline-flex">
            {notifyLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition-colors hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <Close size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass absolute inset-x-0 top-[var(--nav-h)] max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-b p-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-[15px] text-[color:var(--text)] transition-colors hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-2 border-t border-[color:var(--border)] pt-3">
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="btn btn-ghost !h-10 flex-1 text-[13px]"
            >
              {locale === "vi" ? "Tiếng Việt / EN" : "English / VI"}
            </Link>
            <a href="#notify" onClick={() => setOpen(false)} className="btn btn-primary !h-10 flex-1 text-[13px]">
              {notifyLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
EOF

cat > src/components/Hero.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import Countdown from "./Countdown";
import { ArrowRight } from "./Icons";

export default function Hero({ dict, initialMs }: { dict: Dictionary; initialMs: number }) {
  return (
    <section id="home" className="relative overflow-hidden pt-[calc(var(--nav-h)+48px)] pb-14 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay" aria-hidden="true" />

      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <span className="pill">
              <span className="pill-dot" />
              {dict.hero.badge}
            </span>

            <h1 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[60px]">
              {dict.hero.title}
            </h1>

            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[17px]">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#notify" className="btn btn-primary">
                {dict.common.notifyMe}
                <ArrowRight size={17} />
              </a>
              <a href="#about" className="btn btn-ghost">
                {dict.common.explore}
              </a>
            </div>

            <p className="mt-6 text-[13px] text-[color:var(--text-muted)]">{dict.hero.note}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="relative aspect-square">
              <div className="ring inset-[-14%]" />
              <div className="ring inset-[-4%]" />
              <div className="orb float-slow" />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <Countdown
            initialMs={initialMs}
            labels={{
              label: dict.hero.countdownLabel,
              hours: dict.hero.hours,
              minutes: dict.hero.minutes,
              seconds: dict.hero.seconds,
              note: dict.hero.countdownNote,
            }}
          />
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/components/SectionHeading.tsx << 'EOF'
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "max-w-[640px]",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: string;
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`flex flex-col ${alignment} ${align === "center" ? maxWidth : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[36px] lg:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15.5px] leading-relaxed text-[color:var(--text-muted)] ${align === "left" ? maxWidth : "mx-auto max-w-[620px]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
EOF

cat > src/components/PlatformMarquee.tsx << 'EOF'
import { marqueePlatforms } from "@/content/platforms";
import { PlatformIcon } from "./PlatformIcons";

export default function PlatformMarquee({ heading }: { heading: string }) {
  const items = [...marqueePlatforms, ...marqueePlatforms];

  return (
    <section className="section border-y border-[color:var(--border)] !py-10 sm:!py-12" aria-label={heading}>
      <p className="eyebrow text-center">{heading}</p>

      <div className="marquee mt-6">
        <div className="marquee-track">
          {items.map((platform, index) => (
            <div
              key={`${platform.key}-${index}`}
              className="flex shrink-0 items-center gap-2.5 px-6 text-[color:var(--text-muted)] sm:px-8"
            >
              <PlatformIcon name={platform.key} size={20} />
              <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.01em]">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

echo "part8 done"