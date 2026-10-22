#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 249: Sửa lỗi syntax COUNTRY_VISUALS trong registry.ts ==="

# Bước 1: In ra vùng bị lỗi để kiểm tra
echo "--- 30 dòng quanh vị trí lỗi (175-205) ---"
python -c "
lines = open('src/content/countries/registry.ts', encoding='utf-8').read().split('\n')
for i, line in enumerate(lines[174:205], start=175):
    print(f'{i}: {line}')
"

echo ""
echo "--- Đang sửa ---"

# Bước 2: Sửa bằng Python
python - << 'PYEOF'
from pathlib import Path

path = Path("src/content/countries/registry.ts")
c = path.read_text(encoding="utf-8")

# Sửa các pattern lỗi có thể xảy ra:
# 1. "},\n, \n  laos: {" -> bỏ dấu phẩy thừa
# 2. "},\n  ,\n  laos: {" -> bỏ
# 3. "},, {" -> "}, {"
# 4. "},\n,\n" -> "},\n"
# 5. ",," -> ","

import re

# Trường hợp phổ biến: "},\n  ,\n  laos:"
c = re.sub(r'\},\s*,\s*\n(\s*)laos:', r'},\n\1laos:', c)
# Trường hợp ",," bất kỳ
c = re.sub(r',\s*,', ',', c)
# Trường hợp "}\n,\n" (comma thừa sau })
c = re.sub(r'\}(\s*)\n(\s*),', r'}\1\n\2', c)

# Trường hợp: block Myanmar và Laos bị trùng dấu phẩy
# Pattern: "mm-flag-float",\n  },,\n  laos:" -> "...},\n  laos:"
c = c.replace('},,\n', '},\n')
c = c.replace('},\n,\n', '},\n')

path.write_text(c, encoding="utf-8")
print("✅ Đã sửa các pattern lỗi (trùng dấu phẩy)")

# Verify: kiểm tra xem block laos còn bị lỗi không
c2 = path.read_text(encoding="utf-8")
lines = c2.split('\n')
print("\n--- 25 dòng quanh laos: {} sau khi sửa ---")
for i, line in enumerate(lines):
    if 'laos:' in line:
        start = max(0, i - 5)
        end = min(len(lines), i + 10)
        for j in range(start, end):
            print(f"{j+1}: {lines[j]}")
        break
else:
    print("❌ Không tìm thấy block laos trong file sau khi sửa!")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -15
