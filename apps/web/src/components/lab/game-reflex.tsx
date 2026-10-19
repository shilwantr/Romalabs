import { useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'waiting' | 'go' | 'result' | 'early';

export function GameReflex() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [ms, setMs] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const goAt = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function start() {
    setPhase('waiting');
    timer.current = window.setTimeout(() => {
      goAt.current = performance.now();
      setPhase('go');
    }, 1200 + Math.random() * 2200);
  }

  function tap() {
    if (phase === 'waiting') {
      window.clearTimeout(timer.current);
      setPhase('early');
      return;
    }
    if (phase === 'go') {
      const delta = Math.round(performance.now() - goAt.current);
      setMs(delta);
      setBest((b) => (b === null ? delta : Math.min(b, delta)));
      setPhase('result');
      return;
    }
    start();
  }

  const label = {
    idle: 'TAP TO BEGIN',
    waiting: 'HOLD… WAIT FOR GOLD',
    go: 'TAP NOW',
    result: `${ms} MS — TAP TO GO AGAIN`,
    early: 'TOO EARLY — TAP TO RETRY',
  }[phase];

  return <div>
    <div className="lab-scorebar">
      <span>LAST<b>{phase === 'result' ? `${ms} MS` : '—'}</b></span>
      <span>BEST<b>{best !== null ? `${best} MS` : '—'}</b></span>
      <span>ATTEMPTS<b>{phase === 'result' ? 'LOGGED' : 'READY'}</b></span>
    </div>
    <div
      className={`reflex-stage${phase === 'waiting' ? ' waiting' : phase === 'go' ? ' go' : ''}`}
      onPointerDown={tap}
      role="button"
      aria-label="Reflex test, tap when the circle turns gold"
      data-cursor={phase === 'go' ? 'TAP' : 'START'}
    >
      {phase === 'result' ? (
        <div className="reflex-label"><span className="reflex-ms">{ms}</span><br />MILLISECONDS</div>
      ) : (
        <div className="reflex-label">{label}</div>
      )}
    </div>
    <div className="lab-reset-row">
      <button className="lab-reset" onClick={start}>NEW ATTEMPT</button>
    </div>
  </div>;
}
