"use client";

import { motion } from "framer-motion";
import { userData } from "@/constants/userData";

export default function Contact() {
  return (
    <section
      id="contact"
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          text-3xl md:text-5xl font-bold 
          text-[var(--color-primary)]
          mb-14 text-center
        "
      >
        Contact
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            p-6 rounded-xl
            border border-[var(--color-foreground)]/20 
            bg-[var(--color-background)]/40 
            backdrop-blur-lg shadow-lg
          "
        >
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

          <p className="opacity-80 mb-4">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>

          <div className="space-y-3 text-sm">
            <p><strong>Email:</strong> {userData.contact.email}</p>
            <p><strong>Phone:</strong> {userData.contact.phone}</p>
            <p><strong>Address:</strong> {userData.contact.address}</p>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="font-medium mb-3">Social Links</h4>

            <div className="flex flex-wrap gap-3">
{userData.socialLinks.map((item, index) => {
  const Icon = item.icon;
  return (
    <a
      key={index}
      href={item.url}
      target="_blank"
      className="p-2 rounded-md bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/25"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
})}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            p-6 rounded-xl
            border border-[var(--color-foreground)]/20 
            bg-[var(--color-background)]/40 
            backdrop-blur-lg shadow-lg
            space-y-5
          "
        >
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="
                p-3 rounded-lg bg-transparent border 
                border-[var(--color-foreground)]/30 
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                p-3 rounded-lg bg-transparent border 
                border-[var(--color-foreground)]/30 
                outline-none
              "
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="
                p-3 rounded-lg bg-transparent border 
                border-[var(--color-foreground)]/30 
                outline-none
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-[var(--color-primary)] text-black
              font-medium text-sm
              hover:bg-[var(--color-primary)]/90
              transition
            "
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
