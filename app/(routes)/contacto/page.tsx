import Link from "next/link";
import ContactSection from "@/components/contact-section";

export default function ContactoPage() {
  return (
    <main
      className="min-h-screen pt-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* ── Sección 1: Hero texto ── */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-[160px_1fr] gap-16 items-start">
          <p className="text-[9px] tracking-[0.35em] uppercase text-stone-500 font-medium pt-2">
            Contacto
          </p>

          <div className="flex flex-col gap-6 max-w-2xl">
            <h1
              className="text-4xl xl:text-6xl font-light leading-[1.05]"
              style={{ color: "var(--color-primary)" }}
            >
              Estoy aquí para escucharte.
            </h1>
            <p className="text-base font-light text-stone-600 leading-relaxed">
              Si tienes alguna duda, quieres saber si puedo ayudarte o
              simplemente necesitas dar el primer paso, escríbeme. Juntas
              encontraremos el camino.
            </p>
            <div className="pt-2">
              <Link
                href="#contacto"
                className="inline-block bg-stone-900 text-white text-[10px] tracking-widest uppercase px-7 py-3 rounded-full hover:bg-stone-700 transition-colors"
              >
                Pide tu cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sección 2: Datos de contacto ── */}
      <section className="w-full pb-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-[160px_1fr] gap-16">
          <div />

          <div className="grid grid-cols-3 gap-8 border-t border-stone-200 pt-10">
            {/* Dirección */}
            <div className="flex flex-col gap-2">
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-1">
                Dónde encontrarme
              </p>
              <p className="text-sm font-light text-stone-800 leading-relaxed">
                C. de San Javier, 16, 4B
                <br />
                29670 San Pedro Alcántara
                <br />
                Málaga
              </p>
            </div>

            {/* Horario */}
            <div className="flex flex-col gap-2">
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-1">
                Horario
              </p>
              <p className="text-sm font-light text-stone-800 leading-relaxed">
                Lunes a Viernes
                <br />
                9h — 17h
              </p>
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="flex flex-col gap-2">
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-1">
                Teléfono y WhatsApp
              </p>
              <a
                href="tel:650942560"
                className="text-sm font-light text-stone-800 hover:opacity-60 transition-opacity"
              >
                650 94 25 60
              </a>
              <a
                href="https://wa.me/34650942560"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest uppercase text-stone-500 underline hover:opacity-60 transition-opacity mt-1"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sección 3: Formulario de contacto ── */}
      <ContactSection />
    </main>
  );
}
