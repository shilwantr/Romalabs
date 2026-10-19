import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ParticleField } from '@/components/particle-field';

export function Hero() {
  return <section className="hero" id="top">
    <ParticleField className="hero-field" />
    <div className="hero-vignette" />
    <div className="hero-frame" aria-hidden="true"><span className="frame-corner tl"/><span className="frame-corner tr"/><span className="frame-corner bl"/><span className="frame-corner br"/></div>
    <div className="hero-content">
      <div className="hero-eyebrow"><span className="signal-dot" /> INDEPENDENT TECHNOLOGY STUDIO <span className="eyebrow-index">EST. 2026</span></div>
      <h1>ROMALABS<span className="hero-period">.</span></h1>
      <div className="hero-rule" />
      <p className="hero-headline">Technology that disappears<br/><em>into the experience.</em></p>
      <p className="hero-subline">We build focused digital products across privacy, intelligence, creativity and everyday life.</p>
      <div className="hero-actions"><a href="#products" className="button-primary" data-cursor="EXPLORE">EXPLORE PRODUCTS <ArrowUpRight size={16}/></a><a href="#about" className="text-link" data-cursor="OPEN">ABOUT ROMALABS <ArrowUpRight size={16}/></a></div>
    </div>
    <div className="hero-bottom"><span>01 / 07 &nbsp; — &nbsp; AN INTRODUCTION</span><a href="#intro" aria-label="Scroll to introduction" data-cursor="SCROLL"><ArrowDown size={17} strokeWidth={1.5}/></a><span>SCROLL TO EXPLORE</span></div>
    <div className="edge-label hero-edge">INDEPENDENT BY DESIGN / BUILT WITH INTENTION</div>
  </section>;
}
