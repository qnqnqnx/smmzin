import dynamic from "next/dynamic";
import type { CountryData, CountryVisual } from "./types";

// ----- Data (static import — small, ~3KB mỗi nước) -----
import { vietnamData } from "./vietnam";
import { chinaData } from "./china";
import { bangladeshData } from "./bangladesh";
import { usaData } from "./usa";
import { indiaData } from "./india";
import { thailandData } from "./thailand";
import { indonesiaData } from "./indonesia";
import { southKoreaData } from "./south-korea";
import { malaysiaData } from "./malaysia";
import { singaporeData } from "./singapore";
import { cambodiaData } from "./cambodia";
import { pakistanData } from "./pakistan";

// ----- Visuals (dynamic — mỗi cái ~10KB, chỉ load khi cần) -----
// Next.js tự tách chunk — Vietnam page chỉ load VietnamVisual, không load China/India...
const VietnamVisual = dynamic(() =>
  import("@/components/country/visuals/VietnamVisual").then((m) => m.VietnamVisual),
);
const ChinaVisual = dynamic(() =>
  import("@/components/country/visuals/ChinaVisual").then((m) => m.ChinaVisual),
);
const BangladeshVisual = dynamic(() =>
  import("@/components/country/visuals/BangladeshVisual").then((m) => m.BangladeshVisual),
);
const UsaVisual = dynamic(() =>
  import("@/components/country/visuals/UsaVisual").then((m) => m.UsaVisual),
);
const IndiaVisual = dynamic(() =>
  import("@/components/country/visuals/IndiaVisual").then((m) => m.IndiaVisual),
);
const ThailandVisual = dynamic(() =>
  import("@/components/country/visuals/ThailandVisual").then((m) => m.ThailandVisual),
);
const IndonesiaVisual = dynamic(() =>
  import("@/components/country/visuals/IndonesiaVisual").then((m) => m.IndonesiaVisual),
);
const SouthKoreaVisual = dynamic(() =>
  import("@/components/country/visuals/SouthKoreaVisual").then((m) => m.SouthKoreaVisual),
);
const MalaysiaVisual = dynamic(() =>
  import("@/components/country/visuals/MalaysiaVisual").then((m) => m.MalaysiaVisual),
);
const SingaporeVisual = dynamic(() =>
  import("@/components/country/visuals/SingaporeVisual").then((m) => m.SingaporeVisual),
);
const CambodiaVisual = dynamic(() =>
  import("@/components/country/visuals/CambodiaVisual").then((m) => m.CambodiaVisual),
);
const PakistanVisual = dynamic(() =>
  import("@/components/country/visuals/PakistanVisual").then((m) => m.PakistanVisual),
);

// ------------------------------------------------------------
// COUNTRY_DATA
// ------------------------------------------------------------
export const COUNTRY_DATA: Record<string, CountryData> = {
  vietnam: vietnamData,
  china: chinaData,
  bangladesh: bangladeshData,
  usa: usaData,
  india: indiaData,
  thailand: thailandData,
  indonesia: indonesiaData,
  "south-korea": southKoreaData,
  malaysia: malaysiaData,
  singapore: singaporeData,
  cambodia: cambodiaData,
  pakistan: pakistanData,
};

// ------------------------------------------------------------
// COUNTRY_VISUALS — lazy components
// ------------------------------------------------------------
export const COUNTRY_VISUALS: Record<string, CountryVisual> = {
  vietnam: {
    Art: VietnamVisual,
    artSize: 520,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "vn-drum-glow",
    flagAnimationClass: "vn-flag-pulse",
  },
  china: {
    Art: ChinaVisual,
    artSize: 420,
    flagPosition: "br",
    textPosition: "tl",
    artAnimationClass: "",
    flagAnimationClass: "cn-flag-float",
  },
  bangladesh: {
    Art: BangladeshVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "bd-flag-float",
  },
  usa: {
    Art: UsaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "us-flag-float",
  },
  india: {
    Art: IndiaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "in-flag-float",
  },
  thailand: {
    Art: ThailandVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "th-flag-float",
  },
  indonesia: {
    Art: IndonesiaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "id-flag-float",
  },
  "south-korea": {
    Art: SouthKoreaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "kr-flag-float",
  },
  malaysia: {
    Art: MalaysiaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "my-flag-float",
  },
  singapore: {
    Art: SingaporeVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "sg-flag-float",
  },
  cambodia: {
    Art: CambodiaVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "kh-flag-float",
  },
  pakistan: {
    Art: PakistanVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "pk-flag-float",
  },
};

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------
export function getCountryData(slug: string): CountryData | undefined {
  return COUNTRY_DATA[slug];
}

export function getCountryVisual(slug: string): CountryVisual | undefined {
  return COUNTRY_VISUALS[slug];
}

export function listCountrySlugs(): string[] {
  return Object.keys(COUNTRY_DATA);
}

export function listAllCountries(): CountryData[] {
  return Object.values(COUNTRY_DATA);
}
