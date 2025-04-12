const projects = [
    {
      title: "Project A",
      desc: "Labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore.",
      img: "/projects/project-a.jpg",
      link: "#"
    },
    {
      title: "Project B",
      desc: "Rempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor.",
      img: "/projects/project-b.jpg",
      link: "#"
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="bg-white text-black px-6 md:px-20 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Selected works that show my ability to solve user & business problems with clean, usable interfaces.
          </p>
        </div>
  
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <div key={index}>
              <img src={proj.img} alt={proj.title} className="rounded-lg w-full h-64 object-cover shadow-md" />
              <h3 className="text-xl font-semibold mt-4">{proj.title}</h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">{proj.desc}</p>
              <a
                href={proj.link}
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded transition shadow-lg"
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  