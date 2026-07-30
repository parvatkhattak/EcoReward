import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WasteTypes from "./components/WasteTypes";
import RewardsPreview from "./components/RewardsPreview";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WasteTypes />
        <RewardsPreview />
        <Leaderboard />
      </main>
      <Footer />
    </>
  );
}
