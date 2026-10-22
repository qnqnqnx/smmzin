#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 228: Fix Myanmar Data Availability ==="

python - << 'PYEOF'
import re

path = "src/content/countries-data.ts"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Tìm block Myanmar, đổi available thành true và href
# Regex này tìm từ code: "mm" đến href: "#notify"
pattern = r'(code:\s*"mm",[\s\S]*?)available:\s*false([\s\S]*?href:\s*)"#notify"'
replacement = r'\1available: true\2\3"/smm-panel-myanmar"'

new_c, count = re.subn(pattern, replacement, c)

if count > 0:
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_c)
    print("✅ Đã cập nhật Myanmar thành available: true và href: /smm-panel-myanmar")
else:
    # Fallback nếu data đã đổi khác
    if 'code: "mm"' in c:
        print("⚠️ Tìm thấy Myanmar nhưng không khớp cấu trúc. Đang thử ép kiểu trực tiếp...")
        # Xoá false, thêm true
        c = re.sub(r'(code:\s*"mm"[\s\S]*?)available:\s*false', r'\1available: true', c)
        c = re.sub(r'(code:\s*"mm"[\s\S]*?)href:\s*"#notify"', r'\1href: "/smm-panel-myanmar"', c)
        with open(path, "w", encoding="utf-8") as f:
            f.write(c)
        print("✅ Đã sửa bằng fallback.")
    else:
        print("❌ Không tìm thấy code: \"mm\" trong countries-data.ts")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
