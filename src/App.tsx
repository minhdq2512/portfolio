
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import SocialSidebar from "./components/SocialSidebar";
import Navbar from "./components/Navbar";
import CursorTrail from "./components/CursorTrail";

function App() {
  return (
    <div className="font-sans">
        <CursorTrail />
         <SocialSidebar />
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
