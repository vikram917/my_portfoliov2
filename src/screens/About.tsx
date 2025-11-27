"use client";

import { motion } from "framer-motion";
import { userData } from "@/constants/userData";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full min-h-screen 
        px-6 py-24 md:px-10 md:py-32 
        text-[var(--color-foreground)]
        flex flex-col items-center
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
          mb-12 text-center
        "
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left: Objective / Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Who I Am
          </h3>

          <p className="text-base md:text-lg opacity-80 leading-relaxed">
            {userData.objectives}
          </p>

          <div className="pt-4">
            <h4 className="text-lg font-medium mb-2">Contact</h4>
            <p className="opacity-80 text-sm md:text-base">
              📮 Email: {userData.contact.email}
            </p>
            <p className="opacity-80 text-sm md:text-base">
              📞 Phone: {userData.contact.phone}
            </p>
            <p className="opacity-80 text-sm md:text-base">
              📍 Address: {userData.contact.address}
            </p>
          </div>
        </motion.div>

        {/* Right : Education */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Education
          </h3>

          <div className="space-y-6">
            {userData.education?.map((edu, index) => (
              <div
                key={index}
                className="
                  p-5 rounded-xl border border-[var(--color-foreground)]/20 
                  bg-[var(--color-background)]/40 backdrop-blur-lg
                "
              >
                <h4 className="text-lg font-semibold">
                  {edu.degree}
                </h4>
                <p className="opacity-80 text-sm">
                  {edu.institution}
                </p>
                <p className="opacity-70 text-xs mt-1">
                  {edu.duration}
                </p>
                <p className="opacity-70 text-xs">
                  Score: {edu.score}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
