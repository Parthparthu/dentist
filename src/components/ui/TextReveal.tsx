"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  className = "", 
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Split by words, but maintain spaces
  const words = text.split(" ").map((word, idx) => {
    return { word, key: `word-${idx}` };
  });

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((item, index) => (
        <span key={item.key} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span className="inline-block" variants={child}>
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
