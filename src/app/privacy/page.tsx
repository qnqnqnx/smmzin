import type { Metadata } from "next";
import { getDictionary } from "@/content/dictionaries";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Privacy Policy — SMMZin",
};

const locale = "en" as const;

export default function PrivacyPage() {
  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.privacy.title}
      intro={dict.legal.privacy.intro}
      sections={dict.legal.privacy.sections}
      updatedLabel={dict.legal.updatedLabel}
      updated={dict.legal.updated}
      backLabel={dict.common.backHome}
    />
  );
}
