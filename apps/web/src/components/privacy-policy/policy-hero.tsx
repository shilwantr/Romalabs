import { ArrowLeft } from 'lucide-react';
import type { AppPrivacyPolicy } from '@/data/privacy-policies';

export function PolicyHero({ policy }: { policy: AppPrivacyPolicy }) {
	return (
		<div className="policy-hero">
			<a href="/privacy-policy" className="legal-back">
				<ArrowLeft size={16} /> ALL PRIVACY POLICIES
			</a>
			<span className="kicker">
				<span className="gold-line" /> ROMALABS / PRIVACY / {policy.appName.toUpperCase()}
			</span>
			<h1 className="policy-title">
				PRIVACY<br />
				POLICY<em>.</em>
			</h1>
			<p className="policy-tagline">{policy.tagline}</p>
			<div className="policy-meta">
				<span>EFFECTIVE DATE — {policy.effectiveDate.toUpperCase()}</span>
				<span>{policy.sections.length} SECTIONS</span>
				<span>LOCAL-FIRST · USER-CONTROLLED</span>
			</div>
			<div className="policy-intro">
				{policy.intro.map(paragraph => (
					<p key={paragraph.slice(0, 40)}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
