import { HOW_IT_WORKS } from "../content";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Four easy steps to turn your waste into eco-rewards — and help keep our campus green.
          </p>
        </div>

        <div className="how__steps">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={idx} className="how__step" style={{ "--delay": `${idx * 0.1}s` }}>
              <div className="how__connector" aria-hidden="true" />
              <div className="how__icon-wrap">
                <span className="how__step-num">{item.step}</span>
                <span className="how__icon">{item.icon}</span>
              </div>
              <h3 className="how__step-title">{item.title}</h3>
              <p className="how__step-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline connector (desktop only) */}
        <div className="how__timeline" aria-hidden="true">
          <div className="how__timeline-line" />
        </div>
      </div>
    </section>
  );
}
