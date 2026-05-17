"use client";

import { motion } from "framer-motion";

export default function Wostup() {
  return (
    <section
      id="wostup"
      className="relative py-52 px-6 overflow-hidden"
    >

      {/* MASSIVE BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-orange-500/10 blur-[220px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >

        <p className="uppercase tracking-[0.35em] text-sm text-orange-400 mb-8">
          BUILDING WOSTUP
        </p>

        <h2 className="text-6xl md:text-8xl font-bold leading-none">
          The future of work should understand people, not just tasks.
        </h2>

        <p className="mt-10 text-gray-400 text-xl leading-relaxed max-w-4xl mx-auto">
          WOSTUP is an autonomous AI workspace and workforce intelligence
          platform designed for modern teams. Combining workflow automation,
          predictive execution, collaboration systems, and wellbeing-aware AI,
          WOSTUP aims to redefine how teams work, communicate, and sustain
          high performance without burnout.
        </p>

        {/* WOSTUP CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10"
          >

            <h3 className="text-2xl font-bold">
              AI Workflows
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Intelligent workflow execution and adaptive automation systems
              designed for high-performance modern teams.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10"
          >

            <h3 className="text-2xl font-bold">
              Workforce Intelligence
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Burnout detection, wellbeing insights, and human-centric analytics
              powered through adaptive AI systems.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10"
          >

            <h3 className="text-2xl font-bold">
              Real-Time Collaboration
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Unified workspace infrastructure focused on communication,
              productivity, and operational clarity.
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}