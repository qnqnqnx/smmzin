#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# 1. Countdown — thêm variant "orb"
# ------------------------------------------------------------
cat > src/components/Countdown.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/content/site.config";
import { getRemainingMs, pad, splitRemaining } from "@/lib/countdown";

type Labels = {
  label: string;
  hours: string;
  minutes: string;
  seconds: string;
  note?: string;
};

export default function Countdown({
  labels,
  initialMs,
  variant = "card",
}: {
  labels: Labels;
  initialMs: number;
  variant?: "card" | "orb";
}) {
  const [remaining, setRemaining] = useState(initialMs);

  useEffect(() => {
    const tick = () => setRemaining(getRemainingMs(SITE_CONFIG.countdown));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const { hours, minutes, seconds } = splitRemaining(remaining);

  const cells = [
    { value: pad(hours), unit: labels.hours },
    { value: pad(minutes), unit: labels.minutes },
    { value: pad(seconds), unit: labels.seconds },
  ];

  // ---------- Variant: hiển thị bên trong hình tròn ----------
  if (variant === "orb") {
    return (
      <div className="mt-5 flex items-end justify-center gap-1 sm:gap-2" role="timer" aria-live="off">
        {cells.map((cell, index) => (
          <div key={cell.unit} className="flex items-end gap-1 sm:gap-2">
            <div className="min-w-[56px] text-center sm:min-w-[68px]">
              <div className="font-mono text-[40px] font-medium leading-none tabular-nums tracking-tight text-white sm:text-[54px]">
                {cell.value}
              </div>
              <div className="mt-2 text-[8.5px] font-medium uppercase tracking-[0.22em] text-white/60 sm:text-[9.5px]">
                {cell.unit}
              </div>
            </div>
            {index < cells.length - 1 && (
              <span className="pb-8 text-[22px] leading-none text-white/40 sm:text-[28px]">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // ---------- Variant mặc định: khung glass (giữ để tái sử dụng) ----------
  return (
    <div className="glass rounded-[22px] p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">{labels.label}</p>
          {labels.note && (
            <p className="mt-1.5 text-[12.5px] text-[color:var(--text-muted)]">{labels.note}</p>
          )}
        </div>

        <div className="flex items-center gap-2" role="timer" aria-live="off">
          {cells.map((cell, index) => (
            <div key={cell.unit} className="flex items-center gap-2">
              <div className="min-w-[68px] rounded-2xl border border-[color:var(--border)] bg-white/[0.035] px-3 py-2.5 text-center sm:min-w-[80px]">
                <span className="block font-mono text-[26px] font-medium leading-none tabular-nums tracking-tight sm:text-[30px]">
                  {cell.value}
                </span>
                <span className="mt-1.5 block text-[9.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--text-muted)]">
                  {cell.unit}
                </span>
              </div>
              {index < cells.length - 1 && (
                <span className="pb-5 text-[20px] leading-none text-[color:var(--text-muted)] opacity-50">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF

# ------------------------------------------------------------
# 2. Hero — redesign với countdown bên trong orb
# ------------------------------------------------------------
cat > src/components/Hero.tsx << 'EOF'
import type { Dictionary } from "@/content/dictionaries";
import Countdown from "./Countdown";
import { ArrowRight } from "./Icons";

export default function Hero({ dict, initialMs }: { dict: Dictionary; initialMs: number }) {
  return (
    <section id="home" className="relative overflow-hidden pt-[calc(var(--nav-h)+48px)] pb-14 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay" aria-hidden="true" />

      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div>
            <h1 className="text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[60px]">
              {dict.hero.title}
            </h1>

            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[17px]">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#notify" className="btn btn-primary">
                {dict.common.notifyMe}
                <ArrowRight size={17} />
              </a>
              <a href="#about" className="btn btn-ghost">
                {dict.common.explore}
              </a>
            </div>
          </div>

          {/* ---------------- Right: orb + countdown ---------------- */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-square">
              <div className="ring inset-[-14%]" />
              <div className="ring inset-[-4%]" />

              <div className="orb float-slow">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                  {/* Badge SẮP RA MẮT */}
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8ed6ad] shadow-[0_0_0_3px_rgba(142,214,173,0.25)]" />
                    {dict.hero.badge}
                  </span>

                  {/* Đồng hồ */}
                  <Countdown
                    variant="orb"
                    initialMs={initialMs}
                    labels={{
                      label: dict.hero.countdownLabel,
                      hours: dict.hero.hours,
                      minutes: dict.hero.minutes,
                      seconds: dict.hero.seconds,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

# ------------------------------------------------------------
# 3. Dictionaries — bỏ 2 key không dùng (note, countdownNote)
# ------------------------------------------------------------
python - << 'PYEOF'
path = "src/content/dictionaries.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Xóa dòng note và countdownNote (VI)
content = content.replace(
    '    note: "Dành cho creators, agency và thương hiệu.",\n',
    "",
)
content = content.replace(
    '    countdownNote: "Đồng hồ đặt lại mỗi ngày lúc 00:00 (GMT+7).",\n',
    "",
)

# Xóa dòng note và countdownNote (EN)
content = content.replace(
    '    note: "Built for creators, agencies and brands.",\n',
    "",
)
content = content.replace(
    '    countdownNote: "Resets daily at 00:00 (GMT+7).",\n',
    "",
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Dictionaries cleaned")
PYEOF

# ------------------------------------------------------------
# 4. CSS — tăng z-index cho nội dung trong orb + sửa light theme
# ------------------------------------------------------------
cat >> src/app/globals.css << 'EOF'

/* Đảm bảo nội dung trong orb nằm trên hiệu ứng gradient */
html[data-theme="light"] .orb {
  background:
    radial-gradient(circle at 32% 26%, rgba(79, 125, 94, 0.85), transparent 52%),
    radial-gradient(circle at 72% 78%, rgba(46, 77, 56, 0.95), transparent 58%),
    linear-gradient(155deg, #2e4d38, #14251c);
}

/* Badge trong orb luôn dùng chữ trắng bất kể theme */
html[data-theme="light"] .orb .pill-inline {
  color: #ffffff;
}
EOF

echo "part17 done"