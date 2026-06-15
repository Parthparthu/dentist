"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2500,
  className = "",
}) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIdx];

    if (isDeleting && currentText === "") {
      // Pause at the empty word, then transition to typing next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIdx((prev) => (prev + 1) % words.length);
      }, 500);
    } else if (!isDeleting && currentText === currentWord) {
      // Pause at the full word, then transition to deleting
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting) {
      // Delete characters
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Type characters
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-[pulse_1s_infinite] ml-1 border-r-3 border-current" />
    </span>
  );
};

export default Typewriter;
