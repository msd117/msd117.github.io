import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Career from "./components/Career";
import AiSection from "./components/AiSection";
import Stack from "./components/Stack";
import Education from "./components/Education";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page">
      <a className="skip" href="#work">Skip to career</a>
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <Career />
        <AiSection />
        <Stack />
        <Education />
        <QuoteOfTheDay />
        <Contact />
      </main>
    </div>
  );
}

export default App;
