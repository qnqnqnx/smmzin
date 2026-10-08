"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { countriesList } from "@/content/countries-data";
import { getCountryFlag } from "@/content/countries";
import { ArrowUpRight, ChevronDown, Close, Menu } from "./Icons";
import { LogoMark } from "./Logo";
import ThemeToggle from "./ThemeToggle";
import BrandName from "./BrandName";

export default function Navbar({
  brand,
  items,
  notifyLabel,
  demoLabel,
  themeLabelDark,
  themeLabelLight,
  openMenuLabel,
  closeMenuLabel,
  countriesLabel,
  locale = "en",
}: {
  brand: string;
  items: NavItem[];
  notifyLabel: string;
  demoLabel: string;
  themeLabelDark: string;
  themeLabelLight: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  countriesLabel?: string;
  locale?: "vi" | "en";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownOpen]);

  const hasDemo = Boolean(SITE_CONFIG.demoUrl);
  const availableCountries = countriesList.filter((c) => c.available);
  const comingSoonCountries = countriesList.filter((c) => !c.available);

  const labels = {
    available: locale === "vi" ? "Đang hoạt động" : "Available now",
    comingSoon: locale === "vi" ? "Sắp ra mắt" : "Coming soon",
    totalLabel: locale === "vi" ? "quốc gia" : "countries",
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b transition-colors duration-300",
        scrolled || open
          ? "border-[color:var(--border)] bg-[color:var(--surface-glass)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        className="shell flex h-full items-center justify-between gap-2"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full"
          aria-label={brand}
        >
          <LogoMark />
          <BrandName />
        </Link>

        <ul className="hidden items-center lg:flex">
          {items.map((item) => {
            const isAnchor = item.href.startsWith("#");
            const className =
              "nav-link whitespace-nowrap rounded-full px-3 py-2 text-[13px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]";
            return (
              <li key={item.href}>
                {isAnchor ? (
                  <a href={item.href} className={className}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          {countriesLabel && (
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                onMouseEnter={() => setDropdownOpen(true)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[13px] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
              >
                {countriesLabel}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="country-dropdown"
                >
                  <div className="country-dropdown-inner">
                    {/* -------- Available now -------- */}
                    <div className="country-dropdown-header">
                      <span className="country-dropdown-dot" />
                      <span className="country-dropdown-label">
                        {labels.available}
                      </span>
                      <span className="country-dropdown-count">
                        {availableCountries.length} {labels.totalLabel}
                      </span>
                    </div>

                    <div className="country-dropdown-grid country-dropdown-grid-available">
                      {availableCountries.map((country) => {
                        const name =
                          locale === "vi" ? country.nameVi : country.nameEn;
                        return (
                          <Link
                            key={country.code}
                            href={country.href}
                            onClick={() => setDropdownOpen(false)}
                            className="country-dropdown-item"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={getCountryFlag(country.code, 80)}
                              alt={name}
                              width={22}
                              height={16}
                              className="country-dropdown-flag"
                            />
                            <span className="country-dropdown-name">
                              {name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* -------- Coming soon -------- */}
                    <div className="country-dropdown-divider" />

                    <div className="country-dropdown-header country-dropdown-header-muted">
                      <span className="country-dropdown-dot country-dropdown-dot-muted" />
                      <span className="country-dropdown-label country-dropdown-label-muted">
                        {labels.comingSoon}
                      </span>
                      <span className="country-dropdown-count country-dropdown-count-muted">
                        {comingSoonCountries.length} {labels.totalLabel}
                      </span>
                    </div>

                    <div className="country-dropdown-grid country-dropdown-grid-soon">
                      {comingSoonCountries.map((country) => {
                        const name =
                          locale === "vi" ? country.nameVi : country.nameEn;
                        return (
                          <div
                            key={country.code}
                            className="country-dropdown-item country-dropdown-item-soon"
                            title={`${name} — ${labels.comingSoon}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={getCountryFlag(country.code, 80)}
                              alt={name}
                              width={18}
                              height={13}
                              className="country-dropdown-flag"
                            />
                            <span className="country-dropdown-name country-dropdown-name-soon">
                              {name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>
          )}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle labelDark={themeLabelDark} labelLight={themeLabelLight} />

          {hasDemo && (
            <div className="hidden lg:block xl:hidden">
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={demoLabel}
                title={demoLabel}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}

          {hasDemo && (
            <div className="hidden xl:block">
              <a
                href={SITE_CONFIG.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !h-9 whitespace-nowrap !px-3.5 text-[12.5px]"
              >
                {demoLabel}
                <ArrowUpRight size={13} />
              </a>
            </div>
          )}

          <div className="hidden sm:block">
            <a
              href="#notify"
              className="btn btn-primary !h-9 whitespace-nowrap !px-3.5 text-[12.5px]"
            >
              {notifyLabel}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition-colors hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="glass absolute inset-x-0 top-[var(--nav-h)] max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-b p-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {items.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const className =
                "block rounded-xl px-3 py-3 text-[15px] text-[color:var(--text)] transition-colors hover:bg-white/[0.05]";
              return (
                <li key={item.href}>
                  {isAnchor ? (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={className}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {countriesLabel && (
              <li>
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] text-[color:var(--text)] transition-colors hover:bg-white/[0.05]"
                >
                  <span>{countriesLabel}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="ml-3 mt-1 space-y-3 border-l border-[color:var(--border)] pl-3 pb-2">
                    {/* Available */}
                    <div>
                      <p className="px-2 pb-1 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                        {labels.available}
                      </p>
                      {availableCountries.map((country) => {
                        const name =
                          locale === "vi" ? country.nameVi : country.nameEn;
                        return (
                          <Link
                            key={country.code}
                            href={country.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.05]"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={getCountryFlag(country.code, 80)}
                              alt={name}
                              width={20}
                              height={14}
                              className="rounded border border-[color:var(--border)]"
                            />
                            <span className="text-[14px] text-[color:var(--text)]">
                              {name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Coming soon */}
                    <div>
                      <p className="px-2 pb-1 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                        {labels.comingSoon}
                      </p>
                      <div className="grid grid-cols-2 gap-x-2">
                        {comingSoonCountries.map((country) => {
                          const name =
                            locale === "vi"
                              ? country.nameVi
                              : country.nameEn;
                          return (
                            <div
                              key={country.code}
                              className="flex items-center gap-2 rounded-lg px-2 py-1.5 opacity-50"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={getCountryFlag(country.code, 80)}
                                alt={name}
                                width={16}
                                height={11}
                                className="rounded border border-[color:var(--border)]"
                              />
                              <span className="text-[12px] text-[color:var(--text-muted)] truncate">
                                {name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>

          <div className="mt-3 border-t border-[color:var(--border)] pt-3">
            <a
              href="#notify"
              onClick={() => setOpen(false)}
              className="btn btn-primary !h-10 w-full text-[13px]"
            >
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
