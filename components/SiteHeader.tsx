'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LanguageSelect } from '@/components/LanguageSelect';
import { airfryersPath, blogIndexPath, coffeeMachinesPath, getLangFromPathname, homePath, robotVacuumPath, SITE, UI_TRANSLATIONS } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link aria-label={`${SITE.brandName} — ${t.home}`} className="brand" href={homePath(lang)}>
          <img alt={SITE.brandName} decoding="async" fetchPriority="high" height={34} src="/images/homegearwise-logo.svg" width={188} />
        </Link>

        <button
          aria-controls="primary-nav"
          aria-expanded={open}
          aria-label={open ? t.closeMenu : t.openMenu}
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav aria-label={t.primaryNavLabel} className={`nav${open ? ' nav--open' : ''}`} id="primary-nav">
          <Link href={robotVacuumPath(lang)} onClick={() => setOpen(false)}>{t.robotVacuums}</Link>
          <Link href={coffeeMachinesPath(lang)} onClick={() => setOpen(false)}>{t.coffeeMachines}</Link>
          <Link href={airfryersPath(lang)} onClick={() => setOpen(false)}>{t.airfryers}</Link>
          <Link href={blogIndexPath(lang)} onClick={() => setOpen(false)}>{t.blog}</Link>
          <LanguageSelect />
        </nav>
      </div>
    </header>
  );
}
