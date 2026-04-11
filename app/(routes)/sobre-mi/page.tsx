import ContactSection from "@/components/contact-section";
import {
  HeroFloatingImages,
  SilencioImages,
} from "@/components/about-animated-images";
import { Activity, GraduationCap, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="overflow-hidden">
      {/* ── Sección 1: Hero ── */}
      <section className="relative w-full h-[80vh] min-h-[360px] overflow-hidden">
        <Image
          src="/hero-about.jpg"
          alt="Roser Sabater fisioterapeuta"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Nombre centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[5rem] md:text-[7rem] leading-tight font-mono text-stone-900 text-center">
            Roser
            <br />
            Sabater
          </p>
        </div>
      </section>

      {/* ── Sección 2: Contenido principal ── */}
      <section
        className="w-full py-14 px-4"
        style={{ backgroundColor: "var(--color-warm)" }}
      >
        <div className="max-w-6xl  mx-auto">
          {/* Label top */}
          <p className="text-[9px] tracking-[0.35em] uppercase text-stone-700 font-medium mb-2 md:mb-10">
            Sobre mí
          </p>

          {/* Grid principal */}
          <div className="grid  grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10 items-start">
            {/* Col izq — credenciales */}
            <div className="hidden md:block flex flex-col self-center text-[9px] uppercase font-light text-stone-600">
              <p className="max-w-[180px]">
                Fisioterapeuta especializada en suelo pélvico y salud de la
                mujer
              </p>
              <p>
                <strong className="font-semibold text-stone-900">
                  Fundadora de{" "}
                </strong>
                Roser Sabater
              </p>
              <p>
                <strong className="font-semibold text-stone-900">
                  Colegiada Nº
                </strong>{" "}
                (su número)
              </p>
            </div>

            {/* Col centro — título + texto */}
            <div className="flex flex-col gap-10">
              {/* Título grande + fotos absolutas */}
              <div className="relative" style={{ minHeight: 450 }}>
                <h2
                  className="text-3xl md:text-4xl xl:text-5xl font-sans z-11 relative leading-[1.1] max-w-2xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  Una fisioterapia que escucha, entiende y empodera
                </h2>

                <HeroFloatingImages />
              </div>

              {/* Sub-sección: El origen */}
              <div>
                <div className="flex md:hidden flex-col self-end text-right text-md uppercase font-light text-gray-700">
                  <p>
                    Fisioterapeuta especializada en suelo pélvico y salud de la
                    mujer
                  </p>
                  <p>
                    <strong className="font-semibold text-gray-950">
                      Fundadora de{" "}
                    </strong>
                    Roser Sabater
                  </p>
                  <p>
                    <strong className="font-semibold text-gray-950">
                      Colegiada Nº
                    </strong>{" "}
                    (su número)
                  </p>
                </div>
                <h3 className="md:text-lg text-3xl text-[var(--color-primary)] my-6 font-semibold mb-4">
                  El origen: Llenando un vacío en la salud femenina
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-light text-gray-700 leading-relaxed">
                  <p>
                    Durante mis estudios de fisioterapia descubrí que existía
                    una especialidad capaz de dar respuesta a muchas necesidades
                    de las mujeres que hasta ese momento apenas se tenían en
                    cuenta. Era el año 2006, y todavía había muy pocos
                    profesionales que abordaban estos temas.
                  </p>
                  <p>
                    Sentí con claridad que había una gran falta de apoyo y de
                    información, y{" "}
                    <strong className="font-semibold">
                      supe que quería dedicar mi carrera a este campo.
                    </strong>{" "}
                    Siempre me ha movido la idea de que la ciencia y la
                    medicina, durante mucho tiempo, han dejado en segundo plano
                    la salud femenina.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div>
                <Link
                  href="#contacto"
                  className="inline-block bg-stone-900 text-white text-[10px] tracking-widest uppercase px-6 py-3"
                >
                  ¿En qué puedo ayudarte?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Sección 3: Rompiendo el silencio ── */}
      <section className="w-full py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Col izq — título + fotos */}
          <div className="flex flex-col gap-8">
            <h2
              className="font-extralight text-3xl xl:text-4xl leading-[1.1]"
              style={{ color: "var(--color-primary)" }}
            >
              Rompiendo el silencio y los tabúes
            </h2>

            {/* Dos fotos circulares escalonadas */}
            <div className="relative" style={{ height: 220 }}>
              <SilencioImages />
            </div>
          </div>

          {/* Col der — texto */}
          <div className="flex flex-col font-light font-sans gap-8">
            <p className="text-2xl text-stone-700 leading-snug">
              El suelo pélvico, el embarazo, el posparto, la sexualidad... son
              aspectos esenciales en la vida de una mujer, pero sobre los que
              todavía existen silencios y falta de información accesible. Lo
              viví en mi entorno y en mi propia piel:
            </p>

            <ul className="flex flex-col text-md text-stone-700">
              {[
                "Dudas que no se atreven a expresar.",
                "Molestias que se normalizan.",
                "Dolores que se soportan sin más.",
              ].map((item) => (
                <li
                  key={item}
                  className="py-3 border-b border-stone-200 first:border-t first:border-stone-200"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-stone-700 leading-relaxed">
              Nos han enseñado a ignorar las señales de nuestro cuerpo y a
              aceptar soluciones rápidas. Por eso me especialicé en fisioterapia
              de suelo pélvico: porque cada mujer merece conocer, escuchar y
              cuidar su cuerpo sin barreras. Cuando una mujer entiende lo que le
              ocurre y recibe un trato digno, puede empoderarse y tomar
              decisiones conscientes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sección 4: La maternidad / Mi compromiso ── */}
      <section className="relative w-full min-h-[680px] flex items-center overflow-hidden">
        <Image
          src="/about-bg.jpg"
          alt="Roser Sabater fisioterapeuta"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div
          className="relative z-10 max-w-6xl rounded-4xl mx-2 my-6 md:mx-auto px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            background: "linear-gradient(to right, #b9a9bf6c, transparent)",
          }}
        >
          <div className="flex flex-col gap-5">
            <h2
              className="text-4xl xl:text-5xl leading-[1.0] max-w-[340px] font-extralight"
              style={{ color: "var(--color-accent)" }}
            >
              La maternidad: Mi gran maestra
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
              Otro momento clave fue cuando me convertí en madre. Creía que
              sabía mucho por mi formación, pero la experiencia me mostró que
              había aspectos del embarazo y el posparto que no conocía.
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              En mi segundo parto decidí ocuparme con más conciencia de lo que
              realmente necesitaba, y descubrí en mi propia piel cómo el trabajo
              del suelo pélvico fue fundamental para mejorar mi experiencia.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:text-right">
            <h2
              className="text-4xl xl:text-5xl leading-[1.0] max-w-[340px] self-end font-extralight"
              style={{ color: "var(--color-accent)" }}
            >
              Mi compromiso contigo
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
              Esa vivencia me confirmó algo esencial: cuando una mujer recibe
              información, acompañamiento y respeto, puede transformar su salud
              y su vida.
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              Por eso, el pilar de mi trabajo es ofrecerte las herramientas
              necesarias para que te sientas la protagonista de tu propia salud.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sección 5: Formación y Experiencia ── */}
      <section
        className="w-full py-16 px-8"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:grid-rows-[auto_1fr] gap-12 items-start">
            {/* Título — mobile: 1º, desktop: col 2 fila 1 */}
            <h2 className="md:col-start-2 md:row-start-1 text-3xl xl:text-5xl font-light text-[var(--color-primary)] font-extralight">
              Formación y Experiencia
            </h2>
            {/* Foto — mobile: 2º, desktop: col 1 filas 1-2 */}
            <div className="md:col-start-1 md:row-start-1 md:row-span-2 relative w-full self-center aspect-square rounded-lg overflow-hidden">
              <Image
                src="/about-formacion.jpg"
                alt="Roser Sabater"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Texto — mobile: 3º, desktop: col 2 fila 2 */}
            <div className="md:col-start-2 md:row-start-2 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 text-lg font-light">
                <div className="flex flex-col gap-3 md:max-w-[210px]">
                  <h3 className="text-2xl font-semibold">
                    <Medal
                      size={20}
                      className="text-[var(--color-primary)] inline-flex mr-2"
                    />
                    Experiencia Cuantificable
                  </h3>
                  <p className="text-lg text-gray-700">
                    Más de 800 mujeres tratadas con éxito en problemas de suelo
                    pélvico (disfunción, embarazo, posparto y sexualidad).
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:max-w-[210px]">
                  <h3 className="text-2xl font-semibold">
                    <GraduationCap
                      size={20}
                      className="text-[var(--color-primary)] inline-flex mr-2"
                    />
                    Especialización Principal
                  </h3>
                  <p className="text-lg text-gray-700">
                    Fisioterapeuta experta en Reeducación Abdominopélvica (Suelo
                    pélvico, Obstetricia y Sexualidad Femenina).
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:max-w-[210px]">
                  <h3 className="text-2xl font-semibold">
                    <Activity
                      size={20}
                      className="text-[var(--color-primary)] inline-flex mr-2"
                    />
                    Métodos Diferenciales
                  </h3>
                  <p className="text-lg text-gray-700">
                    Dominio de metodologías clave como el Método Hipopresivo
                    (Marcel Caufriez), la Fisiogenómica y la Terapia Visceral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
