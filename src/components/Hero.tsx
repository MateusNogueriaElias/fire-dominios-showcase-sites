
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="
        relative pt-28 md:pt-36 pb-14 md:pb-20 px-3 md:px-4 w-full flex flex-col items-center justify-center text-center
        border-y border-orange-200/60 overflow-hidden shadow-md
      "
      // Gradiente diagonal premium de #e53b01 a #feb800
      style={{
        minHeight: 360,
        background: "linear-gradient(135deg, #e53b01 0%, #ff8800 45%, #feb800 100%)",
      }}
    >
      {/* Overlay pode ser removido para não alterar o degradê principal */}
      {/* <div
        aria-hidden
        className="absolute z-0 left-0 top-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #FFBC67CC 0%, #FF6F0040 60%, #fff0 100%)",
          opacity: 0.5,
        }}
      /> */}
      <div className="container mx-auto flex flex-col items-center justify-center gap-5 md:gap-6 relative z-10">
        <h1
          className="
            font-poppins font-extrabold text-[2.1rem] xs:text-[2.4rem] sm:text-[2.7rem] md:text-[clamp(2.8rem,7vw,3.5rem)]
            leading-tight text-white drop-shadow-md animate-enter opacity-0
          "
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Transformamos Ideias em<br className="block sm:hidden" /> Resultados Digitais
        </h1>
        <p
          className="
            text-base xs:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl text-center text-white font-medium opacity-0 animate-enter mx-auto
          "
          style={{ animationDelay: '300ms', animationFillMode: 'forwards', textShadow: "0 1px 3px #b35600" }}
        >
          Sites WordPress e soluções customizadas para empresas que querem crescer de verdade.
          <span className="hidden xs:inline"> Veja como já geramos resultados reais para nossos clientes.</span>
        </p>
        <Button
          asChild
          className="
            group rounded-full bg-white px-8 py-3 text-lg font-bold text-fire shadow-lg shadow-fire/20
            transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl hover:shadow-fire/30
            flex items-center gap-2 opacity-0 animate-enter
            w-full max-w-xs md:max-w-fit md:w-auto
          "
          style={{ animationDelay: '500ms', animationFillMode: 'forwards', minWidth: 180 }}
        >
          <a href="#portfolio" className="inline-flex items-center justify-center w-full">
            Ver nossos projetos
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={22} />
          </a>
        </Button>
        <span
          className="
            mt-4 md:mt-2 text-[13px] xs:text-sm text-orange-50/90 font-normal tracking-wide
            block md:inline text-center w-full
            md:w-auto md:text-xs
          "
        >
          <span className="inline md:hidden">
            <svg className="mx-auto mb-1" width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 4v12m0 0-4-4m4 4 4-4" stroke="#fffbe5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Role para ver o portfólio completo
        </span>
      </div>
      {/* Não precisa mais de decoração sutil extra, fundo já cobre tudo */}
    </section>
  );
};

export default Hero;

