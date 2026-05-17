"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 backdrop-blur-md bg-black/20 border-b border-white/5">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <a
          href="#home"
          className="text-xl font-bold tracking-widest"
        >
          YC.
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

          <a href="#home" className="hover:text-orange-400 transition-all">
            Home
          </a>

          <a href="#about" className="hover:text-orange-400 transition-all">
            About
          </a>

          <a href="#systems" className="hover:text-orange-400 transition-all">
            Systems
          </a>

          <a href="#wostup" className="hover:text-orange-400 transition-all">
            WOSTUP
          </a>

          <a href="#contact" className="hover:text-orange-400 transition-all">
            Contact
          </a>

        </div>

        <a
          href="#contact"
          className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 px-5 py-2 rounded-full text-sm"
        >
          Let’s Connect
        </a>

      </div>

    </nav>
  );
}