"use client";

import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { ThemeProvider } from "@/providers/themProvider";
import { Footer } from "@/components/layouts/Footer";
import MusicPlayer from "@/components/common/MusicPlayer";
import { useEffect } from "react";
import BacardiGlobal from "@/components/3d/BacardiGlobal";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const container = document.getElementById("rainContainer");
    if (!container) return;

    for (let i = 0; i < 80; i++) {
      const drop = document.createElement("div");
      drop.className = "rain-drop";

      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDuration = 0.6 + Math.random() * 0.6 + "s";
      drop.style.animationDelay = Math.random() * 3 + "s";
      drop.style.opacity = 0.2 + Math.random() * 0.5;

      container.appendChild(drop);
    }
  }, []);

  return (
    <html lang="en">
      <body>

        {/* THEME BACKGROUND */}
        <div className="theme-bg-layer"></div>

        {/* REAL RAIN */}
        <div id="rainContainer"></div>

        <ThemeProvider>
          <Header />

<BacardiGlobal />
          <div className="min-h-screen relative z-10">
            {children}
          </div>

          <MusicPlayer />
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
