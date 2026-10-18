import resumeData from "../data/resumeData";
import { ArrowUpRight } from "./Icons";

const Navbar = () => (
  <header className="nav">
    <nav aria-label="Primary" className="nav__inner wrap">
      <a href="#top" className="nav__brand">
        <span aria-hidden="true" className="nav__badge mono">&lt;msd/&gt;</span>
        <span className="hide-sm">{resumeData.name}</span>
      </a>
      <div className="nav__right">
        <div className="nav__links hide-sm">
          {resumeData.navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="btn btn--hot btn--sm press" href={`mailto:${resumeData.email}`}>
          Hire me <ArrowUpRight />
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
