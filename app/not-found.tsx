'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE, UI_TRANSLATIONS } from '@/lib/site';

const COPY = {
  en: { title: 'Page not found', body: "The page you are looking for doesn't exist (or has moved).", back: `Back to ${SITE.brandName}` },
  fr: { title: 'Page introuvable', body: "La page que vous cherchez n'existe pas (ou a été déplacée).", back: `Retour sur ${SITE.brandName}` },
  es: { title: 'Página no encontrada', body: 'La página que buscas no existe (o se ha movido).', back: `Volver a ${SITE.brandName}` },
  de: { title: 'Seite nicht gefunden', body: 'Die gesuchte Seite existiert nicht (oder wurde verschoben).', back: `Zurück zu ${SITE.brandName}` },
} as const;

type Lang = keyof typeof COPY;

function getLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const p = window.location.pathname;
  if (p.startsWith('/fr')) return 'fr';
  if (p.startsWith('/es')) return 'es';
  if (p.startsWith('/de')) return 'de';
  return 'en';
}

export default function NotFoundPage() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    setLang(getLang());
  }, []);

  const t = COPY[lang];
  const homeHref = lang === 'en' ? '/' : `/${lang}/`;

  return (
    <div className="stack">
      <section className="card">
        <h1>{t.title}</h1>
        <p className="muted">{t.body}</p>
        <Link className="kbd" href={homeHref}>
          {t.back}
        </Link>
      </section>
    </div>
  );
}
