import { useState, useEffect, useCallback } from "react";
import resumeData from "../data/resumeData";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = resumeData.navLinks.map((link) => link.href);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="container navbar__inner">
        <a
          className="navbar__logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
        >
          <span className="navbar__logo-text">MSD</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
          {resumeData.navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={`navbar__link ${activeSection === link.href ? "navbar__link--active" : ""}`}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
