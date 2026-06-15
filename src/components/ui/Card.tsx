"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (max 5 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    if (!hoverEffect) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        z: hoverEffect && (rotateX !== 0 || rotateY !== 0) ? 20 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-100/50 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm overflow-hidden group ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      {...(props as any)}
    >
      {/* Subtle glow effect on hover */}
      {hoverEffect && (
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/0 to-teal-500/5 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      )}
      <div style={{ transform: "translateZ(30px)" }} className="relative h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
