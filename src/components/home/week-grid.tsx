/**
 * The hero's signature: an illustrative advisor week that loops through
 * fill → audit sweep → hand-back → reset. Choreography lives in globals.css (.week-*).
 * This file only describes the week.
 *
 *   c  client work you keep          i  inbox       k  compliance      a  admin
 *   r  admin that is handed back as an open slot ("Yours")
 */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const HOURS = ["8", "9", "10", "11", "12", "1", "2", "3"] as const;

// One string per day, one character per hour.
const WEEK = ["cirakcra", "icarikcr", "cricarki", "ackrcira", "rkciacri"] as const;

const LABEL: Record<string, string> = { c: "Clients", i: "Inbox", k: "Compliance", a: "Admin", r: "Admin" };

export function WeekGrid() {
  return (
    <figure className="week rounded-2xl border border-ink/10 bg-white p-4 sm:p-7 lg:p-8">
      <div className="week-stage" aria-hidden="true">
        <div className="week-grid">
          <div />
          {DAYS.map((d) => (
            <div key={d} className="week-head">
              {d}
            </div>
          ))}

          {HOURS.map((hour, row) => (
            <Row key={hour} hour={hour} row={row} />
          ))}
        </div>

        {/* The audit: a line that sweeps the week and clears what drains it. */}
        <div className="week-scan-track">
          <div className="week-scan" />
        </div>
      </div>

      <figcaption className="mt-5 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.1em] text-slate lg:text-[0.8125rem]">
        <span className="grid" aria-hidden="true">
          <span className="week-cap-before [grid-area:1/1]">An illustrative week: before the audit</span>
          <span className="week-cap-after [grid-area:1/1] text-ember-deep">The same week: after the audit</span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-ember-deep" aria-hidden="true">
          <i className="inline-block size-2.5 rounded-sm border border-ember bg-ember/20" />
          Yours
        </span>
      </figcaption>
      <p className="sr-only">
        An illustrative weekly calendar packed with client work, inbox, compliance and admin blocks. An audit line
        sweeps across the week. The inbox, compliance and admin blocks clear away, leaving client work and open
        slots that belong to you. The animation then repeats.
      </p>
    </figure>
  );
}

function Row({ hour, row }: { hour: string; row: number }) {
  return (
    <>
      <div className="week-time">{hour}</div>
      {WEEK.map((day, col) => {
        const kind = day[row];
        // Cells enter and release left to right, in step with the sweep line.
        const delay = `${(col * 0.35 + row * 0.05).toFixed(2)}s`;
        return (
          <div key={col} className="week-cell" data-kind={kind} style={{ "--d": delay } as React.CSSProperties}>
            <span className="before">{LABEL[kind]}</span>
            {kind === "r" && <span className="after">Yours</span>}
          </div>
        );
      })}
    </>
  );
}
