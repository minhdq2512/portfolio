import { FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "HTML / CSS / Javascript", value: 80 },
  { name: "ReactJS", value: 85 },
  { name: "Nodejs", value: 30 },
  { name: "Tester", value: 50 },
];

const languages = [{ name: "US English", value: 60 }];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white px-6 md:px-20 py-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
    {/* LEFT - skills */}
    <div>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      {skills.map((skill, i) => (
        <div key={i} className="mb-6">
          <p className="font-bold mb-1">{skill.name}</p>
          <div className="w-full h-2 bg-gray-700 rounded">
            <div
              className="h-full rounded bg-indigo-500"
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
        </div>
      ))}

      <h2 className="text-3xl font-bold mt-10 mb-6">Languages</h2>
      {languages.map((lang, i) => (
        <div key={i} className="mb-6">
          <p className="font-bold text-sm mb-1">{lang.name}</p>
          <div className="w-full h-2 bg-gray-700 rounded">
            <div
              className="h-full rounded bg-indigo-500"
              style={{ width: `${lang.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT - Icon stack */}
    <div className="flex flex-wrap justify-center gap-8 text-5xl text-indigo-400">
      <FaReact className="hover:text-cyan-400 transition" />
      <FaJs className="hover:text-yellow-400 transition" />
      <FaNodeJs className="hover:text-green-400 transition" />
      <FaGitAlt className="hover:text-orange-400 transition" />
    </div>
  </div>
</section>

  );
}
