import avatar from "./../assets/MinhDinh.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Cho phép hiện lại khi scroll tới
    threshold: 0.2, // 20% Hero section vào view là chạy
  });

  return (
    <section
      ref={ref}
      className="bg-black text-white px-6 md:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">
        {/* LEFT - TEXT */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm Minh
          </h1>
          <p className="text-gray-400 mb-8">
            Frontend developer by day, stackoverflow copy-paster by night 🌙
          </p>
          <a
            href="/DinhQuangMinhResume.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg shadow-green-500/30 transition"
          >
            My resume here
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
            className="w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
