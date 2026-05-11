import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDocMetas, getDocMetaByRouteSegments, getPostByRouteSegments } from '@/lib/content';
import { buildBreadcrumbJsonLd, buildPrimaryEntityJsonLd } from '@/lib/schema';
import { buildAlternates, getOpenGraphImage, getOpenGraphType, parseRobots } from '@/lib/seo';
import { SITE } from '@/lib/site';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getDocMetaByRouteSegments([]);
  if (!meta) return {};

  const all = await getAllDocMetas();
  const ogImage = getOpenGraphImage(meta);
  const canonical = meta.canonical ?? meta.routePath;

  return {
    // Use absolute to avoid applying the root title template (prevents "| Brand | Brand").
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildAlternates(meta, all),
    robots: parseRobots(meta.robots),
    ...(meta.type === 'article' && { authors: [{ name: SITE.brandName, url: SITE.baseUrl }] }),
    openGraph: {
      type: getOpenGraphType(meta),
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImage.url],
    },
  };
}

export default async function HomePage() {
  const post = await getPostByRouteSegments([]);
  if (!post) return notFound();

  const primaryJsonLd = buildPrimaryEntityJsonLd(post);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(post);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {post.faq?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map((x) => ({
                '@type': 'Question',
                name: x.q,
                acceptedAnswer: { '@type': 'Answer', text: x.a },
              })),
            }),
          }}
        />
      ) : null}

      {post.content}
    </>
  );
}
