"use client";

import { useState } from "react";
import Image from "next/image";

export interface AccordionItem {
  image: string;
  alt: string;
  title: string;
  heading?: string;
  paragraphs?: React.ReactNode[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="border-t border-stone-300 last:border-b"
        >
          <button
            className="w-full flex items-center gap-5 py-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="flex-1 text-3xl xl:text-4xl font-light text-stone-900 leading-tight">
              {item.title}
            </h3>

            {/* Icon */}
            <span
              className="text-2xl font-extralight text-stone-700 transition-transform duration-300 select-none"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>

          {/* Expandable content */}
          {open === i && (item.heading || item.paragraphs) && (
            <div className="pb-8 pl-[84px] pr-8 flex flex-col gap-4">
              {item.heading && (
                <h4
                  className="text-base font-normal leading-snug"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.heading}
                </h4>
              )}
              {item.paragraphs?.map((p, j) => (
                <p key={j} className="text-sm text-stone-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
