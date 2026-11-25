import Link from "next/link";
import { BOOKING_URL } from "@/lib/links";
import ContactSection from "@/components/contact-section";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";
import JsonLd, { breadcrumb } from "@/components/seo/json-ld";

export const metadata = pageMetadata({
  title: "Contacto y cita en San Pedro Alcántara | Roser Sabater",
  description:
    "Pide cita con Roser Sabater en C. de San Javier 16, San Pedro Alcántara. Lunes a viernes de 9:00 a 17:00. Llama o escribe por WhatsApp al 650 94 25 60.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main
      className="min-h-screen pt-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumb([{ name: "Contacto", path: "/contacto" }]),
        }}
      />
      {/* ── Sección 1: Hero texto ── */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16 items-start">
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
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16">
          <div />

          <div className="grid grid-cols-3 gap-8 border-t border-stone-200 pt-10">
            {/* Dirección */}
            <div className="flex flex-col gap-2">
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-1">
                Dónde encontrarme
              </p>
              <address className="not-italic text-sm font-light text-stone-800 leading-relaxed">
                C. de San Javier, 16, 4B
                <br />
                29670 San Pedro Alcántara
                <br />
                Málaga
              </address>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest uppercase text-stone-500 underline hover:opacity-60 transition-opacity mt-1"
              >
                Cómo llegar
              </a>
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
                href={BUSINESS.telephoneHref}
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

      {/* ── Mapa (carga diferida) ── */}
      <section className="w-full pb-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16">
          <div />
          <iframe
            title="Mapa de Roser Sabater Fisioterapia en San Pedro Alcántara"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "Roser Sabater Fisioterapia, C. de San Javier 16, 29670 San Pedro Alcántara",
            )}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 rounded-3xl border-0"
          />
        </div>
      </section>

      {/* ── Sección 3: Formulario de contacto ── */}
      <ContactSection />
    </main>
  );
}
