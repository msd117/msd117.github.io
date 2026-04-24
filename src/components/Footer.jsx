import { FaGithub, FaStackOverflow, FaLinkedinIn, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa";
import resumeData from "../data/resumeData";
import "./Footer.css";

const iconMap = {
  FaGithub: FaGithub,
  FaStackOverflow: FaStackOverflow,
  FaLinkedinIn: FaLinkedinIn,
  FaInstagram: FaInstagram,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">MSD</span>
          <span className="footer__logo-dot">.</span>
        </div>

        <div className="footer__social">
          {resumeData.social.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={item.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="footer__copy">
          Made with <FaHeart className="footer__heart" /> by {resumeData.about.name} &copy;{" "}
          {new Date().getFullYear()}
        </p>

        <button
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="scroll-top-btn"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
