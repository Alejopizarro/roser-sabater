import Link from "next/link";
import Accordion from "@/components/ui/accordion";
import ContactSection from "@/components/contact-section";

const SERVICES = [
  {
    image: "/suelo-pelvico.jpg",
    alt: "Suelo pélvico",
    title: "Suelo pelvico",
    heading: "Vuelve a sentirte segura, fuerte y libre en tu cuerpo.",
    paragraphs: [
      <>
        Recupera el control urinario, elimina el dolor durante las relaciones y
        di adiós a la sensación de peso en la pelvis. Si sufres{" "}
        <strong>
          escapes de orina, prolapso, dolor pélvico o disfunción sexual
        </strong>
        , no tienes que resignarte: existe tratamiento efectivo y personalizado.
      </>,
      <>
        A través de la <strong>fisioterapia de suelo pélvico</strong> trabajamos
        juntas la musculatura, la postura y los hábitos que influyen en tu
        pelvis. Cada sesión es un espacio de escucha donde entendemos qué le
        pasa a tu cuerpo y por qué.
      </>,
      <>
        El objetivo no es solo aliviar los síntomas, sino que{" "}
        <strong>entiendas tu cuerpo y recuperes la confianza</strong> en él para
        hacer todo lo que quieras sin miedo ni limitaciones.
      </>,
    ],
  },
  {
    image: "/embarazo.jpg",
    alt: "Embarazo",
    title: "Embarazo",
    heading: "Prepara tu cuerpo para el parto y vive tu embarazo sin dolor.",
    paragraphs: [
      <>
        El embarazo transforma tu cuerpo a un ritmo acelerado. El dolor lumbar,
        la presión pélvica y los cambios posturales son frecuentes, pero{" "}
        <strong>no son inevitables</strong>. Con fisioterapia especializada
        puedes aliviarlos y prepararte de forma activa para el parto.
      </>,
      <>
        Trabajamos la{" "}
        <strong>preparación perineal, la movilidad de cadera</strong> y la
        conciencia corporal para que llegues al parto con más recursos, menos
        miedo y un cuerpo que sabe lo que va a hacer.
      </>,
      <>
        También prevenimos la{" "}
        <strong>diástasis abdominal y los desgarros</strong> perineales, dos de
        las consecuencias más comunes del parto que con acompañamiento adecuado
        se pueden minimizar significativamente.
      </>,
    ],
  },
  {
    image: "/postparto.jpg",
    alt: "Posparto",
    title: "Posparto",
    heading: "Recupérate bien y vuelve a sentirte tú, a tu ritmo.",
    paragraphs: [
      <>
        El posparto es un momento de grandes cambios físicos y emocionales. El
        cuerpo necesita tiempo y acompañamiento para sanar bien, ya sea tras un{" "}
        <strong>parto vaginal o una cesárea</strong>. Empezar la recuperación de
        forma adecuada marca la diferencia a largo plazo.
      </>,
      <>
        Evaluamos tu <strong>suelo pélvico, el abdomen y la cicatriz</strong>{" "}
        (si la hay) para diseñar un plan de recuperación adaptado a ti. No
        existe una única forma correcta de recuperarse: vamos a tu ritmo y
        respetamos tu proceso.
      </>,
      <>
        El objetivo es que recuperes tu{" "}
        <strong>fuerza, tu funcionalidad y tu bienestar</strong>, para que
        puedas cuidar a tu bebé desde un cuerpo que también se siente cuidado.
      </>,
    ],
  },
  {
    image: "/tratamiento-cicatrices.png",
    alt: "Tratamiento y dolor de cicatrices",
    title: "Tratamiento y dolor de cicatrices",
    heading: "Alivia el dolor y recupera la movilidad que creías perdida.",
    paragraphs: [
      <>
        Las cicatrices de <strong>cesárea, episiotomía o laparoscopia</strong>{" "}
        pueden generar adherencias, tirantez y dolor que persiste meses o años
        después de la intervención. Con fisioterapia visceral y manual podemos
        liberar esas tensiones sin cirugía.
      </>,
      <>
        El trabajo sobre la cicatriz{" "}
        <strong>mejora la sensibilidad de la zona</strong>, reduce el dolor
        durante las relaciones y devuelve movilidad a los tejidos circundantes,
        incluyendo vejiga, útero e intestino.
      </>,
      <>
        Muchas mujeres llegan sintiéndose desconectadas de esa parte de su
        cuerpo. El tratamiento también trabaja{" "}
        <strong>la reconexión y la aceptación</strong>, para que esa cicatriz
        deje de ser una fuente de malestar y se integre como parte de tu
        historia.
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
          <p className="text-[9px] tracking-[0.35em] uppercase text-stone-500 font-medium pt-2">
            Servicios
          </p>

          {/* Col der — intro + accordion + CTA */}
          <div className="flex flex-col gap-10">
            <p className="text-xl font-light text-stone-700 leading-relaxed max-w-2xl">
              El suelo pélvico, el embarazo, el posparto, la sexualidad... son
              aspectos esenciales en la vida de una mujer, pero sobre los que
              todavía existen silencios y falta de información accesible.
            </p>

            <Accordion items={SERVICES} />

            <div>
              <Link
                href="/sobre-mi"
                className="inline-block bg-stone-900 text-white text-[9px] tracking-widest uppercase px-6 py-3 rounded-full"
              >
                Conoce más sobre mí
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
