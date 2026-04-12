"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedCircle({
  src,
  alt,
  className,
  style = {},
  delay = 0,
  fromX = 0,
  fromY = 24,
  scale = 0.92,
  imageClassName = "object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  fromX?: number;
  fromY?: number;
  scale?: number;
  imageClassName?: string;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: fromX, y: fromY, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      <Image src={src} alt={alt} fill className={imageClassName} />
    </motion.div>
  );
}

// ── Sección 2 (sobre-mi): Imágenes flotantes del hero ──
export function HeroFloatingImages() {
  return (
    <>
      {/* Foto 5 — extremo derecha (desktop) — primera */}
      <AnimatedCircle
        src="/vector-about-5.png"
        alt="Roser Sabater"
        className="absolute rounded-full hidden md:block overflow-hidden"
        style={{ top: 10, right: 0, width: 160, height: 160 }}
        delay={0}
        fromX={30}
        fromY={-10}
        scale={0.88}
      />
      {/* Foto 5 — extremo derecha (mobile) */}
      <AnimatedCircle
        src="/vector-about-5.png"
        alt="Roser Sabater"
        className="absolute rounded-full md:hidden overflow-hidden z-10"
        style={{ top: -60, right: -90, width: 200, height: 200 }}
        delay={0}
        fromX={30}
        fromY={-10}
        scale={0.88}
      />
      {/* Foto 4 — derecha grande (desktop) */}
      <AnimatedCircle
        src="/vector-about-3.png"
        alt="Roser Sabater"
        className="absolute rounded-full overflow-hidden hidden md:block"
        style={{ top: 90, right: 105, width: 270, height: 270 }}
        delay={0.12}
        fromX={25}
        fromY={15}
        scale={0.9}
      />
      {/* Foto 3 — centro (desktop) */}
      <AnimatedCircle
        src="/ellipse-about-1.png"
        alt="Roser Sabater"
        className="absolute rounded-full hidden md:block overflow-hidden"
        style={{ top: 220, left: 367, width: 150, height: 150 }}
        delay={0.26}
        fromX={0}
        fromY={28}
        scale={0.9}
      />
      {/* Foto 3 — centro (mobile) */}
      <AnimatedCircle
        src="/ellipse-about-1.png"
        alt="Roser Sabater"
        className="absolute rounded-full md:hidden overflow-hidden"
        style={{ top: 105, left: 180, width: 150, height: 150 }}
        delay={0.18}
        fromY={22}
        scale={0.9}
      />
      {/* Foto 2 — centro-izquierda (desktop) */}
      <AnimatedCircle
        src="/vector-about-2.png"
        alt="Roser Sabater"
        className="absolute hidden md:block rounded-full overflow-hidden"
        style={{ top: 160, left: 130, width: 230, height: 230 }}
        delay={0.42}
        fromX={-22}
        fromY={22}
        scale={0.92}
      />
      {/* Foto 2 — (mobile) */}
      <AnimatedCircle
        src="/vector-about-3.png"
        alt="Roser Sabater"
        className="absolute rounded-full md:hidden overflow-hidden"
        style={{ top: 230, left: 50, width: 230, height: 230 }}
        delay={0.3}
        fromY={28}
        scale={0.92}
      />
      {/* Foto 1 — izquierda pequeña (desktop) — última */}
      <AnimatedCircle
        src="/vector-about-1.png"
        alt="Roser Sabater"
        className="absolute hidden md:block rounded-full overflow-hidden"
        style={{ top: 280, left: 10, width: 125, height: 125 }}
        delay={0.58}
        fromX={-30}
        fromY={10}
        scale={0.88}
      />
      {/* Foto 1 — izquierda (mobile): left negativo, solo fade vertical */}
      <AnimatedCircle
        src="/vector-about-1.png"
        alt="Roser Sabater"
        className="absolute rounded-full md:hidden overflow-hidden"
        style={{ top: 120, left: -105, width: 190, height: 190 }}
        delay={0.44}
        fromX={0}
        fromY={20}
        scale={0.9}
      />
    </>
  );
}

// ── Sección 3 (sobre-mi): "Rompiendo el silencio" ──
export function SilencioImages() {
  return (
    <>
      {/* vector-about-6 — derecha superior (desktop) */}
      <AnimatedCircle
        src="/vector-about-6.png"
        alt="Roser Sabater consulta"
        className="absolute hidden md:block rounded-full overflow-hidden"
        style={{ top: 0, left: 100, width: 130, height: 130 }}
        delay={0}
        fromX={25}
        fromY={-10}
        scale={0.88}
      />
      {/* vector-about-6 — (mobile) */}
      <AnimatedCircle
        src="/vector-about-6.png"
        alt="Roser Sabater consulta"
        className="absolute rounded-full md:hidden overflow-hidden"
        style={{ top: -40, left: 150, width: 240, height: 240 }}
        delay={0}
        fromX={25}
        fromY={-10}
        scale={0.88}
      />
      {/* vector-about-7 — izquierda inferior */}
      <AnimatedCircle
        src="/vector-about-7.png"
        alt="Roser Sabater tratamiento"
        className="absolute rounded-full overflow-hidden"
        style={{ top: 70, left: -20, width: 200, height: 200 }}
        delay={0.28}
        fromX={-25}
        fromY={15}
        scale={0.9}
      />
    </>
  );
}

// ── Home: imagen mobile dentro del contenido de about-me ──
export function AboutMeMobileImage() {
  return (
    <motion.div
      className="md:hidden relative w-26 h-26 rounded-full overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.9, delay: 0.15, ease }}
    >
      <Image
        src="/second-section-1.jpg"
        alt="Roser Sabater"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}

// ── Home: sección "Sobre mí" (about-me.tsx) ──
export function AboutMeImages() {
  return (
    <>
      {/* Decorativa top-right (desktop) — primera en aparecer */}
      <AnimatedCircle
        src="/second-section-3.jpg"
        alt="Roser Sabater"
        className="absolute hidden md:block z-8 top-15 right-45 w-42 h-42 rounded-full overflow-hidden"
        delay={0}
        fromX={28}
        fromY={-8}
        scale={0.88}
      />
      {/* Decorativa bottom-right (desktop) — segunda */}
      <AnimatedCircle
        src="/second-section-2.jpg"
        alt="Roser Sabater"
        className="hidden md:block absolute z-8 bottom-15 right-95 w-32 h-32 rounded-full overflow-hidden"
        delay={0.2}
        fromX={18}
        fromY={12}
        scale={0.9}
      />
      {/* Left column (mobile: absolute top-right / desktop: flex item)
          Incluye imagen + CTA desktop para preservar el justify-between */}
      <motion.div
        className="absolute top-4 right-4 z-10 flex flex-col items-end gap-4
          md:static md:flex md:flex-col md:self-stretch md:items-end md:justify-between md:gap-8 md:w-44 md:shrink-0 md:pt-10"
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.9, delay: 0.38, ease }}
      >
        <div className="relative w-20 h-20 rounded-full overflow-hidden md:w-24 md:h-24 md:mb-30">
          <Image
            src="/second-section-1.jpg"
            alt="Roser Sabater en la playa"
            fill
            className="object-cover"
          />
          <Image
            src="/second-section-3.jpg"
            alt="Roser Sabater en la playa"
            fill
            className="md:hidden object-cover"
          />
        </div>
        <Link
          href="#sobre-mi"
          className="hidden md:inline-block bg-black text-[var(--color-accent)] self-end text-[10px] tracking-[0.18em] font-medium px-5 py-3 rounded-full hover:bg-[#2c1005] transition-colors whitespace-nowrap"
        >
          CONOCE MÁS SOBRE MÍ
        </Link>
      </motion.div>
    </>
  );
}

// ── DoubleSection: burbles flotantes (de derecha a izquierda) ──
export function DoubleSectionBubbles() {
  return (
    <>
      {/* burble-6 — far right, primero */}
      <AnimatedCircle
        src="/burble-vector-6.png"
        alt="Sala con espejo"
        className="absolute overflow-hidden"
        style={{ top: 74, left: 1090, width: 163, height: 163 }}
        delay={0}
        fromX={24}
        fromY={-10}
        scale={0.88}
        imageClassName="object-contain"
      />
      {/* burble-5 — large right (desktop only) */}
      <AnimatedCircle
        src="/burble-vector-5.png"
        alt="Espacio pilates"
        className="absolute hidden sm:block overflow-hidden"
        style={{ top: 150, left: 860, width: 263, height: 296 }}
        delay={0.12}
        fromX={20}
        fromY={14}
        scale={0.9}
        imageClassName="object-contain"
      />
      {/* burble-4 — large oval center (desktop) */}
      <AnimatedCircle
        src="/burble-vector-4.png"
        alt="Equipamiento clínica"
        className="absolute hidden sm:block overflow-hidden"
        style={{ top: 47, left: 558, width: 278, height: 333 }}
        delay={0.24}
        fromY={22}
        scale={0.9}
        imageClassName="object-contain"
      />
      {/* burble-4 — (mobile) */}
      <AnimatedCircle
        src="/burble-vector-4.png"
        alt="Equipamiento clínica"
        className="absolute sm:hidden overflow-hidden"
        style={{ top: 47, left: 280, width: 220, height: 280 }}
        delay={0.12}
        fromY={22}
        scale={0.9}
        imageClassName="object-contain"
      />
      {/* burble-3 — center-left (desktop) */}
      <AnimatedCircle
        src="/burble-vector-3.png"
        alt="Sala de tratamiento"
        className="absolute hidden sm:block overflow-hidden"
        style={{ top: 260, left: 388, width: 200, height: 193 }}
        delay={0.36}
        fromY={20}
        scale={0.92}
        imageClassName="object-contain"
      />
      {/* burble-3 — (mobile) */}
      <AnimatedCircle
        src="/burble-vector-3.png"
        alt="Sala de tratamiento"
        className="absolute sm:hidden overflow-hidden"
        style={{ top: 280, left: 220, width: 140, height: 135 }}
        delay={0.24}
        fromY={20}
        scale={0.92}
        imageClassName="object-contain"
      />
      {/* burble-2 — large, straddles boundary (desktop) */}
      <AnimatedCircle
        src="/burble-vector-2.png"
        alt="Consulta fisioterapia"
        className="absolute hidden sm:block overflow-hidden"
        style={{ top: 148, left: 118, width: 300, height: 260 }}
        delay={0.48}
        fromX={-18}
        fromY={16}
        scale={0.92}
        imageClassName="object-contain"
      />
      {/* burble-2 — (mobile) */}
      <AnimatedCircle
        src="/burble-vector-2.png"
        alt="Consulta fisioterapia"
        className="absolute sm:hidden overflow-hidden"
        style={{ top: 158, left: 38, width: 220, height: 200 }}
        delay={0.36}
        fromX={-14}
        fromY={14}
        scale={0.92}
        imageClassName="object-contain"
      />
      {/* burble-1 — small, upper-left, último (desktop) */}
      <AnimatedCircle
        src="/burble-vector-1.png"
        alt="Espacio Roser Sabater"
        className="absolute hidden sm:block overflow-hidden"
        style={{ top: 80, left: 28, width: 148, height: 148 }}
        delay={0.6}
        fromX={-22}
        fromY={0}
        scale={0.88}
        imageClassName="object-contain"
      />
      {/* burble-1 — (mobile): left negativo, solo vertical */}
      <AnimatedCircle
        src="/burble-vector-1.png"
        alt="Espacio Roser Sabater"
        className="absolute sm:hidden overflow-hidden"
        style={{ top: 28, left: -40, width: 168, height: 168 }}
        delay={0.48}
        fromX={0}
        fromY={18}
        scale={0.88}
        imageClassName="object-contain"
      />
    </>
  );
}

// ── DoubleSection: imagen testimonial ──
export function TestimonialImage() {
  return (
    <motion.div
      className="relative md:w-52 w-full h-82 md:h-52 rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: -24, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.9, delay: 0.1, ease }}
    >
      <Image
        src="/dicen-de-mi.png"
        alt="Tratamiento fisioterapia"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
