#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

python - << 'PYEOF'
path = "src/content/countries/registry.ts"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

import_line = 'import { MyanmarVisual } from "@/components/country/visuals/MyanmarVisual";'

if import_line not in c:
    # Chèn ngay sau import của Pakistan (hoặc bất kỳ visual nào khác)
    if 'import { PakistanVisual }' in c:
        c = c.replace(
            'import { PakistanVisual } from "@/components/country/visuals/PakistanVisual";',
            'import { PakistanVisual } from "@/components/country/visuals/PakistanVisual";\n' + import_line,
            1,
        )
        print("✅ Added import after PakistanVisual")
    elif 'import { IndiaVisual }' in c:
        c = c.replace(
            'import { IndiaVisual } from "@/components/country/visuals/IndiaVisual";',
            'import { IndiaVisual } from "@/components/country/visuals/IndiaVisual";\n' + import_line,
            1,
        )
        print("✅ Added import after IndiaVisual")
    else:
        # Fallback: Chèn ở dòng đầu tiên
        c = import_line + "\n" + c
        print("✅ Added import at the beginning of file")

    with open(path, "w", encoding="utf-8") as f:
        f.write(c)
else:
    print("✅ Import already exists")
PYEOF

echo ""
echo "=== Verify import ==="
grep "MyanmarVisual" src/content/countries/registry.ts

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -12