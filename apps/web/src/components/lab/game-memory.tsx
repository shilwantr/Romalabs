import { useState } from 'react';

const SYMBOLS = ['◆', '●', '▲', '■', '✦', '✕', '➤', '★'];

function shuffle(): string[] {
  const deck = [...SYMBOLS, ...SYMBOLS];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function GameMemory() {
  const [deck, setDeck] = useState<string[]>(shuffle);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const locked = flipped.length === 2;
  const won = matched.length === deck.length;

  function click(i: number) {
    if (locked || flipped.includes(i) || matched.includes(i)) return;
    const next = [...flipped, i];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      if (deck[next[0]] === deck[next[1]]) {
        setMatched((m) => [...m, ...next]);
        setFlipped([]);
      } else {
        window.setTimeout(() => setFlipped([]), 750);
      }
    }
  }

  function reset() {
    setDeck(shuffle());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }

  return <div>
    <div className="lab-scorebar">
      <span>MOVES<b>{moves}</b></span>
      <span>PAIRS<b>{matched.length / 2}/8</b></span>
      <span>STATUS<b>{won ? 'CLEARED' : 'SCANNING'}</b></span>
    </div>
    <div className="memory-grid" aria-label="Signal match, tap cards to find pairs">
      {deck.map((symbol, i) => {
        const isMatched = matched.includes(i);
        const isFlipped = flipped.includes(i);
        return <button
          key={i}
          className={`memory-card${isMatched ? ' matched' : isFlipped ? ' flipped' : ''}`}
          onClick={() => click(i)}
          aria-label={isFlipped || isMatched ? `Card ${i + 1}, ${symbol}` : `Card ${i + 1}, hidden`}
          data-cursor={isFlipped || isMatched ? undefined : 'FLIP'}
        >{symbol}</button>;
      })}
    </div>
    <div className="lab-reset-row">
      <button className="lab-reset" onClick={reset}>{won ? `CLEARED IN ${moves} MOVES — PLAY AGAIN` : 'RESET SIGNALS'}</button>
    </div>
  </div>;
}
