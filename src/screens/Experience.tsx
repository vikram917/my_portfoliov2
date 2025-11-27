"use client";

import { motion } from "framer-motion";
import { userData } from "@/constants/userData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        w-full min-h-screen 
        px-6 py-24 md:px-10 md:py-32 
        text-[var(--color-foreground)]
      "
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          text-3xl md:text-5xl font-bold 
          text-[var(--color-primary)]
          mb-14 text-center
        "
      >
        Experience
      </motion.h2>

      {/* Experience Timeline */}
      <div className="max-w-5xl mx-auto space-y-10">
        {userData.experiences?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              p-6 rounded-xl
              border border-[var(--color-foreground)]/20 
              bg-[var(--color-background)]/40 
              backdrop-blur-lg shadow-lg
              relative
            "
          >
            {/* Bullet Indicator */}
            <div className="absolute -left-4 top-6 w-3 h-3 rounded-full bg-[var(--color-primary)] shadow-md" />

            <h3 className="text-xl font-semibold">
              {exp.role}
            </h3>

            <p className="opacity-80 text-sm mt-1">
              {exp.company}
            </p>

            <p className="opacity-70 text-xs mt-1 mb-4">
              {exp.duration}
            </p>

            <ul className="list-disc ml-5 space-y-2 text-sm opacity-90">
              {exp.responsibilities?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
