#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 241: Fix import BlogThumbnail.tsx ==="

python - << 'PYEOF'
from pathlib import Path

path = Path("src/components/blog/BlogThumbnail.tsx")
c = path.read_text(encoding="utf-8")

# 1. Xóa các dòng import bị chèn sai (nếu có) để làm sạch
lines = c.split('\n')
new_lines = []
for line in lines:
    # Bỏ qua các dòng chỉ chứa import thumbnail (bị chèn sai vị trí)
    if 'import { BuffLikeThumbnail }' in line or 'import { BuffSubThumbnail }' in line:
        continue
    new_lines.append(line)
c = '\n'.join(new_lines)

# 2. Tìm dòng import cuối cùng để chèn vào sau
lines = c.split('\n')
last_import_idx = -1
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped.startswith('import ') or stripped.startswith('} from '):
        last_import_idx = i

if last_import_idx == -1:
    print("❌ Không tìm thấy dòng import nào. Kiểm tra lại file.")
    exit(1)

# 3. Chèn 2 dòng import mới vào sau dòng import cuối
import_lines = [
    'import { BuffLikeThumbnail } from "./thumbnails/BuffLikeThumbnail";',
    'import { BuffSubThumbnail } from "./thumbnails/BuffSubThumbnail";',
]
for offset, imp in enumerate(import_lines, start=1):
    lines.insert(last_import_idx + offset, imp)

c = '\n'.join(lines)
path.write_text(c, encoding="utf-8")
print(f"✅ Đã chèn 2 dòng import vào sau dòng {last_import_idx + 1}")

# In ra 20 dòng đầu để verify
print("\n--- 15 dòng đầu file sau khi sửa ---")
for i, line in enumerate(c.split('\n')[:15], start=1):
    print(f"{i}: {line}")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
