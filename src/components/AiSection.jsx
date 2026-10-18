import resumeData from "../data/resumeData";
import { Wrench } from "./Icons";

const AiSection = () => {
  const { ai, currentProject: p } = resumeData;
  return (
    <section id="ai" className="section ai" aria-labelledby="ai-h">
      <div className="ai__glow" aria-hidden="true" />
      <div className="wrap section__pad">
        <div className="section__head">
          <h2 id="ai-h" className="h2 disp">
            {ai.heading} <span className="muted">{ai.headingMuted}</span>
          </h2>
          <p className="section__intro">{ai.intro}</p>
        </div>

        <div className="ai__grid">
          <article className="ai__feature">
            <div className="ai__feature-top">
              <span className="live">
                <span className="caret live__dot" aria-hidden="true" />
                In progress now
              </span>
              <span className="mono ai__where">Biz4Solutions · {p.start.slice(0, 4)}</span>
            </div>
            <div>
              <h3 className="disp h3">Legacy framework → React Native</h3>
              <p className="ai__feature-text">
                Rebuilding an existing app on React Native, with Claude producing the new design and much of the code, and every change reviewed before it lands.
              </p>
            </div>
            <div className="migrate" aria-hidden="true">
              <div className="migrate__old">
                <span className="mono">old_app/</span>
                <i /><i style={{ width: "80%" }} /><i style={{ width: "60%" }} /><i style={{ width: "70%" }} />
              </div>
              <div className="migrate__mid">
                <span className="mono migrate__chip">Claude · design + code</span>
                <svg width="100%" height="14" viewBox="0 0 160 14" preserveAspectRatio="none" fill="none">
                  <path d="M2 7h150" stroke="#7C8CFF" strokeWidth="1.6" strokeDasharray="5 5" />
                  <path d="m148 2 7 5-7 5" stroke="#7C8CFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="migrate__phone">
                <i className="migrate__accent" /><i style={{ height: 36, borderRadius: 8 }} /><i /><i style={{ width: "65%" }} />
              </div>
            </div>
            <div className="chips">
              {["React Native", "Claude", "Cursor", "Superpowers"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </article>

          <div className="ai__side">
            <article className="ai__utils">
              <Wrench />
              <h3 className="disp">{ai.utilities.title}</h3>
              <p>{ai.utilities.text}</p>
            </article>
            <article className="ai__toolkit">
              <h3 className="detail__label">Toolkit</h3>
              <ul>
                {ai.toolkit.map((t) => (
                  <li key={t.name}>
                    <span className="disp">{t.name}</span>
                    <span>{t.use}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="flow">
          <h3 className="detail__label">How a feature moves through my AI workflow</h3>
          <ol>
            {ai.workflow.map((w, i) => (
              <li key={w.step} className={i === ai.workflow.length - 1 ? "flow__ship" : undefined}>
                <span className="mono">{w.step}</span>
                <p>{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
