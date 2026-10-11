import type { Metadata } from "next";
import Link from "next/link";

import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { RefundTable, type RefundScenario } from "@/components/legal/RefundTable";
import { SITE_CONFIG } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Refund Policy — SMMZin",
  description:
    "SMMZin's refund policy: cancellation rules, refund eligibility, refill guarantees, balance withdrawals and dispute resolution.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/legal/refund`,
  },
  robots: { index: false, follow: true },
};

const scenarios: RefundScenario[] = [
  {
    scenario: "Order has not started and you cancel within 30 minutes",
    eligible: "yes",
    outcome: "Full refund to account balance",
  },
  {
    scenario: "Order is pending and you request cancellation before delivery begins",
    eligible: "yes",
    outcome: "Full refund to account balance",
  },
  {
    scenario: "Order is in progress (partial delivery already begun)",
    eligible: "partial",
    outcome: "Refund of undelivered portion only",
  },
  {
    scenario: "Order fully delivered but quality below specification",
    eligible: "partial",
    outcome: "Partial refund or free refill — evaluated case by case",
  },
  {
    scenario: "Order completed successfully as specified",
    eligible: "no",
    outcome: "No refund — service delivered as ordered",
  },
  {
    scenario: "Followers or engagement dropped after delivery within the guarantee window",
    eligible: "yes",
    outcome: "Free refill (not cash refund) — per service terms",
  },
  {
    scenario: "Account was private, protected, or inaccessible at delivery time",
    eligible: "no",
    outcome: "No refund — user responsible for ensuring public access",
  },
  {
    scenario: "Wrong link was submitted by the user",
    eligible: "no",
    outcome: "No refund — order delivered to the link provided",
  },
  {
    scenario: "Platform removed the content or suspended the account after delivery",
    eligible: "no",
    outcome: "No refund — outside SMMZin's control",
  },
];

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    content: (
      <>
        <p>
          This Refund Policy sets out the circumstances under which SMMZin
          issues refunds, refills or account balance credits for orders placed
          on smmzin.com. It applies to all users, resellers and agencies.
        </p>
        <p>
          Our goal is to be fair and transparent in both directions: we protect
          you when a service fails on our side, and we protect the platform
          when a problem is caused by user error or factors outside our
          control.
        </p>
        <p>
          By placing an order, you confirm you have read and agree to the terms
          in this policy, alongside our{" "}
          <Link href="/legal/terms">Terms and Conditions</Link>.
        </p>
      </>
    ),
  },
  {
    id: "refund-matrix",
    heading: "Refund Eligibility Matrix",
    content: (
      <>
        <p>
          The table below shows the standard outcome for common scenarios.
          Where a scenario is marked "partial" or "case by case", the final
          decision is made by SMMZin support after reviewing the order.
        </p>
        <RefundTable scenarios={scenarios} />
      </>
    ),
  },
  {
    id: "order-cancellations",
    heading: "Order Cancellations",
    content: (
      <>
        <h3>Before delivery begins</h3>
        <p>
          You may cancel an order before it enters the processing state. If
          accepted, funds are returned to your SMMZin account balance
          immediately. You can then use that balance for a new order or
          request a withdrawal.
        </p>
        <h3>After delivery has begun</h3>
        <p>
          Once an order has started processing, it cannot be cancelled. Any
          refund is calculated on the undelivered portion only, in line with
          the eligibility matrix above.
        </p>
        <h3>Automatic cancellation</h3>
        <p>
          If an order cannot be processed due to provider failure, invalid
          link or service unavailability, it is cancelled automatically and
          the full amount is returned to your balance.
        </p>
      </>
    ),
  },
  {
    id: "refund-eligibility",
    heading: "Refund Eligibility",
    content: (
      <>
        <h3>Refunds to account balance</h3>
        <p>
          The standard outcome for approved refunds is a credit to your
          SMMZin account balance. Balance credits are immediate and are not
          subject to processing fees.
        </p>
        <h3>Refunds to original payment method</h3>
        <p>
          Refunds to the original payment source (card, PayPal, crypto, or
          regional wallet) may be available on request where the total refund
          amount exceeds $20. These refunds are subject to the processing
          capabilities and timelines of the relevant payment provider.
        </p>
        <h3>Timing</h3>
        <p>
          Once approved, balance refunds are applied instantly. Refunds to
          external payment methods typically complete within 5–14 business
          days, depending on the payment provider.
        </p>
      </>
    ),
  },
  {
    id: "non-refundable",
    heading: "Non-Refundable Scenarios",
    content: (
      <>
        <p>
          The following scenarios are not eligible for refund under any
          circumstances:
        </p>
        <p>
          <strong>Wrong link submitted</strong> — You provided an incorrect
          URL and the order was delivered to that URL. Always verify links
          before placing orders.
        </p>
        <p>
          <strong>Private or protected accounts</strong> — Your account was
          set to private, or was otherwise inaccessible to our delivery
          systems, at the time of order processing.
        </p>
        <p>
          <strong>Platform-side removal</strong> — The social media platform
          removed your content, suspended your account, or reversed delivery
          after our service completed successfully.
        </p>
        <p>
          <strong>Change of mind</strong> — You decided after successful
          delivery that you no longer want the service.
        </p>
        <p>
          <strong>Violation of platform terms</strong> — You used the service
          in a way that caused your account to be penalised by the relevant
          social media platform.
        </p>
        <p>
          <strong>Requests made after 30 days</strong> — Refund requests
          submitted more than 30 days after the original order completion
          date.
        </p>
      </>
    ),
  },
  {
    id: "refill-guarantee",
    heading: "Refill Guarantee",
    content: (
      <>
        <p>
          Many SMMZin services include a refill guarantee for a specified
          window (typically 30, 60 or 90 days, depending on the service).
          The exact window is shown on each service's detail page before you
          place an order.
        </p>
        <h3>How refills work</h3>
        <p>
          If followers or engagement drop within the guaranteed window, you
          may request a refill. Once approved, the missing amount is
          re-delivered to bring your count back to the original level.
        </p>
        <p>
          Refills are a service-in-kind remedy — the equivalent value is
          re-delivered rather than refunded as cash or balance. This reflects
          the standard model used across the SMM panel industry.
        </p>
        <h3>Refill limitations</h3>
        <p>
          Refills apply only to the drop that exceeds the platform's normal
          fluctuation. A drop of less than 5% of the total delivered amount is
          considered within tolerance and does not qualify for refill in most
          cases.
        </p>
        <p>
          Refills are not available if the original order was placed with a
          service marked "no refill" at the time of purchase.
        </p>
      </>
    ),
  },
  {
    id: "balance-withdrawals",
    heading: "Balance Withdrawals",
    content: (
      <>
        <p>
          Funds added to your SMMZin account but not yet spent may be
          withdrawn subject to the following conditions:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Minimum withdrawal amount: $25 USD equivalent</li>
          <li>Withdrawal is sent to the same method used for the original deposit</li>
          <li>Processing time: 5–14 business days</li>
          <li>Processing fees charged by the payment provider are deducted from the withdrawal amount</li>
          <li>Withdrawal requests may be subject to identity verification for anti-fraud purposes</li>
        </ul>
        <p>
          Funds that have been spent on orders are not eligible for
          withdrawal. Balance used for orders is considered consumed on order
          placement, even if the order is later cancelled — in cancellation
          cases, the refund is credited back to balance.
        </p>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    heading: "Dispute Resolution",
    content: (
      <>
        <h3>First step — contact support</h3>
        <p>
          If you believe an order did not meet expectations, contact our
          support team first. The majority of disputes are resolved within 48
          hours by a refill, partial refund or balance credit.
        </p>
        <h3>Payment provider disputes</h3>
        <p>
          If you file a chargeback or dispute with your payment provider
          without first contacting SMMZin support, we reserve the right to
          suspend your account pending resolution of the dispute. This is
          because chargebacks incur significant processing costs and are
          typically resolvable directly.
        </p>
        <h3>Abuse of refund policy</h3>
        <p>
          Repeated refund requests on completed orders, or patterns that
          indicate an attempt to obtain services without payment, will result
          in permanent account termination and forfeiture of any remaining
          balance.
        </p>
      </>
    ),
  },
  {
    id: "fraud",
    heading: "Fraud and Abuse",
    content: (
      <>
        <p>
          The following activities constitute fraud and will result in
          immediate account termination without refund:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Using stolen payment methods or unauthorised payment sources</li>
          <li>Creating multiple accounts to circumvent any restriction</li>
          <li>Submitting orders designed to attack or damage a third party's account</li>
          <li>Manipulating the refill system to obtain free additional services</li>
          <li>Providing false information during dispute resolution</li>
        </ul>
        <p>
          Where fraud is suspected, SMMZin reserves the right to withhold
          refunds, freeze balance, and report the matter to the relevant
          authorities.
        </p>
      </>
    ),
  },
  {
    id: "how-to-request",
    heading: "How to Request a Refund",
    content: (
      <>
        <p>To request a refund or refill, follow these steps:</p>
        <ol style={{ listStyle: "decimal", paddingLeft: "20px", margin: "12px 0" }}>
          <li>Log in to your SMMZin account</li>
          <li>Open the order in question from your order history</li>
          <li>Click "Report issue" on the order detail page</li>
          <li>Describe the problem clearly and attach any relevant screenshots</li>
          <li>Submit the request — you will receive a confirmation email</li>
        </ol>
        <p>
          Support reviews requests in the order received. Most decisions are
          made within 48 hours. Complex cases may take up to 5 business days.
        </p>
        <p>
          You may also contact us directly at{" "}
          <a href={`mailto:${SITE_CONFIG.contact.email}`}>
            {SITE_CONFIG.contact.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    heading: "Changes to This Policy",
    content: (
      <>
        <p>
          SMMZin may update this Refund Policy when our practices change,
          when required by law, or when new products are introduced. Updates
          are published on this page with a revised "Last updated" date.
        </p>
        <p>
          The version of this policy in effect at the time of your order
          governs that specific transaction.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <>
        <p>For refund-related questions, contact us:</p>
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
        <p>We respond to all refund-related enquiries within 48 hours.</p>
      </>
    ),
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="This Refund Policy outlines how SMMZin handles cancellations, refunds, refill guarantees, and balance withdrawals. By placing an order, you agree to the terms outlined in this policy."
      lastUpdated="April 2026"
      effectiveDate="April 2026"
      sections={sections}
      relatedLinks={[
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Cookies Policy", href: "/legal/cookies" },
        { label: "Disclaimer", href: "/legal/disclaimer" },
      ]}
    />
  );
}
