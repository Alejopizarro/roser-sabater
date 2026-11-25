"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
  text: string;
  name: string;
  service: string;
  href?: string;
};

const DOCTORALIA_URL =
  "https://www.doctoralia.es/perfil/roser-sabater-moll-2#profile-reviews";
const GOOGLE_URL =
  "https://www.google.com/maps/place/Roser+Sabater+Fisioterapia/@36.4869025,-4.997522,17z/data=!4m8!3m7!1s0xd732b733c9c25a1:0x14cfd4796bb1e970!8m2!3d36.4868982!4d-4.9949471!9m1!1b1!16s%2Fg%2F11qpfy0jy0?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D";

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Es una profesional de la pies a la cabeza, te hace sentir cómoda en todo momento, explica todo de una manera sencilla y cercana. Estoy súper contenta de haberla encontrado.",
    name: "Sara PV",
    href: DOCTORALIA_URL,
    service: "Fisioterapia",
  },
  {
    text: "No puedo recomendar más a Roser Sabater Moll. Mi experiencia con ella ha sido increíble desde el primer momento. Destaca por su profesionalidad, cercanía y la energía positiva que transmite en todo lo que hace. Personalmente, me he sentido súper cómoda y apoyada en todo momento. Tiene una forma de motivar y acompañar que realmente marca la diferencia, siempre haciendo que la experiencia sea agradable, dinámica y muy positiva. Sin duda, una persona y profesional totalmente recomendable.",
    name: "CH",
    href: DOCTORALIA_URL,
    service: "Fisioterapia",
  },
  {
    text: "No solo es fisio, es mucho más que eso. Cada visita es como ir al fisio, al psicólogo, a la matrona, al médico, a la enfermera, a la sexóloga… un poco de todo!!",
    name: "Ana María",
    href: DOCTORALIA_URL,
    service: "Fisioterapia",
  },
  {
    text: "I’ve had such a positive experience with pelvic floor therapy. Before starting, I struggled with menstrual pain, pelvic inflammation, and discomfort with intimacy. After working with my therapist, my menstrual pain has decreased significantly, and I’ve noticed better blood flow and less heaviness during my cycle. Pain with intercourse has also improved, which has been such a relief. I’ve also learned how to better connect with my abdominals, which has made me feel stronger and more in control of my body. The massage work she provides is wonderful and has helped calm down the inflammation I was experiencing. She is nice, knowledgeable, and patient, which makes each session comfortable and encouraging. I truly feel cared for, and I’ve seen real improvements in my daily life thanks to her support.",
    name: "Bianca",
    href: DOCTORALIA_URL,
    service: "Suelo pélvico",
  },
  {
    text: "Roser es encantadora y una gran profesional, con enfoque integrativo. Lo explica todo de manera muy detallada y entendible. Es muy cuidadosa en su trabajo y una persona muy empática. Gran disponibilidad de horario. Instalaciones muy cuidadas e iluminadas. Bonos y precios competitivos. La recomiendo al 100%.",
    name: "María",
    href: DOCTORALIA_URL,
    service: "Fisioterapia",
  },
  {
    text: "Roser es una excelente Fisioterapeuta, una gran profesional que está muy actualizada también a nivel multidisciplinar, es amable y cercana. Me ayudó con mi embarazo y a día de hoy, me sigue tratando la diástasis abdominal y suelo pélvico. Trabajamos tanto en sesiones privadas, como en Pilates grupal. Es de total confianza y muy recomendable.",
    name: "Paola H M",
    href: GOOGLE_URL,
    service: "Embarazo y postparto",
  },
  {
    text: "Trabaja muy bien la pelvis, tenía una cicatriz de hernia y me ha venido muy bien venir a sus clases. Son magistrales. Muy profesional. Y además los ejercicios de pilates son muy buenos para estirar la pelvis.",
    name: "Lola Secilla",
    href: GOOGLE_URL,
    service: "Pilates",
  },
  {
    text: "Estoy embarazada de 39 semanas y Roser me empezó a tratar desde la semana 12 y siempre genial! Sus masajes me han ayudado a llevar mejor mi embarazo y siempre ha resuelto mis dudas. Además de empezar a ir a su consulta también he asistido a sus clases de pilates para embarazadas y ha mejorado mucho mi suelo pélvico. Aunque esté a punto de dar a luz, me encuentro muy bien físicamente y estoy segura que han sido gracias a sus clases. Roser es muy atenta y muy profesional, las clases son prácticamente personalizadas, ya que al ser grupos reducidos, te va corrigiendo en todo momento. La recomiendo al 100 por 100! Mil gracias Roser por todo!",
    name: "Patricia Pedraza Ruz",
    href: GOOGLE_URL,
    service: "Embarazo y postparto",
  },
  {
    text: "Roser es increíble! Me trató todo mi embarazo y además de ser muy profesional es un amor de persona! Me ayudó y me dio muchísimos consejos! Hace muchas cosas diferentes e innovadoras! Super recomendable!",
    name: "Jenny Schreker",
    href: GOOGLE_URL,
    service: "Embarazo",
  },
  {
    text: "La fisio Roser es una gran profesional! Me está tratando la diástasis, cicatriz y adherencias debidas a mis dos embarazos y cesáreas. Ella es una persona con mucho conocimiento y el trato es inmejorable. La recomiendo 100%. Dedicada, preparada y humana. No es fácil encontrar a una profesional así. Hace también clases de pilates para embarazadas y para la recuperación en el post parto. Te explica bien los ejercicios para que los hagas en casa.",
    name: "Simona Bombana",
    href: GOOGLE_URL,
    service: "Postparto",
  },
];

const TOTAL = TESTIMONIALS.length;
const DRAG_THRESHOLD = 50;
const LONG_TEXT = 260;

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const didDrag = useRef(false);

  const goTo = (i: number) => {
    setCurrent(Math.max(0, Math.min(i, TOTAL - 1)));
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    didDrag.current = false;
    startX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    if (!didDrag.current && Math.abs(delta) > 5) {
      didDrag.current = true;
      // Capturamos el puntero solo cuando empieza un arrastre real,
      // para no robar los clics de los enlaces
      e.currentTarget.setPointerCapture(e.pointerId);
    }
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
          onPointerLeave={onPointerUp}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{ width: `${100 / TOTAL}%` }}
              className="flex flex-col gap-5 pr-6"
            >
              <p className="text-sm text-stone-700 line-clamp-6">
                {t.text}
              </p>
              {t.text.length > LONG_TEXT && t.href && (
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                  draggable={false}
                  className="w-fit text-sm text-stone-700 underline text-left -mt-3"
                >
                  ver más
                </Link>
              )}
              <div>
                {t.href ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-stone-800">{t.name}</p>
                    <p className="text-[12px] text-stone-500">{t.service}</p>
                  </>
                )}
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
