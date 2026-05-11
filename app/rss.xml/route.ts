import { getAllDocMetas } from '@/lib/content';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export async function GET() {
  const all = await getAllDocMetas();
  const articles = all
    .filter((m) => m.type === 'article' && (!m.lang || m.lang === 'en'))
    .sort((a, b) => {
      const da = a.date ?? a.updatedAt ?? '';
      const db = b.date ?? b.updatedAt ?? '';
      return db.localeCompare(da);
    });

  const base = SITE.baseUrl;

  const items = articles
    .map((m) => {
      const url = `${base}${m.routePath.endsWith('/') ? m.routePath : `${m.routePath}/`}`;
      const pubDate = m.date ?? m.updatedAt
        ? new Date(m.date ?? m.updatedAt!).toUTCString()
        : new Date().toUTCString();
      return `
    <item>
      <title><![CDATA[${m.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${m.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.brandName}</title>
    <link>${base}</link>
    <description>Practical home &amp; garden guides — robot vacuums, coffee machines, air fryers and more.</description>
    <language>en</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
