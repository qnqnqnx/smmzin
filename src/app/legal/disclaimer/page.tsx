import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { LegalAlert } from "@/components/legal/LegalAlert";
import { SITE_CONFIG } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Disclaimer — SMMZin",
  description:
    "Important limitations and disclaimers about the SMMZin platform, its services, and third-party content.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal/disclaimer`,
  },
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "general",
    heading: "General Information",
    content: (
      <>
        <p>
          The information and services provided on{" "}
          <a href={SITE_CONFIG.siteUrl}>{SITE_CONFIG.siteUrl.replace("https://", "")}</a>{" "}
          are provided on an "as is" and "as available" basis. SMMZin makes no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, or availability of the
          platform, its services, or the information contained on it.
        </p>
        <p>
          Any reliance you place on the platform or its services is strictly
          at your own risk. You are responsible for ensuring that your use of
          SMMZin complies with the laws of your jurisdiction and the terms of
          service of any third-party social media platform you interact with.
        </p>
      </>
    ),
  },
  {
    id: "not-advice",
    heading: "Not Professional Advice",
    content: (
      <>
        <p>
          Nothing on smmzin.com constitutes professional, legal, financial,
          marketing, or strategic advice. The information provided on the
          platform is for general informational purposes only.
        </p>
        <LegalAlert type="warning" title="Not a substitute for professional advice">
          <p>
            Before making business, marketing, or financial decisions based
            on information found on this site, consult a qualified
            professional who understands your specific situation. SMMZin is
            not responsible for any decisions made based on platform content.
          </p>
        </LegalAlert>
      </>
    ),
  },
  {
    id: "service-availability",
    heading: "Service Availability",
    content: (
      <>
        <p>
          SMMZin aims to keep the platform available at all times, but we do
          not guarantee uninterrupted access. Service may be temporarily
          interrupted by:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Scheduled or emergency maintenance</li>
          <li>Technical issues on our servers or the servers of our upstream providers</li>
          <li>Network or internet connectivity problems outside our control</li>
          <li>Actions by social media platforms that affect our delivery systems</li>
          <li>Force majeure events including natural disasters, cyberattacks, or regulatory actions</li>
        </ul>
        <p>
          SMMZin is not liable for any loss or inconvenience caused by
          temporary unavailability of the platform or any individual service.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    heading: "No Guarantee of Results",
    content: (
      <>
        <p>
          SMMZin provides social media growth services, but we do not
          guarantee specific outcomes. We make no promises about:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Specific follower counts, engagement rates, or reach figures</li>
          <li>Conversion of purchased growth into revenue or business results</li>
          <li>Algorithmic treatment of your content following purchase</li>
          <li>Compatibility of our services with any specific campaign or goal</li>
          <li>Continued availability of any specific service as platforms evolve</li>
        </ul>
        <p>
          Social media platforms change their algorithms and enforcement
          policies regularly. Services that work well today may behave
          differently tomorrow. Users are responsible for evaluating whether
          our services are appropriate for their specific use case.
        </p>
      </>
    ),
  },
  {
    id: "third-party-platforms",
    heading: "Third-Party Platform Dependency",
    content: (
      <>
        <p>
          SMMZin's services operate across third-party social media platforms
          including but not limited to Instagram, YouTube, TikTok, Facebook,
          X, Telegram, Threads, and Spotify. We are not affiliated with,
          endorsed by, or officially connected to any of these platforms.
        </p>
        <LegalAlert type="danger" title="Platform terms apply">
          <p>
            Every social media platform maintains its own terms of service
            that govern the use of growth services. Some platforms prohibit
            the purchase of followers, views, or engagement. It is your
            responsibility to review and comply with the terms of any
            platform you use SMMZin with. SMMZin is not liable for any
            consequences arising from a platform's enforcement of its own
            terms.
          </p>
        </LegalAlert>
        <p>
          If a third-party platform changes its API, enforcement policy, or
          service availability in a way that affects SMMZin's ability to
          deliver a service, we will make reasonable efforts to provide
          alternatives or refunds, but we cannot guarantee continuity.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    heading: "External Links Disclaimer",
    content: (
      <>
        <p>
          smmzin.com may contain links to external websites, tools, or
          resources that are not provided or maintained by SMMZin. These
          links are provided for convenience and informational purposes only.
        </p>
        <p>
          SMMZin does not:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Endorse the content, products, or services of any linked website</li>
          <li>Guarantee the accuracy, relevance, or completeness of external content</li>
          <li>Control or take responsibility for the practices of external sites</li>
        </ul>
        <p>
          Clicking external links is done at your own discretion. We
          recommend reviewing the privacy policies and terms of service of
          any website you visit.
        </p>
      </>
    ),
  },
  {
    id: "user-responsibility",
    heading: "User Responsibility",
    content: (
      <>
        <p>
          By using SMMZin, you accept full responsibility for:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            The content and goals you promote through our services
          </li>
          <li>
            Ensuring that any content you promote complies with the laws of
            your jurisdiction and the terms of any platform involved
          </li>
          <li>
            Verifying links and account access before placing orders
          </li>
          <li>
            The consequences of any third-party platform's response to your
            orders, including account warnings, restrictions, or suspension
          </li>
          <li>
            Compliance with any reporting or tax obligations related to your
            use of the platform
          </li>
        </ul>
        <LegalAlert type="warning" title="Prohibited content">
          <p>
            Using SMMZin in connection with illegal content, harassment,
            political manipulation, or content that violates applicable laws
            is strictly prohibited. Accounts found engaging in such activity
            are terminated without refund. See our{" "}
            <Link href="/legal/terms">Terms and Conditions</Link> for the
            full list of prohibited conduct.
          </p>
        </LegalAlert>
      </>
    ),
  },
  {
    id: "limitation-liability",
    heading: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, SMMZin's total
          liability to you for any claim arising from or related to your use
          of the platform and its services shall not exceed the amount you
          paid to SMMZin for the specific service in question.
        </p>
        <p>
          SMMZin is not liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Loss of profits, revenue, or business opportunity</li>
          <li>Loss of data, followers, or account access</li>
          <li>Account suspension or content removal by a third-party platform</li>
          <li>Damage to reputation or brand</li>
          <li>Any damages arising from reliance on information on the platform</li>
        </ul>
        <p>
          This limitation applies regardless of whether the damages arise in
          contract, tort, negligence, or any other legal theory, and
          regardless of whether SMMZin was advised of the possibility of such
          damages.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Copyright and Trademarks",
    content: (
      <>
        <h3>Our content</h3>
        <p>
          All content on smmzin.com — including text, design, graphics,
          structure, and code — is the property of SMMZin unless otherwise
          stated. You may not reproduce, distribute, or create derivative
          works from our content without prior written permission.
        </p>
        <h3>Third-party trademarks</h3>
        <p>
          Brand names, logos, and trademarks mentioned on smmzin.com —
          including social media platform names — belong to their respective
          owners. Their appearance on our site does not imply any affiliation
          with, endorsement by, or sponsorship from those owners.
        </p>
        <h3>User-submitted content</h3>
        <p>
          By submitting content to SMMZin (such as reviews, messages, or
          order details), you grant us a non-exclusive, worldwide, royalty-free
          licence to use that content in connection with operating and
          improving our services.
        </p>
      </>
    ),
  },
  {
    id: "regulatory",
    heading: "Regulatory Disclaimers",
    content: (
      <>
        <p>
          SMMZin operates as an independent technology platform. We are not a
          licensed financial institution, investment advisor, or regulated
          marketing agency.
        </p>
        <p>
          Depending on your jurisdiction, there may be specific laws
          governing the use of purchased social media growth services. It is
          your responsibility to determine whether your use of SMMZin
          complies with the laws of your country, state, or region.
        </p>
        <LegalAlert type="info" title="Regional compliance">
          <p>
            Some jurisdictions restrict certain types of online commercial
            activity, including the provision or use of services that
            interact with social media engagement metrics. Users are
            responsible for understanding and complying with the regulations
            that apply in their own country or region before using SMMZin.
          </p>
        </LegalAlert>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Disclaimer",
    content: (
      <p>
        We update this Disclaimer when necessary to reflect changes in our
        services, legal requirements, or industry standards. All updates
        appear on this page with a revised "Last updated" date at the top.
        Continued use of the platform after any update constitutes your
        acceptance of the revised Disclaimer.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <>
        <p>
          For questions about this Disclaimer, contact the SMMZin team at:
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
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      subtitle="This Disclaimer outlines the limits of SMMZin's responsibility regarding the platform, its services, and third-party content. By using SMMZin, you acknowledge and accept these terms."
      lastUpdated="April 2026"
      effectiveDate="April 2026"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Refund Policy", href: "/legal/refund" },
        { label: "Cookies Policy", href: "/legal/cookies" },
      ]}
    />
  );
}
