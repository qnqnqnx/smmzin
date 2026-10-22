#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 243: Chèn import vào BlogThumbnail.tsx ==="

python - << 'PYEOF'
from pathlib import Path

path = Path("src/components/blog/BlogThumbnail.tsx")
c = path.read_text(encoding="utf-8")

# Kiểm tra xem đã có import chưa (để tránh chèn trùng)
if "BuffLikeThumbnail" in c and "import" in c:
    print("⚠️ Có vẻ import đã tồn tại, kiểm tra lại...")
else:
    # Tìm dòng "type ThumbnailProps = { slug: string };"
    marker = "type ThumbnailProps = { slug: string };"
    if marker in c:
        # Chèn 2 dòng import vào trước marker
        import_lines = (
            'import { BuffLikeThumbnail } from "./thumbnails/BuffLikeThumbnail";\n'
            'import { BuffSubThumbnail } from "./thumbnails/BuffSubThumbnail";\n\n'
        )
        c = c.replace(marker, import_lines + marker, 1)
        path.write_text(c, encoding="utf-8")
        print("✅ Đã chèn 2 dòng import vào trước dòng type ThumbnailProps.")
    else:
        # Fallback: chèn ngay sau comment block đầu tiên
        lines = c.split('\n')
        insert_idx = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('type ') or line.strip().startswith('export '):
                insert_idx = i
                break
        import_lines = [
            'import { BuffLikeThumbnail } from "./thumbnails/BuffLikeThumbnail";',
            'import { BuffSubThumbnail } from "./thumbnails/BuffSubThumbnail";',
            ''
        ]
        for offset, imp in enumerate(import_lines, start=1):
            lines.insert(insert_idx + offset, imp)
        c = '\n'.join(lines)
        path.write_text(c, encoding="utf-8")
        print("✅ Đã chèn import bằng fallback (trước dòng type/export đầu tiên).")

# In ra 15 dòng đầu để verify
print("\n--- 15 dòng đầu file sau khi sửa ---")
for i, line in enumerate(c.split('\n')[:15], start=1):
    print(f"{i}: {line}")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
