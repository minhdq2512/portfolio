import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="about"
      className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-100 via-white to-pink-100 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-5xl font-bold mb-6 text-gray-800"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Tuan Anh
          </span>{" "}
          👋
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-gray-700"
        >
          I create beautiful, interactive web apps with React, TypeScript & Tailwind. Always striving for the perfect blend of design and code.
        </motion.p>
      </motion.div>
    </section>
  );
}
