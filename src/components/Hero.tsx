import avatar from "./../assets/MinhDinh.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import uploadedImage from "./../assets/hero-devices.svg";


export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      <style>
        {`
          @keyframes textAnimation {
            0% { 
              color: #fff;
              letter-spacing: 0.05em;
            }
            50% { 
              color: #6366F1; /* Green */
              letter-spacing: 0.1em;
            }
            100% { 
              color: #fff;
              letter-spacing: 0.05em;
            }
          }

          .animated-text {
            animation: textAnimation 5s infinite;
          }
        `}
      </style>

      <section
        ref={ref}
        className="hero-section bg-gray-900 text-white px-6 md:px-20 min-h-screen flex items-center flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-bg opacity-30 animate-glow"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between w-full relative z-10">
          {/* LEFT - TEXT */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-xl md:text-5xl font-bold mb-4 leading-tight font-retro animated-text"
            >
              Hello, I'm Minh
            </motion.h1>

            <p className="text-gray-400 mb-8 text-md md:text-lg flicker">
              Frontend developer by day,
               stackoverflow copy-paster by night 🌙
            </p>

            <a
              href="/MinhQuangDinh-CV.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 active:scale-95 font-retro"
            >
              My Resume
            </a>
          </motion.div>

          {/* RIGHT - AVATAR */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-60 h-60 rounded-full object-cover border-4 border-indigo-500 shadow-xl hover:shadow-indigo-500 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* SVG IMAGE */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <img
            src={uploadedImage}
            alt="Hero Devices"
            className="mt-14 w-2/5 h-auto rounded-lg shadow-md hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </section>
    </>
  );
}
