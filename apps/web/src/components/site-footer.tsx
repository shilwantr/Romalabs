import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return <footer id="contact" className="site-footer"><div className="footer-top"><span className="kicker"><span className="gold-line"/> THE NEXT CONVERSATION</span><a href="mailto:hello@romalabs.com" className="footer-email" data-cursor="OPEN">HAVE AN IDEA? <ArrowUpRight size={19}/></a></div><div className="footer-main"><a href="/#top" className="footer-wordmark wordmark" data-cursor="OPEN">ROMA<span>LABS</span><i>.</i></a><div className="footer-phrase"><span className="footer-orb"/>Technology for the curious.</div></div><div className="footer-bottom"><span>© 2026 ROMALABS. ALL RIGHTS RESERVED.</span><nav aria-label="Footer navigation"><a href="/#products">PRODUCTS</a><a href="/#about">ABOUT</a><a href="mailto:hello@romalabs.com">CONTACT</a><a href="/privacy-policy">PRIVACY</a><a href="/terms">TERMS</a></nav><a href="/#top" className="back-top">BACK TO TOP ↑</a></div></footer>;
}
