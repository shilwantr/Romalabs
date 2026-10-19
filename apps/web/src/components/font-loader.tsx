import { useEffect } from 'react';

const FONT_HREF =
	'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap';

/**
 * Loads the Google Fonts stylesheet without blocking the first render.
 * It is served with media="print" (non-render-blocking), then switched to
 * "all" right after hydration so the fonts apply as soon as they arrive —
 * the page paints immediately with fallback fonts instead of waiting on a
 * blocking external CSS round trip. The <noscript> copy keeps the fonts
 * for visitors without JavaScript.
 */
export function FontLoader() {
	useEffect(() => {
		const link = document.getElementById('google-fonts');
		if (link) link.setAttribute('media', 'all');
	}, []);

	return (
		<>
			<link id="google-fonts" rel="stylesheet" href={FONT_HREF} media="print" />
			<noscript>
				<link rel="stylesheet" href={FONT_HREF} />
			</noscript>
		</>
	);
}
