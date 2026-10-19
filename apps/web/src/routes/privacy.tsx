import type { Route } from './+types/privacy';
import { seo } from '@/lib/seo';
import { LegalContent } from '@/components/legal-content';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {title: 'Privacy — Romalabs', description: 'How Romalabs approaches privacy and information shared through this website.'});
}
export default function PrivacyPage() { return <LegalContent kind="privacy"/>; }
