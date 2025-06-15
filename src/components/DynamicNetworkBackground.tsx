
import React, { useRef, useEffect } from "react";

// Configurações da animação
const POINTS = 28;
const VELOCITY = 0.12;
const CONNECTION_DIST = 140;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const colors = ["#fc562bcc", "#ad2f0bcc", "#feb891cc"];

const DynamicNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let width = window.innerWidth;
    let height = Math.max(window.innerHeight * 0.56, 380);

    // Ajustar tamanhos responsivos
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }

    // Atualizar o tamanho ao redimensionar
    const handleResize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight * 0.56, 380);
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener("resize", handleResize);

    // Gerar pontos aleatórios
    const points: Point[] = Array.from({ length: POINTS }).map(() => ({
      x: getRandom(40, width - 40),
      y: getRandom(40, height - 40),
      vx: getRandom(-VELOCITY, VELOCITY),
      vy: getRandom(-VELOCITY, VELOCITY),
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Desenhar conexões
      points.forEach((p1, i) => {
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < CONNECTION_DIST) {
            ctx.strokeStyle = "#ffa38244";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Desenhar pontos
      points.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = colors[i % colors.length];
        ctx.globalAlpha = 0.80;
        ctx.shadowColor = "#fc562b22";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      // Atualizar posições
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 20 || p.x > width - 20) p.vx *= -1;
        if (p.y < 20 || p.y > height - 20) p.vy *= -1;
      });

      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      animationRef.current && cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full -z-20 pointer-events-none select-none opacity-80"
      style={{
        background: "transparent",
        minHeight: 350,
        maxHeight: 520,
        transition: "opacity 0.5s",
      }}
    />
  );
};

export default DynamicNetworkBackground;
