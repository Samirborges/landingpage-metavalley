"use client";

import { SpotlightButton } from "@/components/ui/SpotLightButton";
import { GlowButton } from "@/components/ui/GlowButton";
import { Navbar } from "@/components/layout/Navbar";
import PillButton from "@/components/shared/PillButton";
import { MessageSquare, Bot, LineChart, BrainCircuit, XCircle, CheckCircle2 } from "lucide-react";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { usePageLeave } from "@/hooks/usePageLeave";
import { ANALYTICS_CONTEXT } from "@/constants/analytics";
import Link from "next/link";

export default function Home() {
  useScrollTracking();
  usePageLeave(ANALYTICS_CONTEXT);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#09090b] text-zinc-300 flex flex-col items-center selection:bg-cyan-500/30 selection:text-cyan-200">

        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center text-center px-6 md:px-20 pt-40 pb-24 w-full max-w-7xl mx-auto overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm text-cyan-100">Mais de 2.000 founders já estão na lista de espera</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-google-sans">
              Valide sua ideia, antes de perder tempo <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">construindo algo inútil</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-inter">
              Venha validar sua ideia de negócios e seus produtos recebendo dados claros e direcionamento especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <Link href="#lista-de-espera" className="w-full sm:w-auto cursor-pointer hover:scale-105 transition-transform">
                <GlowButton text="Entrar na Fila de Espera" />
              </Link>
              <Link href="#como-funciona" className="w-full sm:w-auto cursor-pointer hover:scale-105 transition-transform">
                <SpotlightButton text="Como Funciona" />
              </Link>
            </div>
          </div>

          {/* Hero Visual Mockup Placeholder */}
          <div className="relative mt-20 w-full max-w-5xl aspect-[16/9] rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-2xl overflow-hidden group">
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center p-8 relative z-10">
              <MessageSquare className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
              <h3 className="text-xl text-zinc-500 font-medium font-montserrat">Mockup do Chat com Board de IA (Em Breve)</h3>
              <p className="text-sm text-zinc-600 mt-2 font-inter">Aqui entrará a representação visual da interface de conversa com os agentes</p>
            </div>
          </div>
        </section>

        {/* NÓS VS ELES SECTION */}
        <section className="w-full bg-[#131316] py-24 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 relative z-10">
              <PillButton text="O Problema" fromColor="from-[#ff3131]" toColor="to-[#ff914d]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 mb-4 font-google-sans">
                O jeito tradicional de criar empresas quebrou.
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-inter">
                Não adianta usar LLMs genéricas que só dão tapinhas nas costas e conselhos vazios. Você precisa de dados reais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
              {/* O que os outros fazem */}
              <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden transition-all hover:bg-red-500/10">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <XCircle className="w-32 h-32 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 font-montserrat">
                  <XCircle className="w-5 h-5 text-red-400" /> Como é hoje (O Problema)
                </h3>
                <ul className="space-y-6 font-inter">
                  <li className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                    <span className="text-red-400 mt-1">✕</span>
                    Gastam meses (e dinheiro) construindo sem ter validado a real necessidade do mercado.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                    <span className="text-red-400 mt-1">✕</span>
                    Pagam caro por pesquisas de mercado lentas, burocráticas e frequentemente enviesadas.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                    <span className="text-red-400 mt-1">✕</span>
                    Recebem conselhos fofos e pouco aplicáveis de LLMs genéricas que não entendem seu negócio.
                  </li>
                </ul>
              </div>

              {/* O que o MetaValley faz */}
              <div className="p-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden transition-all hover:bg-cyan-500/10">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <CheckCircle2 className="w-32 h-32 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 font-montserrat">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Com o MetaValley (A Solução)
                </h3>
                <ul className="space-y-6 font-inter">
                  <li className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="text-cyan-400 mt-1">✓</span>
                    Validação em minutos com dados quantitativos e simulação sintética de mercado.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="text-cyan-400 mt-1">✓</span>
                    Um board de diretores de IA orientando você baseados no maior dataset de founders.
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="text-cyan-400 mt-1">✓</span>
                    Sem formulários massantes: preenchimento automático do seu Canvas através da conversa.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES - COMO FUNCIONA */}
        <section id="como-funciona" className="w-full py-24 relative overflow-hidden">
          {/* Subtle bg glow right */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <PillButton text="A Solução" fromColor="from-[#5de0e6]" toColor="to-[#004aad]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 font-google-sans">
                Muito além de um conselho.<br />Nós entregamos dados.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Seu C-Level de IA</h3>
                <p className="text-zinc-400 leading-relaxed font-inter">
                  Converse no estilo WhatsApp com CEO, CTO, CFO e CMO sintéticos. Eles não dão apenas dicas, eles orientam baseados no maior dataset de validação existente.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Canvas Autopreenchível</h3>
                <p className="text-zinc-400 leading-relaxed font-inter">
                  Esqueça formulários burocráticos. Enquanto você conversa com os agentes, o seu Business Model Canvas se preenche e evolui sozinho em tempo real.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2">
                <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/30">
                  MVP v2
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LineChart className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Simulação TME</h3>
                <p className="text-zinc-400 leading-relaxed font-inter">
                  Uma simulação de mercado sintético que gera dados reais: preveja percentuais de adoção, objeções por segmento e projeções de 12 a 48 meses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING / WAITLIST */}
        <section id="lista-de-espera" className="w-full bg-[#131316] py-24 border-t border-white/5 relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <PillButton text="Acesso Antecipado" fromColor="from-[#ccff00]" toColor="to-[#72d7e1]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 mb-4 font-google-sans">
                Garanta seu lugar na fila de espera.
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-inter">
                Inscreva-se hoje para ser um dos primeiros a validar negócios com nosso board executivo de inteligência artificial assim que lançarmos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* PLAN 1 - Freemium */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Starter</h3>
                <p className="text-zinc-400 text-sm mb-6 h-10 font-inter">Ideal para estruturar e visualizar a ideia inicial.</p>
                <div className="text-4xl font-bold text-white mb-8 font-roboto">Grátis</div>

                <ul className="space-y-4 mb-8 flex-1 font-inter">
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Acesso ao Board Executivo (IA)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Canvas Autopreenchível
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Limite de interações diárias
                  </li>
                </ul>

                <button className="w-full py-4 px-4 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer font-montserrat">
                  Entrar na Fila
                </button>
              </div>

              {/* PLAN 2 - Pay per experiment */}
              <div className="bg-[#09090b] border border-cyan-500/50 rounded-3xl p-8 flex flex-col relative overflow-hidden scale-105 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                <div className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 mt-1 font-roboto">Mais Popular</div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Validation</h3>
                <p className="text-zinc-400 text-sm mb-6 h-10 font-inter">Para quem precisa de dados quantitativos reais.</p>
                <div className="text-3xl font-bold text-white mb-8 font-roboto">Sob demanda</div>

                <ul className="space-y-4 mb-8 flex-1 font-inter">
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Tudo do Starter sem limites
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Simulação de Mercado (TME)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Relatório de projeção (12 a 48m)
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Pago por experimento rodado
                  </li>
                </ul>

                <button className="w-full py-4 px-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-black transition-opacity shadow-lg cursor-pointer font-montserrat">
                  Garantir Prioridade
                </button>
              </div>

              {/* PLAN 3 - Pro */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors opacity-75">
                <div className="absolute top-4 right-4 bg-zinc-800 text-zinc-400 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-700 font-roboto">
                  Em Breve
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Pro Scale</h3>
                <p className="text-zinc-400 text-sm mb-6 h-10 font-inter">Validação completa com tráfego e usuários.</p>
                <div className="text-4xl font-bold text-zinc-500 mb-8 font-roboto">TBD</div>

                <ul className="space-y-4 mb-8 flex-1 font-inter">
                  <li className="flex items-start gap-3 text-sm text-zinc-500">
                    <CheckCircle2 className="w-5 h-5 text-zinc-700 shrink-0" /> Experimentos com pessoas reais
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-500">
                    <CheckCircle2 className="w-5 h-5 text-zinc-700 shrink-0" /> Geração de Landing Pages
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-500">
                    <CheckCircle2 className="w-5 h-5 text-zinc-700 shrink-0" /> Teste A/B com campanhas de Ads
                  </li>
                </ul>

                <button disabled className="w-full py-4 px-4 rounded-xl font-semibold bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed font-montserrat">
                  Futuro
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#09090b]">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h3 className="text-zinc-400 text-lg font-medium mb-4">
              MetaValley is the new Silicon Valley
            </h3>
            <p className="text-zinc-600 text-sm text-center">
              © {new Date().getFullYear()} MetaValley. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
