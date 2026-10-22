#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 250: Build test → Commit → Push ==="
echo ""

# Bước 1: Kiểm tra git status
echo "--- Trạng thái hiện tại ---"
git status --short
echo ""

# Bước 2: Build test
echo "--- Build test (có thể mất 30-60 giây) ---"
rm -rf .next 2>/dev/null
if ! npm run build 2>&1 | tail -15; then
  echo ""
  echo "❌ BUILD FAIL. Không commit, không push."
  echo "Hãy sửa lỗi trước, sau đó chạy lại script này."
  exit 1
fi

echo ""
echo "✅ BUILD PASS. Tiến hành commit + push."

# Bước 3: Commit
git add -A
if git diff --cached --quiet; then
  echo "ℹ️ Không có thay đổi mới để commit (có thể đã commit trước đó)."
else
  git commit -m "feat: add Laos country page, buff like/sub blog posts, and blog pagination/search/filter"
fi

# Bước 4: Push (có fallback pull nếu bị reject)
echo ""
echo "--- Push lên GitHub ---"
if ! git push origin main; then
  echo "⚠️ Push bị reject. Thử pull --no-rebase rồi push lại..."
  git pull origin main --no-rebase
  git push origin main
fi

echo ""
echo "✅ ĐÃ PUSH. Vercel sẽ tự build trong 1-2 phút."
echo "Theo dõi tại: https://vercel.com/dashboard"
