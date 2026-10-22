#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "================================================================="
echo " 1. FILE: src/components/blog/BlogThumbnail.tsx (20 dòng đầu)"
echo "================================================================="
head -n 20 src/components/blog/BlogThumbnail.tsx

echo ""
echo "================================================================="
echo " 2. FILE: src/components/blog/BlogThumbnail.tsx (20 dòng cuối)"
echo "================================================================="
tail -n 20 src/components/blog/BlogThumbnail.tsx

echo ""
echo "================================================================="
echo " 3. Tìm tất cả các dòng có chữ 'import' trong file"
echo "================================================================="
grep -n "import" src/components/blog/BlogThumbnail.tsx || echo "❌ Không có dòng import nào trong file này."

echo ""
echo "=== XONG ==="
