#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# 1. Fix page.tsx — thêm type cho item trong FAQ map
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/app/[locale]/page.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Import FaqItem type
if 'import type { FaqItem }' not in c:
    # Chèn import sau dòng import getDictionary
    c = c.replace(
        'import { getDictionary } from "@/content/dictionaries";',
        'import { getDictionary, type FaqItem } from "@/content/dictionaries";',
        1,
    )

# Sửa map callback có type
old = 'mainEntity: dict.faq.items.map((item) => ({'
new = 'mainEntity: (dict.faq.items as FaqItem[]).map((item) => ({'

if old in c:
    c = c.replace(old, new, 1)
    print("✅ FAQ item type added")
else:
    print("⚠️ FAQ map target not found")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)
PYEOF

# ------------------------------------------------------------
# 2. Kiểm tra các map callback khác có thể lỗi tương tự
# ------------------------------------------------------------
echo ""
echo "=== Kiểm tra các file có .map() cần type ==="
grep -rn "\.map((item)" src/app src/components 2>/dev/null || echo "Không tìm thấy .map((item)"
grep -rn "\.map((kw)" src/app src/components 2>/dev/null || echo "Không tìm thấy .map((kw)"

echo ""
echo "=== Kiểm tra types export từ dictionaries ==="
grep -n "export type" src/content/dictionaries.ts

echo ""
echo "part63 done"