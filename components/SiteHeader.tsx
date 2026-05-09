'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelect } from '@/components/LanguageSelect';
import { airfryersPath, blogIndexPath, coffeeMachinesPath, getLangFromPathname, homePath, robotVacuumPath, SITE, UI_TRANSLATIONS } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  return (
    <header className="header">
      <div className="header-inner">
        <Link aria-label={`${SITE.brandName} — ${t.home}`} className="brand" href={homePath(lang)}>
          <img alt={SITE.brandName} decoding="async" fetchPriority="high" height={34} src="/images/homegearwise-logo.svg" width={188} />
        </Link>

        <nav aria-label={t.primaryNavLabel} className="nav">
          <Link href={robotVacuumPath(lang)}>{t.robotVacuums}</Link>
          <Link href={coffeeMachinesPath(lang)}>{t.coffeeMachines}</Link>
          <Link href={airfryersPath(lang)}>{t.airfryers}</Link>
          <Link href={blogIndexPath(lang)}>{t.blog}</Link>
          <LanguageSelect />
        </nav>
      </div>
    </header>
  );
}
