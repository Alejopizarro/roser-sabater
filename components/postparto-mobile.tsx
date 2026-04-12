import Image from "next/image";

export default function PostpartoMobile() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "642px" }}
    >
      {/* Background image */}
      <Image
        src="/amarena-mobile.jpg"
        alt="Sesión de pilates de suelo pélvico"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay 30% */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Cards + nav */}
      <div className="absolute inset-0">
        {/* Left card — gradient left → transparent */}
        <div
          className="absolute"
          style={{
            left: "10px",
            top: "142px",
            width: "250px",
            height: "400px",
            borderRadius: "50px",
          }}
        >
          {/* Blur layer */}
          <div
            className="absolute inset-0 backdrop-blur-xs"
            style={{
              borderRadius: "50px",
              background: "linear-gradient(to right, #f5bf9e7e, transparent)",
            }}
          />
          {/* Text layer — above blur */}
          <div className="relative z-10 flex flex-col h-full justify-center p-4 max-w-4/6">
            <h3 className="text-white text-3xl mb-8 font-extralight">
              Prepárate
              <br />
              para el parto
            </h3>
            <p className="text-white/85 text-sm leading-relaxed">
              El pilates te ayuda a llegar al parto más fuerte, tranquila y
              conectada contigo misma.
            </p>
          </div>
        </div>

        {/* Right card — gradient transparent ← right */}
        <div
          className="absolute"
          style={{
            right: "10px",
            top: "142px",
            width: "250px",
            height: "400px",
            borderRadius: "50px",
          }}
        >
          {/* Blur layer */}
          <div
            className="absolute inset-0 backdrop-blur-xs"
            style={{
              borderRadius: "50px",
              background: "linear-gradient(to left, #f5bf9e7e, transparent)",
            }}
          />
          {/* Text layer — above blur */}
          <div className="relative z-10 flex flex-col self-end h-full justify-center p-4 text-right items-end">
            <div className="max-w-4/6">
              <h3 className="text-white text-3xl mb-8 font-extralight">
                Prepárate
                <br />
                para el posparto
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                En el posparto, el pilates te acompaña a recuperar tu fuerza,
                cuidarte y volver a sentir tu cuerpo tuyo.
              </p>
            </div>
          </div>
        </div>

        {/* Center navigation arrows — vertically centered within cards */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "50%",
            top: "250px",
            transform: "translateX(-50%)",
            height: "217px",
            zIndex: 10,
          }}
        >
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
      </div>
    </section>
  );
}
