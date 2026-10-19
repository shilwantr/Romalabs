import type { Route } from './+types/lab';
import { seo } from '@/lib/seo';
import { LabExperience } from '@/components/lab/lab-experience';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'The Lab — Romalabs',
    description: 'You found the Lab. Four light, playful experiments from the Romalabs workshop — a tile merger, a runner, a memory match and a reflex test, playable on phone or desktop.',
  });
}

export default function LabPage() {
  return <main className="lab-page"><LabExperience /></main>;
}
