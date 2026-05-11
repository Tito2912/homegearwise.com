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
    // EN-only pages: emit self-referencing hreflang so Google knows the target audience.
    if (meta.lang === 'en' || !meta.lang) {
      return { canonical, languages: { en: canonical, 'x-default': canonical } };
    }
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

type OgImage = { url: string; width: number; height: number; alt: string };

export function getOpenGraphImage(meta: DocMeta): OgImage {
  const defaults: OgImage = {
    url: '/images/roborock-qv-35a-6.jpg',
    width: 600,
    height: 600,
    alt: 'Roborock QV 35A robot vacuum and mop',
  };

  if (!meta.translationKey) return defaults;
  if (meta.translationKey === 'home' || meta.translationKey === 'blog_index') return defaults;
  if (meta.translationKey === 'robot_vacuum_mop') return defaults;

  if (meta.translationKey === 'automatic_coffee_machines') {
    return { url: '/images/machines-cafe-auto/delonghi-1.jpg', width: 600, height: 600, alt: 'De\'Longhi automatic coffee machine' };
  }
  if (meta.translationKey === 'airfryers') {
    return { url: '/images/airfryers/ninjadoublestack-1.jpg', width: 600, height: 600, alt: 'Ninja Double Stack air fryer' };
  }
  if (meta.translationKey === 'blog_robot_maintenance') {
    return { url: '/images/sharkrobotvacuum-7.jpg', width: 600, height: 600, alt: 'Shark robot vacuum and mop' };
  }

  return defaults;
}
