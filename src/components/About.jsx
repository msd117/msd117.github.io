import { motion } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaFlag, FaCheckCircle } from "react-icons/fa";
import resumeData from "../data/resumeData";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  const { about } = resumeData;

  const infoItems = [
    { icon: <FaUser />, label: "Name", value: about.name },
    { icon: <FaMapMarkerAlt />, label: "Address", value: about.address },
    { icon: <FaFlag />, label: "Nationality", value: about.nationality },
    { icon: <FaPhone />, label: "Phone", value: about.phone },
    { icon: <FaEnvelope />, label: "Email", value: about.email },
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer crafting modern digital experiences</p>
        </motion.div>

        <div className="about__grid">
          {/* Info Card */}
          <motion.div
            className="about__info-card glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="about__avatar">
              <div className="about__avatar-ring">
                <img src="/me.jpg" alt="Profile" className="about__avatar-img" />
              </div>
            </div>

            <ul className="about__info-list">
              {infoItems.map((item, i) => (
                <li key={i} className="about__info-item">
                  <span className="about__info-icon">{item.icon}</span>
                  <div>
                    <span className="about__info-label">{item.label}</span>
                    <span className="about__info-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Details */}
          <div className="about__details">
            <motion.div
              className="about__block glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={2}
            >
              <h3 className="about__block-title">
                <span className="about__block-dot"></span>
                Objective
              </h3>
              <p className="about__block-text">{about.objective}</p>
            </motion.div>

            <motion.div
              className="about__block glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={3}
            >
              <h3 className="about__block-title">
                <span className="about__block-dot"></span>
                What I Do
              </h3>
              <p className="about__block-text">{about.whatIDo}</p>
              <ul className="about__check-list">
                {about.whatIDoList.map((item, i) => (
                  <li key={i} className="about__check-item">
                    <FaCheckCircle className="about__check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="about__actions"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={4}
            >
              <a href="#contact" className="btn btn--primary" id="about-contact-btn">
                <FaPaperPlane /> Send me a message
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
