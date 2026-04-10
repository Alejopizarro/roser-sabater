import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-baseline gap-10 mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-medium shrink-0">
            Servicios
          </span>
          <h2
            className="text-5xl xl:text-6xl text-[#7B2050] font-normal"
            style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
          >
            Así te puedo ayudar
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(({ image, alt, title, paragraphs, cta, href }) => (
            <div key={title} className="flex flex-col gap-5">
              {/* Image card with overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
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
                    className="text-[13px] text-stone-600 leading-relaxed"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
