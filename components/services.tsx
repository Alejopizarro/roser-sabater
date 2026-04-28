"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const SERVICES = [
  {
    image: "/suelo-pelvico.jpg",
    alt: "Suelo pélvico",
    title: "Suelo pélvico",
    paragraphs: [
      "Recupera el control urinario, elimina el dolor durante las relaciones y di adiós a la sensación de peso en la pelvis.",
      "Vuelve a sentirte segura, fuerte y libre en tu cuerpo.",
    ],
    cta: "QUIERO RECUPERAR MI BIENESTAR",
    href: "#contacto",
  },
  {
    image: "/embarazo.jpg",
    alt: "Embarazo",
    title: "Embarazo",
    paragraphs: [
      "Prepara tu cuerpo para el parto, alivia el dolor lumbar y pélvico, y prevén diástasis y desgarros.",
      "Vive tu embarazo con confianza, movilidad y sin limitaciones.",
    ],
    cta: "QUIERO PREPARARME PARA EL PARTO",
    href: "#contacto",
  },
  {
    image: "/postparto.jpg",
    alt: "Postparto",
    title: "Postparto",
    paragraphs: [
      "Recupera tu fuerza abdominal, cuida tu suelo pélvico y vuelve a sentirte tú misma sin prisas.",
      "Acompaño tu recuperación a tu ritmo, para que recuperes tu bienestar físico y emocional.",
    ],
    cta: "QUIERO RECUPERARME BIEN",
    href: "#contacto",
  },
  {
    image: "/tratamiento-cicatrices.png",
    alt: "Tratamiento y dolor de cicatrices",
    title: "Tratamiento y dolor de cicatrices",
    paragraphs: [
      "Alivia el dolor pélvico crónico, mejora la movilidad de cicatrices de cesárea o episiotomía, y recupera tu funcionalidad.",
      "Soluciones reales sin cirugía para que vuelvas a disfrutar de tu vida sin molestias.",
    ],
    cta: "QUIERO ELIMINAR EL DOLOR",
    href: "#contacto",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-baseline gap-x-10 gap-y-2 mb-8 md:mb-12">
          <span className="md:text-[10px] text-sm font-medium tracking-[0.3em] uppercase text-stone-500 shrink-0">
            Servicios
          </span>
          <h2 className="text-4xl xl:text-6xl text-[var(--color-primary)] font-light">
            Así te puedo ayudar
          </h2>
        </div>

        {/* Service cards grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {SERVICES.map(({ image, alt, title, paragraphs, cta, href }) => (
            <motion.div
              key={title}
              className="flex flex-col gap-5"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
              }}
            >
              {/* Image card with overlay */}
              <div className="relative h-[300px] rounded-4xl overflow-hidden aspect-[3/4]">
                <Image src={image} alt={alt} fill className="object-cover" />
                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                {/* Plus icon */}
                <span className="absolute top-4 right-4 text-white text-2xl font-extralight leading-none">
                  +
                </span>
                {/* Service title */}
                <p
                  className="absolute bottom-4 left-4 right-4 text-white text-xl font-normal leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                  }}
                >
                  {title}
                </p>
              </div>

              {/* Description paragraphs */}
              <div className="flex flex-col gap-3 flex-1">
                {paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-lg md:text-[13px] font-extralight text-gray-600"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* CTA button */}
              <Link
                href={href}
                className="bg-[#3D1808] text-white text-[10px] tracking-[0.18em] font-medium px-5 py-3 rounded-full hover:bg-[#2c1005] transition-colors text-center"
              >
                {cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
