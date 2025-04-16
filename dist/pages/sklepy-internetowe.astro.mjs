import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_CDUS2duI.mjs';
import { $ as $$Features3 } from '../chunks/Features3_ReFrNbRn.mjs';
import { $ as $$Hero } from '../chunks/Hero_DIvX2Mth.mjs';
import { $ as $$Stats } from '../chunks/Stats_ZdPQaDjS.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_Benvcw5l.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CfOkWdVC.mjs';
export { renderers } from '../renderers.mjs';

const $$SklepyInternetowe = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Sklepy internetowe",
    description: "Profesjonalne sklepy internetowe dopasowane do potrzeb Twojego biznesu. Zwi\u0119ksz sprzeda\u017C dzi\u0119ki naszym nowoczesnym rozwi\u0105zaniom e-commerce."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Sklepy internetowe", "image": {
    src: "https://images.unsplash.com/photo-1581091870621-1b24f4d3fa9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Sklepy internetowe"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Specjalizujemy się w tworzeniu funkcjonalnych i nowoczesnych sklepów online. Nasze rozwiązania łączą intuicyjny
      design, zaawansowane funkcje e-commerce oraz pełną integrację z systemami płatności.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Profesjonalne sklepy internetowe ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight">dla dynamicznego biznesu</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Nasze osi\u0105gni\u0119cia", "stats": [
    { title: "Lat do\u015Bwiadczenia", amount: "8" },
    { title: "Sklepy online", amount: "150+" },
    { title: "Zadowolonych klient\xF3w", amount: "400+" },
    { title: "Projekty e-commerce", amount: "75+" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Nasza oferta", "subtitle": "Kompleksowe rozwi\u0105zania dla Twojego sklepu online", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Responsywny design",
      description: "Tworzymy sklepy, kt\xF3re wygl\u0105daj\u0105 \u015Bwietnie na ka\u017Cdym urz\u0105dzeniu, gwarantuj\u0105c doskona\u0142e do\u015Bwiadczenia u\u017Cytkownika.",
      icon: "tabler:device-mobile"
    },
    {
      title: "Integracje p\u0142atno\u015Bci",
      description: "Bezpieczne systemy p\u0142atno\u015Bci online umo\u017Cliwiaj\u0105 szybkie i \u0142atwe transakcje.",
      icon: "tabler:credit-card"
    },
    {
      title: "CMS & Zarz\u0105dzanie tre\u015Bci\u0105",
      description: "Intuicyjne systemy zarz\u0105dzania tre\u015Bci\u0105, pozwalaj\u0105ce na \u0142atw\u0105 aktualizacj\u0119 sklepu.",
      icon: "tabler:settings"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "SEO dla e-commerce",
      description: "Optymalizujemy sklepy internetowe, aby przyci\u0105ga\u0142y wi\u0119cej klient\xF3w z wyszukiwarek.",
      icon: "tabler:chart-line"
    },
    {
      title: "Marketing online",
      description: "Prowadzimy kampanie reklamowe, kt\xF3re zwi\u0119kszaj\u0105 ruch i sprzeda\u017C w Twoim sklepie.",
      icon: "tabler:home"
    },
    {
      title: "Wsparcie techniczne",
      description: "Zapewniamy ci\u0105g\u0142e wsparcie techniczne oraz regularne aktualizacje system\xF3w.",
      icon: "tabler:headset"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1590642911990-1a6e39c4c5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Wsparcie techniczne i integracje e-commerce"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Jak to robimy?", "subtitle": "Nasz sprawdzony proces budowy sklepu internetowego gwarantuje sukces", "items": [
    { title: "Konsultacja", description: "Poznajemy potrzeby Twojego biznesu i planujemy strategi\u0119 e-commerce." },
    {
      title: "Projektowanie",
      description: "Tworzymy intuicyjny i estetyczny interfejs sklepu, skoncentrowany na konwersji."
    },
    {
      title: "Wdro\u017Cenie",
      description: "Implementujemy sklep z wykorzystaniem najnowszych technologii, zapewniaj\u0105c bezpiecze\u0144stwo transakcji."
    },
    { title: "Wsparcie", description: "Zapewniamy sta\u0142e wsparcie techniczne oraz optymalizacj\u0119 dzia\u0142ania sklepu." }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Skontaktuj si\u0119 z nami", "tagline": "Jeste\u015Bmy do Twojej dyspozycji", "columns": 2, "items": [
    {
      title: "Konsultacja online",
      description: "Um\xF3w si\u0119 na darmow\u0105 konsultacj\u0119 i om\xF3w szczeg\xF3\u0142y projektu.",
      icon: "tabler:messages"
    },
    { title: "Telefon kontaktowy", description: "Skontaktuj si\u0119 z naszym dzia\u0142em e-commerce.", icon: "tabler:phone" }
  ] })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/sklepy-internetowe.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/sklepy-internetowe.astro";
const $$url = "/sklepy-internetowe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SklepyInternetowe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
