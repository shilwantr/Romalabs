import { motion } from 'framer-motion';

const principles = [
  {number:'01',name:'PRIVACY',statement:'Your data should belong to you.',symbol:'◌'},
  {number:'02',name:'SIMPLICITY',statement:'Complex technology should feel effortless.',symbol:'—'},
  {number:'03',name:'CRAFT',statement:'Every interaction deserves attention.',symbol:'✳'},
];

export function Philosophy() {
  return <section className="philosophy-section section-pad"><div className="section-rail"><span>OUR PRINCIPLES</span><span>004 — 007</span></div><div className="section-inner"><span className="kicker"><span className="gold-line"/> WHAT GUIDES US</span><h2 className="display-heading philosophy-heading">BUILT<br/><em>DIFFERENTLY.</em></h2><div className="principle-list">{principles.map(item => <motion.div key={item.number} className="principle" initial={{opacity:.25,y:30}} whileInView={{opacity:1,y:0}} viewport={{amount:.5}} transition={{duration:.6}}><span className="principle-number">{item.number} / 03</span><div><h3>{item.name}</h3><p>{item.statement}</p></div><span className="principle-symbol">{item.symbol}</span></motion.div>)}</div></div></section>;
}
