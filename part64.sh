#!/usr/bin/env bash
set -euo pipefail

python - << 'PYEOF'
path = "src/components/PlatformEcosystem.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

# Đảm bảo import types cần thiết
if 'import type { PlatformItem' not in c:
    c = c.replace(
        'import type { Dictionary } from "@/content/dictionaries";',
        'import type { Dictionary } from "@/content/dictionaries";\nimport type { PlatformItem } from "@/content/platforms";',
        1,
    )
    print("✅ Imported PlatformItem type")

# Fix items.map → có type
old1 = '  const items = dict.platforms.items;'
new1 = '  const items: PlatformItem[] = dict.platforms.items;'

if old1 in c:
    c = c.replace(old1, new1, 1)
    print("✅ items typed as PlatformItem[]")
else:
    print("⚠️ items declaration not found")

with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print("part64 done")
PYEOF