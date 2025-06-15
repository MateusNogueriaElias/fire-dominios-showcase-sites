import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative pt-36 pb-32 px-4 w-full flex flex-col items-center justify-center overflow-hidden z-0"
      style={{ minHeight: 480 }}
    >
      <div className="hero-bg-circles">
        <span className="circle circle1" />
        <span className="circle circle2" />
        <span className="circle circle3" />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
        <h1 className="font-poppins font-extrabold text-[clamp(2.7rem,6vw,3.35rem)] mb-2 leading-tight text-center text-[#222]">
          Sites Que Impressionam
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl text-center mb-2 text-[#333]"
          style={{
            fontFamily: "Poppins,Inter,sans-serif",
            fontWeight: 400,
            color: "#333"
          }}
        >
          Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
        </p>
        <p className="text-lg text-[#333]">
          <span className="font-bold text-fire-DEFAULT">38</span> projetos publicados
        </p>
        <a
          href="#portfolio"
          className="cta-hero-btn group transition font-poppins font-bold flex items-center justify-center mt-2"
        >
          <span>Ver Portfólio</span>
          <ArrowDown className="ml-2" size={22} />
        </a>
      </div>
      <svg
        className="hero-wave"
        viewBox="0 0 1440 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
        height="88"
        style={{ bottom: 0, position: 'absolute', width: '100%' }}
      >
        <path
          fill="#FFE1BD"
          fillOpacity="1"
          d="M0,68 C320,124 1170,0 1440,68 L1440,88 L0,88 Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
