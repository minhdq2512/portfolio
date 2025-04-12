"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon từ lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl bg-[#1a1a1a] rounded-b-xl px-6 md:px-12 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="text-white font-bold text-lg">QuangMinh</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About Me</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
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
      className="hover:text-green-400 transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      About Me
    </a>
    {/* <a
      href="#skills"
      className="hover:text-green-400 transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      Skills
    </a> */}
    <a
      href="#projects"
      className="hover:text-green-400 transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      Projects
    </a>
    <a
      href="#contact"
      className="hover:text-green-400 transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </a>
  </div>
)}
    </header>
  );
}
