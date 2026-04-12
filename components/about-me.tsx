import {
  AboutMeImages,
  AboutMeMobileImage,
} from "@/components/about-animated-images";
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
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Top label */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#3D1808] font-medium mb-10">
          Conoce más sobre mí
        </p>

        <div className="flex items-end gap-10">
          {/* Left column animada (imagen + CTA desktop) + círculos decorativos */}
          <AboutMeImages />

          {/* Main content: quote + list */}
          <div className="flex-1 max-w-4xl md:px-10 font-light min-w-0">
            <blockquote className="text-[2.4rem] z-10 relative xl:text-[3.0rem] leading-[1.0] text-[#872B64] font-normal mb-4">
              Sé lo que es sentirse sola en este camino. La falta de
              información, el dolor que normalizas pensando que &ldquo;es lo que
              hay&rdquo;... puede hacerte sentir perdida. Pero no tiene que ser
              así.
            </blockquote>

            <div>
              <AboutMeMobileImage />
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

            {/* CTA mobile */}
            <Link
              href="#sobre-mi"
              className="md:hidden mt-6 inline-block bg-black text-[var(--color-accent)] text-[10px] tracking-[0.18em] font-medium px-5 py-3 rounded-full hover:bg-[#2c1005] transition-colors whitespace-nowrap"
            >
              CONOCE MÁS SOBRE MÍ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
