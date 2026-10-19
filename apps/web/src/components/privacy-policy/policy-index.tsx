import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { appPrivacyPolicies } from '@/data/privacy-policies';

export function PolicyIndex() {
	return (
		<main className="policy-page">
			<div className="policy-inner">
				<a href="/" className="legal-back">
					<ArrowLeft size={16} /> BACK TO ROMALABS
				</a>
				<span className="kicker">
					<span className="gold-line" /> ROMALABS / POLICIES
				</span>
				<h1 className="policy-title">
					PRIVACY<br />
					POLICIES<em>.</em>
				</h1>
				<p className="policy-tagline">
					Transparency for every Romalabs product — each policy written to be
					read, not skimmed past.
				</p>
				<div className="policy-listing">
					<a href="/privacy" className="policy-card">
						<span className="policy-card-number">00</span>
						<div>
							<h2>
								ROMALABS<em>.</em>
							</h2>
							<p>How this website handles information — the site-wide policy.</p>
						</div>
						<div className="policy-card-side">
							<span>WEBSITE</span>
							<span>SITE-WIDE</span>
							<ArrowUpRight size={22} strokeWidth={1.5} className="policy-card-arrow" />
						</div>
					</a>
					{appPrivacyPolicies.map(policy => (
						<a key={policy.slug} href={`/privacy-policy/${policy.slug}`} className="policy-card">
							<span className="policy-card-number">{policy.productNumber}</span>
							<div>
								<h2>
									{policy.appName.toUpperCase()}
									<em>.</em>
								</h2>
								<p>{policy.tagline}</p>
							</div>
							<div className="policy-card-side">
								<span>{policy.category}</span>
								<span>EFFECTIVE {policy.effectiveDate.toUpperCase()}</span>
								<ArrowUpRight size={22} strokeWidth={1.5} className="policy-card-arrow" />
							</div>
						</a>
					))}
					<div className="policy-card policy-card-soon">
						<span className="policy-card-number">02+</span>
						<div>
							<h2>
								MORE PRODUCTS<em>.</em>
							</h2>
							<p>A policy is published for every app, the moment it arrives.</p>
						</div>
						<div className="policy-card-side">
							<span>THE UNKNOWN</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
