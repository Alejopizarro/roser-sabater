"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

interface FormState {
  nombre: string;
  mail: string;
  asunto: string;
}

export default function FormController() {
  const [form, setForm] = useState<FormState>({ nombre: "", mail: "", asunto: "" });
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: conectar con endpoint de envío
    console.log("Form submitted:", form);
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {/* Heading */}
      <h2
        className="text-4xl xl:text-5xl text-[#C8845A] font-normal leading-tight"
        style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
      >
        ¿Lista para dar el paso?
      </h2>

      {/* NOMBRE */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.28em] text-white/80 font-medium uppercase">
          Nombre*
        </label>
        <input
          type="text"
          required
          value={form.nombre}
          onChange={handleChange("nombre")}
          className="bg-transparent border-b border-[#C8845A]/50 text-white py-2 outline-none focus:border-[#C8845A] transition-colors placeholder-transparent"
        />
      </div>

      {/* MAIL */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.28em] text-white/80 font-medium uppercase">
          Mail*
        </label>
        <input
          type="email"
          required
          value={form.mail}
          onChange={handleChange("mail")}
          className="bg-transparent border-b border-[#C8845A]/50 text-white py-2 outline-none focus:border-[#C8845A] transition-colors"
        />
      </div>

      {/* ASUNTO */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-[0.28em] text-white/80 font-medium uppercase">
          Asunto
        </label>
        <input
          type="text"
          value={form.asunto}
          onChange={handleChange("asunto")}
          className="bg-transparent border-b border-[#C8845A]/50 text-white py-2 outline-none focus:border-[#C8845A] transition-colors"
        />
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#C8845A]"
        />
        <span className="text-[11px] text-white/65 leading-relaxed">
          Acepto los términos y condiciones de la{" "}
          <Link
            href="/politica-de-privacidad"
            className="underline underline-offset-2 text-white/80 hover:text-white transition-colors"
          >
            Política de Privacidad.
          </Link>
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={!accepted}
        className="w-full bg-[#E8A070] text-white text-[11px] tracking-[0.28em] font-medium py-4 rounded-full hover:bg-[#D4906A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ENVIAR
      </button>
    </form>
  );
}