
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const DynamicParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#ffffff" },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: ["#FFB56B", "#FFE1BD", "#FF6F00"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.2,
              random: { enable: true, minimumValue: 0.1 },
            },
            size: {
              value: 2,
              random: { enable: true, minimumValue: 1 },
            },
            links: {
              enable: true,
              color: "#FF6F00",
              distance: 130,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.3,
              },
              push: {
                quantity: 3,
              },
            },
          },
          retina_detect: true,
          fullScreen: false, // Mantém dentro do container fixo, não toma o <body>
        }}
      />
    </div>
  );
};

export default DynamicParticlesBackground;
