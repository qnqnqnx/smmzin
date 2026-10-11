import type { ReactNode } from "react";

export type ProhibitedItem = {
  key: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

function LineIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const PROHIBITED_ICONS = {
  politics: (
    <LineIcon>
      <path d="M3 21h18" />
      <path d="M5 21V10l7-5 7 5v11" />
      <path d="M9 21v-6h6v6" />
    </LineIcon>
  ),
  violence: (
    <LineIcon>
      <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" />
    </LineIcon>
  ),
  adult: (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </LineIcon>
  ),
  harassment: (
    <LineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5s1.4-1.5 3.5-1.5 3.5 1.5 3.5 1.5" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </LineIcon>
  ),
  illegal: (
    <LineIcon>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9.5 9.5 5 5" />
      <path d="m14.5 9.5-5 5" />
    </LineIcon>
  ),
  minor: (
    <LineIcon>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 11h5" />
    </LineIcon>
  ),
  selfharm: (
    <LineIcon>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </LineIcon>
  ),
  fraud: (
    <LineIcon>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="15" r="1.2" fill="currentColor" />
    </LineIcon>
  ),
};

export function ProhibitedContentGrid({ items }: { items: ProhibitedItem[] }) {
  return (
    <div className="prohibited-grid">
      {items.map((item) => (
        <article key={item.key} className="prohibited-card">
          <div className="prohibited-icon">{item.icon}</div>
          <h4 className="prohibited-title">{item.title}</h4>
          <p className="prohibited-desc">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}
