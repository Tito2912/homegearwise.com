import type { Post } from '@/lib/types';
import {
  UI_TRANSLATIONS,
  aboutPath,
  airfryersPath,
  blogIndexPath,
  coffeeMachinesPath,
  contactPath,
  homePath,
  legalNoticePath,
  methodologyPath,
  normalizeLang,
  privacyPath,
  robotVacuumPath,
  sourcesPath,
  SITE,
} from '@/lib/site';

const BASE_URL = SITE.baseUrl;
const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.brandName,
    legalName: SITE.ownerName,
    url: BASE_URL,
    email: SITE.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 rue Francois 1er',
      postalCode: '75008',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    logo: {
      '@type': 'ImageObject',
      url: new URL('/images/homegearwise-logo.svg', BASE_URL).toString(),
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.brandName,
    url: BASE_URL,
    publisher: { '@id': ORG_ID },
  };
}

function getPublishedAndModified(post: Post): { published?: string; modified?: string } {
  const published = post.date ?? post.updatedAt ?? undefined;
  const modified = post.updatedAt ?? post.date ?? undefined;
  return { published, modified };
}

export function buildPrimaryEntityJsonLd(post: Post) {
  const url = new URL(canonicalPathFromPost(post), BASE_URL).toString();
  const lang = normalizeLang(post.lang);
  const title = stripBrandSuffix(post.title) || post.title;
  const { published, modified } = getPublishedAndModified(post);

  // Blog content: BlogPosting is the most accurate schema for articles.
  if (post.type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: post.description,
      mainEntityOfPage: url,
      datePublished: published,
      dateModified: modified ?? published,
      inLanguage: lang,
      author: [{ '@id': ORG_ID }],
      publisher: { '@id': ORG_ID },
      isPartOf: { '@id': WEBSITE_ID },
    };
  }

  const pageType = post.type === 'blogIndex' ? 'CollectionPage' : 'WebPage';

  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: title,
    description: post.description,
    url,
    datePublished: published,
    dateModified: modified ?? published,
    inLanguage: lang,
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

function normalizePathname(pathname: string): string {
  let path = pathname || '/';
  if (path !== '/') path = path.replace(/\/+$/, '');
  return path.replace(/\.html$/, '');
}

function ensureTrailingSlash(pathname: string): string {
  const path = pathname || '/';
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function canonicalPathFromPost(post: Post): string {
  const raw = post.canonical ?? `/${post.slug}`;
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`;
  return ensureTrailingSlash(withLeading);
}

function stripBrandSuffix(title: string): string {
  const t = String(title ?? '').trim();
  if (!t) return '';
  const suffix = ` | ${SITE.brandName}`;
  return t.endsWith(suffix) ? t.slice(0, -suffix.length).trim() : t;
}

type Crumb = { name: string; path: string };

function getKeyedCrumbs(post: Post, lang: ReturnType<typeof normalizeLang>): Crumb[] | null {
  const ui = UI_TRANSLATIONS[lang];
  const home: Crumb = { name: ui.home, path: homePath(lang) };
  const key = post.translationKey;

  if (key === 'home') return [home];
  if (key === 'blog_index') return [home, { name: ui.blog, path: blogIndexPath(lang) }];
  if (key === 'robot_vacuum_mop') return [home, { name: ui.robotVacuums, path: robotVacuumPath(lang) }];
  if (key === 'automatic_coffee_machines') return [home, { name: ui.coffeeMachines, path: coffeeMachinesPath(lang) }];
  if (key === 'airfryers') return [home, { name: ui.airfryers, path: airfryersPath(lang) }];
  if (key === 'about') return [home, { name: ui.about, path: aboutPath(lang) }];
  if (key === 'methodology') return [home, { name: ui.methodology, path: methodologyPath(lang) }];
  if (key === 'sources') return [home, { name: ui.sources, path: sourcesPath(lang) }];
  if (key === 'contact') return [home, { name: ui.contact, path: contactPath(lang) }];
  if (key === 'legal_notice') return [home, { name: ui.legal, path: legalNoticePath(lang) }];
  if (key === 'privacy_policy') return [home, { name: ui.privacy, path: privacyPath(lang) }];

  return null;
}

function inferParentCrumb(post: Post, lang: ReturnType<typeof normalizeLang>): Crumb | null {
  const ui = UI_TRANSLATIONS[lang];
  const internal = new Set((post.internalLinks ?? []).map((l) => normalizePathname(l.href)));

  const robot = normalizePathname(robotVacuumPath(lang));
  if (internal.has(robot)) return { name: ui.robotVacuums, path: robotVacuumPath(lang) };

  const coffee = normalizePathname(coffeeMachinesPath(lang));
  if (internal.has(coffee)) return { name: ui.coffeeMachines, path: coffeeMachinesPath(lang) };

  const air = normalizePathname(airfryersPath(lang));
  if (internal.has(air)) return { name: ui.airfryers, path: airfryersPath(lang) };

  const blog = normalizePathname(blogIndexPath(lang));
  if (internal.has(blog)) return { name: ui.blog, path: blogIndexPath(lang) };

  return null;
}

export function buildBreadcrumbJsonLd(post: Post) {
  const lang = normalizeLang(post.lang);
  const url = new URL(canonicalPathFromPost(post), BASE_URL).toString();

  // Blog articles should always live under the Blog hub in breadcrumbs.
  if (post.type === 'article') {
    const ui = UI_TRANSLATIONS[lang];
    const crumbs: Crumb[] = [
      { name: ui.home, path: homePath(lang) },
      { name: ui.blog, path: blogIndexPath(lang) },
      { name: stripBrandSuffix(post.title) || ui.blog, path: canonicalPathFromPost(post) },
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: c.name,
        item: idx === crumbs.length - 1 ? url : new URL(c.path, BASE_URL).toString(),
      })),
    };
  }

  const keyed = getKeyedCrumbs(post, lang);
  if (keyed) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: keyed.map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: c.name,
        item: new URL(c.path, BASE_URL).toString(),
      })),
    };
  }

  const home: Crumb = { name: UI_TRANSLATIONS[lang].home, path: homePath(lang) };
  const crumbs: Crumb[] = [home];

  const parent = inferParentCrumb(post, lang);
  if (parent) crumbs.push(parent);

  crumbs.push({ name: stripBrandSuffix(post.title) || post.title, path: canonicalPathFromPost(post) });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: c.name,
      item: idx === crumbs.length - 1 ? url : new URL(c.path, BASE_URL).toString(),
    })),
  };
}
