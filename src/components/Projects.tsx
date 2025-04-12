import transBg from "./../assets/image22.png";
import ponk from "./../assets/image.png";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ESMP - EVENT SALES AND MANAGEMENT PLATFORM",
    desc: "A ReactJS-based event management platform, used Firebase & Postgres for real-time data storage and event tracking.",
    img: transBg,
    link: "https://esmp.id.vn",
  },
  {
    title: "Bonk-Game",
    desc: "UI for card game on website",
    img: ponk,
    link: "https://bonkroyale.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-black px-6 md:px-20 py-24">
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
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded-lg w-full h-64 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold mt-4">{proj.title}</h3>
            <p className="text-gray-600 text-sm mt-2 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded transition shadow-lg"
            >
              Know more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
