import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import resumeData from "../data/resumeData";
import "./Skills.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="skill-bar"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={index}
    >
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__percent">{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: isInView ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            boxShadow: isInView ? `0 0 16px ${skill.color}40` : "none",
          }}
        ></div>
      </div>
    </motion.div>
  );
};

const CircleSkill = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = skill.level;
    const duration = 1500;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, skill.level]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (count / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="circle-skill"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={index}
    >
      <div className="circle-skill__ring">
        <svg width="130" height="130" viewBox="0 0 120 120">
          <circle
            className="circle-skill__bg"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="6"
          />
          <circle
            className="circle-skill__progress"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              stroke: skill.color,
              filter: `drop-shadow(0 0 6px ${skill.color}60)`,
            }}
          />
        </svg>
        <span className="circle-skill__value">{count}%</span>
      </div>
      <span className="circle-skill__name">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skill Bars */}
        <div className="skills__bars-grid">
          {resumeData.skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Circle Skills */}
        <motion.div
          className="skills__more-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h3>More Skills</h3>
        </motion.div>

        <div className="skills__circles-grid">
          {resumeData.moreSkills.map((skill, i) => (
            <CircleSkill key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
