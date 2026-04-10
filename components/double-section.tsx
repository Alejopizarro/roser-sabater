import Image from "next/image";
import Link from "next/link";

// Positions originally at 1728px design width, scaled to max-w-7xl (1280px).
// Scale factor: 1280 / 1728 = 0.741
const CONTAINER_H = 545; // 736 × 0.741
const OVERLAP = CONTAINER_H / 2; // 272

export default function DoubleSection() {
  return (
    <div className="relative overflow-hidden">
      {/* ── TOP SECTION: Mi Espacio ── */}
      <section
        className="w-full bg-white pt-14"
        style={{ paddingBottom: OVERLAP }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Label */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium mb-10">
            Mi espacio
          </p>

          <div className="flex gap-12">
            {/* Left: big heading */}
            <div className="w-[28%] shrink-0">
              <h2
                className="text-4xl xl:text-5xl leading-[1.15] text-[#3D1808] font-normal"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                Un lugar donde te sientes como en casa
              </h2>
            </div>

            {/* Right: three paragraphs + button */}
            <div className="flex-1 flex gap-8">
              <div className="flex-1 flex flex-col gap-5">
                <p className="text-[13px] text-stone-700 leading-relaxed">
                  He creado un espacio cálido y acogedor donde cada mujer puede
                  sentirse segura, escuchada y comprendida. No es una clínica
                  fría, es un lugar donde puedes hablar sin miedo y encontrar
                  soluciones reales.
                </p>
                <p className="text-[13px] text-stone-700 leading-relaxed">
                  Muchas mujeres han llegado sintiéndose solas, buscando
                  respuestas sin encontrarlas. Aquí te escucho y te apoyo. Con
                  fisioterapia especializada en suelo pélvico y entrenamiento
                  personalizado, trato tu cuerpo de forma integral para que
                  recuperes el equilibrio y la confianza en cada etapa de tu
                  vida.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5 justify-between">
                <p className="text-[13px] text-stone-700 leading-relaxed">
                  Mi enfoque combina tratamiento manual, ejercicio y respeto por
                  tu historia, emociones y cuerpo. Bienvenida contigo, confía en
                  tu recuperación y encuentra aquí el acompañamiento que
                  necesitas.
                </p>
                <Link
                  href="#sobre-mi"
                  className="self-start bg-[#3D1808] text-white text-[10px] tracking-[0.18em] font-medium px-6 py-3 rounded-full hover:bg-[#2c1005] transition-colors"
                >
                  CONOCE MÁS SOBRE MÍ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUBBLES — constrained to max-w-7xl, straddles both sections ── */}
      {/* Section boundary sits at y = OVERLAP (272px) inside this container */}
      <div
        className="relative z-10 w-full"
        style={{
          height: CONTAINER_H,
          marginTop: -OVERLAP,
          marginBottom: -OVERLAP,
        }}
      >
        <div className="relative max-w-7xl mx-auto h-full px-8">
          {/* burble-1 — small, upper-left, fully in white zone */}
          <div
            className="absolute"
            style={{ top: 80, left: 28, width: 148, height: 148 }}
          >
            <Image
              src="/burble-vector-1.png"
              alt="Espacio Roser Sabater"
              fill
              className="object-contain"
            />
          </div>

          {/* burble-2 — large, straddles boundary */}
          <div
            className="absolute"
            style={{ top: 148, left: 118, width: 300, height: 260 }}
          >
            <Image
              src="/burble-vector-2.png"
              alt="Consulta fisioterapia"
              fill
              className="object-contain"
            />
          </div>

          {/* burble-3 — medium, center-left, slightly into lavender */}
          <div
            className="absolute"
            style={{ top: 260, left: 388, width: 200, height: 193 }}
          >
            <Image
              src="/burble-vector-3.png"
              alt="Sala de tratamiento"
              fill
              className="object-contain"
            />
          </div>

          {/* burble-4 — large oval, center, spans boundary */}
          <div
            className="absolute"
            style={{ top: 47, left: 558, width: 278, height: 333 }}
          >
            <Image
              src="/burble-vector-4.png"
              alt="Equipamiento clínica"
              fill
              className="object-contain"
            />
          </div>

          {/* burble-5 — large, right side, spans boundary */}
          <div
            className="absolute"
            style={{ top: 150, left: 860, width: 263, height: 296 }}
          >
            <Image
              src="/burble-vector-5.png"
              alt="Espacio pilates"
              fill
              className="object-contain"
            />
          </div>

          {/* burble-6 — small, far right, fully in white zone */}
          <div
            className="absolute"
            style={{ top: 74, left: 1090, width: 163, height: 163 }}
          >
            <Image
              src="/burble-vector-6.png"
              alt="Sala con espejo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION: Testimonial ── */}
      <section
        className="w-full bg-[#B9A9BF] pb-14"
        style={{ paddingTop: OVERLAP }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-14">
            {/* Left: circular treatment image + label */}
            <div className="flex flex-col items-start gap-4 shrink-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#7B2050] font-semibold">
                Qué dicen de mí
              </p>
              <div className="relative w-52 h-52 rounded-lg overflow-hidden">
                <Image
                  src="/dicen-de-mi.png"
                  alt="Tratamiento fisioterapia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: quote + testimonial text + name + dots */}
            <div className="flex-1 flex gap-12 items-start">
              <blockquote
                className="text-3xl xl:text-4xl leading-[1.2] text-[#7B2050] font-normal w-[45%] shrink-0"
                style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
              >
                &ldquo;Volver a sentirme segura en mi cuerpo ha sido un
                regalo&rdquo;
              </blockquote>

              <div className="flex flex-col gap-5 flex-1">
                <p className="text-[13px] text-stone-700 leading-relaxed">
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
