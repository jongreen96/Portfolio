'use client';

import { useEffect, useMemo, useRef } from 'react';

export default function Background() {
  const canvas = useRef<HTMLCanvasElement>(null);

  interface Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
  }
  // const dots: Dot[] = [];
  const dots: Dot[] = useMemo(() => [], []);

  useEffect(() => {
    const drawDot = () => {
      if (!canvas.current) return;

      const x = Math.random() * canvas.current.width;
      const y = Math.random() * canvas.current.height;
      // Decrease the maximum velocity values to slow down the dots
      const vx = Math.random() * 0.5 - 0.25; // Adjust the range as needed
      const vy = Math.random() * 0.5 - 0.25; // Adjust the range as needed

      dots.push({ x, y, vx, vy });
    };

    const mouse = { x: 0, y: 0 };
    document.addEventListener('mousemove', (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    });

    const updateDots = () => {
      if (!canvas.current) return;

      canvas.current.width = document.body.clientWidth;
      canvas.current.height = document.body.clientHeight;

      const dotCount = (canvas.current.width * canvas.current.height) / 8000;
      while (dots.length < dotCount) drawDot();

      dots.forEach((dot) => {
        if (!canvas.current) return;

        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 500;
          dot.vx -= dx * force * 0.01;
          dot.vy -= dy * force * 0.01;
        }
        if (dot.vx > 1.5) dot.vx = dot.vx * 0.9;
        if (dot.vy > 1.5) dot.vy = dot.vy * 0.9;
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.current.width) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > canvas.current.height) dot.vy = -dot.vy;
      });

      const ctx = canvas.current.getContext('2d');
      if (!ctx) return;

      ctx?.clearRect(0, 0, canvas.current.width, canvas.current.height);
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot = dots[i];
          const dot2 = dots[j];
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < 150 * 150) {
            const opacity = Math.max(0, 1 - Math.sqrt(distanceSquared) / 150);
            ctx.strokeStyle = `rgba(50, 50, 50, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
    };

    setInterval(updateDots, 1000 / 60);
  }, []);

  return (
    <div className='absolute inset-0 -z-10'>
      <canvas ref={canvas} />
    </div>
  );
}
