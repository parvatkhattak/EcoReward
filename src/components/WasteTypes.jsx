import { WASTE_TYPES, GOOGLE_FORM_LINK } from "../content";
import "./WasteTypes.css";

export default function WasteTypes() {
  return (
    <section id="waste-types" className="waste">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">What We Collect</span>
          <h2 className="section-title">Accepted Waste Types</h2>
          <p className="section-subtitle">
            We accept all forms of organic waste — segregated and ready for pickup.
            Every kilogram makes a difference!
          </p>
        </div>

        <div className="waste__grid">
          {WASTE_TYPES.map((waste, idx) => (
            <div
              key={idx}
              className="waste__card"
              style={{ "--bg": waste.color, "--delay": `${idx * 0.08}s` }}
            >
              <div className="waste__icon-bg">
                <span className="waste__icon">{waste.icon}</span>
              </div>
              <p className="waste__label">{waste.label}</p>
              <div className="waste__check">✓ Accepted</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="waste__cta-banner">
          <div className="waste__cta-content">
            <h3>Ready to contribute?</h3>
            <p>Schedule your first free pickup today and start earning Eco Points!</p>
          </div>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            📋 Request Pickup Now
          </a>
        </div>
      </div>
    </section>
  );
}
