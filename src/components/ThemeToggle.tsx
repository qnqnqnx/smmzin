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
