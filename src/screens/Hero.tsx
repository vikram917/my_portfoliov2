"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { userData } from "@/constants/userData";
import { useEffect, useState } from "react";
import BacardiCanvas from "@/components/3d/BacardiGlobal";

export default function Hero() {
  // Typing effect
  const roles = [
    "Frontend Developer",
    "ReactNative Developer",
    "Full Stack Developer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!reverse && subIndex === current.length) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <section
      id="home"
      className="
        w-full min-h-screen 
        flex flex-col md:flex-row items-center justify-center
        gap-16 px-6 pt-32 md:pt-40
        text-(--color-foreground)
      "
    >

      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          flex flex-col text-left 
          w-full md:w-[500px]
        "
      >
        {/* NAME */}
        <h1 className="text-2xl md:text-2xl font-bold leading-tight">
          Hi, my name is{" "}
          <span className="text-[var(--color-primary)]">{userData.name}</span>
        </h1>

        {/* ROLE (typing animation) */}
        <div className="mt-4 font-bold leading-tight">
          <h1 className="text-3xl md:text-4xl flex items-center gap-3">
            <span>I'm a</span>

            {/* FIXED TYPING WIDTH — NO SHIFTING */}
            <span className="inline-block min-w-[280px] md:min-w-[340px]">
              <span className="text-[var(--color-secondary)]">
                {roles[index].substring(0, subIndex)}
              </span>
              <span className="opacity-80">|</span>
            </span>
          </h1>

          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-[3px] bg-[var(--color-primary)] rounded mt-1"
          />
        </div>

        {/* OBJECTIVE */}
        <p className="mt-5 text-lg opacity-80">{userData.objectives}</p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">
          <a
            href="/resume/Vikram_Baghel.pdf"
            download
            className="
              px-6 py-3 rounded-lg font-medium
              bg-[var(--color-primary)] text-black
              shadow hover:shadow-lg transition
            "
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3 rounded-lg font-medium
              border border-[var(--color-primary)]
              text-[var(--color-primary)]
              hover:bg-[var(--color-primary)] hover:text-black
              transition
            "
          >
            Hire Me
          </a>
        </div>
      </motion.div>

{/* RIGHT SIDE IMAGE + SOCIAL LINKS */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  className="relative flex flex-col items-center gap-4"
>
  {/* Image */}
  <div
    className="
      w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden
      border-4 border-[var(--color-primary)]
      shadow-xl bg-[var(--color-background)]
    "
  >
    <Image
      src={userData.image}
      alt={userData.name}
      width={350}
      height={350}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Social Links BELOW IMAGE */}
  <div className="flex gap-4 mt-4">
    {userData.socialLinks.map((item, index) => {
      const Icon = item.icon;
      return (
        <a
          key={index}
          href={item.url}
          target="_blank"
          className="
            p-2 rounded-full bg-[var(--color-background)]/20
            border border-[var(--color-foreground)]/10 backdrop-blur
            hover:bg-[var(--color-primary)] hover:text-black
            transition
          "
        >
          <Icon className="w-5 h-5 text-[var(--color-foreground)]" />
        </a>
      );
    })}
  </div>
</motion.div>

    </section>
  );
}
