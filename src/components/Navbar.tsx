"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { ArrowUpRight, Close, Menu } from "./Icons";
import { LogoMark } from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({
  locale,
  brand,
  items,
  notifyLabel,
  demoLabel,
  themeLabelDark,
  themeLabelLight,
  openMenuLabel,
  closeMenuLabel,
  languageLabel,
}: {
  locale: string;
  brand: string;
  items: NavItem[];
  notifyLabel: string;
  demoLabel: string;
  themeLabelDark: string;
  themeLabelLight: string;
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
  const hasDemo = Boolean(SITE_CONFIG.demoUrl);

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

          <ThemeToggle labelDark={themeLabelDark} labelLight={themeLabelLight} />

          {hasDemo && (
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden !h-9 !px-4 text-[13px] md:inline-flex"
            >
              {demoLabel}
              <ArrowUpRight size={14} />
            </a>
          )}

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

          {hasDemo && (
            <a
              href={SITE_CONFIG.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-ghost !h-10 mt-2 w-full text-[13px]"
            >
              {demoLabel}
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
