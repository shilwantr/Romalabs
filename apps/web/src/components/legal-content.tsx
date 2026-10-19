import { ArrowLeft } from 'lucide-react';

type LegalContentProps = { kind: 'privacy' | 'terms' };

export function LegalContent({ kind }: LegalContentProps) {
  const privacy = kind === 'privacy';
  return <main className="legal-page"><div className="legal-inner"><a href="/" className="legal-back"><ArrowLeft size={16}/> BACK TO ROMALABS</a><span className="kicker"><span className="gold-line"/> ROMALABS / INFORMATION</span><h1>{privacy ? 'PRIVACY' : 'TERMS'}<em>.</em></h1><p className="legal-intro">{privacy ? 'We believe privacy should be clear, intentional and respectful.' : 'A few simple notes about using this website.'}</p><div className="legal-sections">{privacy ? <>
    <section><span>01 / WEBSITE</span><div><h2>What this site does</h2><p>This website presents Romalabs and its work. The interactive visuals run in your browser. This page does not ask you to create an account or enter personal information.</p></div></section>
    <section><span>02 / CONTACT</span><div><h2>When you contact us</h2><p>If you choose to email us, the information you send will be used to respond to your message. Please avoid sending sensitive information unless necessary.</p></div></section>
    <section><span>03 / PRODUCTS</span><div><h2>Product-specific information</h2><p>Individual Romalabs products may have their own privacy details. Review the information provided with each product before using it.</p></div></section>
    <section><span>04 / QUESTIONS</span><div><h2>Get in touch</h2><p>Questions about privacy? Write to <a href="mailto:hello@romalabs.com">hello@romalabs.com</a>.</p></div></section>
  </> : <>
    <section><span>01 / USE</span><div><h2>Exploring this site</h2><p>You are welcome to browse this website for information about Romalabs and its projects. Please do not misuse, disrupt, or attempt to interfere with the site.</p></div></section>
    <section><span>02 / CONTENT</span><div><h2>What you see here</h2><p>Product concepts and descriptions are presented for informational purposes. Features and availability may change as our products evolve. Unreleased concepts are labeled as in development or exploratory.</p></div></section>
    <section><span>03 / QUESTIONS</span><div><h2>Get in touch</h2><p>For questions about this website or Romalabs, contact <a href="mailto:hello@romalabs.com">hello@romalabs.com</a>.</p></div></section>
  </>}</div></div></main>;
}
