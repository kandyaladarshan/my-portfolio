"use client";

import { useEffect, useRef } from "react";

interface LightOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  colorCore: string;
  glowColor: string;
}

// Gentle, clean light blue & soft cyan palette
const LIGHT_BLUE_PALETTE = [
  { core: "#f0f9ff", glow: "rgba(56, 189, 248, 0.65)" }, // Ice light blue
  { core: "#e0f2fe", glow: "rgba(14, 165, 233, 0.55)" }, // Soft sky blue
  { core: "#bae6fd", glow: "rgba(0, 212, 255, 0.6)" },  // Electric neon cyan
  { core: "#7dd3fc", glow: "rgba(3, 105, 161, 0.45)" }, // Deep soft blue
];

export default function TwinkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const orbs: LightOrb[] = [];
    const maxOrbs = 70;

    let mousePos = { x: -1000, y: -1000 };
    let lastMousePos = { x: -1000, y: -1000 };
    let isHovering = false;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const spawnLight = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        if (orbs.length >= maxOrbs) {
          orbs.shift();
        }

        const color =
          LIGHT_BLUE_PALETTE[Math.floor(Math.random() * LIGHT_BLUE_PALETTE.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;

        orbs.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2, // very subtle upward drift
          radius: Math.random() * 9 + 6,
          alpha: 0.8,
          decay: Math.random() * 0.022 + 0.018, // smooth ~0.6-0.9s fade
          colorCore: color.core,
          glowColor: color.glow,
        });
      }
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mousePos = { x: clientX, y: clientY };
      isHovering = true;

      const dist = Math.hypot(clientX - lastMousePos.x, clientY - lastMousePos.y);

      // Spawn soft light orbs smoothly along the path
      if (dist > 4) {
        const count = Math.min(Math.floor(dist / 10) + 1, 3);
        spawnLight(clientX, clientY, count);
        lastMousePos = { x: clientX, y: clientY };
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Soft light-blue ambient glow following active cursor
      if (isHovering && mousePos.x > 0 && mousePos.y > 0) {
        const cursorGlow = ctx.createRadialGradient(
          mousePos.x,
          mousePos.y,
          0,
          mousePos.x,
          mousePos.y,
          36
        );
        cursorGlow.addColorStop(0, "rgba(224, 242, 254, 0.45)");
        cursorGlow.addColorStop(0.35, "rgba(56, 189, 248, 0.22)");
        cursorGlow.addColorStop(0.7, "rgba(14, 165, 233, 0.08)");
        cursorGlow.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 36, 0, Math.PI * 2);
        ctx.fill();

        // Tiny soft center core
        ctx.fillStyle = "rgba(240, 249, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Trailing light-blue orbs fading away smoothly
      for (let i = orbs.length - 1; i >= 0; i--) {
        const orb = orbs[i];

        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.vx *= 0.96;
        orb.vy *= 0.96;
        orb.radius += 0.35; // gentle diffusion
        orb.alpha -= orb.decay;

        if (orb.alpha <= 0) {
          orbs.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, orb.alpha));

        const grad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        grad.addColorStop(0, orb.colorCore);
        grad.addColorStop(0.4, orb.glowColor);
        grad.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
