"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
    >

      {/* Background Glow */}
      <div className="absolute w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] bg-orange-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm text-gray-400 mb-6">
            AI SYSTEMS • ANALYTICS • WORKFORCE INTELLIGENCE
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none">
            YASHRAJ
            <br />
            CHOTALIA
          </h1>

          <p className="mt-8 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Building AI-powered analytics systems and intelligent workforce
            platforms through cloud engineering, automation, and startup-driven innovation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#systems"
              className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 md:px-7 py-3 rounded-full font-medium shadow-lg shadow-orange-500/20"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-white/20 hover:border-orange-500 hover:text-orange-400 transition-all duration-300 px-6 md:px-7 py-3 rounded-full font-medium"
            >
            Download Resume
            </a>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center order-first md:order-last"
        >

          <div className="absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-orange-500/30 blur-[120px] md:blur-[160px] rounded-full"></div>

          <div className="relative w-[280px] sm:w-[350px] md:w-[500px] h-[280px] sm:h-[350px] md:h-[500px] rounded-full p-[5px] md:p-[6px] bg-orange-500 shadow-[0_0_70px_rgba(255,115,0,0.9)]">

            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">

              <Image
                src="/hero.jpeg"
                alt="Yashraj"
                fill
                className="object-cover grayscale scale-110"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}