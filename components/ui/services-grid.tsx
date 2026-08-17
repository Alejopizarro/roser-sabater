"use client";

import { useState } from "react";
import Image from "next/image";
import type { AccordionItem } from "./accordion";

interface ServicesGridProps {
  items: AccordionItem[];
}

export default function ServicesGrid({ items }: ServicesGridProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={`flex flex-col bg-white rounded-[32px] overflow-hidden border transition-colors duration-300 ${
              isOpen ? "border-stone-900" : "border-stone-200"
            }`}
          >
            <button
              type="button"
              className="relative w-full h-56 md:h-64 text-left shrink-0"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
              {/* Gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              {/* Toggle icon */}
              <span
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl font-extralight text-stone-900 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>

              {/* Title */}
              <p
                className="absolute bottom-5 left-5 right-16 text-white text-2xl font-light leading-snug"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                {item.title}
              </p>
            </button>

            {isOpen && (item.heading || item.paragraphs) && (
              <div className="flex flex-col gap-4 p-6">
                {item.heading && (
                  <h4
                    className="text-base font-normal leading-snug"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {item.heading}
                  </h4>
                )}
                {item.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-sm text-stone-600 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
