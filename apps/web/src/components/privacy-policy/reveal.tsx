import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
};

/**
 * Fades and lifts its children in once they enter the viewport.
 * Starts hidden on both server and client, so hydration stays safe.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}
