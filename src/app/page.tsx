import { getDictionary, type FaqItem } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { getRemainingMs } from "@/lib/countdown";

import ApiPreview from "@/components/ApiPreview";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Benefits from "@/components/Benefits";
import Countries from "@/components/Countries";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import NotifyMe from "@/components/NotifyMe";
import Philosophy from "@/components/Philosophy";
import PlatformEcosystem from "@/components/PlatformEcosystem";
import PlatformMarquee from "@/components/PlatformMarquee";
import ProductPreview from "@/components/ProductPreview";
import Services from "@/components/Services";

const locale = "en" as const;
const dict = getDictionary(locale);

export default function HomePage() {
  const pageUrl = SITE_CONFIG.siteUrl;
  const inLanguage = "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
        name: SITE_CONFIG.brandName,
        url: SITE_CONFIG.siteUrl,
        logo: `${SITE_CONFIG.siteUrl}/favicon.svg`,
        description: dict.footer.description,
        sameAs: [
          SITE_CONFIG.socialLinks.facebook,
          SITE_CONFIG.socialLinks.instagram,
          SITE_CONFIG.socialLinks.telegram,
          SITE_CONFIG.socialLinks.x,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: SITE_CONFIG.brandName,
        inLanguage,
        publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        isPartOf: { "@id": `${SITE_CONFIG.siteUrl}/#website` },
        inLanguage,
        about: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_CONFIG.brandName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: dict.meta.description,
        url: SITE_CONFIG.siteUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: (dict.faq.items as FaqItem[]).map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
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
        items={dict.nav.items}
        notifyLabel={dict.common.notifyMe}
        demoLabel={dict.common.demo}
        themeLabelDark={dict.theme.toggleToDark}
        themeLabelLight={dict.theme.toggleToLight}
        openMenuLabel={dict.nav.openMenu}
        closeMenuLabel={dict.nav.closeMenu}
        countriesLabel={dict.nav.countriesLabel}
      />

      <main>
        <Hero dict={dict} initialMs={getRemainingMs(SITE_CONFIG.countdown)} />
        <PlatformMarquee heading={dict.marquee.heading} />
        <About dict={dict} />
        <Benefits dict={dict} />
        <Features dict={dict} />
        <PlatformEcosystem dict={dict} />
        <Services dict={dict} />
        <HowItWorks dict={dict} />
        <ProductPreview dict={dict} />
        <ApiPreview dict={dict} />
        <Audience dict={dict} />
        <Countries dict={dict} locale={locale} />
        <Philosophy dict={dict} />
        <Faq dict={dict} />
        <NotifyMe dict={dict} locale={locale} />
        <FinalCta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale} />
    </>
  );
}
