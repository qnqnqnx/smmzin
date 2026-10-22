#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 247: Thêm 2 bài mới vào ALL_POSTS ==="

python - << 'PYEOF'
from pathlib import Path

path = Path("src/content/blog/registry.ts")
c = path.read_text(encoding="utf-8")

# Kiểm tra xem đã có trong mảng chưa
if "...buffLikeMeta," in c:
    print("⚠️ 2 bài đã có trong ALL_POSTS rồi. Không cần thêm.")
else:
    # Tìm block cuối cùng của mảng trước dấu ];
    # Cụ thể tìm: "  },\n];" và thay thế bằng block mới
    marker = "  },\n];"
    if marker in c:
        # Thêm 2 block mới vào trước dấu ];
        new_blocks = (
            "  },\n"
            "  {\n"
            "    ...buffLikeMeta,\n"
            "    Content: buffLikeContent,\n"
            "  },\n"
            "  {\n"
            "    ...buffSubMeta,\n"
            "    Content: buffSubContent,\n"
            "  },\n"
            "];"
        )
        # Chỉ replace lần đầu tiên tìm thấy (để tránh replace nhầm các mảng khác)
        c = c.replace(marker, new_blocks, 1)
        path.write_text(c, encoding="utf-8")
        print("✅ Đã thêm buffLikeMeta và buffSubMeta vào ALL_POSTS.")
    else:
        print("❌ Không tìm thấy marker '  },\\n];' để chèn.")
        exit(1)

# Verify
c2 = path.read_text(encoding="utf-8")
if "...buffLikeMeta," in c2 and "...buffSubMeta," in c2:
    print("✅ Verify: Cả 2 bài đã nằm trong ALL_POSTS.")
else:
    print("⚠️ Verify thất bại.")
PYEOF

echo ""
echo "--- In ra 10 dòng cuối của ALL_POSTS để kiểm tra ---"
python -c "
lines = open('src/content/blog/registry.ts', encoding='utf-8').read().split('\n')
for i, line in enumerate(lines[62:80], start=63):
    print(f'{i}: {line}')
"

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
