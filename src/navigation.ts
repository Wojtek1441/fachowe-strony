import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'O nas',
      href: getPermalink('/o-nas'),
    },
    {
      text: 'Strony internetowe',
      href: getPermalink('/strony-internetowe'),
      links: [
        {
          text: 'Proste strony internetowe',
          href: getPermalink('/strony-internetowe/proste-strony-internetowe'),
        },
        {
          text: 'Sklepy internetowe',
          href: getPermalink('/sklepy-internetowe'),
        },
        {
          text: 'Strony responsywne',
          href: getPermalink('/strony-internetowe/strony-responsywne'),
        },
        {
          text: 'Strony z CMS',
          href: getPermalink('/strony-internetowe/strony-internetowe-z-cms'),
        },
        {
          text: 'Projektowanie stron Webflow',
          href: getPermalink('/projektowanie-stron-webflow'),
        },
        {
          text: 'Administracja strony',
          href: getPermalink('/strony-internetowe/administracja-stron'),
        },
      ],
    },
    {
      text: 'Marketing',
      links: [
        {
          text: 'Pozycjonowanie SEO',
          href: getPermalink('/marketing/pozycjonowanie-seo-krakow'),
        },
        {
          text: 'Projekty graficzne',
          href: getPermalink('/marketing/projekty-graficzne'),
        },

        {
          text: 'Pisanie tekstów',
          href: getPermalink('/marketing/pisanie-tekstow'),
        },
      ],
    },
    {
      text: 'Cennik',
      href: getPermalink('/cennik'),
    },
    {
      text: 'Realizacje',
      href: getPermalink('/realizacje'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
  actions: [{ text: 'Darmowa Wycena', href: getPermalink('/kontakt') }],
};

export const footerData = {
  links: [
    {
      title: 'Oferta',
      links: [
        { text: 'Strony internetowe', href: getPermalink('/strony-internetowe') },
        { text: 'Sklepy internetowe', href: getPermalink('/sklepy-internetowe') },
        { text: 'Projektowanie stron Webflow', href: getPermalink('/projektowanie-stron-webflow') },
        { text: 'Pozycjonowanie stron', href: getPermalink('/marketing/pozycjonowanie-seo-krakow') },
      ],
    },
    {
      title: 'Przydatne informacje',
      links: [
        { text: 'Bezpłatna strona internetowa', href: getPermalink('/darmowa-strona') },
        { text: 'Cennik', href: getPermalink('/cennik') },
        { text: 'Regulamin usług', href: getPermalink('/terms') },
        { text: 'Polityka prywatności', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Poznaj nas',
      links: [
        { text: 'O nas', href: getPermalink('/o-nas') },
        { text: 'Nasze realizacje', href: getPermalink('/realizacje') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Kontakt', href: getPermalink('/kontakt') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Regulamin usług', href: getPermalink('/terms') },
    { text: 'Polityka prywatności', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: '© Fachowe Strony. Wszelkie prawa zastrzeżone.',
};
