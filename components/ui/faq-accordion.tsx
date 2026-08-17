"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string[];
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.question}
          className="border-t border-stone-900/15 last:border-b"
        >
          <button
            className="w-full flex items-center gap-5 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <h3 className="flex-1 text-base md:text-lg font-normal text-stone-900 leading-snug">
              {item.question}
            </h3>
            <span
              className="text-2xl font-extralight text-stone-700 transition-transform duration-300 select-none shrink-0"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>

          {open === i && (
            <div className="pb-6 pr-10 flex flex-col gap-3">
              {item.answer.map((line, j) => (
                <p
                  key={j}
                  className="text-sm text-stone-600 leading-relaxed font-light"
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
