#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "================================================================="
echo " 1. FILE: src/app/blog/page.tsx (Toàn bộ file)"
echo "================================================================="
cat src/app/blog/page.tsx

echo ""
echo "================================================================="
echo " 2. FILE: src/components/blog/BlogCard.tsx (Toàn bộ file)"
echo "================================================================="
cat src/components/blog/BlogCard.tsx

echo ""
echo "================================================================="
echo " 3. FILE: src/content/blog/types.ts (Kiểm tra xem có category không)"
echo "================================================================="
cat src/content/blog/types.ts

echo ""
echo "=== XONG ==="
