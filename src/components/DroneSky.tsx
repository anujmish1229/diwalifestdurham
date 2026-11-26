import { useEffect, useRef } from "react";

/**
 * A tribute to the 2026 drone show: points of light fly in and assemble into
 * the word "Diwali", then twinkle. Lights near the pointer flare brighter.
 * Canvas-drawn, paused while off-screen, and static under reduced motion.
 */

type Drone = {
  x: number;
  y: number;
  // formation target
  tx: number;
  ty: number;
  // launch point
  sx: number;
  sy: number;
  phase: number;
  speed: number;
  color: [number, number, number];
  star: boolean;
};

const RANI: [number, number, number] = [255, 106, 166];
const MARIGOLD: [number, number, number] = [255, 194, 51];
const SAFFRON: [number, number, number] = [255, 157, 50];

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/** Rani on the left, marigold in the middle, saffron on the right. */
function colorAt(u: number): [number, number, number] {
  return u < 0.5 ? mix(RANI, MARIGOLD, u / 0.5) : mix(MARIGOLD, SAFFRON, (u - 0.5) / 0.5);
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function DroneSky({ word = "Diwali" }: { word?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let drones: Drone[] = [];
    let width = 0;
    let height = 0;
    let gap = 7;
    let raf = 0;
    let visible = false;
    let launchedAt: number | null = null;
    const pointer = { x: -9999, y: -9999 };
    let cancelled = false;

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gap = width < 640 ? 5 : 7;

      // Render the word offscreen, then sample it on a grid to get the formation.
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const o = off.getContext("2d");
      if (!o) return;
      let size = height * 0.86;
      o.font = `800 ${size}px "Bricolage Grotesque", system-ui, sans-serif`;
      const measured = o.measureText(word).width;
      if (measured > width * 0.92) {
        size *= (width * 0.92) / measured;
        o.font = `800 ${size}px "Bricolage Grotesque", system-ui, sans-serif`;
      }
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.fillStyle = "#000";
      o.fillText(word, width / 2, height * 0.54);
      const data = o.getImageData(0, 0, width, height).data;

      const next: Drone[] = [];
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          if (data[(Math.floor(y) * width + Math.floor(x)) * 4 + 3] > 140) {
            next.push({
              x, y, tx: x, ty: y,
              sx: Math.random() * width,
              sy: height + 20 + Math.random() * height * 0.6,
              phase: Math.random() * Math.PI * 2,
              speed: 0.8 + Math.random() * 1.4,
              color: colorAt(x / width),
              star: false,
            });
          }
        }
      }
      // A scatter of background stars that never move.
      const stars = Math.round((width * height) / 9000);
      for (let i = 0; i < stars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        next.push({ x, y, tx: x, ty: y, sx: x, sy: y, phase: Math.random() * 6.28, speed: 0.4 + Math.random(), color: [255, 248, 237], star: true });
      }
      drones = next;
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;
      const progress = reduced || launchedAt === null ? (reduced ? 1 : 0) : Math.min(1, (now - launchedAt) / 2600);

      for (const d of drones) {
        let x = d.tx;
        let y = d.ty;
        if (!d.star && progress < 1) {
          // Each drone leaves on its own beat so the swarm assembles in waves.
          const delay = (d.tx / width) * 0.35;
          const p = easeOut(Math.max(0, Math.min(1, (progress - delay) / (1 - 0.35))));
          x = d.sx + (d.tx - d.sx) * p;
          y = d.sy + (d.ty - d.sy) * p;
        }

        const twinkle = reduced ? 0.85 : 0.6 + 0.4 * Math.sin(t * d.speed * 2 + d.phase);
        const dist = Math.hypot(x - pointer.x, y - pointer.y);
        const near = Math.max(0, 1 - dist / 110);

        if (d.star) {
          ctx.fillStyle = `rgba(255,248,237,${0.12 + 0.25 * twinkle})`;
          ctx.fillRect(x, y, 1.4, 1.4);
          continue;
        }

        const [r, g, b] = d.color;
        const alpha = Math.min(1, 0.45 + 0.5 * twinkle + near * 0.6);
        const radius = (gap * 0.26) * (1 + near * 0.9);
        if (near > 0.05) {
          ctx.fillStyle = `rgba(${r},${g},${b},${near * 0.22})`;
          ctx.beginPath();
          ctx.arc(x, y, radius * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      draw(now);
      if (visible && !reduced) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) {
        draw(performance.now());
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (launchedAt === null) launchedAt = performance.now();
          start();
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.25 },
    );

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduced) draw(performance.now());
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      if (reduced) draw(performance.now());
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        layout();
        if (reduced || !visible) draw(performance.now());
      }, 150);
    };

    // Wait for the display font so the formation uses the real letterforms.
    document.fonts.load('800 100px "Bricolage Grotesque"').finally(() => {
      if (cancelled) return;
      layout();
      draw(performance.now());
      io.observe(wrap);
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", onResize);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
    };
  }, [word]);

  return (
    <div ref={wrapRef} className="relative h-48 w-full sm:h-64 lg:h-80" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
