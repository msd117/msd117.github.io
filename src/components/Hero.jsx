import { motion } from "framer-motion";
import {
  FaGithub,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import resumeData from "../data/resumeData";
import "./Hero.css";

const iconMap = {
  FaGithub: FaGithub,
  FaStackOverflow: FaStackOverflow,
  FaLinkedinIn: FaLinkedinIn,
  FaInstagram: FaInstagram,
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I am
          </motion.span>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {resumeData.name}
            <span className="hero__name-accent"> {resumeData.lastName}</span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="hero__role-badge">{resumeData.title}</span>
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {resumeData.tagline}
          </motion.p>

          <motion.div
            className="hero__social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {resumeData.social.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label={item.name}
                  id={`social-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="#contact" className="btn btn--primary" id="hero-contact-btn">
              Get In Touch
            </a>
            <a href="#resume" className="btn btn--outline" id="hero-resume-btn">
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#about" className="hero__scroll-link">
          <span>Scroll Down</span>
          <FaChevronDown className="hero__scroll-icon" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
