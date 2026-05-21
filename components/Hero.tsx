"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "13M+",
    label: "Records Processed",
  },

  {
    number: "5+",
    label: "Analytics Systems Built",
  },

  {
    number: "AWS • AI • BI",
    label: "Cloud-Native Workflows",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >

      {/* MASSIVE BACKGROUND GLOW */}
      <div className="absolute w-[900px] md:w-[1200px] h-[900px] md:h-[1200px] bg-orange-500/20 blur-[220px] rounded-full"></div>

      {/* SMALL FLOATING GLOWS */}
      <div className="absolute top-40 left-20 w-40 h-40 bg-orange-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-52 h-52 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-400 mb-8"
        >
          AI SYSTEMS • ANALYTICS • WORKFORCE INTELLIGENCE
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl md:text-[9rem] font-black leading-none"
        >
          YASHRAJ
          <br />
          CHOTALIA
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-10 text-gray-400 text-base md:text-xl leading-relaxed max-w-4xl mx-auto"
        >
          BI-focused Computer Engineering student building cloud-native analytics systems,
          AI-powered data applications, and intelligent workforce platforms using AWS,
          Snowflake, Power BI, LangChain, and modern data engineering workflows.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >

          <a
            href="#systems"
            className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-7 py-3 rounded-full font-medium shadow-lg shadow-orange-500/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-orange-500 hover:text-orange-400 transition-all duration-300 px-7 py-3 rounded-full font-medium"
          >
            Download Resume
          </a>

        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-orange-500/10 blur-3xl"></div>

              <div className="relative z-10">

                <h3 className="text-3xl md:text-5xl font-bold">
                  {stat.number}
                </h3>

                <p className="mt-4 text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}