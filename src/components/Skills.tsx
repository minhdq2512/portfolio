
import { SiFigma, SiMysql, SiJira } from "react-icons/si"; // New icons for Figma, SQL, and Jira
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML / CSS / Javascript", value: 80 },
  { name: "ReactJS", value: 85 },
  { name: "Nodejs", value: 60 },
  { name: "Git", value: 80 },
];

const languages = [{ name: "US English", value: 80 }];

const tools = [
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "SQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Jira", icon: <SiJira />, color: "#0052CC" },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-gray-900 text-white px-6 md:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center">
        {/* LEFT - Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="col-span-2"
        >
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
                <p className="font-semibold mb-2">{skill.name}</p>
                <div className="w-full h-2 bg-gray-600 rounded">
                  <div
                    className="h-full rounded bg-indigo-500"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mt-10 mb-6 text-center md:text-left">Languages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((lang, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
                <p className="font-semibold mb-2">{lang.name}</p>
                <div className="w-full h-2 bg-gray-600 rounded">
                  <div
                    className="h-full rounded bg-indigo-500"
                    style={{ width: `${lang.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Tools */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-5xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex justify-center items-center w-24 h-24 hover:scale-110 transition-all"
              style={{ backgroundColor: tool.color }}
              whileHover={{ scale: 1.1 }}
            >
              {tool.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
