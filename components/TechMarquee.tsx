"use client";

import { motion } from "framer-motion";

const techStack = [
  "AWS",
  "Power BI",
  "Snowflake",
  "BigQuery",
  "LangChain",
  "Python",
  "dbt",
  "Athena",
  "Tableau",
  "Streamlit",
  "Groq API",
  "SQL",
];

export default function TechMarquee() {
  return (
    <section className="relative py-20 overflow-hidden border-y border-white/5">

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap"
      >

        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="text-5xl md:text-7xl font-bold text-white/10"
          >
            {tech}
          </div>
        ))}

      </motion.div>

    </section>
  );
}