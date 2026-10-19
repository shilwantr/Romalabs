import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import { Lab } from '@/components/home/lab';
import { Products } from '@/components/home/products';
import { ProductRail } from '@/components/home/product-rail';
import { Philosophy } from '@/components/home/philosophy';
import { TechnologyMotion } from '@/components/home/technology-motion';
import { Ecosystem } from '@/components/home/ecosystem';
import { Story } from '@/components/home/story';
import { Experiments } from '@/components/home/experiments';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Romalabs — Independent Technology Studio',
    description: 'Small team. Serious technology. Beautiful products. Discover Romalabs, an independent technology studio building thoughtful digital products across privacy, intelligence and everyday life.',
  });
}

export default function HomePage() {
  return <main><Hero/><Introduction/><Lab/><Products/><ProductRail/><Philosophy/><TechnologyMotion/><Ecosystem/><Story/><Experiments/></main>;
}
