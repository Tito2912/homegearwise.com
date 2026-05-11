import type { MetadataRoute } from 'next';
import { getAllDocMetas } from '@/lib/content';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metas = await getAllDocMetas();
  const now = new Date().toISOString();

  // Build translationKey → { lang: url } map for hreflang cross-linking
  const keyToLangs = new Map<string, Record<string, string>>();
  for (const m of metas) {
    if (!m.translationKey) continue;
    const url = new URL(m.canonical ?? m.routePath, SITE.baseUrl).toString();
    if (!keyToLangs.has(m.translationKey)) keyToLangs.set(m.translationKey, {});
    const langs = keyToLangs.get(m.translationKey)!;
    if (m.lang) langs[m.lang] = url;
  }

  return metas.map((m) => {
    const url = new URL(m.canonical ?? m.routePath, SITE.baseUrl).toString();
    const lastModified = m.updatedAt ?? m.date ?? now;

    if (!m.translationKey) {
      if (m.lang === 'en' || !m.lang) {
        return { url, lastModified, alternates: { languages: { en: url, 'x-default': url } } };
      }
      return { url, lastModified };
    }

    const langs = keyToLangs.get(m.translationKey) ?? {};
    const languages = { ...langs };
    if (languages.en) languages['x-default'] = languages.en;

    return {
      url,
      lastModified,
      alternates: Object.keys(languages).length ? { languages } : undefined,
    };
  });
}
