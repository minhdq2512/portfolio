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

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    desc: string
  ) => {
    setHovered(true);
    setTooltip({ x: e.clientX, y: e.clientY, text: desc });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      className="bg-white text-black px-6 md:px-20 min-h-screen flex items-center relative"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Some projects I have contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <div key={index}>
              <div
                className="relative"
                onMouseEnter={(e) => handleMouseEnter(e, proj.desc)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="rounded-lg w-full h-64 object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{proj.title}</h3>
              <a
                href={proj.link}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded transition shadow-lg mt-2"
              >
                Know more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tooltip */}
      {hovered && (
        <div
          className={`fixed z-50 bg-black text-white text-xs px-4 py-2 rounded shadow-md pointer-events-none max-w-xs transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
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
