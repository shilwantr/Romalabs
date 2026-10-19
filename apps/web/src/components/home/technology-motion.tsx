import { ParticleField } from '@/components/particle-field';

export function TechnologyMotion() {
  return <section className="motion-section"><ParticleField variant="fluid" className="motion-field"/><div className="motion-vignette"/><div className="motion-content"><span className="kicker"><span className="gold-line"/> THE ART OF THE POSSIBLE</span><h2>TECHNOLOGY<br/><em>IN MOTION.</em></h2><p>Always exploring. Never standing still.</p></div><div className="motion-footer"><span>AN EXPERIMENT IN MOVEMENT</span><span>MOVE YOUR CURSOR ↗</span></div></section>;
}
