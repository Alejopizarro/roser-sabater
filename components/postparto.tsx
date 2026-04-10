import Image from "next/image";

export default function Postparto() {
  return (
    <section className="relative w-full aspect-[16/7] overflow-hidden">
      {/* Background image */}
      <Image
        src="/amarena.jpg"
        alt="Sesión de pilates de suelo pélvico"
        fill
        className="object-cover object-center"
      />

      {/* Overlay container — max-w-7xl, flex row */}
      <div className="absolute inset-0 flex items-stretch">
        <div className="max-w-7xl mx-auto p-8 w-full flex items-stretch justify-between">
          {/* Left card — gradiente espejado: #F5C09E izquierda → transparente derecha */}
          <div
            className="w-[48%] backdrop-blur-xs flex flex-col gap-y-12 py-10 px-7 rounded-3xl"
            style={{
              background: "linear-gradient(to right, #f5bf9e7e, transparent)",
            }}
          >
            <h3
              className="text-white text-4xl xl:text-5xl font-normal leading-snug"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Prepárate
              <br />
              para el parto
            </h3>
            <p className="text-white/85 text-xl max-w-sm leading-relaxed">
              El pilates te ayuda a llegar al parto más fuerte, tranquila y
              conectada contigo misma.
            </p>
          </div>

          {/* Center navigation arrows */}
          <div className="flex mx-2 items-center">
            <div className="bg-white/90 rounded-full px-3 py-2 flex items-center gap-2 shadow-sm">
              <button
                aria-label="Anterior"
                className="text-stone-600 text-xl hover:text-stone-900 transition-colors"
              >
                &#8249;
              </button>
              <button
                aria-label="Siguiente"
                className="text-stone-600 text-xl hover:text-stone-900 transition-colors"
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Right card — gradiente: transparente izquierda → #F5C09E derecha */}
          <div
            className="w-[48%] backdrop-blur-xs flex flex-col gap-y-12 py-10 px-7 rounded-3xl text-right"
            style={{
              background: "linear-gradient(to left, #f5bf9e7e, transparent)",
            }}
          >
            <h3
              className="text-white text-4xl xl:text-5xl font-normal leading-snug"
              style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
            >
              Prepárate para
              <br />
              el posparto
            </h3>
            <p className="text-white/85 text-xl max-w-sm leading-relaxed self-end">
              En el posparto, el pilates te acompaña a recuperar tu fuerza,
              cuidarte y volver a sentir tu cuerpo tuyo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
