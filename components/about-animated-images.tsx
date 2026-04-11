"use client";

import { motion } from "motion/react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedCircle({
  src,
  alt,
  className,
  style,
  delay = 0,
  fromX = 0,
  fromY = 24,
  scale = 0.92,
}: {
  src: string;
  alt: string;
  className?: string;
  style: React.CSSProperties;
  delay?: number;
  fromX?: number;
  fromY?: number;
  scale?: number;
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
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}

// ── Sección 2: Imágenes flotantes del hero ──
export function HeroFloatingImages() {
  return (
    <>
      {/* Foto 5 — far right top (desktop) — primer en aparecer */}
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
      {/* Foto 5 — far right top (mobile) */}
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
      {/* Foto 1 — izquierda pequeña (desktop) — última en aparecer */}
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
      {/* Foto 1 — izquierda (mobile): left negativo, solo fade vertical para no salir más del viewport */}
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

// ── Sección 3: Imágenes de "Rompiendo el silencio" ──
export function SilencioImages() {
  return (
    <>
      {/* vector-about-6 — círculo derecho superior (desktop) */}
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
      {/* vector-about-7 — círculo izquierdo inferior */}
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
