#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 230: Locate '12 countries' in Footer.tsx ==="
echo ""

echo "--- 1. Các dòng từ 120 đến 150 ---"
sed -n '120,150p' src/components/Footer.tsx

echo ""
echo "--- 2. Tìm mọi dòng có chứa chữ 'countr' ---"
grep -n -i "countr" src/components/Footer.tsx || echo "Không tìm thấy chữ 'countr'"

echo ""
echo "--- 3. Tìm mọi dòng có chứa số '12' ---"
grep -n "12" src/components/Footer.tsx || echo "Không tìm thấy số '12'"

echo ""
echo "=== XONG. Hãy copy toàn bộ kết quả trên gửi lại cho AI. ==="
