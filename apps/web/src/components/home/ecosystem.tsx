import { useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  {label:'PRIVACY',detail:'Technology built with trust at its core.',x:17,y:20},
  {label:'AI',detail:'Intelligence with a purpose.',x:51,y:12},
  {label:'CAMERA',detail:'Capture the world on your terms.',x:81,y:23},
  {label:'LANGUAGE',detail:'Tools that bring people closer.',x:89,y:53},
  {label:'WELLNESS',detail:'More mindful digital experiences.',x:75,y:82},
  {label:'PRODUCTIVITY',detail:'Make room for what matters.',x:45,y:87},
  {label:'UTILITIES',detail:'Small tools. Big impact.',x:13,y:75},
  {label:'EXPERIMENTAL',detail:'The ideas we cannot stop thinking about.',x:8,y:46},
];
export function Ecosystem() {
  const [active, setActive] = useState<number | null>(null);
  return <section className="ecosystem-section section-pad"><div className="section-rail"><span>CONNECTED THINKING</span><span>005 — 007</span></div><div className="section-inner"><div className="section-heading-row"><div><span className="kicker"><span className="gold-line"/> THE BIGGER PICTURE</span><h2 className="display-heading">ONE STUDIO.<br/><em>MANY POSSIBILITIES.</em></h2></div><p>Not one app. An expanding universe<br/>of useful technology.</p></div><div className="ecosystem-map" onPointerLeave={() => setActive(null)}><div className="ecosystem-grid"/><svg className="ecosystem-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{nodes.map((node,i)=><line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} className={active === null || active === i ? 'line-active' : 'line-muted'}/>)}</svg><div className="ecosystem-center"><span className="ecosystem-center-orbit"/><span className="wordmark">ROMA<span>LABS</span></span><small>PARENT STUDIO</small></div>{nodes.map((node,i)=><button key={node.label} className={`ecosystem-node ${active === i ? 'active' : ''} ${active !== null && active !== i ? 'dimmed' : ''}`} style={{left:`${node.x}%`,top:`${node.y}%`}} onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(active === i ? null : i)} data-cursor="EXPLORE"><span className="node-dot"/>{node.label}</button>)}<motion.div className="ecosystem-info" key={active ?? 'default'} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.25}}><span>{active !== null ? `FIELD / ${String(active+1).padStart(2,'0')}` : 'FIELD / 00'}</span><p>{active !== null ? nodes[active].detail : 'Select a field to explore our thinking.'}</p></motion.div></div></div></section>;
}
