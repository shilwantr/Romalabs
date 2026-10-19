import { useCallback, useEffect, useRef, useState } from 'react';

type RunnerStatus = 'idle' | 'playing' | 'over';

const W = 640;
const H = 260;
const GROUND = H - 44;
const PX = 62;
const PS = 26;

export function GameRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<RunnerStatus>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const statusRef = useRef<RunnerStatus>('idle');
  const game = useRef({ y: 0, vy: 0, obs: [] as { x: number; w: number; h: number }[], speed: 6, dist: 0, spawn: 60, frame: 0 });

  const setStat = useCallback((s: RunnerStatus) => {
    statusRef.current = s;
    setStatus(s);
  }, []);

  const start = useCallback(() => {
    game.current = { y: 0, vy: 0, obs: [], speed: 6, dist: 0, spawn: 60, frame: 0 };
    setScore(0);
    setStat('playing');
  }, [setStat]);

  const jump = useCallback(() => {
    if (statusRef.current !== 'playing') { start(); return; }
    const g = game.current;
    if (g.y === 0) g.vy = -13.5;
  }, [start]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    let raf = 0;

    const loop = () => {
      const g = game.current;
      if (statusRef.current === 'playing') {
        g.frame++;
        g.speed = Math.min(13, 6 + g.frame * 0.0012);
        g.vy += 0.85;
        g.y += g.vy;
        if (g.y > 0) { g.y = 0; g.vy = 0; }
        g.dist += g.speed;
        g.spawn--;
        if (g.spawn <= 0) {
          g.obs.push({ x: W + 30, w: 14 + Math.random() * 14, h: 22 + Math.random() * 26 });
          g.spawn = Math.max(38, 95 - g.speed * 4) + Math.random() * 45;
        }
        for (const o of g.obs) o.x -= g.speed;
        g.obs = g.obs.filter((o) => o.x + o.w > -10);

        const py = GROUND - PS + g.y;
        for (const o of g.obs) {
          const oy = GROUND - o.h;
          if (PX < o.x + o.w && PX + PS > o.x && py < oy + o.h && py + PS > oy) {
            const final = Math.floor(g.dist / 10);
            setScore(final);
            setBest((b) => Math.max(b, final));
            setStat('over');
            break;
          }
        }
        if (g.frame % 6 === 0) setScore(Math.floor(g.dist / 10));
      }

      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(201,164,92,.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND + 0.5);
      ctx.lineTo(W, GROUND + 0.5);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(201,164,92,.14)';
      ctx.beginPath();
      const off = game.current.dist % 40;
      for (let x = -off; x < W; x += 40) {
        ctx.moveTo(x, GROUND + 12);
        ctx.lineTo(x + 18, GROUND + 12);
      }
      ctx.stroke();

      const py = GROUND - PS + g.y;
      ctx.fillStyle = '#c9a45c';
      ctx.shadowColor = '#c9a45c';
      ctx.shadowBlur = 14;
      ctx.fillRect(PX, py, PS, PS);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#050505';
      ctx.fillRect(PX + 15, py + 6, 5, 5);

      ctx.lineWidth = 1.5;
      for (const o of g.obs) {
        const oy = GROUND - o.h;
        ctx.fillStyle = 'rgba(201,164,92,.12)';
        ctx.fillRect(o.x, oy, o.w, o.h);
        ctx.strokeStyle = '#e3c47a';
        ctx.strokeRect(o.x, oy, o.w, o.h);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [setStat]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code !== 'Space' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      jump();
    }
    window.addEventListener('keydown', onKey, { passive: false });
    return () => window.removeEventListener('keydown', onKey);
  }, [jump]);

  return <div>
    <div className="lab-scorebar">
      <span>SCORE<b>{score}</b></span>
      <span>BEST<b>{best}</b></span>
      <span>STATUS<b>{status === 'playing' ? 'RUNNING' : status === 'over' ? 'TERMINATED' : 'READY'}</b></span>
    </div>
    <div className="runner-wrap">
      <canvas ref={canvasRef} className="runner-canvas" onPointerDown={jump} aria-label="Lab runner game, tap or press space to jump" />
      {status !== 'playing' && (
        <div className="runner-overlay" onClick={jump} role="button" aria-label="Start run">
          <div>
            <span>{status === 'idle' ? 'READY TO RUN' : 'RUN TERMINATED'}</span>
            <h4>{status === 'idle' ? <>TAP TO <i>START</i></> : <>SCORE {score} — TAP TO <i>RETRY</i></>}</h4>
          </div>
        </div>
      )}
    </div>
  </div>;
}
