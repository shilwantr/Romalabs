import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function Lab() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({x:0,y:0});
  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (!orbRef.current) return;
    const box = orbRef.current.getBoundingClientRect();
    setPosition({ x: (e.clientX - box.left) / box.width - .5, y: (e.clientY - box.top) / box.height - .5 });
  }
  return <section id="lab" className="lab-section section-pad">
    <div className="section-rail"><span>INSIDE ROMALABS</span><span>002 — 007</span></div>
    <div className="section-inner lab-layout">
      <div className="lab-copy"><span className="kicker"><span className="gold-line"/> AN INDEPENDENT STUDIO</span><motion.h2 className="display-heading" initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}}>THE<br/><em>LAB.</em></motion.h2><p className="lead">Romalabs is a technology studio focused on building thoughtful digital products for the next generation of users.</p><p className="muted-copy">We bring ideas from first principles to finished experiences — quietly, deliberately, and with care for every detail.</p><div className="lab-sequence"><span>IDEAS</span><span className="sequence-arrow">→</span><span>TECHNOLOGY</span><span className="sequence-arrow">→</span><span>PRODUCTS</span></div></div>
      <div className="orb-stage" ref={orbRef} onPointerMove={move} onPointerLeave={() => setPosition({x:0,y:0})} data-cursor="EXPLORE"><span className="orb-stage-label top">FIG 01. / AN IDEA TAKES FORM</span><div className="orb-outer" style={{transform:`rotateY(${position.x * 22}deg) rotateX(${-position.y * 22}deg)`}}><div className="orb-halo"/><div className="orb-core"/><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="orb-ring ring-three"/><div className="orb-axis"/><div className="orb-spark spark-one"/><div className="orb-spark spark-two"/><div className="orb-spark spark-three"/></div><span className="orb-stage-label bottom">MOVE TO INTERACT <span>↗</span></span></div>
    </div>
  </section>;
}
