import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <>
      {/* Right side - scroll / contact action */}
      <div className="fixed top-1/2 -translate-y-1/2 right-6 z-50 hidden md:flex flex-col gap-5 text-2xl text-neutral-400 dark:text-neutral-500">
        <a
          href="https://github.com/minhdq2512"
          target="_blank"
          className="hover:text-indigo-500 transition transform hover:scale-200"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:minhdq2512@gmail.com"
              className="hover:text-indigo-500 transition transform hover:scale-200"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/minh-dinh-quang-94250325a/"
          target="_blank"
             className="hover:text-indigo-500 transition transform hover:scale-200"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}
