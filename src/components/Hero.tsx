
import { ChevronDown } from "lucide-react";
import React, { useRef, useCallback } from "react";
import FloatingParticles from "./FloatingParticles";
import AnimatedCounter from "./AnimatedCounter";

const PROJECT_COUNT = 38; // Altere conforme sua quantidade real

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Handler para scroll suave ao clicar CTA
  const scrollToPortfolio = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-gradient-animate relative overflow-hidden pt-32 pb-28 px-4 md:px-0 rounded-b-3xl shadow fade-out-on-scroll"
    >
      {/* Particles flutuantes */}
      <FloatingParticles />

      {/* Shapes de fundo com efeito breathing */}
      <div
        className="absolute opacity-40 blur-2xl -z-10 left-[-90px] top-[-140px] w-[390px] h-[240px] bg-fire rounded-full blob-breathing"
        aria-hidden="true"
      />
      <div
        className="absolute opacity-20 blur-2xl -z-10 right-[-90px] top-[-120px] w-[340px] h-[180px] bg-fire-dark rounded-full blob-breathing"
        aria-hidden="true"
      />

      <div className="container mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        <h1
          className="fade-slide-in delay-1 font-playfair font-extrabold text-[clamp(2.5rem,5vw,3.2rem)] mb-3 leading-tight text-center animated-gradient-text"
          style={{
            textShadow: "0 4px 16px rgba(252,86,43,0.12)",
          }}
        >
          Sites Que{" "}
          <span className="gradient-shimmer">
            Impressionam
          </span>
        </h1>
        <p
          className="fade-slide-in delay-2 text-lg md:text-2xl max-w-2xl text-center text-gray-700 mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#444",
            fontSize: "clamp(1.05rem,2vw,1.32rem)",
          }}
        >
          Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
        </p>

        {/* Contador animado de projetos */}
        <div className="mb-1 fade-slide-in delay-2">
          <span className="text-2xl md:text-3xl font-bold text-fire mr-1">
            <AnimatedCounter to={PROJECT_COUNT} />
          </span>
          <span className="text-lg md:text-xl font-semibold text-fire-dark">projetos publicados</span>
        </div>

        {/* Botão CTA com ripple + hover3D + brilho */}
        <a
          href="#portfolio"
          onClick={scrollToPortfolio}
          className="fade-slide-in delay-3 inline-flex items-center px-9 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 text-lg gap-3 group relative overflow-hidden
          cta-hero-btn"
          style={{
            boxShadow: "0 8px 24px rgba(252,86,43,0.23)",
          }}
        >
          <span className="relative z-10">Ver Portfólio</span>
          <ChevronDown className="ml-2 animate-bounce-slow relative z-10" size={28} />
          {/* Efeito brilho animado */}
          <span className="absolute left-0 top-0 w-full h-full cta-btn-glow pointer-events-none z-0"></span>
          {/* O ripple effect será aplicado via JS */}
          <span className="cta-btn-ripple absolute pointer-events-none z-0"></span>
        </a>
      </div>

      {/* SVG decorativo opcional - responsivo */}
      <svg
        className="hero-svg-wave"
        viewBox="0 0 1440 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
        height="95"
      >
        <path
          fill="#ffd0b3"
          fillOpacity="0.85"
          d="M0,65 C360,120 1080,0 1440,65 L1440,95 L0,95 Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
