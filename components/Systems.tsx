"use client";

import { motion } from "framer-motion";

const systems = [
  {
    title: "Indian Aviation Intelligence System",
    description:
      "Cloud-native aviation analytics pipeline built using AWS, Athena, Lambda, and Power BI to process and analyze Indian flight data.",
    tech: "AWS • Athena • Power BI • Lambda • Glue",
  },

  {
    title: "WOSTUP",
    description:
      "Autonomous AI workspace and workforce intelligence platform focused on productivity, automation, collaboration, and burnout-aware systems.",
    tech: "AI Workflows • Workforce Intelligence • Automation",
  },

  {
    title: "CSV Chat AI",
    description:
      "AI-powered analytics assistant enabling natural language interaction with CSV datasets using LangChain and Llama models.",
    tech: "LangChain • Groq API • Streamlit • Python",
  },

  {
    title: "Zomato Analytics Pipeline",
    description:
      "Modern ELT analytics pipeline using Snowflake and dbt with automated testing, lineage tracking, and business intelligence reporting.",
    tech: "Snowflake • dbt • SQL • Tableau",
  },
];

export default function Systems() {
  return (
    <section
      id="systems"
      className="relative py-40 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-orange-400 mb-6">
            FEATURED SYSTEMS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Intelligent platforms, analytics workflows, and AI-powered systems.
          </h2>

        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-orange-500/10 blur-3xl"></div>

              <div className="relative z-10">

                <p className="text-sm uppercase tracking-[0.25em] text-orange-400 mb-6">
                  SYSTEM 0{index + 1}
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  {system.title}
                </h3>

                <p className="mt-6 text-gray-400 leading-relaxed text-lg">
                  {system.description}
                </p>

                <div className="mt-8 text-sm text-gray-500">
                  {system.tech}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}