import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
