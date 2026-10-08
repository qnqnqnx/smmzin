#!/usr/bin/env python3
"""
Validate country data.
Khong dung emoji de tranh UnicodeEncodeError tren Windows (cp1252).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
errors = []


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


# ============================================================
# Parse countries-data.ts
# ============================================================
print("[1/6] Parsing countries-data.ts...")
data_text = read("src/content/countries-data.ts")

entries = []
for m in re.finditer(
    r"\{\s*"
    r'code:\s*"(?P<code>[a-z]{2})",\s*'
    r'slug:\s*"(?P<slug>[a-z-]+)",\s*'
    r"[\s\S]*?"
    r"available:\s*(?P<avail>true|false),\s*"
    r'href:\s*"(?P<href>[^"]+)",\s*'
    r'region:\s*"(?P<region>[a-z-]+)",',
    data_text,
):
    entries.append(m.groupdict())

print(f"      Found {len(entries)} entries")

# Unique code
codes = [e["code"] for e in entries]
dup_codes = sorted({c for c in codes if codes.count(c) > 1})
if dup_codes:
    errors.append(f"Duplicate codes: {', '.join(dup_codes)}")

# Unique slug
slugs = [e["slug"] for e in entries]
dup_slugs = sorted({s for s in slugs if slugs.count(s) > 1})
if dup_slugs:
    errors.append(f"Duplicate slugs: {', '.join(dup_slugs)}")

# ============================================================
# href <-> slug
# ============================================================
print("[2/6] Checking href <-> slug match...")
for e in entries:
    if e["avail"] == "true" and e["href"] != "#notify":
        expected = f"/smm-panel-{e['slug']}"
        if e["href"] != expected:
            errors.append(
                f'Code={e["code"]}: href="{e["href"]}" but expected "{expected}"'
            )

# ============================================================
# Registry consistency
# ============================================================
print("[3/6] Checking registry consistency...")
registry_text = read("src/content/countries/registry.ts")
available = [e for e in entries if e["avail"] == "true"]

for e in available:
    slug = e["slug"]
    # Cho phép cả 2 dạng: "slug": data HOẶC slug: data (không ngoặc kép)
    pattern = rf'["\']?{re.escape(slug)}["\']?\s*:'
    if not re.search(pattern, registry_text):
        errors.append(f'Registry missing data for: {slug}')

# ============================================================
# Data files
# ============================================================
print("[4/6] Checking data files...")
for e in available:
    slug = e["slug"]
    path = ROOT / f"src/content/countries/{slug}.ts"
    if not path.exists():
        errors.append(f"Missing data file: {path.relative_to(ROOT)}")

# ============================================================
# Visual files
# ============================================================
print("[5/6] Checking visual files...")
for e in available:
    slug = e["slug"]
    pascal = "".join(w.capitalize() for w in slug.split("-"))
    path = ROOT / f"src/components/country/visuals/{pascal}Visual.tsx"
    if not path.exists():
        errors.append(f"Missing visual file: {path.relative_to(ROOT)}")

# ============================================================
# Page files
# ============================================================
print("[6/6] Checking page files...")
for e in available:
    slug = e["slug"]
    path = ROOT / f"src/app/smm-panel-{slug}/page.tsx"
    if not path.exists():
        errors.append(f"Missing page: {path.relative_to(ROOT)}")

# ============================================================
# Result
# ============================================================
print()
if errors:
    print(f"FAIL: {len(errors)} error(s) found")
    for err in errors:
        print(f"   - {err}")
    sys.exit(1)

print(f"OK: all country data valid ({len(available)} available, {len(entries) - len(available)} coming soon)")
sys.exit(0)
