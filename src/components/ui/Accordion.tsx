"use client";
import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpenDefault = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-slate-100 dark:border-slate-800/80 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-slate-800 dark:text-slate-200 py-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`ml-4 transform transition-transform duration-300 text-teal-600 dark:text-teal-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 overflow-hidden"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pb-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  return (
    <div className={`divide-y divide-slate-100 dark:divide-slate-800/80 ${className}`}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpenDefault={idx === 0}
        />
      ))}
    </div>
  );
};

export default Accordion;
