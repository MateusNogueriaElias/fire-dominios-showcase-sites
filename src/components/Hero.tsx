
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="
        relative pt-36 pb-20 px-4 w-full flex flex-col items-center justify-center text-center
        bg-gradient-to-b from-orange-50/80 to-white border-y border-orange-200/60 overflow-hidden
        shadow-md
      "
      style={{ minHeight: 440 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
        <h1
          className="
            font-poppins font-extrabold text-[clamp(2.8rem,7vw,3.5rem)]
            leading-tight text-slate-900 drop-shadow-sm animate-enter opacity-0
          "
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Transformamos Ideias em Resultados Digitais
        </h1>
        <p
          className="
            text-lg md:text-xl max-w-2xl text-center text-slate-600 font-medium opacity-0 animate-enter
          "
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Sites WordPress e soluções customizadas para empresas que querem crescer de verdade. Veja como já geramos resultados reais para nossos clientes.
        </p>
        <Button
          asChild
          className="
            group rounded-full bg-fire px-8 py-3 text-lg font-bold text-white shadow-lg shadow-fire/20
            transition-all duration-300 hover:-translate-y-1 hover:bg-fire-dark hover:shadow-xl hover:shadow-fire/30
            flex items-center gap-2 opacity-0 animate-enter
          "
          style={{ animationDelay: '500ms', animationFillMode: 'forwards', minWidth: 220 }}
        >
          <a href="#portfolio" className="inline-flex items-center justify-center w-full">
            Ver nossos projetos
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={22} />
          </a>
        </Button>
        <span className="mt-1 text-xs text-slate-400 font-normal tracking-wide">
          Role para ver o portfólio completo
        </span>
      </div>
    </section>
  );
};

export default Hero;
