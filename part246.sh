#!/usr/bin/env bash
cd /d/vocvach/smmzin

echo "=== 1. registry.ts (TOÀN BỘ, có đánh số dòng) ==="
cat -n src/content/blog/registry.ts

echo ""
echo "=== 2. Buff Like — 30 dòng đầu ==="
head -30 src/content/blog/posts/buff-like-la-gi.tsx

echo ""
echo "=== 3. Buff Sub — 30 dòng đầu ==="
head -30 src/content/blog/posts/buff-sub-la-gi.tsx
