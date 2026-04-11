"use client";

import { ArrowRight } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 py-2 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex max-w-7xl mx-auto px-8 items-center justify-between">
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
            className="bg-[var(--color-foreground)] text-[var(--color-accent)] text-[11px] tracking-[0.2em] font-medium px-7 py-4 rounded-full hover:bg-[#2c1005] transition-colors"
          >
            PIDE CITA
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between px-4 py-1">
          <Link href="/" aria-label="Inicio">
            <Image
              src="/logo-roser.svg"
              alt="Logo Roser Sabater"
              width={32}
              height={39}
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            className="p-2 text-stone-900"
          >
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <rect y="0" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="7" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="14" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 w-[72%] z-[70] md:hidden bg-[#2D1020] flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="text-white p-1"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line
                x1="1"
                y1="1"
                x2="21"
                y2="21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="21"
                y1="1"
                x2="1"
                y2="21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col items-end gap-8 px-8 mt-2">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-[13px] tracking-[0.2em] font-medium hover:opacity-60 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex justify-center py-10 self-end px-8">
          <Link
            href="#cita"
            className="bg-[var(--color-warm)] text-[11px] tracking-[0.2em] font-medium px-7 py-3 rounded-full hover:bg-[#2c1005] transition-colors"
          >
            PIDE CITA <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
