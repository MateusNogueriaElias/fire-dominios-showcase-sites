
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative pt-36 pb-32 px-4 w-full flex flex-col items-center justify-center overflow-hidden bg-white z-0"
      style={{ minHeight: 480 }}
    >
      <div className="hero-bg-circles">
        <span className="circle circle1" />
        <span className="circle circle2" />
        <span className="circle circle3" />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        <h1 className="font-poppins font-extrabold text-[clamp(2.7rem,6vw,3.35rem)] mb-2 leading-tight text-center text-[#222]">
          Sites Que Impressionam
        </h1>
        <p
          className="text-lg md:text-2xl max-w-2xl text-center mb-4 text-[#333]"
          style={{
            fontFamily: "Poppins,Inter,sans-serif",
            fontWeight: 400,
            color: "#333"
          }}
        >
          Portfólio da Fire Domínios: projetos de alto impacto em design e tecnologia para web.
        </p>
        <a
          href="#portfolio"
          className="cta-hero-btn group transition font-poppins font-bold flex items-center justify-center"
          style={{
            backgroundColor: "#FF6F00",
            color: "#fff",
            borderRadius: "1.6rem",
            fontWeight: 700,
            fontSize: "1.15rem",
            padding: "0.95rem 2.4rem",
            boxShadow: "0 6px 18px rgba(255,111,0,0.09)",
            gap: "0.5rem",
          }}
          onMouseOver={e =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#FFA040")
          }
          onMouseOut={e =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#FF6F00")
          }
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

