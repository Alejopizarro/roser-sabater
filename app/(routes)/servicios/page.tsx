import { MessageCircle } from "lucide-react";
// import Accordion from "@/components/ui/accordion";
import ServicesGrid from "@/components/ui/services-grid";
import SessionsSection from "@/components/sessions-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";

const SERVICES = [
  {
    image: "/suelo-pelvico.jpg",
    alt: "Suelo pélvico",
    title: "Suelo pélvico",
    heading: "Vuelve a sentirte segura, fuerte y libre en tu cuerpo.",
    paragraphs: [
      <>
        El suelo pélvico influye en mucho más de lo que imaginamos:{" "}
        <strong>
          continencia, postura, estabilidad, sexualidad y bienestar diario
        </strong>
        .
      </>,
      <>
        A través de un tratamiento personalizado, trabajamos síntomas como{" "}
        <strong>pérdidas de orina, sensación de peso, dolor o debilidad</strong>{" "}
        para ayudarte a recuperar confianza y calidad de vida.
      </>,
    ],
  },
  {
    image: "/embarazo.jpg",
    alt: "Embarazo",
    title: "Embarazo",
    heading:
      "Preparar tu cuerpo también es cuidar cómo quieres vivir tu parto y tu posparto.",
    paragraphs: [
      <>
        La fisioterapia durante el embarazo ayuda a acompañar los cambios del
        cuerpo de forma más consciente,{" "}
        <strong>
          reduciendo molestias lumbares y pélvicas, mejorando la movilidad
        </strong>{" "}
        y favoreciendo una mejor adaptación física al embarazo.
      </>,
      <>
        También trabajamos la{" "}
        <strong>
          preparación del suelo pélvico y la prevención de diástasis, desgarros
          y episiotomías
        </strong>
        , ayudándote a llegar al parto con mayor confianza y bienestar.
      </>,
    ],
  },
  {
    image: "/postparto.jpg",
    alt: "Posparto",
    title: "Posparto",
    heading: "Recupera tu cuerpo desde el cuidado, no desde la exigencia.",
    paragraphs: [
      <>
        El posparto necesita tiempo, atención y acompañamiento adecuado.
        Trabajamos la{" "}
        <strong>recuperación abdominal y del suelo pélvico</strong>,
        adaptándonos a tu ritmo para que vuelvas a sentirte fuerte, conectada y
        segura en tu cuerpo.
      </>,
      <>
        Te acompaño en ese puente entre el parto y la vuelta a tu rutina, al
        deporte y a tu día a día, ayudándote a{" "}
        <strong>
          recuperar confianza, bienestar y la sensación de volver a sentirte tú
          misma
        </strong>
        .
      </>,
    ],
  },
  {
    image: "/tratamiento-cicatrices.png",
    alt: "Recuperación abdominal y tratamiento de cicatrices",
    title: "Recuperación abdominal y tratamiento de cicatrices",
    heading: "Recuperar movilidad y bienestar también forma parte de sanar.",
    paragraphs: [
      <>
        La fisioterapia especializada puede ayudarte en la recuperación tras una{" "}
        <strong>
          abdominoplastia, una técnica REPA, una cesárea o una episiotomía
        </strong>
        , acompañando el proceso de forma segura y respetuosa con tu cuerpo.
      </>,
      <>
        Trabajamos para{" "}
        <strong>
          reducir dolor y adherencias, mejorar la movilidad de los tejidos
        </strong>{" "}
        y favorecer una recuperación progresiva, ayudándote a volver poco a poco
        a tu rutina y a sentirte cómoda de nuevo en tu cuerpo.
      </>,
    ],
  },
  {
    image: "/hero-roser-3.jpg",
    alt: "Dolor en las relaciones sexuales",
    title: "Dolor en las relaciones sexuales",
    heading: "Recupera el placer y la confianza en tu intimidad.",
    paragraphs: [
      <>
        El dolor durante las relaciones sexuales{" "}
        <strong>no debería normalizarse</strong>. Mediante un abordaje
        individualizado y respetuoso, trabajamos para aliviar el dolor, mejorar
        la funcionalidad del suelo pélvico y ayudarte a vivir tu intimidad con
        mayor comodidad y seguridad.
      </>,
    ],
  },
  {
    image: "/about-bg.jpg",
    alt: "Entrenamiento terapéutico personalizado",
    title: "Entrenamiento terapéutico personalizado",
    heading: "Recupera fuerza, estabilidad y confianza en tu cuerpo.",
    paragraphs: [
      <>
        El movimiento forma parte de la recuperación. A través de un{" "}
        <strong>entrenamiento terapéutico adaptado a ti</strong>, trabajamos
        fuerza, postura, movilidad y funcionalidad para ayudarte a volver de
        forma segura a tu día a día y a la práctica deportiva.
      </>,
      <>
        Cada sesión se adapta según{" "}
        <strong>tu momento vital, tus necesidades y tus objetivos</strong>,
        acompañándote de forma progresiva y respetuosa para que vuelvas a
        sentirte fuerte, conectada y segura en tu cuerpo.
      </>,
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-[var(--background)] pt-20 min-h-screen">
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16 items-start">
          {/* Col izq — label */}
          <p className="text-[9px] md:text-[13px] tracking-[0.35em] uppercase text-stone-500 font-medium pt-2">
            Servicios
          </p>

          {/* Col der — intro + CTAs + accordion */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-2xl">
              <p className="text-xl font-light text-stone-700 leading-relaxed">
                El suelo pélvico, el embarazo, el posparto o la sexualidad
                forman parte de la vida de muchas mujeres, aunque todavía siguen
                rodeados de silencios, desinformación y síntomas que se
                normalizan demasiado.
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed">
                Mi objetivo es acompañarte desde una mirada cercana, respetuosa
                y especializada, ayudándote a comprender tu cuerpo, aliviar el
                dolor y recuperar bienestar en cada etapa.
              </p>
            </div>

            {/* <Accordion items={SERVICES} /> */}
            <ServicesGrid items={SERVICES} />

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34650942560?text=Hola%20Roser%2C%20me%20gustar%C3%ADa%20recibir%20más%20información%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-[10px] tracking-widest uppercase px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                Contactar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-stone-900 text-stone-900 text-[10px] tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>

      <SessionsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
