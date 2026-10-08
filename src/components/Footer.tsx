import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { resolveLink } from "@/lib/i18n";
import { InstagramMark, FacebookMark, TelegramMark, XMark } from "./Icons";
import { LogoMark } from "./Logo";
import BrandName from "./BrandName";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  const socials = [
    { key: "facebook", href: SITE_CONFIG.socialLinks.facebook, Icon: FacebookMark, label: "Facebook" },
    { key: "instagram", href: SITE_CONFIG.socialLinks.instagram, Icon: InstagramMark, label: "Instagram" },
    { key: "telegram", href: SITE_CONFIG.socialLinks.telegram, Icon: TelegramMark, label: "Telegram" },
    { key: "x", href: SITE_CONFIG.socialLinks.x, Icon: XMark, label: "X" },
  ];

  return (
    <footer className="relative mt-8 border-t border-[color:var(--border)] pt-14">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <BrandName />
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
            <span className="text-[12.5px] text-[color:var(--text-muted)] opacity-70">
              {SITE_CONFIG.contact.email}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
