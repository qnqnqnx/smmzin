#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 236: Fix dứt điểm file countries-data.ts ==="

python - << 'PYEOF'
import re
from pathlib import Path

path = Path("src/content/countries-data.ts")
if not path.exists():
    print("❌ Không tìm thấy file countries-data.ts")
    exit(1)

c = path.read_text(encoding="utf-8")

# Tìm khối code của Myanmar bằng Regex an toàn
# Nó sẽ tìm từ { cho đến } có chứa code: "mm"
pattern = r'(\{\s*code:\s*"mm"[\s\S]*?\})'
match = re.search(pattern, c)

if match:
    old_block = match.group(1)
    print("--- ĐOẠN CODE MYANMAR TRƯỚC KHI SỬA ---")
    print(old_block)
    
    # Sửa đổi
    new_block = old_block.replace('available: false', 'available: true')
    new_block = new_block.replace('href: "#notify"', 'href: "/smm-panel-myanmar"')
    new_block = new_block.replace("href: '#notify'", 'href: "/smm-panel-myanmar"')
    
    # Ghi đè lại vào file
    c = c.replace(old_block, new_block)
    path.write_text(c, encoding="utf-8")
    
    print("\n--- ĐOẠN CODE MYANMAR SAU KHI SỬA ---")
    print(new_block)
    print("\n✅ Đã cập nhật thành công file countries-data.ts")
else:
    print("❌ Không tìm thấy khối code: \"mm\" trong countries-data.ts.")
    print("Có thể cấu trúc đã thay đổi. Hãy kiểm tra lại.")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
