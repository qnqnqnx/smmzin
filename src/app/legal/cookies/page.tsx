import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import {
  CookieTable,
  CookieCategories,
  type CookieEntry,
  type CookieCategoryCard,
} from "@/components/legal/CookieTable";
import { SITE_CONFIG } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Cookies Policy — SMMZin",
  description:
    "How SMMZin uses cookies and similar technologies on smmzin.com, including the types of cookies we use and how you can control them.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal/cookies`,
  },
  robots: { index: false, follow: true },
};

const cookies: CookieEntry[] = [
  {
    name: "smmzin_session",
    category: "essential",
    purpose: "Maintains your login session across pages",
    duration: "Session",
  },
  {
    name: "smmzin_auth",
    category: "essential",
    purpose: "Keeps you authenticated on the dashboard",
    duration: "30 days",
  },
  {
    name: "smmzin_csrf",
    category: "essential",
    purpose: "Prevents cross-site request forgery attacks",
    duration: "Session",
  },
  {
    name: "smmzin_theme",
    category: "preference",
    purpose: "Remembers your dark or light mode preference",
    duration: "12 months",
  },
  {
    name: "smmzin_locale",
    category: "preference",
    purpose: "Remembers your language and region preference",
    duration: "12 months",
  },
  {
    name: "smmzin_analytics",
    category: "analytics",
    purpose: "Aggregated, anonymised traffic analysis",
    duration: "12 months",
  },
  {
    name: "smmzin_cf",
    category: "third-party",
    purpose: "Cloudflare security and performance optimisation",
    duration: "Session",
  },
];

const categories: CookieCategoryCard[] = [
  {
    key: "essential",
    title: "Essential Cookies",
    desc: "Required for smmzin.com to function. Without them, core features such as logging in, placing orders, and managing your account will not work.",
    canDisable: false,
    examples: [
      "Keep you logged into your SMMZin account",
      "Remember your active session",
      "Protect your account by detecting unusual login activity",
    ],
  },
  {
    key: "analytics",
    title: "Analytics Cookies",
    desc: "Help us understand how visitors use smmzin.com so we can improve page performance, fix issues, and identify which parts of the site get the most engagement.",
    canDisable: true,
    examples: [
      "Which pages users visit and how long they stay",
      "Which countries visitors come from",
      "Where users drop off through the site",
    ],
  },
  {
    key: "preference",
    title: "Preference Cookies",
    desc: "Remember your settings so you do not have to reconfigure them every time you visit. These improve your experience on return visits.",
    canDisable: true,
    examples: [
      "Your display or language settings",
      "Whether you have dismissed a notification or banner",
      "Your chosen theme (dark or light)",
    ],
  },
  {
    key: "third-party",
    title: "Third-Party Cookies",
    desc: "Some features on smmzin.com are powered by third-party services. These services may set their own cookies on your device when you interact with them. SMMZin does not control third-party cookies.",
    canDisable: true,
    examples: [
      "Payment processors (PayPal, Visa, Mastercard, crypto processors) when you add funds",
      "Analytics providers that help us measure site performance",
      "Security tools that detect and block fraudulent activity",
    ],
  },
];

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    heading: "What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that a website saves on your device
          when you visit it. They help the site remember information about
          your visit, such as your login status, language preferences, and
          how you navigate the pages.
        </p>
        <p>
          Cookies do not contain your personal passwords or financial
          details. They are used to make websites work properly and to give
          website owners basic analytics about how their site is used.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-cookies",
    heading: "How SMMZin Uses Cookies",
    content: (
      <>
        <p>SMMZin uses cookies for three main purposes:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>To keep the platform working correctly</li>
          <li>To understand how users interact with the site</li>
          <li>To remember your preferences between visits</li>
        </ul>
        <p>
          We do not use cookies to serve you advertising, sell your data to
          third parties, or track you across other websites for marketing
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    heading: "What Types of Cookies Does SMMZin Use?",
    content: (
      <>
        <p>
          There are four categories of cookies used across smmzin.com. The
          cards below explain each category, what it does, and whether you
          can disable it.
        </p>
        <CookieCategories categories={categories} />
      </>
    ),
  },
  {
    id: "cookie-inventory",
    heading: "Specific Cookies We Set",
    content: (
      <>
        <p>
          The table below lists the specific cookies set by SMMZin directly.
          Third-party cookies are not listed here because they are set by
          external services and are subject to their own policies.
        </p>
        <CookieTable cookies={cookies} />
      </>
    ),
  },
  {
    id: "cookie-lifetime",
    heading: "How Long Do Cookies Stay on Your Device?",
    content: (
      <>
        <p>Cookies are either session cookies or persistent cookies.</p>
        <p>
          <strong>Session cookies</strong> are temporary. They exist only
          while your browser is open and are deleted automatically when you
          close it. SMMZin uses session cookies primarily to maintain your
          login state.
        </p>
        <p>
          <strong>Persistent cookies</strong> remain on your device for a
          set period after you close your browser. SMMZin's analytics and
          preference cookies are persistent. They typically expire between
          30 days and 12 months depending on their purpose.
        </p>
        <p>
          You can delete all cookies at any time through your browser
          settings, regardless of their expiry period.
        </p>
      </>
    ),
  },
  {
    id: "cookie-control",
    heading: "How You Can Control or Disable Cookies",
    content: (
      <>
        <p>
          You have full control over cookies stored on your device. There
          are several ways to manage them.
        </p>
        <h3>Through your browser settings</h3>
        <p>
          All major browsers allow you to view, block, or delete cookies.
          The steps vary by browser — use the links below for official
          guidance:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <h3>Through browser privacy extensions</h3>
        <p>
          Tools such as uBlock Origin or Privacy Badger let you block
          specific types of tracking scripts and cookies across all websites
          you visit.
        </p>
        <h3>Important note</h3>
        <p>
          Blocking essential cookies will prevent you from logging into your
          SMMZin account and using the platform. Analytics and preference
          cookies can be blocked without affecting your ability to place
          orders or use our services.
        </p>
      </>
    ),
  },
  {
    id: "cookie-advertising",
    heading: "Does SMMZin Use Cookies for Advertising?",
    content: (
      <>
        <p>
          No. SMMZin does not use advertising cookies or retargeting cookies.
          We do not partner with ad networks, and we do not use cookies to
          show you ads on other websites after you visit smmzin.com.
        </p>
        <p>
          Our cookie usage is limited to what is necessary to run the
          platform, analyse performance, and remember your preferences.
        </p>
      </>
    ),
  },
  {
    id: "cookies-privacy",
    heading: "Cookies and Your Privacy",
    content: (
      <>
        <p>
          Our use of cookies is described alongside our full data practices
          in the{" "}
          <Link href="/legal/privacy">Privacy Policy</Link>. The Privacy
          Policy explains in detail what personal data we collect, how we
          store it, and what rights you have over your information.
        </p>
        <p>
          Cookies are one small part of how we collect data. The Privacy
          Policy gives you the full picture.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-cookies",
    heading: "Changes to This Cookies Policy",
    content: (
      <>
        <p>
          We update this Cookies Policy when our cookie usage changes or
          when required by applicable law. All updates appear on this page
          with a revised "Last updated" date at the top.
        </p>
        <p>
          We recommend checking this page periodically if you want to stay
          informed about how we use cookies on smmzin.com.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "How to Contact Us",
    content: (
      <>
        <p>
          If you have any questions about our use of cookies, reach out to
          the SMMZin team using the details below.
        </p>
        <p>
          <strong>Email</strong> —{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>
        </p>
        <p>
          <strong>Telegram</strong> —{" "}
          <a href={SITE_CONFIG.contact.telegram} target="_blank" rel="noopener noreferrer">
            {SITE_CONFIG.contact.telegram.replace("https://", "")}
          </a>
        </p>
        <p>We aim to respond to all queries within 48 hours.</p>
      </>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies Policy"
      subtitle="This Cookies Policy explains how SMMZin uses cookies to improve your experience with our SMM panel and website. By continuing to use SMMZin, you agree to our use of cookies as outlined in this policy."
      lastUpdated="April 2026"
      effectiveDate="April 2026"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Refund Policy", href: "/legal/refund" },
        { label: "Disclaimer", href: "/legal/disclaimer" },
      ]}
    />
  );
}
