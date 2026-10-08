#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# 1. Kiểm tra file dictionaries.ts có export Dictionary không
# ------------------------------------------------------------
echo "=== Kiểm tra export trong dictionaries.ts ==="
grep -n "export type Dictionary\|export function getDictionary\|const dictionaries" src/content/dictionaries.ts

echo ""

# ------------------------------------------------------------
# 2. Thêm export type Dictionary nếu thiếu
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/content/dictionaries.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

needle = "export type Dictionary = typeof vi;"

if needle not in content:
    # Chèn ngay trước dòng "const en: Dictionary = {" hoặc trước "const dictionaries"
    if "const en: Dictionary = {" in content:
        content = content.replace(
            "const en: Dictionary = {",
            "export type Dictionary = typeof vi;\n\nconst en: Dictionary = {",
            1,
        )
        print("✅ Added export type Dictionary before const en")
    elif "const dictionaries: Record<Locale, Dictionary>" in content:
        content = content.replace(
            "const dictionaries: Record<Locale, Dictionary>",
            "export type Dictionary = typeof vi;\n\nconst dictionaries: Record<Locale, Dictionary>",
            1,
        )
        print("✅ Added export type Dictionary before dictionaries const")
    else:
        # Fallback: thêm vào cuối file
        content = content.rstrip() + "\n\nexport type Dictionary = typeof vi;\n"
        print("✅ Added export type Dictionary at end of file")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
else:
    print("✅ export type Dictionary already present")

# Xác nhận
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

if needle in content:
    print("")
    print("VERIFIED: export type Dictionary exists")
else:
    print("")
    print("ERROR: still missing — check manually")
PYEOF

echo ""
echo "part65 done"