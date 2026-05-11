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
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': `${SITE.baseUrl}/rss.xml` },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <LangHtmlUpdater />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {/* GA4 Consent Mode v2 — must run before gtag.js to set denied defaults */}
        <Script
          id="ga4-consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('js',new Date());gtag('config','G-8HEW34FCM7');` }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8HEW34FCM7" strategy="afterInteractive" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <SiteHeader />
        <main id="main-content" className="container">{children}</main>
        <SiteFooter />
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
