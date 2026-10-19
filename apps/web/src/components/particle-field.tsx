import { useEffect, useRef } from 'react';

type ParticleFieldProps = { variant?: 'hero' | 'fluid'; className?: string };

type Point = { x: number; y: number; baseX: number; baseY: number; phase: number; size: number };

export function ParticleField({ variant = 'hero', className = '' }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    let points: Point[] = [];
    let visible = true;
    const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000, speed: 0 };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowPower = window.matchMedia('(max-width: 767px)').matches || (navigator.hardwareConcurrency || 8) <= 4;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: '150px' });
    observer.observe(canvas);

    function resize() {
      if (!canvas || !ctx) return;
      const box = canvas.getBoundingClientRect();
      width = box.width;
      height = box.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const spacing = variant === 'hero' ? (lowPower ? 30 : 21) : (lowPower ? 27 : 18);
      points = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const phase = Math.sin(x * 0.017 + y * 0.031) * 6.28;
          points.push({ x, y, baseX: x, baseY: y, phase, size: 0.45 + (Math.sin(x * 7.73 + y * 3.17) + 1) * 0.36 });
        }
      }
      if (reduced) draw();
    }
    function move(event: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.tx = event.clientX - rect.left;
      mouse.ty = event.clientY - rect.top;
    }
    function leave() { mouse.tx = -1000; mouse.ty = -1000; }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      if (!visible && !reduced) return;
      mouse.speed = Math.hypot(mouse.tx - mouse.x, mouse.ty - mouse.y);
      mouse.x += (mouse.tx - mouse.x) * 0.11;
      mouse.y += (mouse.ty - mouse.y) * 0.11;
      const time = frame * 0.012;
      if (variant === 'fluid') {
        const glow = ctx.createRadialGradient(width * .52, height * .51, 10, width * .52, height * .51, Math.max(width, height) * .6);
        glow.addColorStop(0, 'rgba(150,105,41,.1)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
        const lines = lowPower ? 35 : 65;
        for (let i = 0; i < lines; i++) {
          const yy = height * (.12 + i / lines * .78);
          ctx.beginPath();
          for (let x = 0; x <= width + 8; x += 8) {
            const dx = x - mouse.x;
            const dy = yy - mouse.y;
            const force = Math.exp(-(dx * dx + dy * dy) / 42000);
            const wave = Math.sin(x * .008 + i * .19 + time * .53) * (22 + 20 * Math.sin(i * .17 + time * .22));
            const drift = Math.sin(x * .003 - time * .25 + i * .12) * 25;
            const y = yy + wave + drift + force * (dy > 0 ? 1 : -1) * 37;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(201,164,92,${.018 + .105 * Math.pow(Math.sin(i / lines * Math.PI), 3)})`;
          ctx.lineWidth = i % 8 === 0 ? .85 : .5;
          ctx.stroke();
        }
      } else {
        for (const p of points) {
          const dx = p.baseX - mouse.x;
          const dy = p.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = 160;
          const strength = Math.max(0, 1 - dist / radius);
          const wave = Math.sin(p.baseX * .008 + p.baseY * .006 + time * .44 + p.phase) * 5;
          const targetX = p.baseX + Math.cos(p.phase + time * .13) * wave + dx / dist * strength * 24;
          const targetY = p.baseY + Math.sin(p.phase + time * .18) * wave + dy / dist * strength * 24;
          p.x += (targetX - p.x) * .08;
          p.y += (targetY - p.y) * .08;
          const central = Math.max(0, 1 - Math.hypot(p.baseX - width * .5, p.baseY - height * .52) / (Math.max(width, height) * .7));
          const opacity = .10 + central * .18 + strength * .48;
          ctx.fillStyle = `rgba(${strength > .15 ? '227,196,122' : '176,168,150'},${opacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + strength * .55, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    function animate() {
      if (visible && !reduced) { frame++; draw(); }
      raf = requestAnimationFrame(animate);
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    resize();
    if (!reduced) animate();
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      observer.disconnect();
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', leave);
    };
  }, [variant]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`particle-canvas ${className}`} />;
}
