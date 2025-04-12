import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
