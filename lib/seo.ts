import type { Metadata } from 'next';
import type { DocMeta } from '@/lib/content';

export function parseRobots(robots: string | undefined): Metadata['robots'] | undefined {
  if (!robots) return undefined;
  const r = robots.toLowerCase();
  return {
    index: !r.includes('noindex'),
    follow: !r.includes('nofollow'),
  };
}

export function buildAlternates(meta: DocMeta, all: DocMeta[]): Metadata['alternates'] {
  const canonical = meta.canonical ?? meta.routePath;

  if (!meta.translationKey) {
    return { canonical };
  }

  const languages: Record<string, string> = {};
  for (const m of all) {
    if (m.translationKey !== meta.translationKey) continue;
    if (!m.lang) continue;
    languages[m.lang] = m.canonical ?? m.routePath;
  }

  // Helpful for Google when the "default" audience is EN / global.
  if (languages.en) {
    languages['x-default'] = languages.en;
  }

  return {
    canonical,
    languages: Object.keys(languages).length ? languages : undefined,
  };
}

export function getOpenGraphType(meta: DocMeta): 'website' | 'article' {
  return meta.type === 'article' ? 'article' : 'website';
}

export function getOpenGraphImage(meta: DocMeta): string {
  if (!meta.translationKey) return '/images/roborock-qv-35a-6.jpg';

  if (meta.translationKey === 'home' || meta.translationKey === 'blog_index') {
    return '/images/roborock-qv-35a-6.jpg';
  }

  if (meta.translationKey === 'robot_vacuum_mop') return '/images/roborock-qv-35a-6.jpg';
  if (meta.translationKey === 'automatic_coffee_machines') return '/images/machines-cafe-auto/delonghi-1.jpg';
  if (meta.translationKey === 'airfryers') return '/images/airfryers/ninjadoublestack-1.jpg';
  if (meta.translationKey === 'blog_robot_maintenance') return '/images/sharkrobotvacuum-7.jpg';

  return '/images/roborock-qv-35a-6.jpg';
}
