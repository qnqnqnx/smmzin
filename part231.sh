#!/usr/bin/env bash
cd /d/vocvach/smmzin

echo "=== PART 231: Doc file Footer.tsx bang Python ==="

python -c "
import os

path = 'src/components/Footer.tsx'
if not os.path.exists(path):
    print('❌ File không tồn tại:', path)
    exit()

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('--- Tổng số dòng:', len(lines), '---')
print()

for i, line in enumerate(lines, 1):
    # In ra các dòng có số 12, hoặc chữ countries, hoặc trong khoảng 125-150
    if '12' in line or 'countr' in line.lower() or (125 <= i <= 150):
        print(f'Dòng {i}: {line.rstrip()}')
"
