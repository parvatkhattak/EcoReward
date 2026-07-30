import { FOOTER, GOOGLE_FORM_LINK } from "../content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand column */}
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">🌿</span>
            <span>EcoReward</span>
          </div>
          <p className="footer__brand-tagline">Turn Waste into Worth</p>
          <p className="footer__brand-desc">{FOOTER.tagline}</p>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            📋 Request Pickup
          </a>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Quick Links</h4>
          <ul className="footer__links">
            {[
              { label: "Home", href: "#home" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Rewards", href: "#rewards" },
              { label: "Leaderboard", href: "#leaderboard" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Contact Us</h4>
          <ul className="footer__contact">
            <li>
              <span>🏫</span>
              <span>{FOOTER.collegeName}</span>
            </li>
            <li>
              <span>📧</span>
              <a href={`mailto:${FOOTER.contact.email}`} className="footer__link">
                {FOOTER.contact.email}
              </a>
            </li>
            <li>
              <span>📞</span>
              <a href={`tel:${FOOTER.contact.phone}`} className="footer__link">
                {FOOTER.contact.phone}
              </a>
            </li>
            <li>
              <span>📍</span>
              <span>{FOOTER.contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Follow Us</h4>
          <div className="footer__social">
            {FOOTER.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label={s.label}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>
          © {year} EcoReward · {FOOTER.collegeName}. All rights reserved.
        </p>
        <p className="footer__bottom-right">
          Made with 💚 for a greener campus
        </p>
      </div>
    </footer>
  );
}
