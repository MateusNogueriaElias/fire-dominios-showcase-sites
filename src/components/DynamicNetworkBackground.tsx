
import React, { useRef, useEffect } from "react";

// Configurações aprimoradas
const POINTS = 38; // Mais densidade de pontos
const VELOCITY = 0.14;
const CONNECTION_DIST = 153;

// Carrega o logo (de forma leve e translúcida)
const LOGO_SRC = "/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png";
const LOGO_SIZE = 26; // px, para logos na rede

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isLogo?: boolean;
};

const colors = [
  "#fc562b",    // fire principal
  "#ad2f0b",    // fire escuro
  "#feb891",    // fire claro
  "#ffae69",    // faísca
  "#ffd5be",    // brilho extra
];

// Indica quais pontos terão um mini logo - 1 a cada 7 pontos, no máximo 4
const isLogoPoint = (i: number) => i % 7 === 1 && i < 28;

const DynamicNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>();

  // Carregar o logo
  useEffect(() => {
    const img = new window.Image();
    img.src = LOGO_SRC;
    logoImgRef.current = img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let width = window.innerWidth;
    let height = Math.max(window.innerHeight * 0.57, 390);

    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight * 0.57, 390);
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener("resize", handleResize);

    // Gerar pontos (alguns com logo)
    const points: Point[] = Array.from({ length: POINTS }).map((_, i) => ({
      x: getRandom(40, width - 40),
      y: getRandom(40, height - 40),
      vx: getRandom(-VELOCITY, VELOCITY),
      vy: getRandom(-VELOCITY, VELOCITY),
      isLogo: isLogoPoint(i),
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Fundo luminoso sutil, reforçando conexão digital
      const grad = ctx.createRadialGradient(width / 2, height * 0.55, 90, width / 2, height / 2, width * 0.7);
      grad.addColorStop(0, "#ffe6d250");
      grad.addColorStop(0.4, "#fc562b0a");
      grad.addColorStop(1, "#ffffff00");
      ctx.save();
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Desenhar conexões
      points.forEach((p1, i) => {
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < CONNECTION_DIST) {
            ctx.save();
            ctx.strokeStyle = colors[(i + j) % colors.length] + (dist < 70 ? "ee" : "55");
            ctx.lineWidth = dist < 70 ? 2.2 : 1.1;
            ctx.globalAlpha = dist < 78 ? 0.82 : 0.32;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      // Desenhar pontos e logos
      points.forEach((p, i) => {
        ctx.save();
        if (p.isLogo && logoImgRef.current) {
          ctx.globalAlpha = 0.78;
          ctx.drawImage(
            logoImgRef.current,
            p.x - LOGO_SIZE / 2,
            p.y - LOGO_SIZE / 2,
            LOGO_SIZE,
            LOGO_SIZE
          );
          // Glow do logo (reforça identidade)
          ctx.globalAlpha = 0.33;
          ctx.beginPath();
          ctx.arc(p.x, p.y, LOGO_SIZE / 1.15, 0, Math.PI * 2);
          ctx.fillStyle = "#fc562b66";
          ctx.shadowBlur = 27;
          ctx.shadowColor = "#fc562b";
          ctx.fill();
        } else {
          // Pontos normais: faíscas em tons fire
          ctx.beginPath();
          ctx.arc(p.x, p.y, getRandom(3.2, 5.2), 0, Math.PI * 2);
          ctx.fillStyle = colors[i % colors.length];
          ctx.globalAlpha = 0.80;
          ctx.shadowColor = "#fc562b33";
          ctx.shadowBlur = 18;
          ctx.fill();
        }
        ctx.restore();
      });

      // Brilhos extras randômicos (efeito digital)
      for (let k = 0; k < 9; k++) {
        ctx.save();
        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.arc(
          getRandom(0, width),
          getRandom(0, height),
          getRandom(19, 33),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = colors[k % colors.length];
        ctx.fill();
        ctx.restore();
      }

      // Atualizar posições
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        // Rebater nas bordas
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
      className="absolute inset-0 w-full h-full -z-20 pointer-events-none select-none opacity-90"
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
