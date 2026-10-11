"use client";

import { useEffect, useState } from "react";

type TocSection = { id: string; heading: string };

export default function LegalToc({
  sections,
  contactEmail,
}: {
  sections: TocSection[];
  contactEmail: string;
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    // Track element đang chiếm viewport cao nhất (gần 30% từ trên)
    const observer = new IntersectionObserver(
      (entries) => {
        // Chọn entry có intersectionRatio cao nhất đang visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Cập nhật URL không nhảy
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <div className="legal-toc-inner">
      <p className="legal-toc-title">On this page</p>

      <nav aria-label="Table of contents">
        <ol className="legal-toc-list">
          {sections.map((section, i) => {
            const isActive = section.id === activeId;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`legal-toc-link ${isActive ? "is-active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="legal-toc-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="legal-toc-label">{section.heading}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="legal-toc-help">
        <div className="legal-toc-help-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.5v.2" />
            <circle cx="12" cy="17" r="0.6" fill="currentColor" />
          </svg>
        </div>
        <div>
          <p className="legal-toc-help-title">Need help?</p>
          <p className="legal-toc-help-text">
            Reach out at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
