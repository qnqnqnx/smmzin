#!/usr/bin/env bash
set -euo pipefail

cd /d/VocVach/SMMZin

echo "=== 1. Nâng Next.js lên 14.2.35 (patch, an toàn) ==="
npm install next@14.2.35

echo ""
echo "=== 2. Build test ==="
npm run build 2>&1 | tail -15

echo ""
echo "=== 3. Kiểm tra vulnerabilities còn lại ==="
npm audit 2>&1 | tail -20