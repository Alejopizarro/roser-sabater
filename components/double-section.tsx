import {
  DoubleSectionBubbles,
  TestimonialImage,
} from "@/components/about-animated-images";
import Link from "next/link";

// Positions originally at 1728px design width, scaled to max-w-7xl (1280px).
// Scale factor: 1280 / 1728 = 0.741
const CONTAINER_H = 505; // 736 × 0.741
const OVERLAP = CONTAINER_H / 2; // 272

export default function DoubleSection() {
  return (
    <div className="relative overflow-hidden">
      {/* ── TOP SECTION: Mi Espacio ── */}
      <section
        className="w-full bg-white pt-14"
        style={{ paddingBottom: OVERLAP }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          {/* Label */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium mb-4 md:mb-10">
            Mi espacio
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: big heading */}
            <div className="md:w-[28%] shrink-0">
              <h2 className="text-5xl leading-[1.15] text-[var(--color-primary)] font-normal">
                Un lugar donde te sientes como en casa
              </h2>
            </div>

            {/* Right: three paragraphs + button */}
            <div className="md:flex-1 flex flex-col md:flex-row font-extralight text-lg md:text-[13px] text-gray-600 gap-8">
              <div className="flex-1 flex flex-col gap-5">
                <p>
                  He creado un espacio cálido y acogedor donde cada mujer puede
                  sentirse segura, escuchada y comprendida. No es una clínica
                  fría, es un lugar donde puedes hablar sin miedo y encontrar
                  soluciones reales.
                </p>
                <p>
                  Muchas mujeres han llegado sintiéndose solas, buscando
                  respuestas sin encontrarlas. Aquí te escucho y te apoyo. Con
                  fisioterapia especializada en suelo pélvico y entrenamiento
                  personalizado, trato tu cuerpo de forma integral para que
                  recuperes el equilibrio y la confianza en cada etapa de tu
                  vida.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5 justify-between">
                <p>
                  Mi enfoque combina tratamiento manual, ejercicio y respeto por
                  tu historia, emociones y cuerpo. Bienvenida contigo, confía en
                  tu recuperación y encuentra aquí el acompañamiento que
                  necesitas.
                </p>
                <Link
                  href="/sobre-mi"
                  className="w-full mt-4 text-center md:w-fit self-start bg-[var(--color-foreground)] text-[var(--color-accent)] text-sm tracking-[0.18em] font-medium px-6 py-4 rounded-full hover:bg-[#2c1005] transition-colors"
                >
                  CONOCE MÁS SOBRE MÍ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUBBLES — constrained to max-w-7xl, straddles both sections ── */}
      <div
        className="relative z-10 w-full"
        style={{
          height: CONTAINER_H,
          marginTop: -OVERLAP,
          marginBottom: -OVERLAP,
        }}
      >
        <div className="relative max-w-7xl mx-auto h-full px-8">
          <DoubleSectionBubbles />
        </div>
      </div>

      {/* ── BOTTOM SECTION: Testimonial ── */}
      <section
        className="w-full bg-[#B9A9BF] py-14"
        style={{ paddingTop: OVERLAP }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-center gap-14">
            {/* Left: image + label */}
            <div className="flex flex-col items-start gap-4 shrink-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7B2050] font-semibold">
                Qué dicen de mí
              </p>
              <TestimonialImage />
            </div>

            {/* Right: quote + testimonial text + name + dots */}
            <div className="flex-1 flex flex-col md:flex-row gap-x-12 gap-y-8 items-start">
              <blockquote className="text-4xl text-[#7B2050] font-medium italic font-[var(--font-mono)] md:w-[45%] shrink-0">
                &ldquo;Volver a sentirme segura en mi cuerpo ha sido un
                regalo&rdquo;
              </blockquote>

              <div className="flex flex-col gap-5 flex-1">
                <p className="text-sm text-stone-700">
                  Llegué con pérdidas de orina que me limitaban cada día y con
                  mucha vergüenza. Roser me explicó todo con claridad y me hizo
                  sentir acompañada desde el primer momento. Hoy controlo mi
                  cuerpo, el dolor desapareció y he recuperado una confianza que
                  pensaba que había perdido para siempre.
                </p>
                <div>
                  <p className="text-sm font-medium text-stone-800">Sofía</p>
                  <p className="text-[12px] text-stone-500">Suelo pélvico</p>
                </div>
                {/* Pagination dots */}
                <div className="flex gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-[#7B2050]" />
                  <span className="w-2 h-2 rounded-full bg-[#7B2050]/30" />
                  <span className="w-2 h-2 rounded-full bg-[#7B2050]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
