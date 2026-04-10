import Image from "next/image";
import FormController from "@/components/ui/form-controller";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative w-full min-h-[520px] overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/contact-bg.png"
        alt="Contacto Roser Sabater"
        fill
        className="object-cover object-center"
      />

      {/* Dark brownish overlay */}
      <div className="absolute inset-0 bg-[#2C1205]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 py-14">
        {/* Label */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium mb-8">
          Contacto
        </p>

        {/* Form card — left side, frosted glass */}
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-3xl p-8">
          <FormController />
        </div>
      </div>
    </section>
  );
}
