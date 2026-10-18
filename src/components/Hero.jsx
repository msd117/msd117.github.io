import resumeData from "../data/resumeData";
import { Mail, Download, SocialIcon } from "./Icons";

const Str = ({ children }) => <span className="code__str">"{children}"</span>;

const List = ({ items }) =>
  items.map((item, i) => (
    <span key={item}>
      <Str>{item}</Str>
      {i < items.length - 1 ? ", " : ""}
    </span>
  ));

// Moves the soft spotlight behind the hero with the pointer (no re-render).
const moveSpot = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Hero = () => {
  const d = resumeData;
  const code = d.profileCode;
  const since = d.experience[d.experience.length - 1].start.slice(0, 4);

  return (
    <section className="hero" onPointerMove={moveSpot} aria-labelledby="name">
      <div className="hero__dots" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />
      <div className="hero__inner wrap">
        <div className="hero__copy rise">
          <div className="hero__pill">
            <img src={d.photo} alt={`Portrait of ${d.name}`} width="32" height="32" />
            <span>
              {d.title} at <strong>{d.company}</strong> · {d.shortLocation}
            </span>
          </div>

          <h1 id="name" className="hero__name disp">
            <span>{d.firstLine}</span>
            <span className="hero__last">
              {d.secondLine}
              <span className="caret hero__caret" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero__lead">
            I build enterprise web and mobile apps — <em>React, Angular and Ext JS</em> in the browser,{" "}
            <em>Ionic, React Native and Sencha Touch</em> on the phone, <em>Python</em> wherever it saves a day — and{" "}
            <em>AI agents</em> in the loop from design to code.
          </p>

          <div className="hero__actions">
            <a className="btn btn--hot btn--lg press" href={`mailto:${d.email}`}>
              <Mail /> Start a conversation
            </a>
            <a className="btn btn--line btn--lg press" href={d.resumePdf}>
              <Download /> Résumé PDF
            </a>
            <div className="hero__social">
              {d.social.map((s) => (
                <a key={s.name} className="icon-btn press" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__card-wrap">
          <figure className="code float" aria-label="Profile summary written as code">
            <div className="code__bar">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span className="mono code__file">engineer.ts</span>
            </div>
            <pre className="mono code__body">
              <span className="code__comment">// nine years, still shipping</span>
              {"\n"}
              <span className="code__kw">export const</span> <span className="code__id">engineer</span> = {"{\n"}
              {"  name: "}<Str>{d.name}</Str>,{"\n"}
              {"  role: "}<Str>{d.title}</Str>,{"\n"}
              {"  since: "}<span className="code__num">{since}</span>,{"\n"}
              {"  web: ["}<List items={code.web} />],{"\n"}
              {"  mobile: ["}<List items={code.mobile} />],{"\n"}
              {"  scripting: ["}<List items={code.scripting} />],{"\n"}
              {"  ai: ["}<List items={code.ai} />],{"\n"}
              {"  based: "}<Str>{`${d.shortLocation}, IN`}</Str>,{"\n"}
              {"};"}
              <span className="caret code__caret" aria-hidden="true" />
            </pre>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
