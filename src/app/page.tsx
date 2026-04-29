import { SplitText } from "@/components/animations/SplitText";
import { SpotlightButton } from "@/components/ui/SpotLightButton";
import { GlowButton } from "@/components/ui/GlowButton";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-40 ">
        <div className="flex align items-center">
          <div>
            <div className="max-w-4xl mb-8">
              <SplitText
                text="Descubra se o seu negócio pode gerar receita em até 7 dias! – Antes de perder meses construindo algo inútil"
                gradientPhrases={{
                  "Descubra se o seu negócio pode gerar receita em até":
                    "text-[#002c2b]",
                  "– Antes de perder meses": "text-[#002c2b]",
                  "7 dias!":
                    "bg-gradient-to-r from-[#80dbdd] to-[#ccff00] bg-clip-text text-transparent",
                  "construindo algo inútil":
                    "bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent",
                }}
              />
              <p className="mt-6 text-[#002c2b] text-lg  mx-auto animate-fade-in">
                Validamos sua ideia com pessoas reais e mostramos exatamente o
                que funciona, o que não funcioa e o que ajustar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <GlowButton text="Quero validar a minha ideia" />
              <SpotlightButton text="Saber mais" />
            </div>
          </div>
          {/* Como adicionar uma imagem bem aqui? */}
          <div className="mt-8">
            <Image
              src="/img/metavalley.png"
              alt="MetaValley - Validação de ideias"
              width={800}
              height={500}
            />
          </div>
        </div>
      </main>
    </>
  );
}
