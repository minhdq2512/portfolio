import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transBg from "./../assets/image22.png";
import ponk from "./../assets/image.png";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ESMP - EVENT SALES AND MANAGEMENT PLATFORM",
    desc: "A ReactJS-based event management platform that uses Firebase and Postgres for real-time data and image storage. Includes an automated payment confirmation system integrated with Cassio, and a fully hand-coded event map design.",
    img: transBg,
    link: "https://esmp.id.vn",
  },
  {
    title: "Bonk-Game",
    desc: "UI for card game on website (TS)",
    img: ponk,
    link: "https://bonkroyale.com/",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(false);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, text: "" });

  const handleMouseEnter = (e, desc) => {
    setHovered(true);
    setTooltip({ x: e.clientX, y: e.clientY, text: desc });
  };

  const handleMouseMove = (e) => {
    const tooltipWidth = 250;
    const maxLeft = window.innerWidth - tooltipWidth - 20;
    setTooltip((prev) => ({
      ...prev,
      x: Math.min(e.clientX, maxLeft),
      y: e.clientY,
    }));
  };

  const handleMouseLeave = () => setHovered(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-gray-900 text-white px-6 md:px-20 py-24 min-h-screen"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100">Projects</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Some projects I have contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
              onMouseEnter={(e) => handleMouseEnter(e, proj.desc)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image with overlay */}
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl text-white font-semibold">{proj.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-80">
                <a
                  href={proj.link}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded transition shadow-lg"
                >
                  Know more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tooltip */}
      {hovered && (
        <div
          className={`fixed z-50 bg-black text-white text-xs px-4 py-2 rounded shadow-md pointer-events-none max-w-xs transition-opacity duration-300 opacity-100`}
          style={{
            top: tooltip.y + 10,
            left: tooltip.x + 10,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
