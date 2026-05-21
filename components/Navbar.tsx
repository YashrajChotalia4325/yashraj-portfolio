"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-5 backdrop-blur-md bg-black/20 border-b border-white/5">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-lg md:text-xl font-bold tracking-widest"
        >
          YC.
        </a>

        {/* DESKTOP NAV */}
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

        </div>

        {/* CONNECT BUTTON */}
        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm"
          >
            Let’s Connect
          </button>

          {/* POPUP */}
          <AnimatePresence>

            {open && (

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-4 w-60 rounded-[28px] border border-white/10 bg-black/80 backdrop-blur-2xl p-4 shadow-2xl shadow-orange-500/10"
              >

                <div className="flex flex-col gap-3">

                  <a
                    href="https://www.linkedin.com/in/yashraj-chotalia-755028278?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/YashrajChotalia4325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href="mailto:chotaliayashraj12@gmail.com"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
                  >
                    Email
                  </a>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </nav>
  );
}