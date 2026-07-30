import { HERO, GOOGLE_FORM_LINK } from "../content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      {/* Floating leaf particles */}
      {[...Array(6)].map((_, i) => (
        <span key={i} className={`hero__leaf hero__leaf--${i + 1}`} aria-hidden="true">
          🍃
        </span>
      ))}

      <div className="hero__content">
        <div className="hero__badge">
          <span>🌱</span> Campus Sustainability Initiative 2025
        </div>

        <h1 className="hero__title">
          <span className="hero__title-eco">Eco</span>
          <span className="hero__title-reward">Reward</span>
        </h1>

        <p className="hero__tagline">{HERO.tagline}</p>

        <p className="hero__desc">{HERO.description}</p>

        <div className="hero__actions">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg hero__cta"
          >
            <span>📋</span> {HERO.ctaLabel}
          </a>
          <button
            className="btn btn--outline btn--lg"
            onClick={() =>
              document
                .querySelector("#how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More ↓
          </button>
        </div>

        {/* Stats bar */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">2.4T</span>
            <span className="hero__stat-label">Waste Collected</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">380+</span>
            <span className="hero__stat-label">Active Contributors</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">1.2K</span>
            <span className="hero__stat-label">Rewards Redeemed</span>
          </div>
        </div>
      </div>

      {/* Hero visual */}
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__circle hero__circle--outer">
          <div className="hero__circle hero__circle--mid">
            <div className="hero__circle hero__circle--inner">
              <span className="hero__center-icon">♻️</span>
            </div>
          </div>
        </div>
        <div className="hero__orbit hero__orbit--1">🌿</div>
        <div className="hero__orbit hero__orbit--2">🍎</div>
        <div className="hero__orbit hero__orbit--3">🌸</div>
        <div className="hero__orbit hero__orbit--4">🥦</div>
      </div>
    </section>
  );
}
