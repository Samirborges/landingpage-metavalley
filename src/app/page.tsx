"use client";

import { SplitText } from "@/components/animations/SplitText";
import { SpotlightButton } from "@/components/ui/SpotLightButton";
import { GlowButton } from "@/components/ui/GlowButton";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import PillButton from "@/components/shared/PillButton";
import FeatureCard from "@/components/shared/FeatureCard";
import { Hourglass, BarChart, Compass } from "lucide-react";
import PricingCard from "@/components/ui/PricingCard";
import ContactInput from "@/components/shared/ContactInput";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { usePageLeave } from "@/hooks/usePageLeave";
import { ANALYTICS_CONTEXT } from "@/constants/analytics";

export default function Home() {
  useScrollTracking();
  usePageLeave(ANALYTICS_CONTEXT);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center  ">
        <div className="flex align items-center px-40 min-h-screen">
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

        {/* Descrição do problema */}

        <div className="text-center bg-[#131316] w-full py-12">
          <PillButton
            text="O Problema"
            fromColor="from-[#ff3131]"
            toColor="to-[#ff914d]"
          />

          <div className="flex px-10 mt-12 gap-8 justify-center flex-wrap mb-12">
            <FeatureCard
              title="Perdeu meses construindo algo inútil"
              description="Sem realizar uma análise detalhada do mercado você criou produtos não são capazes de gerar receita."
              icon={Hourglass}
              iconColor="#ff3131"
            />
            <FeatureCard
              title="Não soube interpretar dados para tomada de decisão"
              description="Ao visualizar métricas de suas campanhas, você não soube definir qual era o problema da sua proposta de valor?"
              icon={BarChart}
              iconColor="#ff3131"
            />
            <FeatureCard
              title="Não sabe qual próximo passo dar no seu negócio"
              description="Você não sabe qual a melhor decisão tomar para que seu negócio comece a ter prospecção de clientes"
              icon={Compass}
              iconColor="#ff3131"
            />
          </div>

          {/* Descrição da solução */}

          <PillButton
            text="Sua Solução"
            fromColor="from-[#5de0e6]"
            toColor="to-[#004aad]"
          />

          <h3 className="mt-12 mb-12 font-radio text-xl sm:text-2xl font-bold px-6 sm:px-12 md:px-32 lg:px-60">
            Transformamos sua ideia em um experimento real, coleta dados de
            comportamento e te entrega um diagnóstico claro para tomar decisão.
          </h3>

          {/* Descrição de como funciona */}

          <PillButton
            text="Como Funciona"
            fromColor="from-[#5de0e6]"
            toColor="to-[#ccff00]"
          />

          <div className="flex px-10 gap-8 justify-center flex-wrap mt-12 mb-12">
            <FeatureCard
              title="Você define a sua ideia e estruturamos ela"
              description="Estruturamos sua hipótese de forma clara e testável."
              icon={Hourglass}
              iconColor="#d7ff1b"
              colorBorder="border-[#d7ff1b]"
            />
            <FeatureCard
              title="Rodamos um experimento real da sua ideia"
              description="Criamos uma página e validamos com pessoas reais."
              icon={BarChart}
              iconColor="#d7ff1b"
              colorBorder="border-[#d7ff1b]"
            />
            <FeatureCard
              title="Você recebe o diagnóstico sobre a sua proposta"
              description="Mostramos onde você está errado e o que fazer a seguir."
              icon={Compass}
              iconColor="#d7ff1b"
              colorBorder="border-[#d7ff1b]"
            />
          </div>

          <PillButton
            text="Planos"
            fromColor="from-[#5de0e6]"
            toColor="to-[#ccff00]"
          />

          <div className="flex px-10 gap-8 justify-center flex-wrap mt-12">
            <PricingCard
              title="Plano Básico"
              price="R$50,00"
              features={[
                "Startups: 1",
                "Produtos por Startup: 1",
                "Experimentação: 1",
                "Diagnóstico: 1",
              ]}
              typePlan="basic"
            />

            <PricingCard
              title="Plano Pro"
              price="R$50,00"
              features={[
                "Startups: 1",
                "Produtos por Startup: 1",
                "Experimentação: 1",
                "Diagnóstico: 1",
              ]}
              typePlan="pro"
              highlighted
            />

            <PricingCard
              title="Plano Básico"
              price="R$50,00"
              features={[
                "Startups: 1",
                "Produtos por Startup: 1",
                "Experimentação: 1",
                "Diagnóstico: 1",
              ]}
              typePlan="enterprise"
            />
          </div>
        </div>

        <footer className="w-full p-12">
          <div className="flex flex-col gap-6">
            <ContactInput />
          </div>
        </footer>
      </main>
    </>
  );
}
