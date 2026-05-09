'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  aboutPath,
  blogIndexPath,
  contactPath,
  getLangFromPathname,
  legalNoticePath,
  methodologyPath,
  privacyPath,
  sourcesPath,
  SITE,
  UI_TRANSLATIONS,
} from '@/lib/site';

export function SiteFooter() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  return (
    <footer className="footer">
      <div className="footer-inner">
        © {new Date().getFullYear()} — {SITE.brandName} · <Link href={aboutPath(lang)}>{t.about}</Link> ·{' '}
        <Link href={methodologyPath(lang)}>{t.methodology}</Link> · <Link href={sourcesPath(lang)}>{t.sources}</Link> ·{' '}
        <Link href={contactPath(lang)}>{t.contact}</Link> · <Link href={blogIndexPath(lang)}>{t.blog}</Link> ·{' '}
        <Link href={legalNoticePath(lang)}>{t.legal}</Link> · <Link href={privacyPath(lang)}>{t.privacy}</Link> ·{' '}
        <a href="#cookie-settings" data-manage-cookies>
          {t.manageCookies}
        </a>
        {t.amazonAssociateLocal ? ` · ${t.amazonAssociateLocal}` : null}
      </div>
    </footer>
  );
}
