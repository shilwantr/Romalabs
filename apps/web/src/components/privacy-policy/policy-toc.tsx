import { useEffect, useState } from 'react';
import type { PolicySection } from '@/data/privacy-policies';

/**
 * Sticky table of contents with a scroll-spy highlight that follows
 * the section currently in view.
 */
export function PolicyToc({ sections }: { sections: PolicySection[] }) {
	const [active, setActive] = useState(sections[0]?.id ?? '');

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: '-18% 0px -72% 0px' },
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, [sections]);

	return (
		<nav className="policy-toc" aria-label="Policy sections">
			<span className="policy-toc-label">SECTIONS</span>
			{sections.map((section, index) => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className={active === section.id ? 'active' : ''}
				>
					{String(index + 1).padStart(2, '0')} — {section.title}
				</a>
			))}
		</nav>
	);
}
