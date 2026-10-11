"use client";

import { useEffect, useState } from "react";

export default function BackToTop({ label = "Back to top" }: { label?: string }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? Math.min(1, scrolled / total) : 0;

      setProgress(ratio);
      setVisible(scrolled > 500);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // SVG ring config
  const size = 48;
  const stroke = 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label={label}
      data-visible={visible ? "true" : "false"}
      className="btt"
    >
      {/* Ring progress (SVG) */}
      <svg
        className="btt-ring"
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(233, 241, 236, 0.08)"
          strokeWidth={stroke}
        />
        {/* Progress */}
        <circle
          className="btt-ring-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#btt-gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <defs>
          <linearGradient id="btt-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#cdf0dd" />
            <stop offset="100%" stopColor="#4f7d5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow icon */}
      <span className="btt-arrow" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className="btt-tooltip">{label}</span>
    </button>
  );
}
