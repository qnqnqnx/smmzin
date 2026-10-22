#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 233: XUAT CAU TRUC THU MUC DU AN ==="
echo ""

python - << 'PYEOF'
import os

def print_tree(startpath, max_depth=3, prefix=''):
    if not os.path.exists(startpath):
        return
    
    try:
        items = sorted(os.listdir(startpath), key=lambda x: (not os.path.isdir(os.path.join(startpath, x)), x))
    except PermissionError:
        return

    for i, item in enumerate(items):
        if item in ['node_modules', '.next', '.git', '.DS_Store', 'out', 'build']:
            continue
            
        path = os.path.join(startpath, item)
        is_last = (i == len(items) - 1)
        connector = '└── ' if is_last else '├── '
        
        print(f'{prefix}{connector}{item}')
        
        if os.path.isdir(path) and max_depth > 0:
            new_prefix = prefix + ('    ' if is_last else '│   ')
            print_tree(path, max_depth - 1, new_prefix)

print("[ THU MUC GOC ROOT ]")
print_tree('.', max_depth=1) # Chi xem cac file/thu muc goc
print("\n[ THU MUC SRC CHI TIET ]")
print_tree('src', max_depth=4) # Xem sau vao src
PYEOF

echo ""
echo "=== XONG ==="
