import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { LegalAlert } from "@/components/legal/LegalAlert";
import { PenaltyTable, type PenaltyRow } from "@/components/legal/PenaltyTable";
import {
  ProhibitedContentGrid,
  PROHIBITED_ICONS,
  type ProhibitedItem,
} from "@/components/legal/ProhibitedContentGrid";
import { SITE_CONFIG } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Terms and Conditions — SMMZin",
  description:
    "The terms and conditions governing your use of SMMZin, including account obligations, prohibited conduct, penalties, and termination.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal/terms`,
  },
  robots: { index: false, follow: true },
};

const prohibitedItems: ProhibitedItem[] = [
  {
    key: "politics",
    title: "Political Manipulation",
    desc: "Using our services to artificially influence elections, political campaigns, government processes, or public discourse on political matters.",
    icon: PROHIBITED_ICONS.politics,
  },
  {
    key: "illegal",
    title: "Illegal Content",
    desc: "Promoting or amplifying content related to criminal activity, drugs, weapons, terrorism, or any activity prohibited by applicable law.",
    icon: PROHIBITED_ICONS.illegal,
  },
  {
    key: "harassment",
    title: "Harassment & Bullying",
    desc: "Targeting individuals or groups with the intent to intimidate, threaten, harass, or cause emotional harm.",
    icon: PROHIBITED_ICONS.harassment,
  },
  {
    key: "violence",
    title: "Violence & Harm",
    desc: "Content that promotes violence, physical harm, or the endangerment of any person or animal.",
    icon: PROHIBITED_ICONS.violence,
  },
  {
    key: "adult",
    title: "Adult & Explicit Content",
    desc: "Services applied to adult content, sexually explicit material, or content involving non-consensual imagery.",
    icon: PROHIBITED_ICONS.adult,
  },
  {
    key: "minor",
    title: "Content Involving Minors",
    desc: "Growth services targeting accounts belonging to or primarily followed by minors, or content that exploits minors in any form.",
    icon: PROHIBITED_ICONS.minor,
  },
  {
    key: "selfharm",
    title: "Self-Harm & Suicide",
    desc: "Content that promotes, glorifies, or provides instruction on self-harm, eating disorders, or suicide.",
    icon: PROHIBITED_ICONS.selfharm,
  },
  {
    key: "fraud",
    title: "Fraud & Deception",
    desc: "Using our platform for scams, phishing, impersonation, investment fraud, or any deceptive commercial activity.",
    icon: PROHIBITED_ICONS.fraud,
  },
];

const penaltyRows: PenaltyRow[] = [
  {
    violation: "Using services for political manipulation",
    firstOffense: "Permanent ban. Full balance forfeited.",
    repeat: "N/A — no reinstatement",
    severity: "critical",
  },
  {
    violation: "Illegal content or criminal activity",
    firstOffense: "Permanent ban. Full balance forfeited. Report to authorities.",
    repeat: "N/A — no reinstatement",
    severity: "critical",
  },
  {
    violation: "Harassment targeting any individual or group",
    firstOffense: "Permanent ban. Full balance forfeited.",
    repeat: "N/A — no reinstatement",
    severity: "critical",
  },
  {
    violation: "Content involving minors or self-harm",
    firstOffense: "Permanent ban. Full balance forfeited. Report to authorities.",
    repeat: "N/A — no reinstatement",
    severity: "critical",
  },
  {
    violation: "Fraud, chargeback abuse, or stolen payment methods",
    firstOffense: "Permanent ban. Full balance forfeited.",
    repeat: "N/A — no reinstatement",
    severity: "high",
  },
  {
    violation: "Automated abuse of the platform or refill system",
    firstOffense: "30-day suspension. Refill access revoked.",
    repeat: "Permanent ban. Full balance forfeited.",
    severity: "high",
  },
  {
    violation: "Sharing account credentials with third parties",
    firstOffense: "Warning. Session forced logout.",
    repeat: "7-day suspension.",
    severity: "medium",
  },
  {
    violation: "Excessive refund requests on completed orders",
    firstOffense: "Warning. Refund privileges restricted.",
    repeat: "Permanent ban. Full balance forfeited.",
    severity: "medium",
  },
  {
    violation: "Submitting invalid or unverifiable links repeatedly",
    firstOffense: "Warning. Orders held for manual review.",
    repeat: "30-day suspension of order placement.",
    severity: "low",
  },
];

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions ("Terms") govern your access to and use
          of the SMMZin platform, website at{" "}
          <a href={SITE_CONFIG.siteUrl}>{SITE_CONFIG.siteUrl.replace("https://", "")}</a>{" "}
          and all related services (collectively, the "Service"). By creating
          an account, accessing the platform, or placing an order, you
          confirm that you have read, understood, and agreed to be bound by
          these Terms.
        </p>
        <p>
          If you do not agree to these Terms, you must not use the Service.
          Continued use of the Service after any update to these Terms
          constitutes acceptance of the revised Terms.
        </p>
        <LegalAlert type="warning" title="Age requirement">
          <p>
            You must be at least 18 years old to use SMMZin. By creating an
            account, you confirm that you meet this age requirement. Accounts
            discovered to belong to users under 18 are terminated without
            refund.
          </p>
        </LegalAlert>
      </>
    ),
  },
  {
    id: "definitions",
    heading: "Definitions",
    content: (
      <>
        <p>
          <strong>"SMMZin"</strong> ("we", "us", "our") refers to the SMMZin
          platform and the company operating it.
        </p>
        <p>
          <strong>"User"</strong> ("you", "your") refers to any individual or
          entity that accesses, registers on, or uses the platform.
        </p>
        <p>
          <strong>"Platform"</strong> refers to the SMMZin website,
          dashboard, APIs, and all associated tools and services.
        </p>
        <p>
          <strong>"Services"</strong> refers to social media marketing
          services available for purchase through the Platform, including
          followers, likes, views, comments, engagement, and similar metrics.
        </p>
        <p>
          <strong>"Order"</strong> refers to any individual request
          submitted through the Platform for a specific Service.
        </p>
        <p>
          <strong>"Account"</strong> refers to your registered user account
          on the Platform.
        </p>
        <p>
          <strong>"Balance"</strong> refers to funds deposited into your
          Account available for spending on Services.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility and Account Registration",
    content: (
      <>
        <h3>Age requirement</h3>
        <p>
          You must be at least 18 years of age to create an account and use
          the Service. We reserve the right to request age verification at
          any time.
        </p>
        <h3>Accurate information</h3>
        <p>
          You agree to provide accurate, current, and complete information
          during registration and to keep this information updated. Providing
          false information may result in immediate account termination.
        </p>
        <h3>Account security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          login credentials and for all activity that occurs under your
          account. Notify us immediately at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>{" "}
          if you suspect unauthorised access.
        </p>
        <h3>One account per user</h3>
        <p>
          Each person or entity may maintain one SMMZin account. Creating
          multiple accounts to circumvent restrictions or exploit promotions
          is prohibited.
        </p>
        <h3>Account transferability</h3>
        <p>
          Accounts are personal and non-transferable. You may not sell,
          share, or assign your account to any other individual or entity
          without prior written consent from SMMZin.
        </p>
      </>
    ),
  },
  {
    id: "services",
    heading: "Services",
    content: (
      <>
        <h3>Service description</h3>
        <p>
          SMMZin provides social media marketing services delivered to public
          social profiles and posts. All Services require only a publicly
          accessible URL (post URL, profile URL, or channel URL). We never
          request social media passwords or login credentials.
        </p>
        <h3>Service availability</h3>
        <p>
          Services are available 24/7 in most cases. However, we do not
          guarantee uninterrupted availability. We may perform maintenance,
          upgrade, or temporarily suspend Services without prior notice.
        </p>
        <h3>Service descriptions</h3>
        <p>
          Each Service listed on the Platform includes a description,
          including delivery speed, minimum and maximum quantity, refill
          guarantee window, and starting price. Users are responsible for
          reading and understanding these descriptions before placing an
          order.
        </p>
        <h3>Service changes</h3>
        <p>
          SMMZin may add, modify, or discontinue Services at any time without
          prior notice. Prices may change at any time. Existing orders are
          not affected by price changes after the order is placed.
        </p>
        <h3>Platform compatibility</h3>
        <p>
          Social media platforms regularly update their algorithms, terms of
          service, and security systems. SMMZin cannot guarantee that all
          Services will remain compatible with these changes. Where a
          platform change makes a Service unviable, we may suspend that
          Service and refund outstanding orders.
        </p>
      </>
    ),
  },
  {
    id: "orders",
    heading: "Orders",
    content: (
      <>
        <h3>Order placement</h3>
        <p>
          You place an order by selecting a service, entering a valid public
          URL, specifying a quantity within the stated minimum and maximum
          limits, and confirming the order.
        </p>
        <h3>Order processing</h3>
        <p>
          Orders are processed automatically once placed and confirmed from
          your Account balance. Orders are queued and fulfilled in the order
          they are received, subject to service availability.
        </p>
        <h3>Order irreversibility</h3>
        <p>
          Once an order has started processing, it cannot be cancelled or
          modified. If an order has not yet started processing, you may
          request cancellation, which will be refunded to your Account
          balance if approved.
        </p>
        <h3>Order requirements</h3>
        <p>You are responsible for ensuring that:</p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>The URL you submit is publicly accessible at the time of order</li>
          <li>The URL is not changed or deleted during processing</li>
          <li>The account or post complies with the relevant social media platform's terms of service</li>
          <li>The link provided is correct and matches the desired quantity of service</li>
        </ul>
        <h3>Partial delivery</h3>
        <p>
          Some orders may be partially delivered due to circumstances beyond
          SMMZin's control. In such cases, the delivered portion is
          considered consumed, and the undelivered portion is refunded to
          your Account balance.
        </p>
        <h3>Start time and delivery speed</h3>
        <p>
          Estimated start times and delivery speeds are provided on each
          service listing. These are estimates and are not guaranteed.
          SMMZin is not liable for delays caused by external factors
          including platform restrictions, provider issues, or technical
          outages.
        </p>
        <h3>Order tracking</h3>
        <p>
          Order status is updated continuously in your Account dashboard.
          Orders are designated as "pending", "in progress", "completed", or
          "cancelled" based on their current state.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Payments and Account Balance",
    content: (
      <>
        <h3>Accepted payment methods</h3>
        <p>
          SMMZin accepts payments via the methods displayed on the Add Funds
          page. Accepted methods may vary by region and are subject to
          change.
        </p>
        <h3>Deposits</h3>
        <p>
          Funds added to your Account are processed by third-party payment
          processors. Deposits are non-refundable except as expressly
          provided in our{" "}
          <Link href="/legal/refund">Refund Policy</Link>.
        </p>
        <h3>Balance top-ups</h3>
        <p>
          Funds added to your Account are credited after confirmation by the
          payment processor. Processing times vary by payment method.
        </p>
        <h3>Non-transferability of balance</h3>
        <p>
          Account balances are personal and cannot be transferred between
          SMMZin accounts, withdrawn as cash, or exchanged for any other
          currency.
        </p>
        <h3>Balance expiry</h3>
        <p>
          Account balances do not expire while your Account remains active.
          If your Account is terminated for violation of these Terms, the
          remaining balance is forfeited.
        </p>
        <h3>Deposit disputes</h3>
        <p>
          If you believe a charge was made in error, contact us at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>{" "}
          within 30 days. Chargebacks filed without contacting us first may
          result in account suspension.
        </p>
        <h3>Taxes</h3>
        <p>
          You are responsible for any taxes, duties, or levies applicable to
          your purchase under the laws of your jurisdiction. SMMZin does not
          collect or remit taxes on your behalf unless required by applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-conduct",
    heading: "Prohibited Conduct",
    content: (
      <>
        <p>
          SMMZin exists to help creators, agencies, and brands grow their
          social media presence. Certain categories of use are strictly
          prohibited, regardless of intent or business justification. Using
          the Service in connection with any of the following is a direct
          violation of these Terms.
        </p>

        <ProhibitedContentGrid items={prohibitedItems} />

        <LegalAlert type="danger" title="Zero tolerance for political use">
          <p>
            Using SMMZin to influence political outcomes, elections, public
            referendums, government decisions, or public discourse on
            political matters is strictly prohibited. Any account found
            using our services for political manipulation will be
            <strong> permanently banned </strong>
            and their full remaining balance forfeited without refund.
          </p>
          <p>
            This applies regardless of the political affiliation, country,
            or cause involved. We do not take political positions. We simply
            do not permit our infrastructure to be used in this way.
          </p>
        </LegalAlert>

        <LegalAlert type="danger" title="Zero tolerance for illegal or harmful content">
          <p>
            Using SMMZin in connection with criminal activity, content that
            harms minors, harassment, or content that promotes self-harm or
            violence will result in
            <strong> immediate permanent ban</strong>, forfeiture of your
            entire remaining balance, and — where required by law —
            reporting to the relevant authorities.
          </p>
        </LegalAlert>

        <p>
          In addition to the categories shown above, you also agree not to:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            Use automated systems (bots, scrapers, scripts) to interact with
            the Platform or place orders
          </li>
          <li>
            Attempt to bypass order limits, rate limits, or account restrictions
          </li>
          <li>
            Submit orders designed to interfere with, attack, or damage any
            third party's account
          </li>
          <li>
            Manipulate the refill system to obtain free additional services
          </li>
          <li>
            Impersonate SMMZin, its staff, or another user
          </li>
          <li>
            Resell services as your own without a reseller agreement where
            required
          </li>
          <li>
            Use the Service from any jurisdiction where such use is illegal
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "penalties",
    heading: "Penalties and Enforcement",
    content: (
      <>
        <p>
          Violations of these Terms result in penalties applied at SMMZin's
          discretion. The table below shows the standard escalation for
          common violations. SMMZin reserves the right to escalate faster
          for severe cases.
        </p>

        <PenaltyTable rows={penaltyRows} />

        <LegalAlert type="warning" title="Balance forfeiture">
          <p>
            When a violation results in a permanent ban, any remaining
            Account balance is forfeited. This is non-negotiable and applies
            to all categories of severe violation. We recommend not
            maintaining large balances if there is any risk your use of the
            platform might conflict with these Terms.
          </p>
        </LegalAlert>

        <h3>Reporting violations</h3>
        <p>
          If you believe another user is violating these Terms, report it to{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>{" "}
          with as much detail as possible. Reports are reviewed confidentially.
        </p>

        <h3>Appeals</h3>
        <p>
          If your account is suspended or terminated and you believe the
          decision was made in error, you may appeal within 14 days by email.
          Appeals are reviewed manually. Decisions on appeals are final.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    content: (
      <>
        <h3>SMMZin's proprietary rights</h3>
        <p>
          The Platform, including its source code, dashboard, design, user
          interface, service catalogue, and brand materials, is owned by
          SMMZin and protected by applicable intellectual property laws. You
          may not copy, modify, distribute, reverse-engineer, or create
          derivative works from any part of the Platform without prior
          written consent.
        </p>
        <h3>Your content</h3>
        <p>
          You retain ownership of any content you submit to the Platform
          (such as order details, support communications, or reviews). By
          submitting content, you grant SMMZin a non-exclusive, worldwide,
          royalty-free licence to use that content for operating and
          improving the Service.
        </p>
        <h3>Third-party trademarks</h3>
        <p>
          All third-party trademarks mentioned on the Platform — including
          social media platform names and logos — belong to their respective
          owners. Their use on SMMZin is for identification purposes only
          and does not imply affiliation or endorsement.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    content: (
      <>
        <p>
          SMMZin uses third-party providers to operate the Platform, process
          payments, and deliver certain services. These third parties operate
          under their own terms and privacy policies.
        </p>
        <p>
          SMMZin is not responsible for the actions, failures, or terms of
          any third-party service used in connection with the Platform,
          including payment processors, hosting providers, social media
          platforms, or upstream delivery providers.
        </p>
        <p>
          Links to third-party websites are provided for convenience only.
          SMMZin does not endorse and is not responsible for the content of
          any external site.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    heading: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          The Service is provided on an "as is" and "as available" basis.
          SMMZin makes no warranties, express or implied, including but not
          limited to:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            That the Platform will be available at all times without
            interruption
          </li>
          <li>
            That any specific result (follower count, engagement rate, or
            revenue) will be achieved
          </li>
          <li>
            That services will remain compatible with ongoing changes to
            third-party social media platforms
          </li>
          <li>
            That any errors or defects in the Platform will be corrected
          </li>
        </ul>
        <p>
          SMMZin makes no guarantee regarding any specific outcome or
          performance metric associated with the use of the Service.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, SMMZin's total
          liability to you for any claim arising from or related to the use
          of the Platform and its Services shall not exceed the amount you
          paid to SMMZin for the specific Service in question.
        </p>
        <p>
          SMMZin is not liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>
            Loss of profits, revenue, or business opportunities
          </li>
          <li>
            Loss of data, followers, subscribers, or account access
          </li>
          <li>
            Platform-initiated account suspensions, content removals, or
            enforcement actions
          </li>
          <li>
            Damage to reputation, brand, or business relationships
          </li>
          <li>
            Any damages arising from reliance on information on the Platform
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless SMMZin, its
          directors, employees, and agents from and against any claims,
          damages, losses, or expenses (including reasonable legal fees)
          arising from:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Your use of the Platform in violation of these Terms</li>
          <li>
            Content you submit, promote, or amplify using our Services
          </li>
          <li>
            Your violation of any third-party rights, including social media
            platform terms of service
          </li>
          <li>
            Any fraud, misrepresentation, or unlawful conduct by you or
            anyone using your Account
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Account Suspension and Termination",
    content: (
      <>
        <h3>Termination by SMMZin</h3>
        <p>
          SMMZin reserves the right to suspend or terminate your Account at
          any time for any of the following reasons:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Violation of any provision of these Terms</li>
          <li>Fraudulent or abusive activity on the Platform</li>
          <li>Engaging in prohibited conduct described above</li>
          <li>
            Use of the Platform in a way that harms SMMZin, other users, or
            third parties
          </li>
        </ul>
        <h3>Effect of termination</h3>
        <p>
          Upon termination, you lose access to the Platform and, if
          terminated for a serious violation, your remaining balance is
          forfeited. Refunds of unused balance are considered only for
          terminations unrelated to violations of these Terms.
        </p>
        <h3>Termination by you</h3>
        <p>
          You may terminate your Account at any time by contacting us. Any
          remaining balance at the time of voluntary termination is subject
          to the withdrawal rules in our{" "}
          <Link href="/legal/refund">Refund Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law and Dispute Resolution",
    content: (
      <>
        <h3>Governing law</h3>
        <p>
          These Terms are governed by and construed in accordance with the
          laws applicable to international digital services, without regard
          to conflict of law principles. Where local consumer protection laws
          apply in your jurisdiction, those provisions take precedence.
        </p>
        <h3>Dispute resolution</h3>
        <p>
          If you have a dispute with SMMZin, we encourage you to contact us
          at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>{" "}
          first. Most issues can be resolved informally within 48 hours.
        </p>
        <h3>Class action waiver</h3>
        <p>
          You agree that any disputes will be resolved on an individual
          basis. You waive any right to bring or participate in a class,
          collective, or representative action.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    heading: "Changes to These Terms",
    content: (
      <>
        <p>
          SMMZin may update these Terms at any time. We publish all updates
          on this page with a revised "Last updated" date at the top.
        </p>
        <p>
          For changes that materially affect user rights or obligations, we
          will notify registered users by email at least 7 days before the
          change takes effect.
        </p>
        <p>
          Continued use of the Platform after the effective date of any
          update constitutes your acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "reserved-rights",
    heading: "Reserved Rights and Final Discretion",
    content: (
      <>
        <p>
          SMMZin reserves the following rights in connection with these Terms
          and the operation of the Service. These rights are exercised at
          SMMZin's sole discretion and are not subject to negotiation on a
          per-user basis.
        </p>

        <h3>Right to modify terms</h3>
        <p>
          SMMZin may update, amend, or replace any part of these Terms at any
          time. Material changes are announced on this page and, where
          required by applicable law, communicated to registered users by
          email in advance. Where notice is not legally required, changes
          take effect immediately upon publication. Continued use of the
          Service after any change constitutes acceptance of the revised
          Terms.
        </p>

        <h3>Right to modify or discontinue the Service</h3>
        <p>
          SMMZin may add, modify, suspend, or discontinue any Service,
          feature, or component of the Platform at any time. We are not
          liable to you or any third party for any modification, suspension,
          or discontinuation of the Service.
        </p>

        <h3>Right to refuse or cancel orders</h3>
        <p>
          SMMZin reserves the right to refuse, cancel, or reverse any order
          at any time, with or without stated reason. In such cases, any
          affected balance is returned to your Account. SMMZin is not liable
          for any loss resulting from a refused or cancelled order.
        </p>

        <h3>Right to interpret these Terms</h3>
        <p>
          Where ambiguity exists in the interpretation of these Terms, the
          interpretation adopted by SMMZin is final. Our decisions regarding
          enforcement, penalties, suspensions, and terminations are final and
          binding. Appeals may be submitted through the process described in
          the Termination section, but the outcome of any appeal is at
          SMMZin's discretion.
        </p>

        <h3>Right to enforce selectively</h3>
        <p>
          Failure by SMMZin to enforce any provision of these Terms on one
          occasion does not constitute a waiver of that provision or of any
          other provision. We reserve the right to enforce any part of these
          Terms at any time, for any user, without establishing a pattern of
          prior enforcement.
        </p>

        <LegalAlert type="warning" title="Final decision clause">
          <p>
            In all matters related to the operation of the Platform, the
            interpretation of these Terms, the handling of disputes, and the
            determination of penalties, the decision of{" "}
            <strong>SMMZin is final and binding</strong>. This clause does
            not override rights you may have under mandatory local consumer
            protection laws, but applies to the fullest extent permitted by
            applicable law.
          </p>
        </LegalAlert>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact Information",
    content: (
      <>
        <p>
          For any questions, concerns, or notices related to these Terms and
          Conditions, contact the SMMZin team through the following channels:
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
          We aim to respond to all Terms-related inquiries within 48 hours.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="These Terms and Conditions govern your use of SMMZin and its services. By creating an account or placing an order, you confirm that you have read, understood, and agree to these terms in full."
      lastUpdated="April 2026"
      effectiveDate="April 2026"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Refund Policy", href: "/legal/refund" },
        { label: "Cookies Policy", href: "/legal/cookies" },
        { label: "Disclaimer", href: "/legal/disclaimer" },
      ]}
    />
  );
}
