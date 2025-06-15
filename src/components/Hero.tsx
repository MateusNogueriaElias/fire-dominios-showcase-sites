
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative pt-36 pb-20 px-4 w-full flex flex-col items-center justify-center text-center bg-orange-50/50 border-y border-orange-200/60"
      style={{ minHeight: 440 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
        <h1 className="font-poppins font-extrabold text-[clamp(2.7rem,6vw,3.35rem)] leading-tight text-slate-900">
          Sites Que Impressionam
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center text-slate-600">
          Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
        </p>
        <Button
          asChild
          className="group rounded-full bg-fire px-8 py-3 text-lg font-bold text-white shadow-lg shadow-fire/20 transition-all duration-300 hover:-translate-y-1 hover:bg-fire-dark hover:shadow-xl hover:shadow-fire/30"
        >
          <a href="#portfolio" className="inline-flex items-center">
            Ver Portfólio
            <ArrowDown className="ml-2 transition-transform group-hover:translate-y-1" size={22} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
