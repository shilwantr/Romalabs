import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { upcomingProducts } from '@/data/products';

export function ProductRail() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({target:ref,offset:['start start','end end']});
  const x = useTransform(scrollYProgress,[0,1],['0%','-64%']);
  return <section className="rail-section" ref={ref} aria-label="Upcoming products"><div className="rail-sticky"><div className="rail-header"><span className="kicker"><span className="gold-line"/> ON THE HORIZON</span><span>DRAG YOUR CURIOSITY FORWARD &nbsp; →</span></div><motion.div className="rail-track" style={{x}}>{upcomingProducts.map((item,i) => <motion.article key={item.number} className={`rail-card rail-card-${item.visual}`} whileHover={{scale:1.025,rotateY:2}} transition={{type:'spring',stiffness:180,damping:20}}><div className="rail-card-top"><span>{item.number} / 05</span><span>{item.status}</span></div><div className="rail-art"><div className="rail-art-shape"><span/><span/><span/></div></div><div className="rail-card-bottom"><div><span>{item.category}</span><h3>{item.name}<i>.</i></h3><p>{item.description}</p></div><span className="rail-card-arrow">↗</span></div><span className="rail-index">0{i+2}</span></motion.article>)}</motion.div><div className="rail-progress"><span>THE NEXT CHAPTER</span><div><motion.span style={{scaleX:scrollYProgress}}/></div><span>01 — 04</span></div></div></section>;
}
