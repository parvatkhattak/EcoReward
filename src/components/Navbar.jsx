import { useState, useEffect } from "react";
import { NAV_LINKS, GOOGLE_FORM_LINK } from "../content";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick("#home")}>
          <span className="navbar__logo-icon">🌿</span>
          <span className="navbar__logo-text">EcoReward</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
            >
              Request Pickup
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          onClick={() => setMenuOpen(false)}
        >
          Request Pickup
        </a>
      </div>
    </nav>
  );
}
