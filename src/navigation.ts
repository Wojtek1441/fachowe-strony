import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'O nas',
      href: getPermalink('/about'),
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
      href: getBlogPermalink('/blog'),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/kontakt'),
    },
  ],
  actions: [{ text: 'Darmowa Wycena', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Strony internetowe',
      links: [
        { text: 'Strony internetowe Kraków', href: '#' },
        { text: 'Strony internetowe Krzeszowice', href: '#' },
        { text: 'Strony internetowe ', href: '#' },
        { text: 'Strony internetowe', href: '#' },
        { text: 'Strony internetowe Chrzanów', href: '#' },
        { text: 'Strony internetowe Małopolska', href: '#' },
        { text: 'Strony internetowe', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Strony internetowe Modlniczka', href: '#' },
        { text: 'Strony internetowe Modlnica', href: '#' },
        { text: 'Strony internetowe', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'O nas',
      links: [
        { text: 'O nas', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Cennik', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
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
  footNote: `
    Copyrights Fachowe Strony 2025 · All rights reserved.
  `,
};
