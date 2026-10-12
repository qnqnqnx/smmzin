#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

echo "=== 1. Cài 2 package ==="
npm install @vercel/analytics @vercel/speed-insights

echo ""
echo "=== 2. Thêm vào root layout ==="
python - << 'PYEOF'
path = "src/app/layout.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Import cả 2
if "@vercel/analytics" not in c:
    c = c.replace(
        'import "./globals.css";',
        'import "./globals.css";\nimport { Analytics } from "@vercel/analytics/next";\nimport { SpeedInsights } from "@vercel/speed-insights/next";',
        1,
    )
    print("✅ Imports added")

# Thêm vào body — sau BackToTop
if "<Analytics" not in c:
    old = "<BackToTop label=\"Back to top\" />"
    new = "<BackToTop label=\"Back to top\" />\n        <Analytics />\n        <SpeedInsights />"
    if old in c:
        c = c.replace(old, new, 1)
        print("✅ Components added")
    else:
        # Fallback: chèn trước </body>
        c = c.replace(
            "</body>",
            "  <Analytics />\n        <SpeedInsights />\n      </body>",
            1,
        )
        print("✅ Components added (fallback)")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)
PYEOF

echo ""
echo "=== 3. Build test ==="
npm run build 2>&1 | tail -10