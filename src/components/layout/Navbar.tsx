"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-mvBlack/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-radio text-2xl font-bold tracking-tight  backdrop-blur-xl"
        >
          MetaValley
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full border border-white/5">
          <Link
            href="#produto"
            className="text-sm text-gray-400 hover:text-[#b5ed7f]"
          >
            Produto
          </Link>
          <Link
            href="#checkout"
            className="text-sm text-gray-400 hover:text-[#b5ed7f]"
          >
            Checkout
          </Link>
          <Link
            href="#contato"
            className="text-sm text-gray-400 hover:text-[#b5ed7f]"
          >
            Contato
          </Link>
        </div>

        {/* BOTÃO DESKTOP */}

        {/* BOTÃO MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 bg-[#0f172a] rounded-2xl p-6 border border-white/10">
            <Link href="#produto" onClick={() => setOpen(false)}>
              Produto
            </Link>

            <Link href="#checkout" onClick={() => setOpen(false)}>
              Checkout
            </Link>

            <Link href="#contato" onClick={() => setOpen(false)}>
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
