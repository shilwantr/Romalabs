import { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, X, LockKeyhole, CircleDot, Mic, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export function Products() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({x:0,y:0});
  const [open, setOpen] = useState(false);
  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setTilt({x:((e.clientX-rect.left)/rect.width-.5)*5,y:((e.clientY-rect.top)/rect.height-.5)*-5});
  }
  return <section id="products" className="products-section section-pad">
    <div className="section-rail"><span>THE PORTFOLIO</span><span>003 — 007</span></div>
    <div className="section-inner"><div className="section-heading-row"><div><span className="kicker"><span className="gold-line"/> THINGS WE MAKE</span><motion.h2 className="display-heading" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>PRODUCTS<span className="gold-period">.</span></motion.h2></div><p>A growing ecosystem of<br/>focused applications.</p></div>
      <div className="product-feature" ref={cardRef} onPointerMove={move} onPointerLeave={() => setTilt({x:0,y:0})}>
        <div className="product-feature-left"><div className="product-overline"><span className="signal-dot"/> PRODUCT 001 <span className="product-live">AVAILABLE NOW</span></div><div><span className="product-category">CAPTURE / PRIVACY / INTELLIGENCE</span><h3>SpyCam<br/><em>Pro.</em></h3><p>A privacy-first recording suite built around local processing, secure storage and reliable capture.</p><div className="product-tags"><span>CAMERA</span><span>VOICE</span><span>SCREEN</span><span>PRIVACY</span></div><button className="product-cta" onClick={() => setOpen(true)} data-cursor="VIEW">VIEW PRODUCT <ArrowUpRight size={19}/></button></div><div className="product-foot">BUILT WITH INTENTION <span>↗</span></div></div>
        <div className="product-feature-right"><div className="device-glow"/><div className="device-shell" style={{transform:`perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`}}><div className="device-top"><span className="device-logo">SC<span>•</span>PRO</span><span><span className="rec-dot"/> REC</span></div><div className="device-main"><span className="device-cross cross-tl">+</span><span className="device-cross cross-tr">+</span><div className="device-lens"><div className="device-lens-inner"><div className="device-lens-eye"/></div></div><span className="device-cross cross-bl">+</span><span className="device-cross cross-br">+</span></div><div className="device-controls"><span>00:04:28</span><div className="device-rec"><span/></div><span>4K · 30 FPS</span></div><div className="device-tabs"><span><CircleDot size={13}/> CAMERA</span><span><Mic size={13}/> VOICE</span><span><Monitor size={13}/> SCREEN</span><span><LockKeyhole size={13}/> VAULT</span></div></div><div className="product-visual-caption">01 / PRIVATE BY DESIGN</div></div>
      </div>
    </div>
    {open && <div className="product-dialog-backdrop" onClick={() => setOpen(false)}><div className="product-dialog" role="dialog" aria-modal="true" aria-label="SpyCam Pro" onClick={e => e.stopPropagation()}><button className="dialog-close" onClick={() => setOpen(false)} aria-label="Close product details"><X size={20}/></button><span className="kicker"><span className="gold-line"/> PRODUCT 001</span><h2>SpyCam <em>Pro.</em></h2><p>A privacy-first recording suite designed to put reliable capture and control in your hands.</p><div className="dialog-features"><div><CircleDot size={21}/><span>Camera capture</span></div><div><Mic size={21}/><span>Voice recording</span></div><div><Monitor size={21}/><span>Screen recording</span></div><div><LockKeyhole size={21}/><span>Private storage</span></div></div><a href="mailto:hello@romalabs.com?subject=SpyCam%20Pro" className="button-primary">ASK ABOUT SPYCAM PRO <ArrowRight size={16}/></a></div></div>}
  </section>;
}
