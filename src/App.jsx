import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <QuoteOfTheDay />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
