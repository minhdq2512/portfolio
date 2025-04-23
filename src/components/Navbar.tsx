"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icon from lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Hàm cập nhật thời gian
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString()); // Định dạng ngày tháng năm theo hệ thống
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hàm để scroll lên đầu trang khi logo được click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl bg-[#1a1a1a] rounded-b-xl px-6 md:px-12 py-4 flex justify-between items-center shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        {/* Logo */}
        <div
          className="text-white font-bold text-lg hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-150 font-poppins"
          onClick={handleLogoClick}
        >
          QuangMinh
        </div>

        {/* Date & Time */}
        <div className="text-white font-semibold text-lg animate-colorChange hover:scale-110 transform transition-all duration-300">
          {currentTime}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a
            href="#about"
            className="hover:text-white transition-all duration-300 transform hover:scale-150 font-poppins"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-all duration-300 transform hover:scale-150 font-poppins"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-all duration-300 transform hover:scale-150 font-poppins"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden animate-slideDown absolute top-full left-4 right-4 bg-[#222] shadow-lg rounded-xl text-white px-6 py-6 flex flex-col gap-4 text-base z-40 border border-gray-700">
          <a
            href="#about"
            className="hover:text-green-400 transition-colors duration-200 transform hover:scale-105 font-poppins"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:text-green-400 transition-colors duration-200 transform hover:scale-105 font-poppins"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 transition-colors duration-200 transform hover:scale-105 font-poppins"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
