import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    let x = -100, y = -100, tx = -100, ty = -100, frame = 0;
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      el.dataset.label = target?.getAttribute('data-cursor') || '';
      el.classList.toggle('active', !!target);
      el.classList.add('visible');
    };
    const leave = () => el.classList.remove('visible');
    const tick = () => { x += (tx - x) * .24; y += (ty - y) * .24; el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`; frame = requestAnimationFrame(tick); };
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    tick();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); };
  }, []);
  return <div ref={ref} className="custom-cursor" aria-hidden="true"><span /></div>;
}
