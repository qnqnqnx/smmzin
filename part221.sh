#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

python - << 'PYEOF'
path = "src/app/layout.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

verification_tag = '''  verification: {
    google: "cm3EPV4_e1SlKS1mMWLXnVXTWGfMxNARSKD6r--Kdec",
  },'''

# Chèn vào ngay sau metadataBase
if "cm3EPV4_e1SlKS1mMWLXnVXTWGfMxNARSKD6r--Kdec" not in c:
    old = "  metadataBase: new URL(baseUrl),"
    new = f"  metadataBase: new URL(baseUrl),\n{verification_tag}"
    
    if old in c:
        c = c.replace(old, new, 1)
        print("✅ Google verification added to metadata")
    else:
        print("⚠️ metadataBase not found — thử tìm export const metadata")
        # Fallback nếu layout bị thay đổi cấu trúc
        old_fallback = "export const metadata: Metadata = {"
        if old_fallback in c:
            c = c.replace(old_fallback, f"export const metadata: Metadata = {{\n{verification_tag}", 1)
            print("✅ Added at start of metadata (fallback)")
else:
    print("✅ Verification already exists")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)
PYEOF

# ------------------------------------------------------------
# Kiểm tra code xem đã vào chưa
# ------------------------------------------------------------
echo ""
echo "=== Kiểm tra file layout.tsx ==="
grep -A 3 "verification:" src/app/layout.tsx

echo ""
echo "=== Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10