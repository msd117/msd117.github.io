import resumeData from "../data/resumeData";
import { Check } from "./Icons";

// Small drawings, one per tile. All decorative.
const Art = {
  tree: () => (
    <div className="art art--dark">
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
        <rect x="78" y="8" width="44" height="22" rx="6" stroke="#FF6B35" strokeWidth="1.6" />
        <path d="M100 30v14M40 44h120M40 44v12M100 44v12M160 44v12" stroke="#5A5D63" strokeWidth="1.4" />
        <rect x="18" y="56" width="44" height="22" rx="6" stroke="#F3F3F0" strokeWidth="1.4" />
        <rect x="78" y="56" width="44" height="22" rx="6" stroke="#F3F3F0" strokeWidth="1.4" />
        <rect x="138" y="56" width="44" height="22" rx="6" stroke="#F3F3F0" strokeWidth="1.4" />
        <path d="M100 78v12M84 90h32M84 90v6M116 90v6" stroke="#5A5D63" strokeWidth="1.4" />
        <rect x="70" y="96" width="26" height="16" rx="5" stroke="#8C8F95" strokeWidth="1.3" />
        <rect x="104" y="96" width="26" height="16" rx="5" stroke="#8C8F95" strokeWidth="1.3" />
      </svg>
    </div>
  ),
  window: () => (
    <div className="art art--sand">
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <rect x="10" y="10" width="200" height="100" rx="10" fill="#FFFFFF" stroke="#0B0C0E" strokeWidth="1.4" />
        <path d="M10 28h200" stroke="#0B0C0E" strokeWidth="1.2" />
        <rect x="22" y="40" width="44" height="58" rx="6" fill="#0B0C0E" />
        <rect x="76" y="40" width="122" height="14" rx="4" fill="#E9E8E2" />
        <rect x="76" y="62" width="58" height="36" rx="6" stroke="#FF6B35" strokeWidth="1.6" />
        <rect x="140" y="62" width="58" height="36" rx="6" stroke="#0B0C0E" strokeWidth="1.2" />
        <circle cx="20" cy="19" r="3" fill="#0B0C0E" />
        <circle cx="30" cy="19" r="3" fill="#8A8C88" />
        <circle cx="40" cy="19" r="3" fill="#8A8C88" />
      </svg>
    </div>
  ),
  phones: () => (
    <div className="art art--phones">
      <div className="phone phone--side"><i /><i style={{ height: 34, borderRadius: 8 }} /><i style={{ width: "70%" }} /></div>
      <div className="phone phone--main"><i className="phone__accent" /><i style={{ height: 40, borderRadius: 9 }} /><i /><i style={{ width: "60%" }} /></div>
      <div className="phone phone--side"><i style={{ height: 34, borderRadius: 8 }} /><i /></div>
    </div>
  ),
  grid: () => (
    <div className="art art--sand art--grid">
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <div key={row} className={`gridrow gridrow--${row === 0 ? "head" : row === 2 ? "sel" : "plain"}`}>
          <i /><i /><i /><i />
        </div>
      ))}
    </div>
  ),
  terminal: () => (
    <div className="art art--dark art--term mono">
      <div><span style={{ color: "#FF6B35" }}>$</span> python sync.py</div>
      <div className="dim">fetching records…</div>
      <div className="dim">transforming…</div>
      <div><Check /> <span style={{ color: "#F3F3F0" }}>done</span><span className="caret term__caret" /></div>
    </div>
  ),
  nodes: () => (
    <div className="art art--tint">
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
        <rect x="84" y="42" width="52" height="36" rx="10" fill="#0B0C0E" />
        <path d="M84 60H40M136 60h44M110 42V16M110 78v26" stroke="#0B0C0E" strokeWidth="1.6" strokeDasharray="4 4" />
        <rect x="10" y="48" width="30" height="24" rx="6" stroke="#0B0C0E" strokeWidth="1.6" />
        <rect x="180" y="48" width="30" height="24" rx="6" stroke="#0B0C0E" strokeWidth="1.6" />
        <rect x="96" y="2" width="28" height="14" rx="5" stroke="#0B0C0E" strokeWidth="1.6" />
        <rect x="96" y="104" width="28" height="14" rx="5" stroke="#0B0C0E" strokeWidth="1.6" />
        <circle cx="110" cy="60" r="5" fill="#FF6B35" />
      </svg>
    </div>
  ),
};

const Stack = () => (
  <section id="stack" className="light stack" aria-labelledby="stack-h">
    <div className="wrap section__pad">
      <div className="section__head">
        <h2 id="stack-h" className="h2 disp">
          One engineer. <span className="muted-light">Every screen.</span>
        </h2>
        <p className="section__intro section__intro--light">
          The same product, built for the browser, the phone and the enterprise back office — without handing it between teams.
        </p>
      </div>
      <div className="tiles">
        {resumeData.stack.map((t) => {
          const Drawing = Art[t.art];
          return (
            <article key={t.id} className={`tile tile--${t.tone}`}>
              <div aria-hidden="true"><Drawing /></div>
              <div>
                <h3 className="disp">{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Stack;
