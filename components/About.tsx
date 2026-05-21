"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Business Intelligence",
    description:
      "Building analytical systems, KPI dashboards, and cloud-native BI workflows using Power BI, SQL, Snowflake, and BigQuery.",
  },

  {
    title: "AI-Powered Systems",
    description:
      "Developing intelligent applications and analytics assistants using LangChain, LLM workflows, Streamlit, and automation pipelines.",
  },

  {
    title: "Startup Operations",
    description:
      "Contributing to WOSTUP through operations, analytics strategy, workflow planning, product coordination, and growth initiatives.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-6 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-orange-400 mb-6">
            ABOUT ME
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            Building intelligent analytics systems for modern organizations.
          </h2>

          <p className="mt-10 text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            I’m a BI-focused Computer Engineering student passionate about analytics engineering,
            cloud-native data systems, AI-powered applications, and intelligent workflow platforms.
            My work combines business intelligence, data engineering, automation, and startup-driven innovation.
          </p>

        </motion.div>

        {/* CARDS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-orange-500/10 blur-3xl"></div>

              <div className="relative z-10">

                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}