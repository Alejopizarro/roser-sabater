"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "SOBRE MÍ", href: "sobre-mi" },
  { label: "SERVICIOS", href: "servicios" },
  { label: "CONTACTO", href: "contacto" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 py-2 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" aria-label="Inicio">
          <Image
            src="/logo-roser.svg"
            alt="Logo Roser Sabater"
            width={38}
            height={46}
            priority
          />
        </Link>

        <ul className="flex items-center gap-14">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-[11px] tracking-[0.2em] font-medium text-stone-900 hover:opacity-60 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#cita"
          className="bg-[#3D1808] text-white text-[11px] tracking-[0.2em] font-medium px-7 py-3 rounded-full hover:bg-[#2c1005] transition-colors"
        >
          PIDE CITA
        </Link>
      </div>
    </nav>
  );
}
