import { useEffect, useReducer, useRef, useState } from 'react';

type Board = number[];
type Dir = 'left' | 'right' | 'up' | 'down';
type Status = 'playing' | 'won' | 'over';
interface State { board: Board; score: number; status: Status }
type Action = { type: 'move'; dir: Dir } | { type: 'reset' };

const SIZE = 4;

const TILE: Record<number, { bg: string; fg: string }> = {
  2: { bg: '#161615', fg: '#c9c7c0' },
  4: { bg: '#1c1a15', fg: '#d5d2c8' },
  8: { bg: '#2a2418', fg: '#e3c47a' },
  16: { bg: '#3a301c', fg: '#e3c47a' },
  32: { bg: '#4d3f22', fg: '#f0dcae' },
  64: { bg: '#6b5529', fg: '#0d0b07' },
  128: { bg: '#8a6f38', fg: '#0d0b07' },
  256: { bg: '#a5833f', fg: '#0d0b07' },
  512: { bg: '#c9a45c', fg: '#050505' },
  1024: { bg: '#e3c47a', fg: '#050505' },
  2048: { bg: '#f2dca0', fg: '#050505' },
};

function emptyBoard(): Board { return Array(SIZE * SIZE).fill(0); }

function addTile(board: Board): Board {
  const empties: number[] = [];
  board.forEach((v, i) => { if (v === 0) empties.push(i); });
  if (!empties.length) return board;
  const next = [...board];
  next[empties[Math.floor(Math.random() * empties.length)]] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function slideLine(line: number[]): { line: number[]; gained: number } {
  const tiles = line.filter((v) => v !== 0);
  const merged: number[] = [];
  let gained = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (i + 1 < tiles.length && tiles[i] === tiles[i + 1]) {
      merged.push(tiles[i] * 2);
      gained += tiles[i] * 2;
      i++;
    } else merged.push(tiles[i]);
  }
  while (merged.length < SIZE) merged.push(0);
  return { line: merged, gained };
}

function moveBoard(board: Board, dir: Dir): { board: Board; gained: number; moved: boolean } {
  const next = [...board];
  let gained = 0;
  let moved = false;
  for (let i = 0; i < SIZE; i++) {
    const idxs: number[] = [];
    for (let j = 0; j < SIZE; j++) {
      let r: number, c: number;
      if (dir === 'left') { r = i; c = j; }
      else if (dir === 'right') { r = i; c = SIZE - 1 - j; }
      else if (dir === 'up') { r = j; c = i; }
      else { r = SIZE - 1 - j; c = i; }
      idxs.push(r * SIZE + c);
    }
    const { line, gained: g } = slideLine(idxs.map((idx) => board[idx]));
    gained += g;
    line.forEach((v, j) => {
      const idx = idxs[j];
      if (next[idx] !== v) moved = true;
      next[idx] = v;
    });
  }
  return { board: next, gained, moved };
}

function hasMoves(board: Board): boolean {
  if (board.some((v) => v === 0)) return true;
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const v = board[r * SIZE + c];
      if (c + 1 < SIZE && board[r * SIZE + c + 1] === v) return true;
      if (r + 1 < SIZE && board[(r + 1) * SIZE + c] === v) return true;
    }
  }
  return false;
}

function reducer(state: State, action: Action): State {
  if (action.type === 'reset') {
    return { board: addTile(addTile(emptyBoard())), score: 0, status: 'playing' };
  }
  if (state.status !== 'playing') return state;
  const { board, gained, moved } = moveBoard(state.board, action.dir);
  if (!moved) return state;
  const next = addTile(board);
  const score = state.score + gained;
  const won = next.includes(2048);
  const over = !hasMoves(next);
  return { board: next, score, status: won ? 'won' : over ? 'over' : 'playing' };
}

export function Game2048() {
  const [state, dispatch] = useReducer(reducer, undefined, () => ({
    board: addTile(addTile(emptyBoard())), score: 0, status: 'playing' as Status,
  }));
  const [best, setBest] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => { setBest((b) => Math.max(b, state.score)); }, [state.score]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const map: Record<string, Dir> = {
        ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
        a: 'left', d: 'right', w: 'up', s: 'down',
      };
      const dir = map[e.key];
      if (!dir) return;
      e.preventDefault();
      dispatch({ type: 'move', dir });
    }
    window.addEventListener('keydown', onKey, { passive: false });
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touch.current;
    const t = e.changedTouches[0];
    if (!start) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    touch.current = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    const dir: Dir = Math.abs(dx) > Math.abs(dy)
      ? (dx > 0 ? 'right' : 'left')
      : (dy > 0 ? 'down' : 'up');
    dispatch({ type: 'move', dir });
  }

  return <div>
    <div className="lab-scorebar">
      <span>SCORE<b>{state.score}</b></span>
      <span>BEST<b>{best}</b></span>
      <span>TARGET<b>2048</b></span>
    </div>
    <div
      className="g2048-grid"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Tile shift board, swipe or use arrow keys to merge tiles"
    >
      {state.board.map((v, i) => {
        const style = v ? TILE[v] : null;
        return <div
          key={i}
          className={`g2048-cell${v ? '' : ' empty'}`}
          style={style ? {
            background: style.bg,
            color: style.fg,
            fontSize: v < 100 ? 'clamp(18px,5vw,26px)' : v < 1000 ? 'clamp(15px,4vw,22px)' : 'clamp(12px,3.4vw,18px)',
          } : undefined}
        >{v || ''}</div>;
      })}
    </div>
    {state.status !== 'playing' && (
      <div className="lab-reset-row">
        <button className="lab-reset" onClick={() => dispatch({ type: 'reset' })}>
          {state.status === 'won' ? 'YOU MADE 2048 — PLAY AGAIN' : 'NO MOVES LEFT — TRY AGAIN'}
        </button>
      </div>
    )}
    {state.status === 'playing' && (
      <div className="lab-reset-row">
        <button className="lab-reset" onClick={() => dispatch({ type: 'reset' })}>RESET BOARD</button>
      </div>
    )}
  </div>;
}
