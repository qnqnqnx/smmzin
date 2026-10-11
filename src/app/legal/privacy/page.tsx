import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { SITE_CONFIG } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy — SMMZin",
  description:
    "How SMMZin collects, uses, discloses and safeguards your personal data when you use our SMM panel services.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal/privacy`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who We Are",
    content: (
      <>
        <p>
          SMMZin operates a global SMM panel platform accessible at{" "}
          <a href={SITE_CONFIG.siteUrl}>{SITE_CONFIG.siteUrl.replace("https://", "")}</a>. We
          provide social media marketing services including followers, likes,
          views, comments and engagement across platforms such as Instagram,
          YouTube, TikTok, Facebook, Telegram and more.
        </p>
        <p>
          All services are delivered using public profile links only. We never
          request your social media account passwords.
        </p>
        <p>
          For privacy-related queries, contact us at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "What Information We Collect",
    content: (
      <>
        <h3>Information You Provide Directly</h3>
        <p>
          When you create an account or use our services, we collect the
          following information:
        </p>
        <p>
          <strong>Account registration data</strong> — Your email address and
          password when you sign up. We use this to create and manage your
          account.
        </p>
        <p>
          <strong>Order data</strong> — The public profile or post URLs you
          submit when placing orders. We use these to process and deliver your
          services. We do not store social media passwords or login credentials
          under any circumstance.
        </p>
        <p>
          <strong>Payment data</strong> — When you add funds to your account,
          payment is processed through third-party payment gateways including
          PayPal, Visa, Mastercard and cryptocurrency processors. SMMZin does
          not store your full card details or sensitive financial data.
        </p>
        <p>
          <strong>Support communications</strong> — When you contact us through
          our contact page or support tickets, we store the content of these
          communications to help resolve your queries and improve our service.
        </p>

        <h3>Information We Collect Automatically</h3>
        <p>When you visit our platform, our systems automatically collect certain technical data:</p>
        <p>
          <strong>Log data</strong> — IP address, browser type, browser
          version, pages you visit, time and date of your visit, and time spent
          on each page.
        </p>
        <p>
          <strong>Device data</strong> — Information about the device you use
          to access SMMZin, including operating system, screen resolution and
          device type.
        </p>
        <p>
          <strong>Cookies and tracking data</strong> — We use cookies to
          maintain your login session, remember your preferences and analyse
          site traffic. See our{" "}
          <Link href="/legal/cookies">Cookies Policy</Link> for full details.
        </p>

        <h3>Information From Third Parties</h3>
        <p>
          We may receive basic information about you from third-party
          services if you choose to log in or connect through a third-party
          authentication provider such as Google. This is limited to the data
          that provider shares with us during the login process, typically your
          name and email address.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    content: (
      <>
        <p>SMMZin uses the information we collect for the following purposes:</p>
        <p>
          <strong>To provide and process your orders</strong> — Your account
          data, order URLs and balance information are used to process service
          orders and deliver results through our platform.
        </p>
        <p>
          <strong>To manage your account</strong> — We use your email address
          to send account confirmations, order updates and important service
          notifications.
        </p>
        <p>
          <strong>To process payments</strong> — Your deposit and transaction
          data is used to maintain your account balance and process fund
          additions through our payment partners.
        </p>
        <p>
          <strong>To provide customer support</strong> — When you contact us,
          we use your communication history to understand and resolve your
          issue efficiently.
        </p>
        <p>
          <strong>To improve our platform</strong> — Aggregated, anonymised
          data about how users interact with SMMZin helps us improve the
          dashboard, service catalogue and user experience.
        </p>
        <p>
          <strong>To send service communications</strong> — We may send you
          important notices about your orders, account security or important
          changes to our services. These are not marketing emails. You cannot
          opt out of essential account communications.
        </p>
        <p>
          <strong>To prevent fraud and enforce our terms</strong> — We use
          account and usage data to detect unusual activity, prevent abuse of
          our platform and enforce our terms and conditions.
        </p>
      </>
    ),
  },
  {
    id: "data-storage",
    heading: "How We Store and Protect Your Data",
    content: (
      <>
        <h3>Security Measures</h3>
        <p>
          SMMZin uses SSL encryption across the entire smmzin.com domain,
          including all dashboard screens and payment pages. All data
          transmitted between your browser and our servers is encrypted
          end-to-end.
        </p>
        <p>
          We use industry-standard security practices including firewalled
          servers, access controls and regular security reviews to protect the
          data we hold.
        </p>
        <p>
          Your password is stored in a hashed format. We cannot recover your
          password. If you lose access, you can use the password reset function
          on the login page.
        </p>

        <h3>Data Retention</h3>
        <p>
          We retain your account data for as long as your account remains
          active. If you request account deletion, we remove your personal data
          from our active systems within 30 days, except where we are required
          to retain certain records for legal or financial compliance purposes.
        </p>
        <p>
          Order history records may be retained for up to 12 months for
          dispute resolution and financial reporting purposes.
        </p>
        <p>
          Support communications are retained for up to 24 months to provide
          context for future queries.
        </p>

        <h3>Where Your Data Is Stored</h3>
        <p>
          SMMZin's servers are located in data centers operating under
          industry-standard physical and digital security controls. We process
          data globally to serve users across 100+ countries. By using SMMZin,
          you consent to your data being stored and processed on servers that
          may be located outside your country of residence.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies",
    content: (
      <>
        <h3>What Cookies We Use</h3>
        <p>SMMZin uses the following types of cookies on smmzin.com:</p>
        <p>
          <strong>Essential cookies</strong> — These are required for the
          website to function. They manage your login session and keep you
          authenticated across pages. You cannot disable essential cookies
          without breaking core site functionality.
        </p>
        <p>
          <strong>Analytics cookies</strong> — We use analytics tools to
          understand how users navigate smmzin.com. This data is aggregated
          and anonymised. It helps us identify which pages perform well and
          which need improvement.
        </p>
        <p>
          <strong>Preference cookies</strong> — These remember your settings,
          such as language or display preferences, so you do not have to reset
          them on every visit.
        </p>

        <h3>How to Control Cookies</h3>
        <p>
          You can control cookies through your browser settings. Most browsers
          allow you to block, delete or alert you before storing cookies.
          Blocking essential cookies will affect your ability to log in and use
          the platform.
        </p>
        <p>
          You can also opt out of analytics tracking through your browser's
          privacy settings or by using a browser extension that blocks tracking
          scripts.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing Your Information",
    content: (
      <>
        <p>
          SMMZin does not sell, rent or trade your personal data to third
          parties for their own marketing purposes. We share your data only in
          the following limited circumstances:
        </p>
        <p>
          <strong>Payment processors</strong> — When you add funds, your
          transaction data is shared with the relevant payment gateway (PayPal,
          Visa, Mastercard, or a crypto processor) to complete the
          transaction. Each processor operates under its own privacy policy.
        </p>
        <p>
          <strong>Service providers</strong> — We use third-party tools for
          analytics, server infrastructure and support. These providers process
          data on our behalf and are contractually required to protect it under
          equivalent privacy laws.
        </p>
        <p>
          <strong>Legal requirements</strong> — We may disclose your data if
          required to do so by law, court order or in response to a lawful
          request from a government authority.
        </p>
        <p>
          <strong>Business transfers</strong> — If SMMZin is involved in a
          merger, acquisition, or sale of assets, user data may be transferred
          as part of that transaction. We will notify affected users before
          such a transfer takes place.
        </p>
        <p>
          We never share your public order URLs with third parties beyond what
          is necessary to process and deliver your order.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights Over Your Data",
    content: (
      <>
        <p>
          Depending on your country of residence, you may have the following
          rights regarding your personal data:
        </p>
        <p>
          <strong>Right to access</strong> — You can request a copy of the
          personal data SMMZin holds about you.
        </p>
        <p>
          <strong>Right to correction</strong> — You can request that we
          correct inaccurate or incomplete data in your account.
        </p>
        <p>
          <strong>Right to deletion</strong> — You can request that we delete
          your personal data, subject to any legal retention requirements.
        </p>
        <p>
          <strong>Right to restriction</strong> — You can request that we
          limit how we process your data in certain circumstances.
        </p>
        <p>
          <strong>Right to data portability</strong> — You can request a copy
          of your data in a structured, machine-readable format.
        </p>
        <p>
          <strong>Right to object</strong> — You can object to certain types
          of processing, including analytics and profiling.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>
          . We respond to all data requests within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children's Privacy",
    content: (
      <p>
        SMMZin's services are intended for users aged 18 and above. We do not
        knowingly collect personal data from anyone under the age of 18. If you
        believe a child under 18 has created an account on smmzin.com, contact
        us at{" "}
        <a href={`mailto:${SITE_CONFIG.contact.email}`}>
          {SITE_CONFIG.contact.email}
        </a>{" "}
        and we will delete the account and all associated data promptly.
      </p>
    ),
  },
  {
    id: "third-party",
    heading: "Third-Party Links",
    content: (
      <p>
        smmzin.com may contain links to external websites, including social
        media platforms and payment processors. Once you leave smmzin.com, this
        Privacy Policy no longer applies. We are not responsible for the
        privacy practices of any third-party site.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We update this Privacy Policy when our practices change or when
          required by law. We publish all updates on this page with a revised
          "Last updated" date at the top.
        </p>
        <p>
          For significant changes that affect how we use your personal data, we
          will notify registered users by email before the change takes effect.
        </p>
        <p>We recommend checking this page periodically to stay informed of any updates.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "How to Contact Us",
    content: (
      <>
        <p>
          For any questions, concerns or requests related to this Privacy
          Policy, contact the SMMZin team through the following channels:
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
        <p>
          We aim to respond to all privacy-related queries within 48 hours.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how SMMZin collects, uses, and protects your personal information when using our SMM Panel services. By accessing SMMZin, you agree to the data practices outlined in this policy."
      lastUpdated="April 2026"
      effectiveDate="April 2026"
      sections={sections}
      relatedLinks={[
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Refund Policy", href: "/legal/refund" },
        { label: "Cookies Policy", href: "/legal/cookies" },
        { label: "Disclaimer", href: "/legal/disclaimer" },
      ]}
    />
  );
}
