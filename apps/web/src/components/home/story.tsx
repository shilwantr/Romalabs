import { motion } from 'framer-motion';

export function Story() {
  return <section id="about" className="story-section section-pad"><div className="section-rail"><span>THE POINT OF VIEW</span><span>006 — 007</span></div><div className="section-inner story-layout"><div><span className="kicker"><span className="gold-line"/> WHY ROMALABS?</span><h2 className="display-heading">THE WHY<br/><em>BEHIND THE WORK.</em></h2></div><div className="story-copy"><motion.p className="story-statement" initial={{opacity:.25,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}}>We believe technology should be <em>powerful</em> without becoming complicated.</motion.p><div className="story-bottom"><span className="story-star">✳</span><p>Romalabs builds focused consumer software designed around thoughtful interfaces, useful technology and respect for your attention and data.</p></div></div></div></section>;
}
