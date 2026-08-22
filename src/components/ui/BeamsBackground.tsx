"use client";

import React, { useEffect, useRef } from "react";

interface BeamsBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
}

export function BeamsBackground({
  className = "",
  intensity = "subtle",
}: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Detect mobile or low power
    const isMobile = window.innerWidth < 768;
    const beamCount = isMobile ? 6 : 10; // Drastic reduction from 30+ to 6-10 beams

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const updateSize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", updateSize, { passive: true });

    // Create lightweight beams
    const beams: Beam[] = Array.from({ length: beamCount }, (_, i) => {
      const isOrange = i % 2 === 0;
      return {
        x: Math.random() * width * 1.2 - width * 0.1,
        y: Math.random() * height * 1.2,
        width: isMobile ? 40 + Math.random() * 40 : 60 + Math.random() * 80,
        length: height * 1.8,
        angle: -32,
        speed: 0.25 + Math.random() * 0.35, // Smooth slow speed
        opacity: isMobile ? 0.08 + Math.random() * 0.08 : 0.12 + Math.random() * 0.1,
        hue: isOrange ? 28 : 200,
      };
    });

    const angleRad = (-32 * Math.PI) / 180;

    let lastDraw = 0;
    const fpsInterval = 1000 / 45; // Cap at 45fps to save GPU/battery

    const render = (currentTime: number) => {
      animationFrameRef.current = requestAnimationFrame(render);

      const elapsed = currentTime - lastDraw;
      if (elapsed < fpsInterval) return;
      lastDraw = currentTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, width, height);

      // Lightweight gradient rendering
      for (let i = 0; i < beams.length; i++) {
        const beam = beams[i];
        beam.y -= beam.speed;

        if (beam.y + beam.length < -50) {
          beam.y = height + 50;
          beam.x = Math.random() * width * 1.2 - width * 0.1;
        }

        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate(angleRad);

        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 55%, 0)`);
        gradient.addColorStop(0.2, `hsla(${beam.hue}, 85%, 55%, ${beam.opacity * 0.6})`);
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 55%, ${beam.opacity})`);
        gradient.addColorStop(0.8, `hsla(${beam.hue}, 85%, 55%, ${beam.opacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
      }
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0c0d0e] ${className}`}>
      {/* Canvas with GPU-accelerated CSS blur */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transform-gpu blur-[20px]"
      />

      {/* Lightweight Static Vignette */}
      <div className="absolute inset-0 bg-[#0c0d0e]/50 pointer-events-none" />
    </div>
  );
}
