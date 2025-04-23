import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram } from "lucide-react"; // Importing icons from lucide-react
import avatar from "./../assets/MinhDinh.jpg"; // Add your avatar image path here

export default function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: false, // Animation will keep triggering as the section comes in and out of view
  });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gray-900 text-white px-6 md:px-20 py-24 min-h-screen"
    >
      {/* Title */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          A short introduction about who I am and what I do.
        </p>
      </motion.div>

      {/* Content Box */}
      <motion.div
        className="max-w-5xl mx-auto bg-gray-800 text-white rounded-3xl p-12 md:p-16 shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Avatar */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 1 }}
          >
            <img
              src={avatar}
              alt="Me"
              className="w-56 h-56 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
              style={{ objectFit: "cover", width: "600px", height: "224px" }}
            />
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-semibold text-white mb-2">
              Dinh Quang Minh
            </h3>
            <p className="text-xl text-gray-300 mb-4">Frontend Developer / UI Enthusiast</p>

            <p className="text-lg leading-relaxed text-gray-200">
              I’m passionate about building clean and beautiful interfaces that enhance user experience.
              With a background in modern web technologies and a love for minimalism, I strive to create
              impactful digital products.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://www.facebook.com/suggestion1/" // Replace with your Facebook profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/raylightningstar/" // Replace with your Instagram profile link
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
