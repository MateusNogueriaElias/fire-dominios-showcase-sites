
import { ChevronDown } from "lucide-react";
import DynamicNetworkBackground from "./DynamicNetworkBackground";

const Hero = () => (
  <section className="relative overflow-hidden pt-36 pb-24 bg-gradient-to-br from-fire-light via-[#fff2e8] to-white min-h-[50vh] animate-fade-in">
    {/* Fundo dinâmico de rede/conexões */}
    <DynamicNetworkBackground />

    {/* Background shapes */}
    <div
      className="absolute opacity-50 blur-lg -z-10 left-[-100px] top-[-140px] w-[420px] h-[290px] bg-fire rounded-full"
      aria-hidden="true"
    />
    <div
      className="absolute opacity-30 blur-2xl -z-10 right-[-100px] top-[-120px] w-[380px] h-[270px] bg-fire-dark rounded-full"
      aria-hidden="true"
    />

    <div className="container mx-auto flex flex-col items-center justify-center gap-6">
      <h1 className="font-playfair text-5xl md:text-6xl font-extrabold mb-3 text-fire drop-shadow-xl text-center animate-enter">
        Sites Que <span className="bg-gradient-to-r from-fire to-fire-dark bg-clip-text text-transparent">Impressionam</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-center text-gray-700 mb-4 animate-fade-in">
        Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
      </p>

      <a
        href="#portfolio"
        className="inline-flex items-center px-8 py-3 rounded-full bg-fire text-white font-semibold shadow-lg hover:bg-fire-dark active:scale-95 transition text-lg gap-3 group relative overflow-hidden"
        style={{ boxShadow: "0 0 32px 0 #fc562b88" }}
      >
        <span className="relative z-10">
          Ver Portfólio
        </span>
        <ChevronDown className="ml-2 animate-bounce-slow relative z-10" size={28} />
        {/* Efeito Glow */}
        <span className="absolute left-0 top-0 w-full h-full bg-fire-light opacity-10 group-hover:opacity-20 transition-all rounded-full z-0"></span>
      </a>
    </div>
  </section>
);

export default Hero;
