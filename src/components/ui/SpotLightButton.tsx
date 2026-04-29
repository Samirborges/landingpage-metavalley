"use client";
import React, { useRef, useState } from "react";

export const SpotlightButton = ({ text }: { text: string }) => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="cursor-pointer bg-black relative border border-white/20 text-white font-medium px-8 py-3 rounded-full overflow-hidden transition-all hover:border-white/40 w-full"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 80%)`,
        }}
      />
      <span className="relative z-10">{text}</span>
    </button>
  );
};
