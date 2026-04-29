"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-mvBlack/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Canto Esquerdo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="font-radio text-2xl font-bold tracking-tight text-black"
          >
            MetaValley
          </Link>
        </div>

        {/* Menu Central */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full border border-white/5">
          <Link
            href="#produto"
            className="text-sm font-medium text-gray-400 hover:text-[#b5ed7f] transition-colors"
          >
            Produto
          </Link>
          <Link
            href="#checkout"
            className="text-sm font-medium text-gray-400 hover:text-[#b5ed7f] transition-colors"
          >
            Checkout
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium text-gray-400 hover:text-[#b5ed7f] transition-colors"
          >
            Entrar em contato
          </Link>
        </div>

        {/* Espaçador para manter o equilíbrio (ou botão de Login) */}
        <div className="hidden md:block">
          <button className="text-sm font-bold text-white cursor-pointer bg-gradient-to-r from-[#80dbdd] to-[#b5ed7f] px-4 py-2 rounded-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
