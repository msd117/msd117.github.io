import resumeData from "../data/resumeData";
import { Spark } from "./Icons";

const Row = () => (
  <span className="marquee__row">
    {resumeData.marquee.map((name, i) => (
      <span key={name} className="marquee__item">
        <span className={i % 2 ? "marquee__outline" : undefined}>{name}</span>
        <span className="marquee__spark">
          <Spark />
        </span>
      </span>
    ))}
  </span>
);

const Marquee = () => (
  <section className="marquee" aria-label="Technologies">
    <p className="sr-only">{resumeData.marquee.join(", ")}</p>
    <div className="marquee__track disp" aria-hidden="true">
      <Row />
      <Row />
    </div>
  </section>
);

export default Marquee;
