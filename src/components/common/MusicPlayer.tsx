"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicBubble() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/audio/ForAReason.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    // Autoplay muted (always allowed)
    audioRef.current.muted = true;
    audioRef.current.play().catch(() => {});

    // Wait for first interaction → unmute + play
    const unlockAudio = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      audioRef.current.play();
      setPlaying(true);
      setUnlocked(true);
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || !unlocked) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-[var(--color-background)]/40
        backdrop-blur-lg
        border border-[var(--color-foreground)]/20
        shadow-lg cursor-pointer
      "
      style={{
        boxShadow: playing
          ? "0 0 12px var(--color-primary), 0 0 22px var(--color-primary)"
          : "0 0 5px var(--color-foreground)",
      }}
    >
      {/* Icon */}
      {!unlocked ? (
        // Sound locked icon (first interaction needed)
        <svg width="20" height="20" fill="var(--color-foreground)">
          <path d="M5 8v8h4l5 4V4L9 8H5z" opacity=".4" />
        </svg>
      ) : playing ? (
        <svg width="20" height="20" fill="var(--color-foreground)">
          <rect x="5" y="4" width="4" height="12" rx="2" />
          <rect x="11" y="4" width="4" height="12" rx="2" />
        </svg>
      ) : (
        <svg width="20" height="20" fill="var(--color-foreground)">
          <path d="M5 3v14l12-7L5 3z" />
        </svg>
      )}
    </motion.button>
  );
}
