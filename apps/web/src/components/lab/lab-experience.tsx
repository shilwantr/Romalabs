import { useState } from 'react';
import type { ComponentType } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Game2048 } from './game-2048';
import { GameRunner } from './game-runner';
import { GameMemory } from './game-memory';
import { GameReflex } from './game-reflex';

const GAMES = [
  { id: '2048', number: '001', a: 'TILE ', b: 'SHIFT', tagline: 'Merge matching tiles and climb your way to 2048.', hint: 'ARROW KEYS / SWIPE' },
  { id: 'runner', number: '002', a: 'LAB ', b: 'RUNNER', tagline: 'Jump the obstacles and outrun the lab as it speeds up.', hint: 'TAP / CLICK / SPACE' },
  { id: 'memory', number: '003', a: 'SIGNAL ', b: 'MATCH', tagline: 'Flip the nodes and find every matching pair.', hint: 'TAP CARDS' },
  { id: 'reflex', number: '004', a: 'REFLEX ', b: 'CORE', tagline: 'Tap the instant the core ignites gold. Do not jump early.', hint: 'TAP WHEN GOLD' },
] as const;

type GameId = (typeof GAMES)[number]['id'];

const COMPONENTS: Record<GameId, ComponentType> = {
  '2048': Game2048,
  runner: GameRunner,
  memory: GameMemory,
  reflex: GameReflex,
};

export function LabExperience() {
  const [active, setActive] = useState<GameId | null>(null);
  const game = GAMES.find((g) => g.id === active);
  const Active = active ? COMPONENTS[active] : null;

  return <div className="lab-inner">
    <span className="kicker"><span className="gold-line" /> THE LAB // 002 — PLAY</span>
    <h1 className="display-heading">YOU FOUND<br /><em>THE LAB.</em></h1>
    <p className="lab-sub">Curiosity is the beginning. Four small experiments from the Romalabs workshop — built light, quick to learn, and playable on phone or desktop.</p>

    {game && Active ? (
      <div className="lab-arena">
        <div className="lab-arena-head">
          <button className="lab-back" onClick={() => setActive(null)} data-cursor="BACK">
            <ArrowLeft size={13} strokeWidth={1.6} /> ALL EXPERIMENTS
          </button>
          <h3 className="lab-arena-title">{game.a}<i>{game.b}</i></h3>
          <span className="lab-hint">{game.hint}</span>
        </div>
        <Active />
      </div>
    ) : (
      <div className="lab-games-grid">
        {GAMES.map((g) => (
          <button key={g.id} className="lab-game-card" onClick={() => setActive(g.id)} data-cursor="PLAY">
            <div className="lab-game-card-top"><span>EXPERIMENT {g.number}</span><span>INTERACTIVE</span></div>
            <h3>{g.a}<i>{g.b}</i></h3>
            <p>{g.tagline}</p>
            <div className="lab-game-card-foot"><span>{g.hint}</span><span>↗</span></div>
          </button>
        ))}
      </div>
    )}
  </div>;
}
