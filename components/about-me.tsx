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
          {/* Mobile: absolute top-right so text takes full width */}
          {/* Desktop: in-flow flex item matching original layout */}
          <div
            className="absolute top-4 right-4 z-10 flex flex-col items-end gap-4
            md:static md:flex md:flex-col md:self-stretch md:items-end md:justify-between md:gap-8 md:w-44 md:shrink-0 md:pt-10"
          >
            <div
              className="relative w-20 h-20 rounded-full overflow-hidden
              md:w-24 md:h-24 md:mb-30"
            >
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
          </div>

          {/* Main content: quote + list */}
          <div className="flex-1 max-w-4xl md:px-10 font-light min-w-0">
            <blockquote className="text-[2.4rem] z-10 relative xl:text-[3.0rem] leading-[1.0] text-[#872B64] font-normal mb-8">
              Sé lo que es sentirse sola en este camino. La falta de
              información, el dolor que normalizas pensando que &ldquo;es lo que
              hay&rdquo;... puede hacerte sentir perdida. Pero no tiene que ser
              así.
            </blockquote>

            <div className="pt-22 md:pt-0">
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

            {/* CTA button — mobile only, shown below the list */}
            <Link
              href="#sobre-mi"
              className="md:hidden mt-6 inline-block bg-black text-[var(--color-accent)] text-[10px] tracking-[0.18em] font-medium px-5 py-3 rounded-full hover:bg-[#2c1005] transition-colors whitespace-nowrap"
            >
              CONOCE MÁS SOBRE MÍ
            </Link>
          </div>

          <div className="absolute md:hidden z-8 top-125 left-10 w-26 h-26 rounded-full overflow-hidden">
            <Image
              src="/second-section-1.jpg"
              alt="Roser Sabater"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative circles — desktop only */}
          <div className="absolute hidden md:block z-8 top-15 right-45 w-42 h-42 rounded-full overflow-hidden">
            <Image
              src="/second-section-3.jpg"
              alt="Roser Sabater"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden md:block absolute z-8 bottom-15 right-95 w-32 h-32 rounded-full overflow-hidden">
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
