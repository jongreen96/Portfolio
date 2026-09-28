import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const connectionDistance = 150;

export default function Background() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    const ctx = element?.getContext('2d');
    if (!element || !ctx) return;

    const dots: Dot[] = [];
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    };
    document.addEventListener('mousemove', onMouseMove);

    const updateDots = () => {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      if (element.width !== width) element.width = width;
      if (element.height !== height) element.height = height;

      const dotCount = (width * height) / 8000;
      while (dots.length < dotCount) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.random() * 0.3 - 0.15,
          vy: Math.random() * 0.3 - 0.15,
        });
      }

      for (const dot of dots) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          dot.vx -= dx * force * 0.005;
          dot.vy -= dy * force * 0.005;
        }
        if (dot.vx > 1) dot.vx = dot.vx * 0.9;
        if (dot.vy > 1) dot.vy = dot.vy * 0.9;
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > height) dot.vy = -dot.vy;
      }

      ctx.clearRect(0, 0, width, height);

      // Only dots in the same or neighboring cells can be close enough to connect.
      const cells = new Map<number, Map<number, number[]>>();
      dots.forEach((dot, index) => {
        const column = Math.floor(dot.x / connectionDistance);
        const row = Math.floor(dot.y / connectionDistance);
        let rows = cells.get(column);
        if (!rows) {
          rows = new Map();
          cells.set(column, rows);
        }
        let indexes = rows.get(row);
        if (!indexes) {
          indexes = [];
          rows.set(row, indexes);
        }
        indexes.push(index);
      });

      const candidates: number[] = [];
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const column = Math.floor(dot.x / connectionDistance);
        const row = Math.floor(dot.y / connectionDistance);
        candidates.length = 0;

        for (let x = column - 1; x <= column + 1; x++) {
          const rows = cells.get(x);
          if (!rows) continue;
          for (let y = row - 1; y <= row + 1; y++) {
            for (const index of rows.get(y) ?? []) {
              if (index > i) candidates.push(index);
            }
          }
        }

        // Preserve the original pair order where lines overlap.
        candidates.sort((a, b) => a - b);
        for (const index of candidates) {
          const dot2 = dots[index];
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < connectionDistance * connectionDistance) {
            const opacity = Math.max(0, 1 - Math.sqrt(distanceSquared) / connectionDistance);
            ctx.strokeStyle = `rgba(50, 50, 50, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }
    };

    const interval = window.setInterval(updateDots, 1000 / 60);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className='absolute inset-0 -z-10'>
      <canvas ref={canvas} />
    </div>
  );
}
