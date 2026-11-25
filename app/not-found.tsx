import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

// Next.js devuelve esta página con estado HTTP 404 real
export default function NotFound() {
  return (
    <main
      className="min-h-[70vh] pt-32 pb-20 px-8 flex items-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-6 text-center items-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500 font-medium">
          Error 404
        </p>
        <h1
          className="text-4xl xl:text-5xl font-light leading-tight"
          style={{ color: "var(--color-primary)" }}
        >
          Esta página no existe
        </h1>
        <p className="text-base font-light text-stone-600 leading-relaxed">
          Puede que el enlace esté mal o que la página se haya movido. Te dejo
          por aquí lo más importante:
        </p>
        <nav className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/"
            className="bg-stone-900 text-white text-[10px] tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-stone-700 transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href="/servicios"
            className="border border-stone-900 text-stone-900 text-[10px] tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
          >
            Ver servicios
          </Link>
          <Link
            href="/contacto"
            className="border border-stone-900 text-stone-900 text-[10px] tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </main>
  );
}
