
import React, { useRef, useEffect } from "react";

// NOVA CONFIG MAIS IMPACTANTE
const POINTS = 54; // Mais pontos
const VELOCITY = 0.20; // Mais movimento
const CONNECTION_DIST = 185;
const LOGO_SRC = "/lovable-uploads/6e6349dd-0d71-47aa-a2d8-879e372772be.png";
const LOGO_SIZE = 28;

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
  "#fff7f2",    // branco fogo
];

const isLogoPoint = (i: number) => i % 9 === 2 && i < 33;

const DynamicNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const img = new window.Image();
    img.src = LOGO_SRC;
    logoImgRef.current = img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let width = window.innerWidth;
    let height = Math.max(window.innerHeight * 0.60, 440);

    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight * 0.60, 440);
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener("resize", handleResize);

    // PONTOS GERADOS
    const points: Point[] = Array.from({ length: POINTS }).map((_, i) => ({
      x: getRandom(48, width - 48),
      y: getRandom(48, height - 48),
      vx: getRandom(-VELOCITY, VELOCITY),
      vy: getRandom(-VELOCITY, VELOCITY),
      isLogo: isLogoPoint(i),
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // FUNDO ENERGIZADO - GRADIENTE laranja
      const grad = ctx.createRadialGradient(
        width * 0.55, height * 0.48, 140,
        width / 2, height / 2, width * 0.65
      );
      grad.addColorStop(0, "#fff5edbb");
      grad.addColorStop(0.22, "#fc562b33");
      grad.addColorStop(0.72, "#fc562b11");
      grad.addColorStop(1, "#fff0");
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // CONEXÕES (LINHAS)
      points.forEach((p1, i) => {
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < CONNECTION_DIST) {
            ctx.save();
            // Mistura cor e opacidade de acordo com distância e index
            ctx.strokeStyle = colors[(i + j) % colors.length] + (dist < 98 ? "ee" : "70");
            ctx.lineWidth = dist < 98 ? 2.54 : 1.12;
            ctx.shadowBlur = dist < 98 ? 16 : 8;
            ctx.shadowColor = "#fc562b77";
            ctx.globalAlpha = dist < 115 ? 0.94 : 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      // DESENHAR PONTOS E LOGOS
      points.forEach((p, i) => {
        ctx.save();
        if (p.isLogo && logoImgRef.current) {
          // Logo em destaque responsivo
          ctx.globalAlpha = 0.89;
          ctx.drawImage(
            logoImgRef.current,
            p.x - LOGO_SIZE / 2,
            p.y - LOGO_SIZE / 2,
            LOGO_SIZE,
            LOGO_SIZE
          );
          // Glow forte no logo
          ctx.globalAlpha = 0.35;
          ctx.beginPath();
          ctx.arc(p.x, p.y, LOGO_SIZE * 1.29, 0, Math.PI * 2);
          ctx.fillStyle = "#fc562bdd";
          ctx.shadowBlur = 36;
          ctx.shadowColor = "#fc562b";
          ctx.fill();
        } else {
          // Pontos: grandes faíscas animadas
          ctx.beginPath();
          ctx.arc(p.x, p.y, getRandom(5.8, 9.2), 0, Math.PI * 2);
          ctx.fillStyle = colors[i % colors.length];
          ctx.globalAlpha = 0.93;
          ctx.shadowColor = "#fc562bab";
          ctx.shadowBlur = 26;
          ctx.fill();

          // Brilho central branco
          ctx.beginPath();
          ctx.arc(p.x, p.y, getRandom(2.2, 4.5), 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.globalAlpha = 0.28;
          ctx.shadowBlur = 7;
          ctx.shadowColor = "#fff";
          ctx.fill();
        }
        ctx.restore();
      });

      // EFEITO "FAÍSCA": flashes meio aleatórios
      for (let k = 0; k < 13; k++) {
        ctx.save();
        ctx.globalAlpha = 0.18 + Math.sin(Date.now()/800 + k) * 0.14;
        ctx.beginPath();
        ctx.arc(
          getRandom(0, width),
          getRandom(0, height),
          getRandom(24, 49),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = colors[k % colors.length];
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#fc562b";
        ctx.fill();
        ctx.restore();
      }

      // MOVIMENTO DOS PONTOS
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 16 || p.x > width - 16) p.vx *= -1;
        if (p.y < 16 || p.y > height - 16) p.vy *= -1;
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
      className="absolute inset-0 w-full h-[min(520px,60vh)] -z-20 pointer-events-none select-none opacity-95 transition"
      style={{
        background: "transparent",
        minHeight: 390,
        maxHeight: 560,
        transition: "opacity 0.35s",
      }}
    />
  );
};

export default DynamicNetworkBackground;
