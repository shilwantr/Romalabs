import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Introduction() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const shift = useTransform(scrollYProgress, [0, 1], [65, -65]);
  const lines = ['WE BUILD', 'USEFUL TECHNOLOGY', 'WITH OBSESSIVE', 'ATTENTION TO DETAIL.'];
  return <section id="intro" className="intro-section" ref={ref}>
    <div className="section-rail"><span>THE PREMISE</span><span>001 — 007</span></div>
    <div className="intro-content"><div className="intro-topline"><span className="tiny-cross">✳</span><span>SMALL TEAM. SERIOUS TECHNOLOGY. BEAUTIFUL PRODUCTS.</span></div>
      <div className="intro-lines">{lines.map((line, i) => <motion.div key={line} className={`intro-line ${i === 1 || i === 3 ? 'outline' : ''}`} initial={{opacity:.12,filter:'blur(10px)',y:40}} whileInView={{opacity:1,filter:'blur(0px)',y:0}} viewport={{once:true,amount:.45}} transition={{duration:.85,delay:i*.11,ease:[.22,1,.36,1]}}>{line}</motion.div>)}</div>
      <motion.div className="intro-end" style={{y:shift}}><span>AN INDEPENDENT STUDIO FOR THE THINGS THAT MATTER.</span><span>↓</span></motion.div>
    </div>
  </section>;
}
