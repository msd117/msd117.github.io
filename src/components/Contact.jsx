import { useState } from "react";
import resumeData from "../data/resumeData";
import { ArrowRight } from "./Icons";

const empty = { name: "", email: "", message: "" };

const Contact = () => {
  const d = resumeData;
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(d.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(empty);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "The message didn’t go through. Please try again, or email me directly.");
        setStatus("error");
      }
    } catch {
      setError("You seem to be offline. Please try again, or email me directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="contact__glow" aria-hidden="true" />
      <div className="wrap contact__pad">
        <h2 id="contact-h" className="disp contact__title">
          Let’s build
          <br />
          <span>something.</span>
        </h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">Hiring for React, Angular or mobile? Email is the fastest way to reach me.</p>
            <a className="mail-big disp" href={`mailto:${d.email}`}>{d.email}</a>
            <dl className="contact__dl">
              {d.phone && (
                <>
                  <dt>Phone</dt>
                  <dd><a className="dark-link" href={d.phoneHref}>{d.phone}</a></dd>
                </>
              )}
              <dt>Based in</dt>
              <dd>{d.location}</dd>
              <dt>Profiles</dt>
              <dd className="contact__profiles">
                {d.social.map((s) => (
                  <a key={s.name} className="dark-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                ))}
              </dd>
            </dl>
          </div>

          <form className="form" onSubmit={onSubmit} aria-label="Send a message">
            <div className="form__row">
              <div className="field-wrap">
                <label htmlFor="f-name">Name</label>
                <input className="field" id="f-name" name="name" type="text" autoComplete="name" required placeholder="Your name" value={form.name} onChange={onChange} />
              </div>
              <div className="field-wrap">
                <label htmlFor="f-email">Email</label>
                <input className="field" id="f-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" value={form.email} onChange={onChange} />
              </div>
            </div>
            <div className="field-wrap">
              <label htmlFor="f-msg">Message</label>
              <textarea className="field" id="f-msg" name="message" rows="4" required placeholder="The role, the team, or the product you want to build" value={form.message} onChange={onChange} />
            </div>
            <button className="btn btn--hot btn--lg btn--block press" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"} <ArrowRight />
            </button>
            <p className="form__status" role="status" aria-live="polite">
              {status === "sent" && <span className="form__ok">Thanks — your message is on its way. I’ll reply soon.</span>}
              {status === "error" && <span className="form__err">{error}</span>}
            </p>
          </form>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {d.name}</span>
          <span className="mono">Built with React · Hosted on GitHub Pages</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
