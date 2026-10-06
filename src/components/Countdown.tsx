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

  // ---------- Variant: bên trong hình tròn ----------
  if (variant === "orb") {
    return (
      <div className="mt-5 flex items-end justify-center gap-1 sm:gap-2" role="timer" aria-live="off">
        {cells.map((cell, index) => (
          <div key={cell.unit} className="flex items-end gap-1 sm:gap-2">
            <div className="min-w-[56px] text-center sm:min-w-[68px]">
              <div className="font-mono text-[40px] font-medium leading-none tabular-nums tracking-tight text-white sm:text-[54px]">
                {/* key thay đổi khi giá trị đổi → React remount → animation chạy lại */}
                <span key={cell.value} className="countdown-digit">
                  {cell.value}
                </span>
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

  // ---------- Variant mặc định ----------
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
                  <span key={cell.value} className="countdown-digit">
                    {cell.value}
                  </span>
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
