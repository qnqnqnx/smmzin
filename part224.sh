#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

# ------------------------------------------------------------
# 1. Update countries-data.ts — active Myanmar
# ------------------------------------------------------------
python - << 'PYEOF'
import re
path = "src/content/countries-data.ts"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Tìm block Myanmar, đổi available và href
old = '''    nameVi: "Myanmar",
    nameEn: "Myanmar",
    tagVi: "SMM Panel Myanmar",
    tagEn: "SMM Panel Myanmar",
    available: false,
    href: "#notify",'''

new = '''    nameVi: "Myanmar",
    nameEn: "Myanmar",
    tagVi: "SMM Panel Myanmar",
    tagEn: "SMM Panel Myanmar",
    available: true,
    href: "/smm-panel-myanmar",'''

if old in c:
    c = c.replace(old, new, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(c)
    print("✅ Myanmar marked available")
else:
    print("⚠️ Myanmar block not found")
PYEOF

# ------------------------------------------------------------
# 2. Update Registry
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/content/countries/registry.ts"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Import data + visual
if "myanmarData" not in c:
    c = c.replace(
        'import { pakistanData } from "./pakistan";',
        'import { pakistanData } from "./pakistan";\nimport { myanmarData } from "./myanmar";',
        1,
    )
    c = c.replace(
        'import { PakistanVisual } from "@/components/country/visuals/PakistanVisual";',
        'import { PakistanVisual } from "@/components/country/visuals/PakistanVisual";\nimport { MyanmarVisual } from "@/components/country/visuals/MyanmarVisual";',
        1,
    )
    print("✅ Imports added")

# Add to COUNTRY_DATA
if "myanmar: myanmarData" not in c:
    c = c.replace(
        '  pakistan: pakistanData,',
        '  pakistan: pakistanData,\n  myanmar: myanmarData,',
        1,
    )
    print("✅ Registered myanmarData")

# Add to COUNTRY_VISUALS
if "myanmar: {" not in c:
    c = c.replace(
        '''  pakistan: {
    Art: PakistanVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "pk-flag-float",
  },''',
        '''  pakistan: {
    Art: PakistanVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "pk-flag-float",
  },
  myanmar: {
    Art: MyanmarVisual,
    artSize: 440,
    flagPosition: "tr",
    textPosition: "bl",
    artAnimationClass: "",
    flagAnimationClass: "mm-flag-float",
  },''',
        1,
    )
    print("✅ Registered MyanmarVisual")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)
PYEOF

# ------------------------------------------------------------
# 3. Tạo Page
# ------------------------------------------------------------
mkdir -p src/app/smm-panel-myanmar

cat > src/app/smm-panel-myanmar/page.tsx << 'XXENDXX'
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CountryPage from "@/components/country/CountryPage";
import { getCountryData, getCountryVisual } from "@/content/countries/registry";
import { buildCountryMetadata } from "@/content/countries/metadata";

const SLUG = "myanmar";
const data = getCountryData(SLUG);
const visual = getCountryVisual(SLUG);

export const metadata: Metadata = data ? buildCountryMetadata(data) : {};

export default function MyanmarPage() {
  if (!data || !visual) notFound();
  return <CountryPage data={data} visual={visual} />;
}
XXENDXX

echo "✅ Page created"

# ------------------------------------------------------------
# 4. CSS Animations
# ------------------------------------------------------------
cat >> src/app/globals.css << 'XXENDXX'

/* ============================================================
   MYANMAR PAGE ANIMATIONS
   ============================================================ */

@keyframes mm-padauk-sway-kf {
  0%, 100% { transform: rotate(-2.5deg); }
  50% { transform: rotate(2.5deg); }
}

@keyframes mm-padauk-sway-rev-kf {
  0%, 100% { transform: rotate(2.5deg); }
  50% { transform: rotate(-2.5deg); }
}

.mm-padauk-sway {
  animation: mm-padauk-sway-kf 5s ease-in-out infinite;
  transform-origin: 0 30px;
  transform-box: fill-box;
}

.mm-padauk-sway-rev {
  animation: mm-padauk-sway-rev-kf 5.5s ease-in-out infinite;
  transform-origin: 0 30px;
  transform-box: fill-box;
}

@keyframes mm-star-twinkle-kf {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.15); }
}

.mm-star-twinkle {
  animation: mm-star-twinkle-kf 3s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

.mm-star-twinkle-rev {
  animation: mm-star-twinkle-kf 3.5s ease-in-out infinite;
  animation-delay: 1s;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes mm-flag-float-kf {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(2deg); }
}

.mm-flag-float {
  animation: mm-flag-float-kf 5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .mm-padauk-sway,
  .mm-padauk-sway-rev,
  .mm-star-twinkle,
  .mm-star-twinkle-rev,
  .mm-flag-float {
    animation: none !important;
  }
}
XXENDXX

echo "✅ CSS animations added"

# Verify CSS balance
python - << 'PYEOF'
path = "src/app/globals.css"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()
opens = c.count("{")
closes = c.count("}")
print(f"Braces: {opens} / {closes} (diff: {opens - closes})")
if opens > closes:
    c = c.rstrip() + "\n" + ("}\n" * (opens - closes))
    with open(path, "w", encoding="utf-8") as f:
        f.write(c)
    print("✅ Fixed")
PYEOF

echo ""
echo "=== Clear cache + Build ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -15