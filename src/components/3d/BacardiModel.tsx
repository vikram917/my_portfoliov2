"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";


export default function BacardiModel({ scrollY }: { scrollY: number }) {
  const modelRef = useRef<any>(null);

  // Load GLB model correctly
  const { scene, animations } = useGLTF("/models/Bacardi.glb");

  // If GLB has animation → autoplay
  if (animations && animations.length > 0) {
    const mixer = new THREE.AnimationMixer(scene);
    const action = mixer.clipAction(animations[0]);
    action.play();

    useFrame((_, delta) => mixer.update(delta));
  }

  // Scroll animation
  useFrame(() => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y = scrollY * 0.003;
    modelRef.current.rotation.x = scrollY * 0.001;

    gsap.to(modelRef.current.position, {
      y: Math.sin(scrollY * 0.004) * 0.2,
      duration: 0.5,
      ease: "power1.out",
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={4}
      position={[0.7, -1, 1.8]}
      rotation={[0, Math.PI * 0.2, 0]}
    />
  );
}
