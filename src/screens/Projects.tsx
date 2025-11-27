"use client";

import { motion } from "framer-motion";
import { userData } from "@/constants/userData";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        w-full min-h-screen 
        px-6 py-24 md:px-10 md:py-32 
        text-[var(--color-foreground)]
      "
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          text-3xl md:text-5xl font-bold 
          text-[var(--color-primary)]
          mb-14 text-center
        "
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {userData.projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="
              p-4 rounded-xl cursor-pointer
              border border-[var(--color-foreground)]/20
              bg-[var(--color-background)]/40 backdrop-blur-xl shadow-xl
              transition-all duration-300
            "
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover rounded-lg
                  transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold">
              {project.title}
            </h3>

            {/* Description */}
            <p className="opacity-80 text-sm mt-2 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech?.map((techItem, i) => (
                <span
                  key={i}
                  className="
                    px-2 py-1 text-xs rounded-md
                    bg-[var(--color-primary)]/15
                    border border-[var(--color-primary)]/40
                  "
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* Buttons: Live + GitHub */}
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener"
                className="
                  px-3 py-1 text-sm rounded-lg
                  bg-[var(--color-primary)] text-black font-medium
                  hover:bg-[var(--color-primary)]/90 
                  transition
                "
              >
                Live
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                className="
                  px-3 py-1 text-sm rounded-lg
                  border border-[var(--color-primary)]
                  text-[var(--color-primary)]
                  hover:bg-[var(--color-primary)]/20
                  transition
                "
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
