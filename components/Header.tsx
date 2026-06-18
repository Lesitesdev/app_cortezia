"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/services", label: "Serviços" },
    { href: "/saloes", label: "Salões" },
    { href: "/profissionais", label: "Profissionais" },
    { href: "/minha-conta", label: "Minha conta" },
    { href: "/painel", label: "Painel" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f3f2]/90 backdrop-blur-xl border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-11 h-11 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md transition group-hover:scale-105 font-bold"
            aria-hidden="true"
          >
            C
          </div>

          <span className="text-2xl font-bold text-stone-800 transition group-hover:text-rose-500">
            Cortesia
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-rose-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/entrar"
            className="items-center justify-center px-5 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-white transition"
          >
            Entrar
          </Link>

          <Link
            href="/cadastro"
            className="px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition text-sm sm:text-base"
          >
            Começar grátis
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="lg:hidden w-11 h-11 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-800"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#f7f3f2]">
          <nav className="max-w-7xl mx-auto px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-stone-700 hover:bg-white transition"
              >
                {item.label}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link
                href="/entrar"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-stone-300 px-4 py-3 text-center font-medium"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-rose-500 text-white px-4 py-3 text-center font-medium"
              >
                Cadastrar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
