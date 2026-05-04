"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const TESTIMONIALS = [
  {
    quote: "Maravilloso espacio para autocuidarnos",
    text: "Maravilloso espacio para autocuidarnos, siento que todas las personas deberíamos pasar por su consulta, trato con mucho respeto y cuidado, tiene maquinaria avanzada para los tratamientos y además ofrece otros servicios para cuidar nuestro cuerpo de dentro hacia afuera, gracias 🩷✨",
    name: "Mariana Rodríguez",
    service: "Fisioterapia",
    href: "https://share.google/RIQeuxgnuSzMiIvaU",
  },
  {
    quote: "Que alegría tan grande haber encontrado a Roser",
    text: "Que alegría tan grande haber encontrado a Roser!! Hoy tuve mi segunda sesión y estoy más que agradecida y contenta con el tratamiento que está realizando!! Ni que decir que es una gran profesional, atenta con todos los detalles y además de ser super simpática me hace sentir muy cómoda. También tengo la suerte de poder asistir a sus clases de suelo pélvico y voy notando los beneficios en el día a día siendo cada vez más consciente de la gran importancia que tiene el suelo pélvico en nuestra salud. Gracias por todo Roser!!",
    name: "Sherezade Salcedo",
    service: "Suelo pélvico",
    href: "https://share.google/Su5gByd4xEol7u68z",
  },
  {
    quote: "No me cansaré nunca de destacar lo grande que es esta chica",
    text: 'La conocí hace 7 años buscando una profesional que me impartiera clases de pilates para embarazadas. Desde aquel momento he ido de su mano, me preparé en mis dos embarazos físicamente, me enseñó a respirar y por supuesto en el postparto su ayuda fue fundamental con los hipopresivos para recuperarme. No me cansaré nunca de destacar lo "grande que es esta chica" tanto a nivel personal como profesional. Por muchos años más a tu lado viéndote crecer.',
    name: "Cristina Gonzalez",
    service: "Embarazo y postparto",
    href: "https://share.google/e5JiyfXO5NidrAQiQ",
  },
];

const TOTAL = TESTIMONIALS.length;
const DRAG_THRESHOLD = 50;

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);
  const startX = useRef(0);
  const didDrag = useRef(false);

  const isExpanded = expandedSlide === current;

  const goTo = (i: number) => {
    setCurrent(Math.max(0, Math.min(i, TOTAL - 1)));
    setExpandedSlide(null);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    didDrag.current = false;
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 5) didDrag.current = true;
    setDragOffset(delta);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -DRAG_THRESHOLD) goTo(current + 1);
    else if (dragOffset > DRAG_THRESHOLD) goTo(current - 1);
    setDragOffset(0);
  };

  const preventLinkClick = (e: React.MouseEvent) => {
    if (didDrag.current) e.preventDefault();
  };

  return (
    <motion.div
      className="flex-1 flex flex-col gap-5 select-none min-w-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.8, delay: 1.2, ease }}
    >
      {/* Sliding track */}
      <div className="overflow-hidden">
        <div
          className={isDragging ? "cursor-grabbing" : "cursor-grab"}
          style={{
            display: "flex",
            width: `${TOTAL * 100}%`,
            transform: `translateX(calc(-${(current / TOTAL) * 100}% + ${dragOffset / TOTAL}px))`,
            transition: isDragging
              ? "none"
              : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{ width: `${100 / TOTAL}%` }}
              className="flex flex-col gap-5 pr-6"
            >
              <p className={`text-sm text-stone-700 ${!isExpanded ? "line-clamp-8" : ""}`}>
                {t.text}
              </p>
              {t.text.length > 350 && !isExpanded && (
                <button
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => setExpandedSlide(current)}
                  className="text-sm text-stone-700 underline text-left -mt-3"
                >
                  ver más
                </button>
              )}
              <div>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={preventLinkClick}
                  className="text-sm font-medium text-stone-800 hover:underline"
                >
                  {t.name}
                </Link>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={preventLinkClick}
                  className="block text-[12px] text-stone-500 hover:underline"
                >
                  {t.service}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ver reseña ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-[#7B2050]" : "bg-[#7B2050]/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
