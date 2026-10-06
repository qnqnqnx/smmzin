#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# 1. Thêm light theme vào cuối globals.css
# ------------------------------------------------------------
cat >> src/app/globals.css << 'EOF'

/* ============================================================
   LIGHT THEME — Sáng
   Bật bằng cách gắn data-theme="light" vào <html>.
   Nút chuyển Sáng/Tối nằm ở Navbar.
   ============================================================ */
html[data-theme="light"] {
  --bg: #f6f8f6;
  --bg-elev: #ffffff;
  --surface: #ffffff;
  --surface-glass: rgba(255, 255, 255, 0.72);

  --primary: #3c6349;
  --primary-strong: #2e4d38;
  --accent: #2f6f47;

  --text: #0e1a14;
  --text-muted: #5a6b62;

  --border: rgba(14, 26, 20, 0.10);
  --border-strong: rgba(14, 26, 20, 0.20);
}

html[data-theme="light"] .ambient {
  background:
    radial-gradient(900px 520px at 12% -8%, rgba(79, 125, 94, 0.14), transparent 62%),
    radial-gradient(760px 460px at 88% 2%, rgba(142, 214, 173, 0.10), transparent 60%),
    radial-gradient(1100px 700px at 50% 108%, rgba(60, 99, 73, 0.10), transparent 66%);
}

html[data-theme="light"] .grid-overlay {
  background-image:
    linear-gradient(to right, rgba(14, 26, 20, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(14, 26, 20, 0.05) 1px, transparent 1px);
}

html[data-theme="light"] .card {
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
  box-shadow: 0 1px 2px rgba(14, 26, 20, 0.04);
}

html[data-theme="light"] .glass {
  background: var(--surface-glass);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  backdrop-filter: blur(18px) saturate(150%);
}

html[data-theme="light"] .btn-primary {
  background: linear-gradient(180deg, #4f7d5e 0%, #2e4d38 100%);
  color: #ffffff;
  border-color: rgba(47, 111, 71, 0.4);
  box-shadow: 0 10px 30px -14px rgba(46, 77, 56, 0.6);
}

html[data-theme="light"] .btn-ghost {
  background: rgba(14, 26, 20, 0.04);
  color: var(--text);
  border-color: var(--border-strong);
}
html[data-theme="light"] .btn-ghost:hover {
  background: rgba(14, 26, 20, 0.08);
}

html[data-theme="light"] .pill {
  background: rgba(14, 26, 20, 0.04);
  color: var(--text);
}

html[data-theme="light"] .orb {
  background:
    radial-gradient(circle at 32% 26%, rgba(142, 214, 173, 0.55), transparent 52%),
    radial-gradient(circle at 72% 78%, rgba(79, 125, 94, 0.65), transparent 58%),
    linear-gradient(155deg, rgba(79, 125, 94, 0.95), rgba(46, 77, 56, 0.98));
  border-color: rgba(14, 26, 20, 0.15);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 60px 140px -50px rgba(47, 111, 71, 0.6);
}

html[data-theme="light"] .ring {
  border-color: rgba(14, 26, 20, 0.12);
}

html[data-theme="light"] .marquee {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

html[data-theme="light"] .eyebrow {
  color: var(--accent);
}
EOF

# ------------------------------------------------------------
# 2. Tạo ThemeToggle component
# ------------------------------------------------------------
cat > src/components/ThemeToggle.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

type Theme = "dark" | "light";

const STORAGE_KEY = "smmzin-theme";

export default function ThemeToggle({
  labelDark,
  labelLight,
}: {
  labelDark: string;
  labelLight: string;
}) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage may be unavailable in private mode — ignore */
    }
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? labelDark : labelLight}
      title={isLight ? labelDark : labelLight}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition-colors hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
    >
      {/* Render placeholder until mounted to avoid hydration mismatch */}
      {!mounted ? (
        <span className="block h-4 w-4 rounded-full bg-current opacity-30" />
      ) : isLight ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>
  );
}
EOF

echo "part15 done"