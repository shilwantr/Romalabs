import type { Route } from './+types/terms';
import { seo } from '@/lib/seo';
import { LegalContent } from '@/components/legal-content';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {title: 'Terms — Romalabs', description: 'Information about browsing the Romalabs website and its content.'});
}
export default function TermsPage() { return <LegalContent kind="terms"/>; }
