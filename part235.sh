#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "================================================================="
echo " 1. FILE: src/content/countries-data.ts (Chỉ in 60 dòng đầu)"
echo "================================================================="
head -n 60 src/content/countries-data.ts

echo ""
echo "================================================================="
echo " 2. FILE: src/content/countries/types.ts"
echo "================================================================="
cat src/content/countries/types.ts

echo ""
echo "================================================================="
echo " 3. FILE: src/content/countries/registry.ts (Chỉ in 50 dòng đầu)"
echo "================================================================="
head -n 50 src/content/countries/registry.ts

echo ""
echo "================================================================="
echo " 4. FILE: src/components/Countries.tsx (Chỉ in 50 dòng đầu)"
echo "================================================================="
head -n 50 src/components/Countries.tsx

echo ""
echo "================================================================="
echo " 5. FILE: src/components/Navbar.tsx (Tìm phần liên quan đến countries)"
echo "================================================================="
grep -n -i -A 10 -B 2 "countr" src/components/Navbar.tsx || echo "Không có chữ country trong Navbar"

echo ""
echo "=== XONG ==="
