import type { Route } from './+types/privacy-policy';
import { seo } from '@/lib/seo';
import { PolicyIndex } from '@/components/privacy-policy/policy-index';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Privacy Policies — Romalabs',
		description: 'Privacy policies for Romalabs and every Romalabs product, including SpyCam Pro — written to be read.',
	});
}

export default function PrivacyPolicyIndexPage() {
	return <PolicyIndex />;
}
