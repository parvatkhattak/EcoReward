import { useState } from "react";
import { LEADERBOARD } from "../content";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...LEADERBOARD.categories];

  const filtered =
    activeCategory === "All"
      ? LEADERBOARD.data
      : LEADERBOARD.data.filter((row) => row.category === activeCategory);

  return (
    <section id="leaderboard" className="leaderboard">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-badge">🏆 Weekly Rankings</span>
          <h2 className="section-title">Top Contributors</h2>
          <p className="section-subtitle">
            See who's leading the green charge this week. Could you be next?
          </p>
        </div>

        {/* Category filter pills */}
        <div className="leaderboard__filters" role="tablist">
          {allCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`leaderboard__filter ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="leaderboard__table-wrap">
          <table className="leaderboard__table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Contributor</th>
                <th>Category</th>
                <th>Eco Points</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr
                  key={row.rank}
                  className={`leaderboard__row ${idx < 3 ? `leaderboard__row--top${idx + 1}` : ""}`}
                >
                  <td className="leaderboard__rank">
                    <span className="leaderboard__badge">{row.badge}</span>
                    <span className="leaderboard__rank-num">#{row.rank}</span>
                  </td>
                  <td className="leaderboard__name">{row.name}</td>
                  <td>
                    <span className="leaderboard__cat-chip">{row.category}</span>
                  </td>
                  <td className="leaderboard__points">
                    <span className="leaderboard__points-bar">
                      <span
                        className="leaderboard__points-fill"
                        style={{
                          width: `${(row.points / LEADERBOARD.data[0].points) * 100}%`,
                        }}
                      />
                    </span>
                    <span className="leaderboard__points-num">
                      ⭐ {row.points.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="leaderboard__update">
          🔄 Rankings update every Monday at 9 AM. Last updated: 28 Jul 2025.
        </p>
      </div>
    </section>
  );
}
