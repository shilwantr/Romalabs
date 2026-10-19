import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('lab', 'routes/lab.tsx'),
	route('privacy', 'routes/privacy.tsx'),
	route('terms', 'routes/terms.tsx'),
	route('privacy-policy', 'routes/privacy-policy.tsx'),
	route('privacy-policy/:app', 'routes/privacy-policy.$app.tsx'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
