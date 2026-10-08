import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionaries";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Terms of Use — SMMZin",
};

const locale = "en" as const;

export default function TermsPage() {
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.terms.title}
      intro={dict.legal.terms.intro}
      sections={dict.legal.terms.sections}
      updatedLabel={dict.legal.updatedLabel}
      updated={dict.legal.updated}
      backLabel={dict.common.backHome}
    />
  );
}
