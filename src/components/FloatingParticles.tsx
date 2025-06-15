import React from "react";

/**
 * FloatingParticles - pequenas bolhas com animação CSS, fundo da hero
 */
const FLOATING_PARTICLES_QTY = 10;
const getParticles = () => {
  const arr = [];
  for (let i = 0; i < FLOATING_PARTICLES_QTY; i++) {
    arr.push({
      id: `particle-${i}`,
      size: 22 + Math.random() * 26,
      left: Math.random() * 93 + "%",
      top: 8 + Math.random() * 78 + "%",
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 10,
      opacity: 0.06 + Math.random() * 0.07,
    });
  }
  return arr;
};

const FloatingParticles = () => {
  const [particles] = React.useState(() => getParticles());
  return (
    <div className="floating-particles pointer-events-none absolute inset-0 w-full h-full z-0">
      {particles.map(p => (
        <span
          key={p.id}
          className="floating-particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
