

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl bg-[#1a1a1a] rounded-b-xl px-6 md:px-12 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="text-white font-bold text-lg">Portfolio</div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About Me</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

      
      </div>
    </header>
  );
}
