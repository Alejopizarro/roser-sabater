"use client";
import Image from "next/image";

export default function Postparto() {
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 1; }
        }
        .postparto-card {
          animation: fadeSlideUp 0.9s ease both;
        }
        .glow-line {
          animation: glowPulse 2.8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full overflow-hidden">
        <Image
          src="/amarena.jpg"
          alt="Sesión de pilates de suelo pélvico"
          width={1920}
          height={1080}
          className="object-cover w-full max-h-[890px] object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl w-full h-full p-8 flex items-center">

            {/* Tarjeta unificada */}
            <div
              className="postparto-card w-full max-h-[590px] h-full rounded-3xl backdrop-blur-sm flex items-center"
              style={{
                background:
                  "linear-gradient(to right, #f5bf9eaa 0%, #f5bf9e33 38%, #f5bf9e33 62%, #f5bf9eaa 100%)",
              }}
            >
              {/* Lado izquierdo */}
              <div className="flex-1 flex flex-col gap-y-12 py-10 px-10">
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

              {/* Divisor central animado */}
              <div className="flex flex-col items-center gap-3 shrink-0 px-4">
                <div
                  className="glow-line w-px h-28 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #f5bf9e, transparent)",
                    boxShadow: "0 0 10px 2px #f5bf9e88",
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#f5bf9e", boxShadow: "0 0 8px 3px #f5bf9e88" }}
                />
                <div
                  className="glow-line w-px h-28 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #f5bf9e, transparent)",
                    boxShadow: "0 0 10px 2px #f5bf9e88",
                  }}
                />
              </div>

              {/* Lado derecho */}
              <div className="flex-1 flex flex-col gap-y-12 py-10 px-10 text-right">
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
        </div>
      </section>
    </>
  );
}
