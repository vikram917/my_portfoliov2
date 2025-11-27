"use client";

import { motion } from "framer-motion";
import { userData } from "@/constants/userData";
import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", items: userData.skills.frontend },
    { title: "Backend", items: userData.skills.backend },
    { title: "Database", items: userData.skills.database },
    { title: "DevOps", items: userData.skills.devops },
    { title: "Tools", items: userData.skills.tools },
  ];

  return (
    <section
      id="skills"
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
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              p-6 rounded-xl
              border border-[var(--color-foreground)]/20 
              bg-[var(--color-background)]/40
              backdrop-blur-lg shadow-lg
            "
          >
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            <ul className="flex flex-wrap gap-3">
              {category.items.map((skill: any, i: number) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 240 }}
                  className="
                    flex items-center gap-2
                    px-3 py-1
                    text-sm rounded-lg 
                    bg-[var(--color-primary)]/15 
                    border border-[var(--color-primary)]/40 
                    text-[var(--color-foreground)]
                  "
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
