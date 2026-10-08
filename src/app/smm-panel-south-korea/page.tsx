import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CountryPage from "@/components/country/CountryPage";
import { getCountryData, getCountryVisual } from "@/content/countries/registry";

const SLUG = "south-korea";
const data = getCountryData(SLUG);
const visual = getCountryVisual(SLUG);

export const metadata: Metadata = data
  ? {
      title: data.seo.title,
      description: data.seo.description,
      keywords: [...data.seo.keywords],
      alternates: {
        canonical: `https://www.smmzin.com/smm-panel-${SLUG}`,
      },
      openGraph: {
        type: "website",
        locale: data.seo.ogLocale,
        url: `https://www.smmzin.com/smm-panel-${SLUG}`,
        title: data.seo.title,
        description: data.seo.description,
      },
    }
  : {};

export default function SouthKoreaPage() {
  if (!data || !visual) notFound();
  return <CountryPage data={data} visual={visual} />;
}
