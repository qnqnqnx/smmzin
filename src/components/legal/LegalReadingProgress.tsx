"use client";

import { useEffect, useState } from "react";

export default function LegalReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.min(100, (scrolled / total) * 100));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="legal-progress" aria-hidden="true">
      <div className="legal-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
