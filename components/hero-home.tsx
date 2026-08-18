import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-warm)" }}
    >
      {/* Background photo — fills the entire section, cropped in tight on the two women */}
      <Image
        src="/roser-hero-hor.jpeg"
        alt="Roser Sabater fisioterapeuta especialista en suelo pélvico"
        fill
        className="object-cover object-[90%_38%]"
        preload
        quality={95}
        sizes="100vw"
      />

      {/* Dark "wine" wash behind the headline fading to warm light on the right — one continuous
          gradient (both meet at transparent in the middle) so there's no hard seam at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(20,10,13,0) 0%, rgba(20,10,13,0.25) 40%, rgba(20,10,13,0) 50%, rgba(255,242,177,0.2) 60%, rgba(255,242,177,0) 100%)",
        }}
      />
      {/* Top — darkens the nav area */}
      <div
        className="absolute inset-x-0 top-0 h-[26%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,10,13,0.6) 0%, rgba(20,10,13,0) 100%)",
        }}
      />
      {/* Bottom — darkens behind the "Roser Sabater" wordmark */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,10,13,0) 0%, rgba(20,10,13,0.75) 100%)",
        }}
      />

      <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="">
          {/* div-1 — centrado verticalmente */}
          <div className="relative isolate max-w-2xl flex flex-col gap-2">
            {/* Soft dark shadow behind the headline block for extra contrast */}
            <div
              className="absolute -inset-x-6 -inset-y-8 -z-10 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(20,10,13,0.55) 0%, rgba(20,10,13,0) 70%)",
              }}
            />
            <h1 className="text-md sm:text-[12px] lg:text-md tracking-[0.35em] uppercase font-semibold mb-2 text-white">
              Roser Sabater - Especialista en Suelo Pélvico
            </h1>
            <p
              className="text-6xl sm:text-5xl 2xl:text-7xl leading-[1.1] mb-4 text-white font-light"
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
            <Link
              href="#cita"
              className="hidden md:inline-flex items-center justify-center w-fit border border-white text-white mt-8 text-sm text-center tracking-[0.2em] font-medium px-8 py-4 rounded-full hover:bg-white hover:text-[var(--color-foreground)] transition-colors"
            >
              PIDE CITA
            </Link>
          </div>

          {/* div-2 — pegado al fondo, centrado */}
          <div className="absolute bottom-0 inset-x-0 flex justify-center px-4 pb-2 leading-none">
            <Image
              src="/logo-largo.svg"
              alt="Roser Sabater"
              width={1658}
              height={218}
              className="h-[2.4rem] sm:h-[6rem] brightness-0 invert"
            />
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
