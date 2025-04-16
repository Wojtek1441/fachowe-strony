import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_DoRQTvF3.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_CDUS2duI.mjs';
import { $ as $$Features3 } from '../chunks/Features3_ReFrNbRn.mjs';
import { $ as $$Hero } from '../chunks/Hero_DIvX2Mth.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_Benvcw5l.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CfOkWdVC.mjs';
export { renderers } from '../renderers.mjs';

const $$Oferta = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Nasze Us\u0142ugi"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Nasze Us\u0142ugi", "image": {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Nowoczesne strony internetowe"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Specjalizujemy się w tworzeniu stron internetowych, e-commerce, aplikacji webowych oraz usługach SEO i
      marketingowych. Zapewniamy pełne wsparcie techniczne i hosting.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Kompleksowe rozwiązania ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> dla Twojego biznesu online</span> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Nasza oferta", "subtitle": "Tworzymy skuteczne i nowoczesne rozwi\u0105zania dla Twojej firmy.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Strony internetowe",
      description: "Projektujemy nowoczesne, responsywne strony internetowe, kt\xF3re przyci\u0105gaj\u0105 klient\xF3w.",
      icon: "tabler:world"
    },
    {
      title: "Sklepy internetowe",
      description: "Tworzymy wydajne i estetyczne sklepy online na WooCommerce, PrestaShop i Shopify.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "Aplikacje webowe",
      description: "Dedykowane aplikacje internetowe dostosowane do indywidualnych potrzeb Twojej firmy.",
      icon: "tabler:code"
    }
  ] })} ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "SEO i Pozycjonowanie",
      description: "Zwi\u0119kszamy widoczno\u015B\u0107 Twojej strony w wyszukiwarkach i poprawiamy jej wyniki.",
      icon: "tabler:chart-line"
    },
    {
      title: "Marketing Internetowy",
      description: "Prowadzimy skuteczne kampanie reklamowe w Google Ads i mediach spo\u0142eczno\u015Bciowych.",
      icon: "tabler:home"
    },
    {
      title: "Hosting i Wsparcie",
      description: "Oferujemy bezpieczny hosting oraz wsparcie techniczne 24/7.",
      icon: "tabler:server"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Profesjonalne us\u0142ugi online"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Jak pracujemy?", "subtitle": "Nasza metodologia zapewnia skuteczno\u015B\u0107 i najwy\u017Csz\u0105 jako\u015B\u0107 us\u0142ug.", "items": [
    {
      title: "Analiza i strategia",
      description: "Szczeg\xF3\u0142owa analiza potrzeb biznesowych i okre\u015Blenie strategii dzia\u0142ania."
    },
    {
      title: "Projekt i wdro\u017Cenie",
      description: "Tworzenie responsywnych stron i aplikacji zgodnych z najnowszymi trendami."
    },
    { title: "Optymalizacja i wsparcie", description: "Monitorowanie, optymalizacja i ci\u0105g\u0142e wsparcie techniczne." }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Skontaktuj si\u0119 z nami", "tagline": "Masz pytania?", "columns": 2, "items": [
    {
      title: "Porozmawiaj z nami",
      description: "Skontaktuj si\u0119 z naszym ekspertem i uzyskaj darmow\u0105 konsultacj\u0119.",
      icon: "tabler:messages"
    },
    {
      title: "Zadzwo\u0144 do nas",
      description: "Om\xF3wmy Twoje potrzeby i znajd\u017Amy najlepsze rozwi\u0105zanie dla Twojego biznesu.",
      icon: "tabler:phone"
    }
  ] })} ` })}`;
}, "/workspaces/fachowe-strony/src/pages/oferta.astro", undefined);

const $$file = "/workspaces/fachowe-strony/src/pages/oferta.astro";
const $$url = "/oferta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Oferta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
