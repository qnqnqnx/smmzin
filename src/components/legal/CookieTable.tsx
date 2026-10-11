import type { ReactNode } from "react";

export type CookieEntry = {
  name: ReactNode;
  category: "essential" | "analytics" | "preference" | "third-party";
  purpose: ReactNode;
  duration: string;
};

const CATEGORY_LABEL: Record<CookieEntry["category"], string> = {
  essential: "Essential",
  analytics: "Analytics",
  preference: "Preference",
  "third-party": "Third-Party",
};

export function CookieTable({ cookies }: { cookies: CookieEntry[] }) {
  return (
    <div className="cookie-table">
      <div className="cookie-table-head">
        <div className="cookie-table-col">Name</div>
        <div className="cookie-table-col">Category</div>
        <div className="cookie-table-col">Purpose</div>
        <div className="cookie-table-col cookie-table-col-right">Duration</div>
      </div>
      <ul className="cookie-table-body">
        {cookies.map((c, i) => (
          <li key={i} className="cookie-table-row">
            <div className="cookie-table-cell cookie-table-name">
              <code>{c.name}</code>
            </div>
            <div className="cookie-table-cell">
              <span className={`cookie-cat cookie-cat-${c.category}`}>
                {CATEGORY_LABEL[c.category]}
              </span>
            </div>
            <div className="cookie-table-cell cookie-table-purpose">
              {c.purpose}
            </div>
            <div className="cookie-table-cell cookie-table-duration">
              {c.duration}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ------------------------------------------------------------
// Category cards — dùng cho section "Types of cookies"
// ------------------------------------------------------------
export type CookieCategoryCard = {
  key: "essential" | "analytics" | "preference" | "third-party";
  title: string;
  desc: string;
  canDisable: boolean;
  examples: string[];
};

export function CookieCategories({ categories }: { categories: CookieCategoryCard[] }) {
  return (
    <div className="cookie-cats">
      {categories.map((cat) => (
        <div key={cat.key} className={`cookie-cat-card cookie-cat-card-${cat.key}`}>
          <div className="cookie-cat-card-header">
            <h4 className="cookie-cat-card-title">{cat.title}</h4>
            <span
              className={`cookie-cat-status cookie-cat-status-${cat.canDisable ? "off" : "on"}`}
            >
              {cat.canDisable ? "Can disable" : "Always on"}
            </span>
          </div>
          <p className="cookie-cat-card-desc">{cat.desc}</p>
          <ul className="cookie-cat-card-examples">
            {cat.examples.map((ex) => (
              <li key={ex}>{ex}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
