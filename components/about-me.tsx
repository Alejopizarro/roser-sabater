import Image from "next/image";
import Link from "next/link";

const SI_HAS_TENIDO = [
  "Pérdidas de orina que te hacen sentir insegura y limitada.",
  "Dolor en tus reglas que afecta tu día a día.",
  "Soledad y agotamiento en el posparto, sin energía para cuidarte.",
  "Dolor durante las relaciones que te hace perder la intimidad.",
];

export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="relative w-full bg-[#FBE67B] py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Top label */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#3D1808] font-medium mb-10">
          Conoce más sobre mí
        </p>

        <div className="flex items-end gap-10">
          {/* Left column: circular image + CTA button */}
          <div className="flex flex-col h-full items-end justify-between gap-8 w-44 shrink-0 pt-10">
            <div className="relative w-24 h-24 mb-30 rounded-full overflow-hidden">
              <Image
                src="/second-section-1.jpg"
                alt="Roser Sabater en la playa"
                fill
                className="object-cover"
              />
            </div>
            <Link
              href="#sobre-mi"
              className="bg-black text-[var(--color-accent)] self-end justify-end text-[10px] tracking-[0.18em] font-medium px-5 py-3 rounded-full hover:bg-[#2c1005] transition-colors whitespace-nowrap"
            >
              CONOCE MÁS SOBRE MÍ
            </Link>
          </div>

          {/* Main content: quote + list */}
          <div className="flex-1 max-w-4xl px-10 font-light min-w-0">
            <blockquote className="text-[2.4rem] z-10 relative xl:text-[3.0rem] leading-[1.0] text-[#872B64] font-normal mb-8">
              Sé lo que es sentirse sola en este camino. La falta de
              información, el dolor que normalizas pensando que &ldquo;es lo que
              hay&rdquo;... puede hacerte sentir perdida. Pero no tiene que ser
              así.
            </blockquote>

            <p className="text-xl text-[#7B2050] mb-5">Si has tenido</p>

            <ul className="pr-10">
              {SI_HAS_TENIDO.map((item) => (
                <li
                  key={item}
                  className="text-[13px] text-[#7B2050] border-b border-[#7B2050]/25 py-3 first:border-t first:border-[#7B2050]/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute z-8 top-15 right-45  w-42 h-42 rounded-full overflow-hidden">
            <Image
              src="/second-section-3.jpg"
              alt="Roser Sabater"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute z-8 bottom-15 right-95 w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/second-section-2.jpg"
              alt="Roser Sabater"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
