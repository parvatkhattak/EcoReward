import { REWARDS } from "../content";
import "./RewardsPreview.css";

export default function RewardsPreview() {
  return (
    <section id="rewards" className="rewards">
      {/* Background decoration */}
      <div className="rewards__bg-leaf" aria-hidden="true">🌿</div>

      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">Green Incentives</span>
          <h2 className="section-title">Rewards Preview</h2>
          <p className="section-subtitle">
            Redeem your Eco Points for sustainable goodies. The more you contribute, the more you earn!
          </p>
        </div>

        <div className="rewards__grid">
          {REWARDS.map((reward, idx) => (
            <div
              key={idx}
              className={`rewards__card ${idx === 0 ? "rewards__card--featured" : ""}`}
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              {reward.tag && (
                <div className={`rewards__tag rewards__tag--${reward.tag.toLowerCase().replace(/\s/g, "-")}`}>
                  {reward.tag}
                </div>
              )}
              <div className="rewards__icon">{reward.icon}</div>
              <h3 className="rewards__card-title">{reward.title}</h3>
              <p className="rewards__desc">{reward.description}</p>
              <div className="rewards__points-chip">
                <span className="rewards__points-icon">⭐</span>
                {reward.points}
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="rewards__note">
          <span>ℹ️</span>
          <p>
            Rewards are distributed at the campus sustainability fair. Points are tracked weekly —
            earn more by contributing consistently!
          </p>
        </div>
      </div>
    </section>
  );
}
