import type { ReactNode } from "react";

export type RefundScenario = {
  scenario: ReactNode;
  eligible: "yes" | "no" | "partial";
  outcome: ReactNode;
};

export function RefundTable({ scenarios }: { scenarios: RefundScenario[] }) {
  return (
    <div className="refund-table">
      <div className="refund-table-head">
        <div className="refund-table-col">Scenario</div>
        <div className="refund-table-col refund-table-col-center">Eligibility</div>
        <div className="refund-table-col">Outcome</div>
      </div>
      <ul className="refund-table-body">
        {scenarios.map((row, i) => (
          <li key={i} className="refund-table-row">
            <div className="refund-table-cell refund-table-scenario">
              {row.scenario}
            </div>
            <div className="refund-table-cell refund-table-eligible">
              <EligibilityBadge status={row.eligible} />
            </div>
            <div className="refund-table-cell refund-table-outcome">
              {row.outcome}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EligibilityBadge({ status }: { status: "yes" | "no" | "partial" }) {
  const config = {
    yes: { label: "Yes", className: "refund-badge-yes" },
    no: { label: "No", className: "refund-badge-no" },
    partial: { label: "Partial", className: "refund-badge-partial" },
  }[status];

  return (
    <span className={`refund-badge ${config.className}`}>
      <span className="refund-badge-dot" />
      {config.label}
    </span>
  );
}
