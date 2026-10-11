import type { ReactNode } from "react";

type AlertType = "info" | "warning" | "danger";

const CONFIG: Record<
  AlertType,
  { label: string; icon: ReactNode; className: string }
> = {
  info: {
    label: "Note",
    className: "legal-alert-info",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v.01" />
        <path d="M11 12h1v5h1" />
      </svg>
    ),
  },
  warning: {
    label: "Important",
    className: "legal-alert-warning",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  danger: {
    label: "Critical",
    className: "legal-alert-danger",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
  },
};

export function LegalAlert({
  type,
  title,
  children,
}: {
  type: AlertType;
  title?: string;
  children: ReactNode;
}) {
  const config = CONFIG[type];

  return (
    <div className={`legal-alert ${config.className}`}>
      <div className="legal-alert-header">
        <span className="legal-alert-icon">{config.icon}</span>
        <span className="legal-alert-label">{title ?? config.label}</span>
      </div>
      <div className="legal-alert-body">{children}</div>
    </div>
  );
}
