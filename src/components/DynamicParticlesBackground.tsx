
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine, Container } from "tsparticles-engine";
import Particles from "react-tsparticles";

const DynamicParticlesBackground = () => {
  // @ts-ignore
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#fff2e8" }
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 66,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: ["#fc562b", "#ad2f0b", "#ffffff"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.26,
              random: { enable: true, minimumValue: 0.14 }
            },
            size: {
              value: 2.4,
              random: { enable: true, minimumValue: 1.1 }
            },
            links: {
              enable: true,
              color: "#fc562b",
              distance: 130,
              opacity: 0.18,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.6,
              direction: "none",
              outModes: "out"
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 175,
                duration: 0.32
              },
              push: {
                quantity: 3
              }
            }
          },
          retina_detect: true,
          fullScreen: false // Mantém dentro do container fixo, não toma o <body>
        }}
      />
    </div>
  );
};

export default DynamicParticlesBackground;
