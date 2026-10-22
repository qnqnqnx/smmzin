#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "================================================================="
echo " 1. Kiểm tra 2 bài mới có tồn tại không"
echo "================================================================="
ls -la src/content/blog/posts/buff-*.tsx 2>&1 || echo "❌ Không tìm thấy file"

echo ""
echo "================================================================="
echo " 2. Kiểm tra registry.ts — tìm chữ 'buff'"
echo "================================================================="
grep -n "buff" src/content/blog/registry.ts || echo "❌ Không có chữ 'buff' trong registry.ts"

echo ""
echo "================================================================="
echo " 3. In ra hàm getSortedPosts (nếu có filter date)"
echo "================================================================="
grep -n -A 20 "export function getSortedPosts\|getSortedPosts =" src/content/blog/registry.ts || echo "❌ Không tìm thấy hàm getSortedPosts"

echo ""
echo "================================================================="
echo " 4. In ra 40 dòng cuối của registry.ts"
echo "================================================================="
tail -n 40 src/content/blog/registry.ts

echo ""
echo "=== XONG ==="
