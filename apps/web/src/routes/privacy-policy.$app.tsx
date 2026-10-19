import type { Route } from './+types/privacy-policy.$app';
import { seo } from '@/lib/seo';
import { findPrivacyPolicy } from '@/data/privacy-policies';
import { PolicyHero } from '@/components/privacy-policy/policy-hero';
import { PolicyToc } from '@/components/privacy-policy/policy-toc';
import { PolicySections } from '@/components/privacy-policy/policy-sections';

export function loader({ params }: Route.LoaderArgs) {
	const policy = findPrivacyPolicy(params.app);
	if (!policy) {
		throw new Response('Privacy policy not found', { status: 404 });
	}
	return { policy };
}

export function meta({ matches, location, loaderData }: Route.MetaArgs) {
	if (!loaderData) {
		return seo({ matches, location }, {
			title: 'Privacy Policy — Romalabs',
			description: 'This privacy policy is no longer available.',
			noindex: true,
		});
	}

	const { policy } = loaderData;

	return seo({ matches, location }, {
		title: `Privacy Policy — ${policy.appName} — Romalabs`,
		description: `How ${policy.appName} handles information, permissions, recordings and your data. Effective ${policy.effectiveDate}.`,
	});
}

export default function AppPrivacyPolicyPage({ loaderData }: Route.ComponentProps) {
	const { policy } = loaderData;

	return (
		<main className="policy-page">
			<div className="policy-inner">
				<PolicyHero policy={policy} />
				<div className="policy-layout">
					<PolicyToc sections={policy.sections} />
					<PolicySections policy={policy} />
				</div>
			</div>
		</main>
	);
}
