import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CountryPage from "@/components/country/CountryPage";
import { getCountryData, getCountryVisual } from "@/content/countries/registry";
import { buildCountryMetadata } from "@/content/countries/metadata";

const SLUG = "cambodia";
const data = getCountryData(SLUG);
const visual = getCountryVisual(SLUG);

export const metadata: Metadata = data ? buildCountryMetadata(data) : {};

export default function CambodiaPage() {
  if (!data || !visual) notFound();
  return <CountryPage data={data} visual={visual} />;
}
