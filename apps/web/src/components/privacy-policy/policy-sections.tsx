import type { AppPrivacyPolicy, PolicyBlock } from '@/data/privacy-policies';
import { Reveal } from '@/components/privacy-policy/reveal';

function Block({ block }: { block: PolicyBlock }) {
	if (block.kind === 'list') {
		return (
			<ul className="policy-list">
				{block.items.map(item => (
					<li key={item}>
						<span className="policy-list-dot" />
						{item}
					</li>
				))}
			</ul>
		);
	}

	return (
		<div className="policy-block">
			{block.heading ? <h3>{block.heading}</h3> : null}
			{block.paragraphs.map(paragraph => (
				<p key={paragraph.slice(0, 40)}>{paragraph}</p>
			))}
		</div>
	);
}

export function PolicySections({ policy }: { policy: AppPrivacyPolicy }) {
	return (
		<div className="policy-sections">
			{policy.sections.map((section, index) => (
				<Reveal key={section.id}>
					<section id={section.id} className="policy-section">
						<div className="policy-section-head">
							<span className="policy-number">
								{String(index + 1).padStart(2, '0')}
							</span>
							<h2>{section.title}</h2>
						</div>
						<div className="policy-section-body">
							{section.blocks.map((block, blockIndex) => (
								<Block key={blockIndex} block={block} />
							))}
							{section.id === 'contact' ? (
								<div className="policy-contact">
									{policy.contact.map(row => (
										<div key={row.label}>
											<span>{row.label.toUpperCase()}</span>
											<strong>{row.value}</strong>
										</div>
									))}
								</div>
							) : null}
						</div>
					</section>
				</Reveal>
			))}
			<Reveal>
				<p className="policy-closing">
					<em>{policy.appName}</em> — {policy.closing.replace(`${policy.appName} — `, '')}
				</p>
			</Reveal>
		</div>
	);
}
