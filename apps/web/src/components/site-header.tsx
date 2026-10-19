import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const lastClick = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function logoClick() {
    const now = Date.now();
    const next = now - lastClick.current > 1600 ? 1 : clicks + 1;
    lastClick.current = now;
    if (next >= 5) {
      setClicks(0);
      navigate('/lab');
    } else {
      setClicks(next);
      if (typeof window !== 'undefined') {
        if (window.location.pathname !== '/') {
          navigate('/');
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  }

  const links = [ ['Products', '/#products'], ['Lab', '/#lab'], ['About', '/#about'], ['Contact', '/#contact'] ];
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <button onClick={logoClick} aria-label="Romalabs home" className="brand wordmark" data-cursor="OPEN">ROMA<span>LABS</span><i className="brand-mark" /></button>
        <nav className={`header-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-index" href="/#contact" data-cursor="OPEN">LET’S TALK <ArrowUpRight size={13} strokeWidth={1.6}/></a>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </header>
  </>;
}
