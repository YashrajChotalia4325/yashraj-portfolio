"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-6"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-[40px]"></div>

          <Image
            src="/about.jpeg"
            alt="About"
            width={500}
            height={700}
            className="relative z-10 rounded-[40px] grayscale border border-white/10"
          />

        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-sm text-orange-400 mb-6">
            ABOUT ME
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Building intelligent systems for modern teams.
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">
            I’m a fourth-year Computer Engineering student focused on
            analytics engineering, AI-powered systems, cloud-native workflows,
            and startup-driven innovation.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            Alongside building advanced analytics platforms and AI
            applications, I’m also building WOSTUP — an autonomous AI
            workspace and workforce intelligence platform designed to redefine
            how modern teams collaborate, automate workflows, and sustain high
            performance without burnout.
          </p>

        </motion.div>

      </div>

    </section>
  );
}