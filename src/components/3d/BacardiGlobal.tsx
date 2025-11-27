"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import BacardiModel from "@/components/3d/BacardiModel";

export default function BacardiGlobal() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed left-0 top-0 
        w-[40vw] h-full 
        pointer-events-none
        hidden md:block
        z-0
      "
    >
      <Canvas camera={{ position: [2, 2, 4], fov: 38 }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.2} position={[5, 5, 5]} />
        <Environment preset="studio" />

        <BacardiModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
