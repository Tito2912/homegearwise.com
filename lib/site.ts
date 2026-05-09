export const SITE = {
  baseUrl: 'https://homegearwise.com',
  domain: 'homegearwise.com',
  brandName: 'HomeGearWise',
  ownerName: 'E-Com Shop',
  builderName: 'E-Com Shop',
  hostName: 'Netlify',
  contactEmail: 'contact@homegearwise.com',
  supportedLangs: ['en', 'fr', 'es', 'de'] as const,
};

export type Lang = (typeof SITE.supportedLangs)[number];

export type UiCopy = {
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  menu: string;
  home: string;
  robotVacuums: string;
  coffeeMachines: string;
  airfryers: string;
  blog: string;
  legal: string;
  privacy: string;
  about: string;
  methodology: string;
  sources: string;
  contact: string;
  language: string;
  manageCookies: string;
  cookieAria: string;
  cookieTitle: string;
  cookieTextBefore: string;
  cookieTextAnalytics: string;
  cookieTextAnd: string;
  cookieTextExternal: string;
  acceptAll: string;
  rejectAll: string;
  customize: string;
  cookieSettingsTitle: string;
  cookieSettingsSubtitle: string;
  necessary: string;
  necessaryDesc: string;
  analytics: string;
  analyticsDesc: string;
  externalMedia: string;
  externalMediaDesc: string;
  save: string;
  close: string;
  videoPlaceholderTitle: string;
  videoPlaceholderBody: string;
  videoPlaceholderCta: string;
  amazonAssociateLocal: string;
  trademarkDisclosure: string;
  footerMeta: string;
  primaryNavLabel: string;
  mobileNavLabel: string;
  footerLinksLabel: string;
};

export const UI_TRANSLATIONS: Record<Lang, UiCopy> = {
  en: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    home: 'Home',
    robotVacuums: 'Robot vacuums & mops',
    coffeeMachines: 'Automatic coffee machines',
    airfryers: 'Airfryers',
    blog: 'Blog',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    about: 'About',
    methodology: 'How we test',
    sources: 'Sources',
    contact: 'Contact',
    language: 'Language',
    manageCookies: 'Manage cookies',
    cookieAria: 'Cookie consent',
    cookieTitle: 'Cookies',
    cookieTextBefore: 'Necessary cookies are always on. You can also allow',
    cookieTextAnalytics: 'Analytics (GA4)',
    cookieTextAnd: 'and',
    cookieTextExternal: 'External media (YouTube).',
    acceptAll: 'Accept all',
    rejectAll: 'Reject',
    customize: 'Customize',
    cookieSettingsTitle: 'Cookie settings',
    cookieSettingsSubtitle: 'Choose what you allow. Necessary is always on.',
    necessary: 'Necessary',
    necessaryDesc: 'Core functionality, security, and consent storage.',
    analytics: 'Analytics (GA4)',
    analyticsDesc: 'Loaded only after consent. Helps us improve the site.',
    externalMedia: 'External media',
    externalMediaDesc: 'Enables YouTube embeds (youtube-nocookie.com).',
    save: 'Save',
    close: 'Close',
    videoPlaceholderTitle: 'Click to load video',
    videoPlaceholderBody: 'External media (YouTube) is blocked until you allow it.',
    videoPlaceholderCta: 'Load video',
    amazonAssociateLocal: 'As an Amazon Associate, HomeGearWise.com earns from qualifying purchases.',
    trademarkDisclosure:
      'Trademarks belong to their respective owners. This site provides editorial content and may use sponsored affiliate links.',
    footerMeta: `© 2026 ${SITE.ownerName} • Built by ${SITE.builderName} • Hosted on ${SITE.hostName}`,
    primaryNavLabel: 'Primary',
    mobileNavLabel: 'Mobile',
    footerLinksLabel: 'Footer links',
  },
  fr: {
    skipToContent: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menu: 'Menu',
    home: 'Accueil',
    robotVacuums: 'Aspirateurs robots & lavage',
    coffeeMachines: 'Machines à café',
    airfryers: 'Airfryers',
    blog: 'Blog',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    about: 'À propos',
    methodology: 'Méthodologie',
    sources: 'Sources',
    contact: 'Contact',
    language: 'Langue',
    manageCookies: 'Gérer les cookies',
    cookieAria: 'Consentement cookies',
    cookieTitle: 'Cookies',
    cookieTextBefore: 'Les cookies nécessaires sont toujours actifs. Vous pouvez aussi autoriser',
    cookieTextAnalytics: 'Analytics (GA4)',
    cookieTextAnd: 'et',
    cookieTextExternal: 'Médias externes (YouTube).',
    acceptAll: 'Tout accepter',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    cookieSettingsTitle: 'Paramètres cookies',
    cookieSettingsSubtitle: 'Choisissez ce que vous autorisez. Nécessaires : toujours actifs.',
    necessary: 'Nécessaires',
    necessaryDesc: 'Fonctionnement, sécurité et stockage du consentement.',
    analytics: 'Analytics (GA4)',
    analyticsDesc: 'Chargé uniquement après consentement. Aide à améliorer le site.',
    externalMedia: 'Médias externes',
    externalMediaDesc: 'Active les vidéos YouTube (youtube-nocookie.com).',
    save: 'Enregistrer',
    close: 'Fermer',
    videoPlaceholderTitle: 'Cliquer pour charger la vidéo',
    videoPlaceholderBody: 'Les médias externes (YouTube) sont bloqués tant que vous ne les autorisez pas.',
    videoPlaceholderCta: 'Charger la vidéo',
    amazonAssociateLocal:
      'En tant que Partenaire Amazon, HomeGearWise.com réalise un bénéfice sur les achats remplissant les conditions requises.',
    trademarkDisclosure:
      'Les marques appartiennent à leurs propriétaires. Ce site propose du contenu éditorial et peut utiliser des liens d’affiliation sponsorisés.',
    footerMeta: `© 2026 ${SITE.ownerName} • Dév. ${SITE.builderName} • Hébergement ${SITE.hostName}`,
    primaryNavLabel: 'Navigation principale',
    mobileNavLabel: 'Mobile',
    footerLinksLabel: 'Liens de pied de page',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menu: 'Menú',
    home: 'Inicio',
    robotVacuums: 'Robots aspirador & fregado',
    coffeeMachines: 'Cafeteras automáticas',
    airfryers: 'Freidoras de aire',
    blog: 'Blog',
    legal: 'Aviso legal',
    privacy: 'Política de privacidad',
    about: 'Acerca de',
    methodology: 'Metodología',
    sources: 'Fuentes',
    contact: 'Contacto',
    language: 'Idioma',
    manageCookies: 'Gestionar cookies',
    cookieAria: 'Consentimiento de cookies',
    cookieTitle: 'Cookies',
    cookieTextBefore: 'Las cookies necesarias siempre están activas. También puedes permitir',
    cookieTextAnalytics: 'Analítica (GA4)',
    cookieTextAnd: 'y',
    cookieTextExternal: 'Medios externos (YouTube).',
    acceptAll: 'Aceptar todo',
    rejectAll: 'Rechazar',
    customize: 'Personalizar',
    cookieSettingsTitle: 'Ajustes de cookies',
    cookieSettingsSubtitle: 'Elige lo que permites. Las necesarias siempre están activas.',
    necessary: 'Necesarias',
    necessaryDesc: 'Funcionalidad básica, seguridad y almacenamiento del consentimiento.',
    analytics: 'Analítica (GA4)',
    analyticsDesc: 'Se carga solo tras el consentimiento. Ayuda a mejorar el sitio.',
    externalMedia: 'Medios externos',
    externalMediaDesc: 'Activa vídeos de YouTube (youtube-nocookie.com).',
    save: 'Guardar',
    close: 'Cerrar',
    videoPlaceholderTitle: 'Haz clic para cargar el vídeo',
    videoPlaceholderBody: 'Los medios externos (YouTube) están bloqueados hasta que los permitas.',
    videoPlaceholderCta: 'Cargar vídeo',
    amazonAssociateLocal:
      'Como Afiliado de Amazon, HomeGearWise.com obtiene ingresos de compras que cumplen los requisitos aplicables.',
    trademarkDisclosure:
      'Las marcas pertenecen a sus respectivos propietarios. Este sitio ofrece contenido editorial y puede usar enlaces de afiliación patrocinados.',
    footerMeta: `© 2026 ${SITE.ownerName} • Dev: ${SITE.builderName} • Hosting: ${SITE.hostName}`,
    primaryNavLabel: 'Navegación principal',
    mobileNavLabel: 'Móvil',
    footerLinksLabel: 'Enlaces del pie',
  },
  de: {
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    menu: 'Menü',
    home: 'Startseite',
    robotVacuums: 'Saugroboter & Wischen',
    coffeeMachines: 'Kaffeevollautomaten',
    airfryers: 'Heißluftfritteusen',
    blog: 'Blog',
    legal: 'Impressum',
    privacy: 'Datenschutzerklärung',
    about: 'Über uns',
    methodology: 'Methodik',
    sources: 'Quellen',
    contact: 'Kontakt',
    language: 'Sprache',
    manageCookies: 'Cookies verwalten',
    cookieAria: 'Cookie-Einwilligung',
    cookieTitle: 'Cookies',
    cookieTextBefore: 'Notwendige Cookies sind immer aktiv. Du kannst zusätzlich',
    cookieTextAnalytics: 'Analytics (GA4)',
    cookieTextAnd: 'und',
    cookieTextExternal: 'Externe Medien (YouTube) erlauben.',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Ablehnen',
    customize: 'Anpassen',
    cookieSettingsTitle: 'Cookie-Einstellungen',
    cookieSettingsSubtitle: 'Wähle aus. Notwendige Cookies sind immer aktiv.',
    necessary: 'Notwendig',
    necessaryDesc: 'Grundfunktionen, Sicherheit und Speicherung der Einwilligung.',
    analytics: 'Analytics (GA4)',
    analyticsDesc: 'Wird erst nach Einwilligung geladen. Hilft uns, die Seite zu verbessern.',
    externalMedia: 'Externe Medien',
    externalMediaDesc: 'Aktiviert YouTube-Einbettungen (youtube-nocookie.com).',
    save: 'Speichern',
    close: 'Schließen',
    videoPlaceholderTitle: 'Klicken, um das Video zu laden',
    videoPlaceholderBody: 'Externe Medien (YouTube) sind blockiert, bis du sie erlaubst.',
    videoPlaceholderCta: 'Video laden',
    amazonAssociateLocal: 'Als Amazon-Partner verdient HomeGearWise.com an qualifizierten Verkäufen.',
    trademarkDisclosure:
      'Marken sind Eigentum ihrer jeweiligen Inhaber. Diese Seite bietet redaktionelle Inhalte und kann gesponserte Affiliate-Links enthalten.',
    footerMeta: `© 2026 ${SITE.ownerName} • Dev: ${SITE.builderName} • Hosting: ${SITE.hostName}`,
    primaryNavLabel: 'Hauptnavigation',
    mobileNavLabel: 'Mobil',
    footerLinksLabel: 'Footer-Links',
  },
};

export function normalizeLang(lang: unknown): Lang {
  const normalized = String(lang ?? '').toLowerCase();
  return (SITE.supportedLangs as readonly string[]).includes(normalized) ? (normalized as Lang) : 'en';
}

function normalizePathname(pathname: string): string {
  let path = pathname || '/';
  if (path !== '/') path = path.replace(/\/+$/, '');
  return path.replace(/\.html$/, '');
}

export function getLangFromPathname(pathname: string): Lang {
  const path = normalizePathname(pathname);
  if (path === '/fr' || path.startsWith('/fr/')) return 'fr';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/de' || path.startsWith('/de/')) return 'de';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return 'en';
}

export function prefixPath(lang: Lang): string {
  return lang === 'en' ? '' : `/${lang}`;
}

export type TranslationKey =
  | 'home'
  | 'robot_vacuum_mop'
  | 'automatic_coffee_machines'
  | 'airfryers'
  | 'blog_index'
  | 'blog_robot_maintenance'
  | 'legal_notice'
  | 'privacy_policy';

export const ROUTE_BY_KEY: Record<TranslationKey, Record<Lang, string>> = {
  home: {
    en: '/',
    fr: '/fr/',
    es: '/es/',
    de: '/de/',
  },
  robot_vacuum_mop: {
    en: '/robot-vacuum-mop-comparison/',
    fr: '/fr/comparatif-aspirateurs-robots/',
    es: '/es/comparativa-robots-aspirador/',
    de: '/de/saugroboter-vergleich/',
  },
  automatic_coffee_machines: {
    en: '/automatic-coffee-machines/',
    fr: '/fr/machines-a-cafe-automatiques/',
    es: '/es/cafeteras-automaticas/',
    de: '/de/kaffeevollautomaten/',
  },
  airfryers: {
    en: '/airfryers/',
    fr: '/fr/airfryers/',
    es: '/es/freidoras-de-aire/',
    de: '/de/heissluftfritteusen/',
  },
  blog_index: {
    en: '/blog/',
    fr: '/fr/blog/',
    es: '/es/blog/',
    de: '/de/blog/',
  },
  blog_robot_maintenance: {
    en: '/blog/how-to-clean-and-maintain-robot-vacuum/',
    fr: '/fr/blog/comment-nettoyer-et-entretenir-aspirateur-robot/',
    es: '/es/blog/como-limpiar-y-mantener-robot-aspirador/',
    de: '/de/blog/saugroboter-reinigen-und-warten/',
  },
  legal_notice: {
    en: '/legal-notice/',
    fr: '/fr/mentions-legales/',
    es: '/es/aviso-legal/',
    de: '/de/impressum/',
  },
  privacy_policy: {
    en: '/privacy-policy/',
    fr: '/fr/politique-de-confidentialite/',
    es: '/es/politica-de-privacidad/',
    de: '/de/datenschutzerklaerung/',
  },
};

const KEY_BY_ROUTE = new Map<string, TranslationKey>();
for (const key of Object.keys(ROUTE_BY_KEY) as TranslationKey[]) {
  for (const route of Object.values(ROUTE_BY_KEY[key])) {
    KEY_BY_ROUTE.set(normalizePathname(route), key);
  }
}

function translationKeyFromPath(pathname: string): TranslationKey | null {
  return KEY_BY_ROUTE.get(normalizePathname(pathname)) ?? null;
}

export function homePath(lang: Lang): string {
  return ROUTE_BY_KEY.home[lang];
}

export function blogIndexPath(lang: Lang): string {
  return ROUTE_BY_KEY.blog_index[lang];
}

export function legalNoticePath(lang: Lang): string {
  return ROUTE_BY_KEY.legal_notice[lang];
}

export function privacyPath(lang: Lang): string {
  return ROUTE_BY_KEY.privacy_policy[lang];
}

export function aboutPath(lang: Lang): string {
  const prefix = prefixPath(lang);
  return `${prefix}/about/`.replace(/\/{2,}/g, '/');
}

export function methodologyPath(lang: Lang): string {
  const prefix = prefixPath(lang);
  return `${prefix}/methodology/`.replace(/\/{2,}/g, '/');
}

export function sourcesPath(lang: Lang): string {
  const prefix = prefixPath(lang);
  return `${prefix}/sources/`.replace(/\/{2,}/g, '/');
}

export function contactPath(lang: Lang): string {
  const prefix = prefixPath(lang);
  return `${prefix}/contact/`.replace(/\/{2,}/g, '/');
}

export function robotVacuumPath(lang: Lang): string {
  return ROUTE_BY_KEY.robot_vacuum_mop[lang];
}

export function coffeeMachinesPath(lang: Lang): string {
  return ROUTE_BY_KEY.automatic_coffee_machines[lang];
}

export function airfryersPath(lang: Lang): string {
  return ROUTE_BY_KEY.airfryers[lang];
}

export function localizedUrl(pathname: string, lang: Lang): string {
  const target = normalizeLang(lang);
  const key = translationKeyFromPath(pathname);
  if (key) return ROUTE_BY_KEY[key][target];

  const path = normalizePathname(pathname);
  const withoutPrefix =
    path === '/fr' || path.startsWith('/fr/')
      ? path.replace(/^\/fr\b/, '') || '/'
      : path === '/es' || path.startsWith('/es/')
        ? path.replace(/^\/es\b/, '') || '/'
        : path === '/de' || path.startsWith('/de/')
          ? path.replace(/^\/de\b/, '') || '/'
          : path === '/en' || path.startsWith('/en/')
            ? path.replace(/^\/en\b/, '') || '/'
            : path;

  if (withoutPrefix === '/' || withoutPrefix === '') return homePath(target);
  const cleaned = withoutPrefix.startsWith('/') ? withoutPrefix : `/${withoutPrefix}`;
  return `${prefixPath(target)}${cleaned}`;
}
