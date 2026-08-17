import FaqAccordion, { FaqItem } from "@/components/ui/faq-accordion";

const FAQS: FaqItem[] = [
  {
    question: "¿Cómo saber si necesito una valoración de suelo pélvico?",
    answer: [
      "Si tienes pérdidas de orina, sensación de peso en la pelvis, dolor durante las relaciones sexuales, molestias persistentes en el posparto o cicatrices que generan tirantez o incomodidad, puede ser un buen momento para valorar tu suelo pélvico.",
      "Muchas mujeres normalizan síntomas que tienen tratamiento y pueden mejorar significativamente.",
    ],
  },
  {
    question:
      "¿Es normal tener pérdidas de orina después del parto o al hacer deporte?",
    answer: [
      "Es frecuente, pero no debería normalizarse. Las pérdidas de orina suelen indicar que el suelo pélvico necesita valoración y tratamiento.",
      "A través de fisioterapia especializada y ejercicios adaptados, es posible mejorar el control urinario y recuperar seguridad en tu cuerpo.",
    ],
  },
  {
    question: "¿Cuándo puedo acudir a fisioterapia después del parto?",
    answer: [
      "Lo ideal es realizar una valoración a partir de las 6 semanas posparto, tanto si el parto fue vaginal como por cesárea.",
      "Antes de ese momento también pueden trabajarse ejercicios suaves de respiración, movilidad y conciencia corporal para favorecer una mejor recuperación.",
    ],
  },
  {
    question: "¿Si he tenido cesárea también debo revisar el suelo pélvico?",
    answer: [
      "Sí. Aunque no haya habido parto vaginal, el embarazo, la cicatriz y los cambios abdominales también afectan al suelo pélvico y a la recuperación global del cuerpo.",
      "Valorar la cicatriz y la funcionalidad abdominal te ayudará a prevenir molestias futuras y mejorar tu bienestar.",
    ],
  },
  {
    question: "¿Cómo son las sesiones? ¿Son dolorosas?",
    answer: [
      "Las sesiones son siempre progresivas, respetuosas y adaptadas a ti. El objetivo es ayudarte a recuperar movilidad, funcionalidad y bienestar de forma segura, con conciencia y sin dolor.",
      "Cada tratamiento combina distintas técnicas según tus necesidades y el momento en el que te encuentres.",
    ],
  },
  {
    question: "¿Cuántas sesiones necesito para notar mejoría?",
    answer: [
      "Cada mujer y cada proceso son diferentes. Algunas molestias mejoran en pocas sesiones y otros tratamientos requieren más seguimiento y trabajo progresivo.",
      "Tras la valoración inicial, recibirás una orientación realista y personalizada sobre tu proceso de recuperación.",
    ],
  },
];

export default function FaqSection() {
  return (
    <section
      className="w-full py-16 px-8"
      style={{ backgroundColor: "var(--color-muted)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16 items-start">
        <p className="text-[9px] md:text-[13px] tracking-[0.35em] uppercase text-stone-500 font-medium pt-2">
          Preguntas frecuentes
        </p>

        <div className="flex flex-col gap-10 max-w-3xl">
          <h2
            className="text-4xl xl:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Resolvemos tus dudas
          </h2>

          <FaqAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
