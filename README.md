# 🌿 EcoReward

> **Turn Waste into Worth** — A college campus sustainability event website.

EcoReward is a lightweight, single-page React website for a campus organic-waste collection and reward initiative. Students and campus contributors can request free waste pickups via a Google Form, earn Eco Points, and redeem them for compost, plants, seeds, and eco-friendly products.

🔗 **Live site:** `https://<your-username>.github.io/ecoreward/`

---

## ✨ Features

| Section | Description |
|---|---|
| **Navbar** | Sticky glassmorphism nav, smooth-scroll links, mobile hamburger |
| **Hero** | Animated blobs, floating leaves, orbiting waste icons, stats bar |
| **How It Works** | 4-step visual flow with icon cards |
| **Waste Types** | Color-coded cards for Food, Flower, Vegetable, Fruit, Garden waste |
| **Rewards** | Eco Points-based reward showcase (Compost, Plants, Seeds, Manure, Eco Products) |
| **Leaderboard** | Category-filtered weekly rankings table |
| **Footer** | College info, contact details, social links |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/<your-username>/ecoreward.git
cd ecoreward

# Install
npm install

# Run locally
npm run dev
# → http://localhost:5173
```

---

## ⚙️ Configuration

All site content lives in one file: **[`src/content.js`](src/content.js)**

```js
// Replace with your actual Google Form URL
export const GOOGLE_FORM_LINK = "https://forms.gle/YOUR_FORM_ID";
```

| Variable | What it controls |
|---|---|
| `GOOGLE_FORM_LINK` | All "Request Pickup" buttons |
| `FOOTER.collegeName` | College name in footer & meta tags |
| `LEADERBOARD.data` | Weekly leaderboard entries |
| `REWARDS` | Reward cards and point values |
| `WASTE_TYPES` | Accepted waste categories |

---

## 🏗️ Project Structure

```
src/
├── content.js              ← All site data (edit this!)
├── index.css               ← Global design tokens & shared styles
├── App.jsx
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── HowItWorks.jsx / .css
    ├── WasteTypes.jsx / .css
    ├── RewardsPreview.jsx / .css
    ├── Leaderboard.jsx / .css
    └── Footer.jsx / .css
```

---

## 📦 Deploy to GitHub Pages

Deployment is **fully automated** via GitHub Actions on every push to `main`.

### One-time setup:

1. **Enable GitHub Pages** in your repo:  
   `Settings → Pages → Source → GitHub Actions`

2. **Update the repo name** in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
   ```yaml
   env:
     VITE_BASE_URL: /YOUR-REPO-NAME/
   ```

3. Push to `main` — the workflow builds and deploys automatically.

### Manual deploy (optional):

```bash
npm run build        # builds to /dist
# then push dist/ to gh-pages branch, or use the Actions tab to trigger manually
```

---

## 🛠️ Tech Stack

- **React 19** + **Vite 8** — fast, lightweight build
- **Plain CSS** — no Tailwind, no CSS-in-JS, zero runtime overhead
- **Google Forms** — the only "backend" (no database, no auth, no server)

---

## 📄 License

MIT © Green Valley College of Engineering
