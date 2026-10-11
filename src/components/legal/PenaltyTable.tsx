export type PenaltyRow = {
  violation: string;
  firstOffense: string;
  repeat: string;
  severity: "low" | "medium" | "high" | "critical";
};

const SEVERITY_LABEL = {
  low: "Low",
  medium: "Medium",
  high: "High",
  critical: "Critical",
};

export function PenaltyTable({ rows }: { rows: PenaltyRow[] }) {
  return (
    <div className="penalty-table">
      <div className="penalty-table-head">
        <div className="penalty-table-col">Violation</div>
        <div className="penalty-table-col">First offense</div>
        <div className="penalty-table-col">Repeat offense</div>
        <div className="penalty-table-col penalty-table-col-right">Severity</div>
      </div>
      <ul className="penalty-table-body">
        {rows.map((row, i) => (
          <li key={i} className="penalty-table-row">
            <div className="penalty-table-cell penalty-table-violation">
              {row.violation}
            </div>
            <div className="penalty-table-cell">{row.firstOffense}</div>
            <div className="penalty-table-cell">{row.repeat}</div>
            <div className="penalty-table-cell penalty-table-severity-cell">
              <span className={`penalty-sev penalty-sev-${row.severity}`}>
                {SEVERITY_LABEL[row.severity]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
