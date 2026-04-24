import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import resumeData from "../data/resumeData";
import "./Resume.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const TimelineItem = ({ item, index, type }) => (
  <motion.div
    className="timeline__item"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp}
    custom={index}
  >
    <div className="timeline__marker">
      <div className="timeline__marker-dot"></div>
    </div>
    <div className="timeline__card glass-card">
      <span className="timeline__period">{item.period}</span>
      <h3 className="timeline__title">{type === "education" ? item.degree : item.role}</h3>
      <span className="timeline__subtitle">
        {type === "education" ? item.field : item.company}
      </span>
      <p className="timeline__desc">{item.description}</p>
    </div>
  </motion.div>
);

const Resume = () => {
  return (
    <section id="resume" className="resume section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Education background and professional experience</p>
        </motion.div>

        <div className="resume__grid">
          {/* Education */}
          <div className="resume__column">
            <motion.div
              className="resume__column-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="resume__column-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
            </motion.div>

            <div className="timeline">
              {resumeData.education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} type="education" />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume__column">
            <motion.div
              className="resume__column-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="resume__column-icon resume__column-icon--exp">
                <FaBriefcase />
              </div>
              <h3>Experience</h3>
            </motion.div>

            <div className="timeline">
              {resumeData.experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} type="experience" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
