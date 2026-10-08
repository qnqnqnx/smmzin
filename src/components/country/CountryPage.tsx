import { getDictionary, type FaqItem } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import type { CountryData, CountryVisual } from "@/content/countries/types";

import Footer from "../Footer";
import Navbar from "../Navbar";
import NotifyMe from "../NotifyMe";
import CountryFinalCta from "./CountryFinalCta";
import CountryCoverage from "./CountryCoverage";
import CountryFaq from "./CountryFaq";
import CountryHero from "./CountryHero";
import CountryHowToOrder from "./CountryHowToOrder";
import CountryPayment from "./CountryPayment";
import CountryServices from "./CountryServices";
import CountryWhatIs from "./CountryWhatIs";
import CountryWhy from "./CountryWhy";

const dictEn = getDictionary("en");

/**
 * Page template chung cho mọi nước.
 * Nhận data + visual, tự động render đủ 8 section + JSON-LD + Navbar/Footer EN.
 */
export default function CountryPage({
  data,
  visual,
}: {
  data: CountryData;
  visual: CountryVisual;
}) {
  const pageUrl = `${SITE_CONFIG.siteUrl}/smm-panel-${data.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: data.seo.title,
        description: data.seo.description,
        inLanguage: data.seo.inLanguage,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: (data.faq.items as FaqItem[]).map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `SMM Panel ${data.nameEn}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar
        brand={SITE_CONFIG.brandName}
        items={dictEn.nav.items}
        notifyLabel={dictEn.common.notifyMe}
        demoLabel={dictEn.common.demo}
        themeLabelDark={dictEn.theme.toggleToDark}
        themeLabelLight={dictEn.theme.toggleToLight}
        openMenuLabel={dictEn.nav.openMenu}
        closeMenuLabel={dictEn.nav.closeMenu}
        countriesLabel={dictEn.nav.countriesLabel}
      />

      <main className="pt-[var(--nav-h)]">
        <CountryHero data={data} visual={visual} />
        <CountryWhatIs data={data} />
        <CountryWhy data={data} />
        <CountryServices data={data} />
        <CountryPayment data={data} />
        <CountryHowToOrder data={data} />
        <CountryFaq data={data} />
        <CountryCoverage locale="en" />
        <NotifyMe dict={dictEn} locale="en" />
        <CountryFinalCta data={data} />
      </main>

      <Footer dict={dictEn} locale="en" />
    </>
  );
}
