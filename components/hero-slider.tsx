"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/hero-slider-1.jpg",
    alt: "Roser Sabater guiando un ejercicio de pilates con aro",
    position: "object-[60%_50%]",
  },
  {
    src: "/hero-slider-2.jpg",
    alt: "Roser Sabater explicando una ecografía a una paciente embarazada",
    position: "object-[50%_40%]",
  },
  {
    src: "/hero-slider-3.png",
    alt: "Roser Sabater realizando una ecografía en consulta",
    position: "object-[65%_50%]",
  },
];

const INTERVAL_MS = 3000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-roledescription="carousel">
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover ${slide.position} transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          preload={i === 0}
          quality={85}
          sizes="100vw"
          aria-hidden={i !== current}
        />
      ))}
    </div>
  );
}
