
import { ChevronDown } from "lucide-react";
// import DynamicNetworkBackground from "./DynamicNetworkBackground"; // Mantém removido

const Hero = () => (
  <section
    className={
      // Fundo gradiente dinâmico, padding vertical generoso, canto arredondado em mobile
      "hero-gradient-animate relative overflow-hidden pt-32 pb-28 px-4 md:px-0 rounded-b-3xl shadow"
    }
  >
    {/* Shapes de fundo continuam... */}
    <div
      className="absolute opacity-40 blur-2xl -z-10 left-[-90px] top-[-140px] w-[390px] h-[240px] bg-fire rounded-full"
      aria-hidden="true"
    />
    <div
      className="absolute opacity-20 blur-2xl -z-10 right-[-90px] top-[-120px] w-[340px] h-[180px] bg-fire-dark rounded-full"
      aria-hidden="true"
    />

    <div className="container mx-auto flex flex-col items-center justify-center gap-7">
      <h1
        className="fade-slide-in font-playfair font-extrabold text-[clamp(2.5rem,5vw,3.2rem)] mb-4 text-fire drop-shadow-lg text-center leading-tight"
        style={{
          textShadow: "0 4px 16px rgba(252,86,43,0.10)",
        }}
      >
        Sites Que{" "}
        <span className="bg-gradient-to-r from-fire to-fire-dark bg-clip-text text-transparent">
          Impressionam
        </span>
      </h1>
      <p
        className="fade-slide-in text-lg md:text-2xl max-w-2xl text-center text-gray-700 mb-4"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#444",
          fontSize: "clamp(1.05rem,2vw,1.35rem)",
        }}
      >
        Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
      </p>
      <a
        href="#portfolio"
        className="fade-slide-in inline-flex items-center px-9 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-lg gap-3 group relative overflow-hidden
          bg-[#fc562b] text-white
          hover:bg-[#e64a19]
          focus-visible:ring-2 focus-visible:ring-[#ad2f0b] active:scale-95"
        style={{
          boxShadow: "0 8px 24px rgba(252,86,43,0.25)",
        }}
      >
        <span className="relative z-10">Ver Portfólio</span>
        <ChevronDown className="ml-2 animate-bounce-slow relative z-10" size={28} />
        <span className="absolute left-0 top-0 w-full h-full bg-fire-light opacity-10 group-hover:opacity-20 transition-all rounded-full z-0"></span>
      </a>
    </div>
  </section>
);

export default Hero;
