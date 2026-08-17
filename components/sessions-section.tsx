"use client";

import { motion } from "motion/react";
import { Hand, Dumbbell, Waves, Gauge, Sparkles } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    icon: Hand,
    title: "Terapia manual",
    description:
      "Técnicas manuales para liberar tensión, mejorar la movilidad y aliviar el dolor.",
  },
  {
    icon: Dumbbell,
    title: "Ejercicio terapéutico",
    description:
      "Movimiento adaptado a tu momento vital para recuperar fuerza y funcionalidad.",
  },
  {
    icon: Waves,
    title: "Ecografía funcional",
    description:
      "Visualizamos en tiempo real cómo trabaja tu suelo pélvico durante el ejercicio.",
  },
  {
    icon: Gauge,
    title: "Biofeedback",
    description:
      "Aprende a sentir y controlar tu musculatura pélvica con información en tiempo real.",
  },
  {
    icon: Sparkles,
    title: "Tecnología avanzada",
    description:
      "Herramientas complementarias que aceleran y potencian tu recuperación.",
  },
];

export default function SessionsSection() {
  return (
    <section
      id="sesiones"
      className="w-full py-16 px-8"
      style={{ backgroundColor: "var(--color-warm)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16 items-start">
        <p className="text-[9px] md:text-[13px] tracking-[0.35em] uppercase text-stone-500 font-medium pt-2">
          Cómo son mis sesiones
        </p>

        <div className="flex flex-col gap-14">
          <motion.div
            className="flex flex-col gap-4 max-w-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.2, ease }}
          >
            <h2
              className="text-4xl xl:text-5xl font-light leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Un acompañamiento hecho a tu medida
            </h2>
            <p className="text-base font-light text-stone-600 leading-relaxed">
              Cada mujer y cada cuerpo necesitan un acompañamiento distinto. Por
              eso, las sesiones combinan distintas técnicas y herramientas para
              ofrecer un tratamiento personalizado, completo y adaptado a cada
              etapa.
            </p>
            <p className="text-base font-light text-stone-600 leading-relaxed">
              El objetivo no es solo tratar síntomas, sino acompañarte para que
              recuperes bienestar, confianza y herramientas reales para cuidar
              de ti.
            </p>
          </motion.div>

          {/* Step-by-step visual map */}
          <motion.div
            className="relative flex flex-col md:flex-row gap-10 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Connecting line — vertical on mobile, horizontal on desktop */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-stone-200 md:hidden" />
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-stone-200" />

            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                className="relative flex md:flex-col items-start gap-4 md:gap-4 flex-1 pl-16 md:pl-0"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: "easeOut" },
                  },
                }}
              >
                <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto w-12 h-12 rounded-full text-white flex items-center justify-center shrink-0 z-10 bg-[var(--color-foreground)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:scale-110">
                  <Icon size={20} />
                </div>
                <div className="flex flex-col gap-1 md:pt-1">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-stone-600 font-semibold">
                    Paso {i + 1}
                  </span>
                  <h3 className="text-lg font-normal text-stone-900">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div>
            <Link
              href="/sobre-mi"
              className="inline-block bg-stone-900 text-white text-[9px] tracking-widest uppercase px-6 py-3 rounded-full"
            >
              Conoce más sobre mí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
