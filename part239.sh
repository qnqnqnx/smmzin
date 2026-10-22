#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 239: Fix Next.js Serialization Error on Blog Page ==="

# 1. Sửa page.tsx để lọc bỏ trường Content
python - << 'PYEOF'
from pathlib import Path
path = Path("src/app/blog/page.tsx")
c = path.read_text(encoding="utf-8")

old_line = "const posts = getSortedPosts();"
new_line = "const posts = getSortedPosts().map(({ Content, ...meta }) => meta);"

if old_line in c:
    c = c.replace(old_line, new_line)
    path.write_text(c, encoding="utf-8")
    print("✅ Đã sửa page.tsx: Lọc bỏ Content trước khi truyền xuống Client.")
else:
    print("⚠️ Không tìm thấy dòng gốc trong page.tsx (có thể đã sửa).")
PYEOF

# 2. Sửa kiểu dữ liệu trong BlogListingClient
python - << 'PYEOF'
from pathlib import Path
path = Path("src/components/blog/BlogListingClient.tsx")
c = path.read_text(encoding="utf-8")

c = c.replace(
    'import type { BlogPost } from "@/content/blog/types";',
    'import type { BlogPostMeta } from "@/content/blog/types";'
)
c = c.replace(
    'export default function BlogListingClient({ posts }: { posts: BlogPost[] })',
    'export default function BlogListingClient({ posts }: { posts: BlogPostMeta[] })'
)

path.write_text(c, encoding="utf-8")
print("✅ Đã sửa BlogListingClient.tsx: Chuyển sang dùng BlogPostMeta.")
PYEOF

# 3. Sửa kiểu dữ liệu trong BlogCard
python - << 'PYEOF'
from pathlib import Path
path = Path("src/components/blog/BlogCard.tsx")
c = path.read_text(encoding="utf-8")

c = c.replace(
    'import type { BlogPost } from "@/content/blog/types";',
    'import type { BlogPostMeta } from "@/content/blog/types";'
)
c = c.replace(
    'export default function BlogCard({ post }: { post: BlogPost })',
    'export default function BlogCard({ post }: { post: BlogPostMeta })'
)

path.write_text(c, encoding="utf-8")
print("✅ Đã sửa BlogCard.tsx: Chuyển sang dùng BlogPostMeta.")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -15
