import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-roser.png"
        alt="Roser Sabater fisioterapeuta especialista en suelo pélvico"
        fill
        className="object-cover object-[25%_75%] sm:object-center"
        priority
      />

      <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 md:px-12 sm:pt-15 h-full flex flex-col justify-center">
        <div className="">
          {/* div-1 — centrado verticalmente */}
          <div className="max-w-2xl flex flex-col gap-2">
            <h1 className="text-md sm:text-[8px] tracking-[0.35em] uppercase text-gray-600 font-semibold mb-2">
              Roser Sabater - Especialista en Suelo Pélvico
            </h1>
            <p
              className="text-6xl sm:text-5xl lg:text-6xlleading-[1.1] mb-4 text-stone-900 font-light"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Recupera tu
              <br />
              fuerza, movilidad
              <br />y confianza.
            </p>
            <Link
              href="#cita"
              className="flex items-center justify-center w-3/4 md:hidden bg-[var(--color-foreground)] mt-8 text-[var(--color-accent)] text-sm text-center tracking-[0.2em] font-medium px-7 py-4 rounded-full hover:bg-[#2c1005] transition-colors"
            >
              PIDE CITA <ArrowRight className="inline-block ml-2" size={20} />
            </Link>
          </div>

          {/* div-2 — pegado al fondo */}
          <div className="absolute sm:relative bottom-0 left-3 right-0 leading-none">
            <p
              className="text-[4.2rem] sm:text-[12rem] leading-[0.88] font-light tracking-[-0.01em] text-stone-900 whitespace-nowrap"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              R
              {/* Logo replaces the "o" — inlined SVG for proper em-based sizing */}
              <svg
                viewBox="0 0 55 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="inline-block align-text-bottom"
                style={{
                  height: "0.65em",
                  width: "auto",
                  marginBottom: "0.10em",
                }}
              >
                <path
                  d="M24.964 27.5102C34.7634 26.4611 45.9286 30.3163 46.8536 41.3373C47.9923 54.9076 37.1685 60.3061 24.8422 59.1828C4.79818 57.3561 4.15892 29.7361 24.964 27.5102ZM21.0142 32.2112C19.3326 32.554 17.4178 34.3436 16.9816 35.967C15.2067 42.5927 22.9455 51.2409 28.7454 53.6151C37.0783 57.0266 42.1021 52.1446 38.6381 43.8569C36.1157 37.8249 28.0144 30.7882 21.0142 32.2127V32.2112Z"
                  fill="currentColor"
                />
                <path
                  d="M28.777 25.7221C21.7888 26.3587 15.6535 23.2974 16.2987 15.6048C16.8237 9.35605 23.1531 7.17174 28.7078 7.7653C40.5032 9.02811 40.1392 24.6863 28.777 25.7221ZM20.957 17.0323C18.9926 21.7319 21.8415 24.4993 26.5644 22.5643C29.8525 21.2184 34.24 16.3156 33.2337 12.5598C32.9871 11.6398 31.9011 10.6248 30.9475 10.4304C26.9796 9.62316 22.386 13.6119 20.957 17.0323Z"
                  fill="currentColor"
                />
              </svg>
              ser Sabater
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-8 z-50 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="#25D366"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}
