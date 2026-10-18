import { useState } from "react";
import resumeData from "../data/resumeData";

// ---- date helpers -------------------------------------------------------
const toMonths = (ym) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};
const now = new Date();
const NOW = now.getFullYear() * 12 + now.getMonth();
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = (ym) => {
  const m = toMonths(ym);
  return `${MONTHS[m % 12]} ${Math.floor(m / 12)}`;
};
const duration = (start, end) => {
  const total = (end ? toMonths(end) : NOW) - toMonths(start) + 1;
  const y = Math.floor(total / 12);
  const mo = total % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, mo && `${mo} mo${mo > 1 ? "s" : ""}`].filter(Boolean).join(" ");
};

// ---- derived layout -----------------------------------------------------
const { experience, currentProject: project, careerStats } = resumeData;
const oldestFirst = [...experience].reverse();
const START = toMonths(oldestFirst[0].start);
const pct = (ym) => ((ym === null ? NOW : toMonths(ym)) - START) / (NOW - START) * 100;

const companies = [...new Set(oldestFirst.map((r) => r.companyShort))];
const mainCompany = companies[companies.length - 1];
const MAIN_Y = 240;
const LANE_GAP = 140;
const BRANCH_Y = 90;
const laneY = (company) => MAIN_Y + (companies.length - 1 - companies.indexOf(company)) * LANE_GAP;
const GRAPH_H = MAIN_Y + (companies.length - 1) * LANE_GAP + 250;

const roles = experience.map((r, iNewest) => {
  const left = pct(r.start);
  const idxOld = oldestFirst.indexOf(r);
  const next = oldestFirst[idxOld + 1];
  const room = (next ? pct(next.start) : 100) - left;
  let placement = "below";
  if (r.end === null) placement = "end";
  else if (r.companyShort !== mainCompany) placement = "lane";
  else if (iNewest === 1) placement = "above";
  return {
    ...r,
    left,
    room,
    y: laneY(r.companyShort),
    placement,
    dates: `${fmt(r.start)} — ${r.end ? fmt(r.end) : "Present"}`,
    length: duration(r.start, r.end),
  };
});

const years = [];
for (let y = Math.floor(START / 12) + 1; y <= now.getFullYear(); y++) years.push(y);

const details = {
  ...Object.fromEntries(roles.map((r) => [r.id, { ...r }])),
  [project.id]: { ...project, dates: project.datesLabel, length: project.lengthLabel },
};

// ---- small pieces -------------------------------------------------------
const chipClass = (t, r) => {
  if (r.hot?.includes(t)) return "chip chip--hot";
  if (["Claude", "Cursor", "Superpowers", "BMAD"].includes(t)) return "chip chip--ai";
  return "chip";
};

const Chips = ({ r, align, max = 99 }) => (
  <div className="chips" style={align ? { justifyContent: align } : undefined}>
    {r.tech
      .filter((t) => r.id !== "sse" || !["Claude", "Cursor"].includes(t))
      .slice(0, max)
      .map((t) => (
        <span key={t} className={chipClass(t, r)}>{t}</span>
      ))}
    {r.domains.slice(-2).map((t) => (
      <span key={t} className="chip chip--domain">{t}</span>
    ))}
  </div>
);

const Node = ({ id, sel, onPick, label, color, size = 22, dashed, style, className = "" }) => (
  <button
    type="button"
    className={`node press ${className}`}
    style={style}
    onClick={() => onPick(id)}
    aria-pressed={sel === id}
    aria-label={label}
  >
    <span
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderStyle: dashed ? "dashed" : "solid",
        background: sel === id ? color : "var(--bg)",
      }}
    />
  </button>
);

// ---- component ----------------------------------------------------------
const Career = () => {
  const [sel, setSel] = useState(roles[0].id);
  const current = details[sel];
  const roleColor = (r) =>
    r.end === null ? "var(--accent)" : r.companyShort === mainCompany ? "var(--text)" : "var(--muted-2)";

  const firstMain = roles.filter((r) => r.companyShort === mainCompany).at(-1);
  const currentRole = roles.find((r) => r.end === null);
  const branchLeft = pct(project.start);

  return (
    <section id="work" className="section" aria-labelledby="work-h">
      <div className="wrap section__pad">
        <div className="section__head">
          <h2 id="work-h" className="h2 disp">
            Nine years of commits. <span className="muted">No gaps.</span>
          </h2>
          <dl className="stats">
            {careerStats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd className="disp">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mono career__cmd">
          $ git log --graph --career <span>· select any commit</span>
        </p>

        {/* Desktop: horizontal git graph */}
        <div className="graph hide-graph">
          <div className="graph__scroll">
            <div className="graph__canvas" style={{ height: GRAPH_H }}>
              <div className="graph__grid" aria-hidden="true">
                {years.map((y) => (
                  <span key={y} style={{ left: `${pct(`${y}-01`)}%` }} />
                ))}
              </div>

              {/* lanes for earlier companies, merging into main */}
              {companies.slice(0, -1).map((c) => {
                const last = roles.filter((r) => r.companyShort === c)[0];
                const end = pct(last.end);
                const y = laneY(c);
                return (
                  <span key={c} aria-hidden="true">
                    <span className="lane bar" style={{ left: 0, top: y - 1, width: `calc(${end}% - 36px)`, background: "var(--muted-2)" }} />
                    <span className="merge" style={{ left: `calc(${end}% - 38px)`, top: MAIN_Y, height: y - MAIN_Y + 2 }} />
                  </span>
                );
              })}
              <span aria-hidden="true" className="lane bar" style={{ left: `${firstMain.left}%`, top: MAIN_Y - 1, width: `${100 - firstMain.left}%`, background: "var(--text)", animationDelay: "200ms" }} />
              <span aria-hidden="true" className="lane lane--hot bar" style={{ left: `${currentRole.left}%`, top: MAIN_Y - 2, width: `${100 - currentRole.left}%`, animationDelay: "500ms" }} />

              {/* feature branch */}
              <span aria-hidden="true" className="branch" style={{ left: `${branchLeft}%`, top: BRANCH_Y, height: MAIN_Y - BRANCH_Y + 2 }} />
              <span aria-hidden="true" className="branch__line" style={{ left: `calc(${branchLeft}% + 38px)`, top: BRANCH_Y }} />

              {/* in-between commits */}
              {roles.filter((r) => r.room > 15).flatMap((r) =>
                [0.38, 0.7].map((f) => (
                  <span
                    key={r.id + f}
                    aria-hidden="true"
                    className="dot"
                    style={{ left: `${r.left + r.room * f}%`, top: r.y - 5, background: roleColor(r) }}
                  />
                ))
              )}

              {/* selectable commits */}
              {roles.map((r) => (
                <Node
                  key={r.id}
                  id={r.id}
                  sel={sel}
                  onPick={setSel}
                  label={`${r.role} at ${r.companyShort}, ${r.dates}`}
                  color={roleColor(r)}
                  size={r.end === null ? 24 : 22}
                  style={{ left: `${r.left}%`, top: r.y - 22 }}
                />
              ))}
              <span aria-hidden="true" className="head" style={{ top: MAIN_Y - 10 }} />
              <Node
                id={project.id}
                sel={sel}
                onPick={setSel}
                label={`Current project: ${project.role}`}
                color="var(--violet)"
                size={20}
                dashed
                className="pulse-b"
                style={{ left: "100%", top: BRANCH_Y - 22 }}
              />

              {/* labels */}
              <div className="glabel glabel--branch">
                <span className="mono pill pill--ai">{project.branch}</span>
                <div className="chips">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="chip chip--ai">{t}</span>
                  ))}
                </div>
              </div>

              {roles.map((r) => {
                const base = { width: `${Math.max(r.room - 3, 18)}%` };
                let style;
                if (r.placement === "end") style = { right: 0, top: MAIN_Y + 30, width: "23%", alignItems: "flex-end", textAlign: "right" };
                else if (r.placement === "above") style = { ...base, left: `calc(${r.left}% - 6px)`, top: MAIN_Y - 136 };
                else if (r.placement === "lane") style = { ...base, left: `${r.left}%`, top: r.y + 28 };
                else style = { ...base, left: `calc(${r.left}% + 22px)`, top: MAIN_Y + 28 };
                return (
                  <div key={r.id} className="glabel" style={style}>
                    {r.placement === "end" ? (
                      <>
                        <span className="mono pill pill--hot">{r.tag}</span>
                        <span className="glabel__role">{r.role}</span>
                        <span className="mono glabel__meta">{r.dates}</span>
                        <Chips r={r} align="flex-end" />
                      </>
                    ) : (
                      <>
                        <span className="mono glabel__meta">{r.tag} · {r.dates}</span>
                        <span className="glabel__role">
                          {r.role}
                          {r.placement !== "above" && <span className="glabel__co"> · {r.companyShort}</span>}
                        </span>
                        <Chips r={r} max={r.placement === "lane" ? 2 : 99} />
                      </>
                    )}
                  </div>
                );
              })}

              <div className="graph__axis mono" aria-hidden="true">
                <span style={{ left: 0 }}>{Math.floor(START / 12)}</span>
                {years.slice(0, -1).map((y) => (
                  <span key={y} style={{ left: `${pct(`${y}-01`)}%`, transform: "translateX(-50%)" }}>{y}</span>
                ))}
                <span className="graph__now" style={{ right: 0 }}>now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phone: vertical git log */}
        <ol className="vlog show-sm">
          <span aria-hidden="true" className="vlog__line" />
          {[{ ...details[project.id], tag: project.branch, color: "var(--violet)", dashed: true }, ...roles.map((r) => ({ ...r, color: roleColor(r) }))].map((r) => (
            <li key={r.id} className="vlog__item">
              <Node id={r.id} sel={sel} onPick={setSel} label={r.role} color={r.color} dashed={r.dashed} style={{ position: "relative" }} />
              <div className="vlog__body">
                <span className="mono glabel__meta" style={r.id === project.id ? { color: "#C3CAFF" } : r.end === null ? { color: "var(--accent-soft)" } : undefined}>
                  {r.tag} · {r.dates}
                </span>
                <span className="glabel__role">
                  {r.role}
                  {r.companyShort && r.end !== null && <span className="glabel__co"> · {r.companyShort}</span>}
                </span>
                {r.id === project.id ? (
                  <div className="chips">
                    {project.tech.slice(0, 3).map((t) => <span key={t} className="chip chip--ai">{t}</span>)}
                  </div>
                ) : (
                  <Chips r={r} />
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="legend">
          <span><i style={{ background: "var(--muted-2)" }} />Softworx</span>
          <span><i style={{ background: "var(--text)" }} />Biz4Solutions</span>
          <span><i className="legend__dash" />Current AI-led project</span>
          <span><b className="chip chip--domain">Domain</b>Business domain</span>
        </div>

        {/* Selected commit */}
        <article className="detail" aria-live="polite">
          <div className="detail__main">
            <p className="mono detail__meta">{current.dates} · {current.length}</p>
            <h3 className="disp detail__role">{current.role}</h3>
            <p className="detail__co">{current.company}</p>
            <p className="detail__text">{current.text}</p>
          </div>
          <div className="detail__side">
            <div>
              <h4 className="detail__label">Technologies</h4>
              <div className="chips chips--lg">
                {current.tech.map((t) => (
                  <span key={t} className="tech-big"><i aria-hidden="true" />{t}</span>
                ))}
              </div>
            </div>
            {current.domains.length > 0 && (
              <div>
                <h4 className="detail__label">Domain</h4>
                <div className="chips chips--lg">
                  {current.domains.map((t) => (
                    <span key={t} className="tech-big tech-big--domain">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Career;
