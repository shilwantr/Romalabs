import fs from 'node:fs';
import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	ssr: true,
	buildEnd({ buildManifest, reactRouterConfig, viteConfig }) {
		const routeIdToServerBundleId: Record<string, string> = {
			'routes/_index': '',
		};
		if (buildManifest?.routes) {
			for (const id of Object.keys(buildManifest.routes)) {
				routeIdToServerBundleId[id] = '';
			}
		}

		const serverBundles = {
			'': {
				id: '',
				file: 'build/server/index.js',
				config: {},
			},
		};

		const assetsDir = viteConfig?.build?.assetsDir;
		const json = JSON.stringify(
			{
				buildManifest: {
					...buildManifest,
					routeIdToServerBundleId,
					serverBundles,
				},
				reactRouterConfig,
				viteConfig: assetsDir
					? {
							build: {
								assetsDir,
							},
						}
					: undefined,
			},
			null,
			2,
		);
		fs.mkdirSync('.vercel', { recursive: true });
		fs.writeFileSync('.vercel/react-router-build-result.json', `${json}\n`);
	},
} satisfies Config;

