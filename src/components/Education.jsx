import resumeData from "../data/resumeData";

const Education = () => (
  <section id="education" className="light" aria-labelledby="edu-h">
    <div className="wrap edu">
      <h2 id="edu-h" className="disp edu__title">Education</h2>
      <div className="edu__list">
        {resumeData.education.map((e) => (
          <div key={e.degree} className="edu__item">
            <p className="mono">{e.period}</p>
            <h3 className="disp">{e.degree}</h3>
            <p>{e.school}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
