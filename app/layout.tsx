import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/lib/site';
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from '@/lib/schema';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LangHtmlUpdater } from '@/components/LangHtmlUpdater';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: {
    default: SITE.brandName,
    template: `%s | ${SITE.brandName}`,
  },
  description:
    'Premium-style, practical guides for home cleaning, storage, kitchen and garden—plus robot vacuum & mop comparisons and maintenance tips.',
  metadataBase: new URL(SITE.baseUrl),
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    title: SITE.brandName,
    description:
      'Practical, premium-style Home & Garden guides—plus robot vacuum & mop comparisons and maintenance tips.',
    url: SITE.baseUrl,
    images: [{ url: '/images/roborock-qv-35a-6.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.brandName,
    description:
      'Practical, premium-style Home & Garden guides—plus robot vacuum & mop comparisons and maintenance tips.',
    images: ['/images/roborock-qv-35a-6.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = buildOrganizationJsonLd();
  const webSiteJsonLd = buildWebSiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LangHtmlUpdater />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
