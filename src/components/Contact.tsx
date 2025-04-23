import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white px-6 md:px-20 py-24 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">Get In Touch</h2>
        <p className="text-gray-200 mt-4 max-w-xl mx-auto text-lg">
          Let’s connect — I’d love to hear from you!
        </p>
      </div>

      {/* Form */}
      <motion.form
        className="max-w-md mx-auto w-full space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full px-4 py-3 text-sm text-gray-800 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1">Mobile</label>
          <input
            type="text"
            placeholder="Enter mobile"
            className="w-full px-4 py-3 text-sm text-gray-800 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            className="w-full px-4 py-3 text-sm text-gray-800 bg-white rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit →
        </button>
      </motion.form>

      {/* Social Media Icons */}
      <motion.div
        className="mt-8 flex justify-center gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 transform hover:scale-110"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-110"
        >
          <FaTwitter className="text-3xl" />
        </a>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        Made with ❤️
      </div>
    </section>
  );
}
